import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoByPath, siteUrl } from '../config/seo';

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, key); document.head.appendChild(tag); }
  tag.content = content;
}

export function Seo() {
  const { pathname } = useLocation();
  const data = seoByPath[pathname] ?? seoByPath['/'];
  useEffect(() => {
    document.title = data.title;
    setMeta('name', 'description', data.description);
    setMeta('name', 'robots', data.noIndex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:title', data.title);
    setMeta('property', 'og:description', data.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', `${siteUrl}${data.path}`);
    setMeta('property', 'og:site_name', 'Jonny Beltran');
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', data.title);
    setMeta('name', 'twitter:description', data.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${siteUrl}${data.path}`;
    let jsonLd = document.head.querySelector<HTMLScriptElement>('script[data-seo-person]');
    if (!jsonLd) { jsonLd = document.createElement('script'); jsonLd.type = 'application/ld+json'; jsonLd.dataset.seoPerson = 'true'; document.head.appendChild(jsonLd); }
    jsonLd.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Jonny Beltran', jobTitle: 'Ingeniero de Sistemas', url: siteUrl, sameAs: ['https://linkedin.com/in/jonny-b'] });
  }, [data]);
  return null;
}
