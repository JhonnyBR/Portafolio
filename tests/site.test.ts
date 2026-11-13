import { describe, expect, it, vi } from 'vitest';
import { nav, profile, skills } from '../src/content/site';
import { seoByPath } from '../src/config/seo';
import { isMenuCloseKey } from '../src/components/menu';
import { CONSENT_STORAGE_KEY, hasConsentDecision, isAnalyticsAllowed, readConsent } from '../src/lib/consent';
import { trackEvent } from '../src/lib/analytics';
import { contactFormError, contactResponseError, CONTACT_LOADING_MESSAGE, CONTACT_SUCCESS_MESSAGE } from '../src/lib/contact-form';
import { createRateLimiter, isAllowedOrigin, missingServerConfig, sendContactEmail, validateContact, verifyTurnstileToken } from '../server/contact';

describe('site content', () => {
  it('keeps the approved identity and navigation destinations', () => {
    expect(profile.name).toBe('Jonny Beltran');
    expect(nav.map((item) => item.to)).toContain('/experience');
    expect(nav.map((item) => item.to)).toContain('/artificial-intelligence');
  });

  it('does not expose restricted case studies in the skills content', () => {
    expect(skills).not.toContain('RBAC Authorization System');
    expect(skills).not.toContain('Kubernetes Environment Provisioning');
  });

  it('defines unique SEO data and excludes privacy from indexing', () => {
    const entries = Object.values(seoByPath);
    expect(new Set(entries.map((entry) => entry.title)).size).toBe(entries.length);
    expect(seoByPath['/privacy'].noIndex).toBe(true);
    expect(seoByPath['/'].noIndex).not.toBe(true);
  });

  it('closes the mobile menu only for Escape', () => {
    expect(isMenuCloseKey('Escape')).toBe(true);
    expect(isMenuCloseKey('Enter')).toBe(false);
  });

  it('defaults to denied and persists only an explicit grant', () => {
    const storage = new Map<string, string>();
    const adapter = { getItem: (key: string) => storage.get(key) ?? null };
    expect(hasConsentDecision(adapter)).toBe(false);
    expect(readConsent(adapter)).toBe('denied');
    storage.set(CONSENT_STORAGE_KEY, 'granted');
    expect(hasConsentDecision(adapter)).toBe(true);
    expect(readConsent(adapter)).toBe('granted');
    expect(isAnalyticsAllowed('denied')).toBe(false);
    expect(isAnalyticsAllowed('granted')).toBe(true);
    expect(() => trackEvent('denied', 'page_view', { page_path: '/' })).not.toThrow();
  });

  it('stores an explicit rejection without treating it as an absent choice', () => {
    const storage = new Map<string, string>([[CONSENT_STORAGE_KEY, 'denied']]);
    const adapter = { getItem: (key: string) => storage.get(key) ?? null };
    expect(readConsent(adapter)).toBe('denied');
    expect(hasConsentDecision(adapter)).toBe(true);
    expect(isAnalyticsAllowed(readConsent(adapter))).toBe(false);
  });

  it('validates contact input and anti-spam limits', async () => {
    const config = { minSubmitMs: 3000, maxBodyBytes: 12000, allowedOrigin: 'http://127.0.0.1:5173' };
    const valid = { name: 'Jonny', email: 'visitor@example.com', message: 'A valid message here', startedAt: 1000 };
    expect(validateContact(valid, config, 5000)).toBeNull();
    expect(validateContact({ ...valid, website: 'spam' }, config, 5000)).toBe('invalid');
    expect(validateContact(valid, config, 2000)).toBe('invalid');
    expect(isAllowedOrigin('http://127.0.0.1:5173', config.allowedOrigin)).toBe(true);
    expect(isAllowedOrigin('http://localhost:5173', config.allowedOrigin)).toBe(true);
    expect(isAllowedOrigin('https://localhost:5173', config.allowedOrigin)).toBe(false);
    const allow = createRateLimiter(1000, 1, 2);
    expect(allow('127.0.0.1', 1000)).toBe(true);
    expect(allow('127.0.0.1', 1100)).toBe(false);
    expect(allow('127.0.0.1', 2200)).toBe(true);
    const fetcher = async () => new Response('{}', { status: 200 });
    expect((await sendContactEmail(valid, { RESEND_API_KEY: 'test', CONTACT_EMAIL_TO: 'owner@example.com', CONTACT_EMAIL_FROM: 'Portfolio <noreply@example.com>' }, fetcher)).sent).toBe(true);
    const failedFetcher = async () => { throw new Error('network'); };
    expect((await sendContactEmail(valid, { RESEND_API_KEY: 'test', CONTACT_EMAIL_TO: 'owner@example.com', CONTACT_EMAIL_FROM: 'Portfolio <noreply@example.com>' }, failedFetcher)).errorType).toBe('connection');
    const httpError = async () => new Response('{}', { status: 500 });
    expect((await sendContactEmail(valid, { RESEND_API_KEY: 'test', CONTACT_EMAIL_TO: 'owner@example.com', CONTACT_EMAIL_FROM: 'Portfolio <noreply@example.com>' }, httpError)).httpStatus).toBe(500);
    const timeoutFetcher = (_url: string | URL | Request, options?: RequestInit) => new Promise<Response>((_, reject) => { options?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')), { once: true }); });
    expect((await sendContactEmail(valid, { RESEND_API_KEY: 'test', CONTACT_EMAIL_TO: 'owner@example.com', CONTACT_EMAIL_FROM: 'Portfolio <noreply@example.com>' }, timeoutFetcher, new Date(), 5)).errorType).toBe('timeout');
    expect(allow('second', 1000)).toBe(true);
    expect(allow('third', 1000)).toBe(false);
    expect(missingServerConfig({ RESEND_API_KEY: '', CONTACT_EMAIL_TO: 'owner@example.com', CONTACT_EMAIL_FROM: 'Portfolio <noreply@example.com>' })).toContain('RESEND_API_KEY');
    expect(missingServerConfig({ RESEND_API_KEY: 'test', CONTACT_EMAIL_TO: 'invalid', CONTACT_EMAIL_FROM: 'noreply@example.com' })).toContain('CONTACT_EMAIL_TO_INVALID');
    expect(missingServerConfig({ RESEND_API_KEY: 'test', CONTACT_EMAIL_TO: 'owner@example.com', CONTACT_EMAIL_FROM: 'Portfolio <noreply@example.com>', CONTACT_ALLOWED_ORIGIN: 'javascript:alert(1)' })).toContain('CONTACT_ALLOWED_ORIGIN_INVALID');
    const turnstileEnv = { TURNSTILE_SECRET_KEY: 'secret', TURNSTILE_EXPECTED_HOSTNAME: 'jbeltra99.com' };
    const validTurnstile = async () => new Response(JSON.stringify({ success: true, hostname: 'jbeltra99.com' }), { status: 200 });
    expect((await verifyTurnstileToken('valid-token', turnstileEnv, validTurnstile)).valid).toBe(true);
    const invalidTurnstile = async () => new Response(JSON.stringify({ success: false, 'error-codes': ['timeout-or-duplicate'] }), { status: 200 });
    expect((await verifyTurnstileToken('expired-token', turnstileEnv, invalidTurnstile)).errorCodes).toContain('timeout-or-duplicate');
    const cloudflareError = async () => { throw new Error('network'); };
    expect((await verifyTurnstileToken('token', turnstileEnv, cloudflareError)).errorType).toBe('connection');
    expect((await verifyTurnstileToken(undefined, turnstileEnv, validTurnstile)).errorType).toBe('invalid_input');
    expect((await verifyTurnstileToken('token', turnstileEnv, async () => new Response('{}', { status: 502 }))).httpStatus).toBe(502);
    expect((await verifyTurnstileToken('token', turnstileEnv, async () => new Response(JSON.stringify({ success: true, hostname: 'other.example' }), { status: 200 }))).errorType).toBe('hostname_mismatch');
  });

  it('keeps contact feedback truthful and preserves retry validation', () => {
    const valid = { name: 'Jonny', email: 'visitor@example.com', subject: '', message: 'Un mensaje válido para contacto.', website: '' };
    expect(CONTACT_LOADING_MESSAGE).toBe('Enviando tu mensaje...');
    expect(CONTACT_SUCCESS_MESSAGE).toContain('Hemos recibido tu solicitud');
    expect(contactFormError(valid, false)).toBe('Revisa los campos requeridos y acepta el aviso de privacidad.');
    expect(contactFormError(valid, true)).toBeNull();
    expect(contactFormError({ ...valid, message: 'corto' }, true)).toBe('Revisa los campos requeridos y acepta el aviso de privacidad.');
    expect(contactResponseError(400, { error: 'Completa la verificación anti-spam.' })).toBe('Completa la verificación anti-spam.');
    expect(contactResponseError(503, null)).toContain('proveedor de correo');
    expect(contactResponseError(502, null)).toContain('servidor');
    expect(contactResponseError(403, null)).toContain('origen');
    expect(contactResponseError(429, null)).toContain('demasiados');
  });

});
