// Runs automatically after `npm run build`.
// Emits a crawlable HTML entry for every public route and a noindex 404 fallback.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import {
  DEFAULT_SOCIAL_IMAGE,
  NOT_FOUND_SEO,
  SEO_ROUTES,
  SITE_NAME,
  canonicalForPath,
  structuredDataForPath,
} from '../src/data/seo.js';

const DIST_DIR = 'dist';
const HEAD_PATTERN = /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/;
const ROOT_PATTERN = /<div id="root"><\/div>/;
const template = readFileSync(join(DIST_DIR, 'index.html'), 'utf8');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderHead(page) {
  const canonical = page.noindex
    ? 'https://lovelace.co.in/404.html'
    : canonicalForPath(page.path);
  const robots = page.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  const jsonLd = JSON.stringify(structuredDataForPath(page.path), null, 2)
    .replaceAll('<', '\\u003c');

  return `<!-- SEO:START -->
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="author" content="Lovepreet Singh" />
    <meta name="robots" content="${robots}" />
    <meta name="googlebot" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(page.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:type" content="${page.type}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${DEFAULT_SOCIAL_IMAGE}" />
    <meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${DEFAULT_SOCIAL_IMAGE}" />
    <meta name="twitter:image:alt" content="${escapeHtml(page.imageAlt)}" />
    <script id="seo-structured-data" type="application/ld+json">
${jsonLd}
    </script>
    <!-- SEO:END -->`;
}

function renderFallback(page) {
  const links = page.fallback.links
    .map(({ label, href }) => `<a href="${href}">${escapeHtml(label)}</a>`)
    .join('');
  const highlights = page.fallback.highlights
    .map(
      ({ heading, text }) => `<article>
          <h2>${escapeHtml(heading)}</h2>
          <p>${escapeHtml(text)}</p>
        </article>`,
    )
    .join('');

  return `<div class="seo-fallback">
      <a class="seo-fallback__brand" href="/">${SITE_NAME}</a>
      <nav class="seo-fallback__nav" aria-label="Primary">${links}</nav>
      <main>
        <p class="seo-fallback__eyebrow">${escapeHtml(page.fallback.eyebrow)}</p>
        <h1>${escapeHtml(page.fallback.heading)}</h1>
        <p class="seo-fallback__intro">${escapeHtml(page.fallback.intro)}</p>
        ${highlights ? `<section class="seo-fallback__highlights">${highlights}</section>` : ''}
        <nav class="seo-fallback__links" aria-label="Continue browsing">${links}</nav>
      </main>
    </div>`;
}

function renderDocument(page) {
  if (!HEAD_PATTERN.test(template)) {
    throw new Error('SEO head markers were not found in the Vite output.');
  }
  if (!ROOT_PATTERN.test(template)) {
    throw new Error('The empty React root was not found in the Vite output.');
  }

  return template
    .replace(HEAD_PATTERN, renderHead(page))
    .replace(ROOT_PATTERN, `<div id="root">${renderFallback(page)}</div>`);
}

function outputPathFor(page) {
  if (page.path === '/') return join(DIST_DIR, 'index.html');
  return join(DIST_DIR, page.path.replace(/^\//, ''), 'index.html');
}

for (const page of SEO_ROUTES) {
  const outputPath = outputPathFor(page);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderDocument(page));
}

writeFileSync(join(DIST_DIR, '404.html'), renderDocument(NOT_FOUND_SEO));
writeFileSync(join(DIST_DIR, '.nojekyll'), '');

console.log(
  `postbuild: created ${SEO_ROUTES.length} crawlable route documents, 404.html and .nojekyll`,
);
