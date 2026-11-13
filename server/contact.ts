export type ContactInput = { name: string; email: string; subject?: string; message: string; website?: string; startedAt?: number; turnstileToken?: string };
export type ContactConfig = { minSubmitMs: number; maxBodyBytes: number; allowedOrigin: string };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function missingServerConfig(env: Record<string, string | undefined>): string[] {
  const missing = ['RESEND_API_KEY', 'CONTACT_EMAIL_TO', 'CONTACT_EMAIL_FROM', 'TURNSTILE_SECRET_KEY'].filter((key) => !env[key]?.trim());
  if (env.CONTACT_EMAIL_TO && !emailPattern.test(env.CONTACT_EMAIL_TO.trim())) missing.push('CONTACT_EMAIL_TO_INVALID');
  if (env.CONTACT_EMAIL_FROM && !env.CONTACT_EMAIL_FROM.includes('@')) missing.push('CONTACT_EMAIL_FROM_INVALID');
  if (env.CONTACT_ALLOWED_ORIGIN) { try { const origin = new URL(env.CONTACT_ALLOWED_ORIGIN); if (!['http:', 'https:'].includes(origin.protocol) || origin.pathname !== '/' || origin.search || origin.hash) missing.push('CONTACT_ALLOWED_ORIGIN_INVALID'); } catch { missing.push('CONTACT_ALLOWED_ORIGIN_INVALID'); } }
  return missing;
}

export type TurnstileVerification = { success: boolean; hostname?: string; 'error-codes'?: string[] };

export type TurnstileVerificationResult = { valid: boolean; httpStatus: number | null; errorCodes: string[]; hostname: string | null; durationMs: number; errorType?: string };

export async function verifyTurnstileToken(token: string | undefined, env: Record<string, string | undefined>, fetcher = fetch): Promise<TurnstileVerificationResult> {
  const secret = env.TURNSTILE_SECRET_KEY;
  if (!secret || !token?.trim()) return { valid: false, httpStatus: null, errorCodes: ['missing-input'], hostname: null, durationMs: 0, errorType: 'invalid_input' };
  const startedAt = Date.now();
  try {
    const response = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token })
    });
    const result = await response.json().catch(() => ({})) as TurnstileVerification;
    const expectedHostname = env.TURNSTILE_EXPECTED_HOSTNAME?.trim();
    const errorCodes = Array.isArray(result['error-codes']) ? result['error-codes'].filter((code): code is string => typeof code === 'string') : [];
    const hostname = typeof result.hostname === 'string' ? result.hostname : null;
    return { valid: response.ok && result.success === true && (!expectedHostname || hostname === expectedHostname), httpStatus: response.status, errorCodes, hostname, durationMs: Date.now() - startedAt, errorType: !response.ok ? 'http' : result.success !== true ? 'rejected' : expectedHostname && hostname !== expectedHostname ? 'hostname_mismatch' : undefined };
  } catch {
    return { valid: false, httpStatus: null, errorCodes: [], hostname: null, durationMs: Date.now() - startedAt, errorType: 'connection' };
  }
}

export function validateContact(input: ContactInput, config: ContactConfig, now = Date.now()): string | null {
  if (input.website?.trim()) return 'invalid';
  if (!input.startedAt || now - input.startedAt < config.minSubmitMs) return 'invalid';
  if (!input.name || input.name.trim().length < 2 || input.name.trim().length > 100) return 'invalid';
  if (!emailPattern.test(input.email.trim()) || input.email.trim().length > 254) return 'invalid';
  if (input.subject && input.subject.trim().length > 150) return 'invalid';
  if (!input.message || input.message.trim().length < 10 || input.message.trim().length > 5000) return 'invalid';
  return null;
}

export function isAllowedOrigin(origin: string | undefined, allowedOrigin: string): boolean {
  if (!origin || origin === allowedOrigin) return origin === allowedOrigin;
  try {
    const configured = new URL(allowedOrigin);
    const received = new URL(origin);
    const loopback = new Set(['localhost', '127.0.0.1']);
    return configured.protocol === received.protocol &&
      configured.port === received.port &&
      loopback.has(configured.hostname) && loopback.has(received.hostname);
  } catch {
    return false;
  }
}

export function createRateLimiter(windowMs: number, maxRequests: number, maxKeys = 10000) {
  const requests = new Map<string, number[]>();
  return (key: string, now = Date.now()): boolean => {
    if (requests.size >= maxKeys && !requests.has(key)) {
      for (const [storedKey, times] of requests) { if (!times.some((time) => now - time < windowMs)) requests.delete(storedKey); }
      if (requests.size >= maxKeys) return false;
    }
    const recent = (requests.get(key) ?? []).filter((time) => now - time < windowMs);
    if (recent.length >= maxRequests) { requests.set(key, recent); return false; }
    recent.push(now); requests.set(key, recent); return true;
  };
}

export type ContactEmailResult = { sent: boolean; httpStatus: number | null; messageId: string | null; durationMs: number; errorType?: string };

export async function sendContactEmail(input: ContactInput, env: Record<string, string | undefined>, fetcher = fetch, receivedAt = new Date(), timeoutMs = 15000): Promise<ContactEmailResult> {
  const apiKey = env.RESEND_API_KEY;
  const to = env.CONTACT_EMAIL_TO;
  const from = env.CONTACT_EMAIL_FROM;
  if (!apiKey || !to || !from) return { sent: false, httpStatus: null, messageId: null, durationMs: 0, errorType: 'missing_config' };
  const startedAt = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetcher('https://api.resend.com/emails', { method: 'POST', signal: controller.signal, headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from, to: [to], reply_to: input.email.trim(), subject: input.subject?.trim() || 'Nuevo mensaje desde el portafolio', text: `Nombre: ${input.name.trim()}\nCorreo: ${input.email.trim()}\nFecha de recepción: ${receivedAt.toISOString()}\n\n${input.message.trim()}` }) });
    const durationMs = Date.now() - startedAt;
    if (!response.ok) return { sent: false, httpStatus: response.status, messageId: null, durationMs, errorType: 'http' };
    const result = await response.json().catch(() => ({})) as { id?: unknown };
    const messageId = typeof result.id === 'string' ? result.id : null;
    return { sent: true, httpStatus: response.status, messageId, durationMs };
  } catch {
    const durationMs = Date.now() - startedAt;
    const timedOut = controller.signal.aborted;
    return { sent: false, httpStatus: null, messageId: null, durationMs, errorType: timedOut ? 'timeout' : 'connection' };
  } finally { clearTimeout(timeout); }
}
