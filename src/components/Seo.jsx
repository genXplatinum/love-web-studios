import { useEffect } from 'react';
import {
  DEFAULT_SOCIAL_IMAGE,
  canonicalForPath,
  getSeoForPath,
  structuredDataForPath,
} from '../data/seo';

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function Seo({ pathname }) {
  useEffect(() => {
    const page = getSeoForPath(pathname);
    const canonical = page.noindex
      ? 'https://lovelace.co.in/404.html'
      : canonicalForPath(page.path);
    const robots = page.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    document.title = page.title;
    document.documentElement.lang = 'en';

    upsertMeta('name', 'description', page.description);
    upsertMeta('name', 'author', 'Lovepreet Singh');
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'googlebot', robots);
    upsertMeta('property', 'og:title', page.ogTitle);
    upsertMeta('property', 'og:description', page.description);
    upsertMeta('property', 'og:type', page.type);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', DEFAULT_SOCIAL_IMAGE);
    upsertMeta('property', 'og:image:alt', page.imageAlt);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', page.ogTitle);
    upsertMeta('name', 'twitter:description', page.description);
    upsertMeta('name', 'twitter:image', DEFAULT_SOCIAL_IMAGE);
    upsertMeta('name', 'twitter:image:alt', page.imageAlt);
    upsertCanonical(canonical);

    let script = document.getElementById('seo-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'seo-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredDataForPath(pathname));
  }, [pathname]);

  return null;
}
