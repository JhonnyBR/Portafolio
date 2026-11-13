import { useEffect, useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { nav } from '../content/site';
import { isMenuCloseKey } from './menu';
import { ConsentSettingsLink, useAnalyticsConsent } from './Consent';
import { trackEvent } from '../lib/analytics';

export function Layout() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { consent } = useAnalyticsConsent();
  const referenceInternal = ['/about', '/experience', '/artificial-intelligence'].includes(pathname);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { if (!open) return; const onKeyDown = (event: KeyboardEvent) => { if (isMenuCloseKey(event.key)) setOpen(false); }; document.addEventListener('keydown', onKeyDown); return () => document.removeEventListener('keydown', onKeyDown); }, [open]);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle('dark', next); localStorage.setItem('theme', next ? 'dark' : 'light'); };
  return <div className={`${referenceInternal ? 'reference-internal ' : ''}min-h-screen bg-paper text-ink transition-colors dark:bg-night dark:text-slate-100`}>
    <a className="skip-link" href="#main-content">Ir al contenido principal</a>
    <header className="border-b border-line/80 dark:border-slate-800"><div className="shell flex min-h-20 flex-wrap items-center justify-between gap-6 md:flex-nowrap">
      <Link onClick={() => setOpen(false)} to="/" className="text-lg font-semibold tracking-tight">Jonny Beltran</Link>
      <button onClick={toggleTheme} className="theme-toggle-mobile rounded-lg border border-line px-3 py-2 text-sm md:hidden" aria-label="Cambiar tema">Cambiar tema</button>
      <button id="mobile-menu-toggle" className="rounded-lg border border-line px-3 py-2 text-sm md:hidden" aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>Menú</button>
      <nav id="primary-navigation" aria-label="Navegación principal" className={`${open ? 'block' : 'hidden'} w-full rounded-xl border-line bg-paper p-4 dark:bg-night md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0`}><div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">{nav.map(item => <NavLink key={item.to} onClick={() => trackEvent(consent, 'navigation_click', { destination: item.to })} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to={item.to}>{item.label}</NavLink>)}{referenceInternal ? <><Link onClick={() => trackEvent(consent, 'navigation_click', { destination: '/contact' })} className="header-cta text-center" to="/contact">Contactarme</Link><button onClick={toggleTheme} className="text-left text-sm text-muted hover:text-ink dark:hover:text-white" aria-label="Cambiar tema">Cambiar tema</button></> : <><button onClick={toggleTheme} className="text-left text-sm text-muted hover:text-ink dark:hover:text-white" aria-label="Cambiar tema">Cambiar tema</button><Link onClick={() => trackEvent(consent, 'navigation_click', { destination: '/contact' })} className="header-cta text-center" to="/contact">Contactarme</Link></>}</div></nav>
    </div></header><main id="main-content"><Outlet /></main><footer className="mt-24 border-t border-line/80 py-8 dark:border-slate-800"><div className="shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Jonny Beltran</span><div className="flex gap-4"><Link to="/" className="hover:text-ink dark:hover:text-white">Inicio</Link><Link to="/privacy" className="hover:text-ink dark:hover:text-white">Privacidad</Link><a onClick={() => trackEvent(consent, 'external_link_click', { destination: 'linkedin' })} href="https://linkedin.com/in/jonny-b" className="hover:text-ink dark:hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a><ConsentSettingsLink /></div></div></footer>
  </div>;
}
