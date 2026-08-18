import { useEffect } from 'react';

export const SITE_DOMAIN = 'https://texvettrees.com';
const DEFAULT_IMAGE = `${SITE_DOMAIN}/og-image.png`;

type JsonLdValue = Record<string, unknown>;

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: JsonLdValue | JsonLdValue[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function PageSEO({ title, description, path, image = DEFAULT_IMAGE, noIndex = false, jsonLd }: PageSEOProps) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const url = path === '/' ? `${SITE_DOMAIN}/` : `${SITE_DOMAIN}${path}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);

    if (noIndex) {
      upsertMeta('name', 'robots', 'noindex, nofollow');
    } else {
      removeMeta('name', 'robots');
    }

    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    let script: HTMLScriptElement | null = null;
    if (jsonLdKey) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = jsonLdKey;
      document.head.appendChild(script);
    }

    return () => {
      script?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, noIndex, jsonLdKey]);

  return null;
}
