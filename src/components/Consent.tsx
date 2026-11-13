import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { hasConsentDecision, isAnalyticsAllowed, readConsent, CONSENT_STORAGE_KEY, type AnalyticsConsent } from '../lib/consent';
import { loadGtmOnce, trackEvent, updateAnalyticsConsent } from '../lib/analytics';

type ConsentContextValue = { consent: AnalyticsConsent; choose: (value: AnalyticsConsent) => void; openSettings: () => void };
const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useAnalyticsConsent(): ConsentContextValue {
  const value = useContext(ConsentContext);
  if (!value) throw new Error('useAnalyticsConsent must be used inside ConsentProvider');
  return value;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<AnalyticsConsent>(() => readConsent(sessionStorage));
  const [bannerVisible, setBannerVisible] = useState(() => !hasConsentDecision(sessionStorage));
  const [settingsOpen, setSettingsOpen] = useState(false);
  const choose = (value: AnalyticsConsent) => { setConsent(value); setBannerVisible(false); sessionStorage.setItem(CONSENT_STORAGE_KEY, value); updateAnalyticsConsent(value); if (isAnalyticsAllowed(value)) loadGtmOnce(); };
  const value = useMemo(() => ({ consent, choose, openSettings: () => setSettingsOpen(true) }), [consent]);
  return <ConsentContext.Provider value={value}><AnalyticsBridge consent={consent}/>{children}<ConsentControls visible={bannerVisible} open={settingsOpen} onClose={() => setSettingsOpen(false)}/></ConsentContext.Provider>;
}

function AnalyticsBridge({ consent }: { consent: AnalyticsConsent }) {
  const { pathname } = useLocation();
  useEffect(() => { if (isAnalyticsAllowed(consent)) { loadGtmOnce(); trackEvent(consent, 'page_view', { page_path: pathname }); } }, [consent, pathname]);
  useEffect(() => { if (!isAnalyticsAllowed(consent) || pathname !== '/contact') return; const form = document.querySelector('form'); if (!form) return; let started = false; const onFocus = () => { if (!started) { started = true; trackEvent(consent, 'contact_form_start'); } }; form.addEventListener('focusin', onFocus); return () => form.removeEventListener('focusin', onFocus); }, [consent, pathname]);
  useEffect(() => { if (!isAnalyticsAllowed(consent)) return; const thresholds = [25, 50, 75, 90]; const sent = new Set<number>(); const onScroll = () => { const progress = ((window.scrollY + window.innerHeight) / Math.max(document.documentElement.scrollHeight, 1)) * 100; thresholds.forEach((threshold) => { if (progress >= threshold && !sent.has(threshold)) { sent.add(threshold); trackEvent(consent, 'scroll_depth', { percent: String(threshold), page_path: pathname }); } }); }; window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll); }, [consent, pathname]);
  return null;
}

function ConsentControls({ visible, open, onClose }: { visible: boolean; open: boolean; onClose: () => void }) {
  const { consent, choose } = useAnalyticsConsent();
  if (!visible && !open) return null;
  return <div className="fixed inset-x-4 bottom-4 z-20 rounded-xl border border-line bg-paper p-5 shadow-xl dark:border-slate-700 dark:bg-night" role="dialog" aria-label="Preferencias de analítica"><p className="text-sm leading-6 text-muted dark:text-slate-300">Puedes aceptar o rechazar las cookies de analítica. La elección puede cambiarse después.</p><div className="mt-4 flex flex-wrap gap-3"><button className="button-primary" onClick={() => { choose('granted'); onClose(); }}>Aceptar analítica</button><button className="button-secondary" onClick={() => { choose('denied'); onClose(); }}>Rechazar analítica</button>{open && <button className="button-secondary" onClick={onClose}>Cerrar</button>}</div></div>;
}

export function ConsentSettingsLink() { const { openSettings } = useAnalyticsConsent(); return <button className="hover:text-ink dark:hover:text-white" onClick={openSettings}>Cambiar consentimiento</button>; }
