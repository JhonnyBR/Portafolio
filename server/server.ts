import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';
import { createRateLimiter, isAllowedOrigin, missingServerConfig, sendContactEmail, validateContact, verifyTurnstileToken, type ContactInput } from './contact.js';

const port = Number(process.env.PORT ?? 8787);
const config = { minSubmitMs: Number(process.env.CONTACT_MIN_SUBMIT_MS ?? 3000), maxBodyBytes: 12000, allowedOrigin: process.env.CONTACT_ALLOWED_ORIGIN ?? 'http://127.0.0.1:5173' };
const allowRequest = createRateLimiter(Number(process.env.CONTACT_RATE_WINDOW_MS ?? 900000), Number(process.env.CONTACT_RATE_MAX ?? 5));
const missingConfig = missingServerConfig(process.env);
if (missingConfig.length) { console.error(`Missing or invalid contact configuration: ${missingConfig.join(', ')}`); process.exit(1); }

function json(response: ServerResponse, status: number, requestId: string, body: object) { response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Request-Id': requestId, 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY', 'Referrer-Policy': 'no-referrer', 'Permissions-Policy': 'camera=(), microphone=(), geolocation=()', 'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'" }); response.end(JSON.stringify({ ...body, requestId })); }
function clientIp(request: IncomingMessage) { return request.socket.remoteAddress ?? 'unknown'; }
async function readBody(request: IncomingMessage): Promise<string> {
  let body = ''; for await (const chunk of request) { body += chunk.toString(); if (Buffer.byteLength(body) > config.maxBodyBytes) throw new Error('too_large'); } return body;
}

const server = createServer(async (request, response) => {
  const requestId = randomUUID();
  if (request.method !== 'POST' || request.url !== '/api/contact') { json(response, 404, requestId, { error: 'Not found', code: 'NOT_FOUND' }); return; }
  console.info('[contact]', { requestId, stage: 'received' });
  const originAllowed = isAllowedOrigin(request.headers.origin, config.allowedOrigin);
  console.info('[contact]', { requestId, stage: 'origin', valid: originAllowed });
  if (!originAllowed) { json(response, 403, requestId, { error: 'La solicitud no proviene de un origen permitido.', code: 'ORIGIN_NOT_ALLOWED' }); return; }
  if (request.headers['content-type']?.split(';')[0] !== 'application/json') { json(response, 415, requestId, { error: 'Tipo de contenido no compatible.', code: 'UNSUPPORTED_CONTENT_TYPE' }); return; }
  if (!allowRequest(clientIp(request))) { console.info('[contact]', { requestId, stage: 'rate_limit', valid: false }); json(response, 429, requestId, { error: 'Has realizado demasiados intentos. Inténtalo más tarde.', code: 'RATE_LIMITED' }); return; }
  try {
    const input = JSON.parse(await readBody(request)) as ContactInput;
    const validationError = validateContact(input, config);
    console.info('[contact]', { requestId, stage: 'validation', valid: !validationError, reason: validationError ?? null });
    if (validationError) { json(response, 400, requestId, { error: 'Revisa los datos enviados.', code: 'INVALID_REQUEST' }); return; }
    const turnstile = await verifyTurnstileToken(input.turnstileToken, process.env);
    console.info('[contact]', { requestId, stage: 'turnstile', valid: turnstile.valid, status: turnstile.httpStatus, errorCodes: turnstile.errorCodes, hostname: turnstile.hostname, durationMs: turnstile.durationMs, errorType: turnstile.errorType ?? null });
    if (!turnstile.valid) { json(response, 400, requestId, { error: 'Completa la verificación anti-spam.', code: 'TURNSTILE_REJECTED' }); return; }
    console.info('[contact]', { requestId, stage: 'resend_invocation' });
    const email = await sendContactEmail(input, process.env);
    console.info('[contact]', { requestId, stage: 'resend_result', sent: email.sent, status: email.httpStatus, messageId: email.messageId, durationMs: email.durationMs, errorType: email.errorType ?? null });
    if (!email.sent) { json(response, 503, requestId, { error: 'No se pudo confirmar el envío. Inténtalo más tarde.', code: email.errorType === 'timeout' ? 'RESEND_TIMEOUT' : 'RESEND_UNAVAILABLE' }); return; }
    json(response, 200, requestId, { ok: true, code: 'SENT', messageId: email.messageId });
  } catch (error) { const tooLarge = error instanceof Error && error.message === 'too_large'; json(response, tooLarge ? 413 : 400, requestId, { error: tooLarge ? 'La solicitud es demasiado grande.' : 'No se pudo procesar la solicitud.', code: tooLarge ? 'PAYLOAD_TOO_LARGE' : 'INVALID_REQUEST' }); }
});
server.listen(port, () => { console.log(`Contact backend listening on port ${port}`); });
