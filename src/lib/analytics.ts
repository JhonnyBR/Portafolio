import { isAnalyticsAllowed, type AnalyticsConsent } from './consent';

export const GTM_ID = 'GTM-W7MZBWTP';
type DataLayerEntry = Record<string, string>;
type WindowWithDataLayer = Window & { dataLayer?: DataLayerEntry[] };

function dataLayer(): DataLayerEntry[] {
  const win = window as WindowWithDataLayer;
  win.dataLayer ??= [];
  return win.dataLayer;
}

export function updateAnalyticsConsent(consent: AnalyticsConsent): void {
  dataLayer().push({ event: 'consent_update', analytics_storage: consent === 'granted' ? 'granted' : 'denied' });
}

export function loadGtmOnce(): void {
  if (document.querySelector(`script[data-gtm-id="${GTM_ID}"]`)) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  script.dataset.gtmId = GTM_ID;
  document.head.appendChild(script);
}

export function trackEvent(consent: AnalyticsConsent, event: string, parameters: Record<string, string> = {}): void {
  if (!isAnalyticsAllowed(consent)) return;
  dataLayer().push({ event, ...parameters });
}
