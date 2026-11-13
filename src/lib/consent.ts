export type AnalyticsConsent = 'granted' | 'denied';
export const CONSENT_STORAGE_KEY = 'jbeltra99.analytics-consent';

export function readConsent(storage: Pick<Storage, 'getItem'>): AnalyticsConsent {
  return storage.getItem(CONSENT_STORAGE_KEY) === 'granted' ? 'granted' : 'denied';
}

export function hasConsentDecision(storage: Pick<Storage, 'getItem'>): boolean {
  return storage.getItem(CONSENT_STORAGE_KEY) !== null;
}

export function isAnalyticsAllowed(consent: AnalyticsConsent): boolean { return consent === 'granted'; }
