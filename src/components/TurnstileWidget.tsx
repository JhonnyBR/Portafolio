import { useEffect, useRef } from 'react';

type TurnstileApi = { render: (element: HTMLElement, options: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void; 'error-callback': () => void }) => string; reset: (widgetId?: string) => void };
declare global { interface Window { turnstile?: TurnstileApi } }

const scriptId = 'cloudflare-turnstile-script';

export function TurnstileWidget({ onToken }: { onToken: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;
    const render = () => {
      if (window.turnstile && containerRef.current && !widgetId.current) {
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onToken,
          'expired-callback': () => onToken(''),
          'error-callback': () => onToken('')
        });
      }
    };
    const existing = document.getElementById(scriptId);
    if (existing) { render(); return; }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.addEventListener('load', render, { once: true });
    document.head.appendChild(script);
  }, [onToken, siteKey]);

  if (!siteKey) return <p className="text-sm text-red-700" role="alert">La verificación anti-spam no está configurada.</p>;
  return <div ref={containerRef} aria-label="Verificación anti-spam" />;
}
