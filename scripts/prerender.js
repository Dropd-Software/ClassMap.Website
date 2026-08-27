// Post-build prerenderer.
//
// `vite build` alone ships an empty <div id="root"></div>, and GitHub Pages
// answers every non-root path with 404.html — which carries a 404 status, so
// Google refuses to index those URLs. This script fixes both: it renders each
// route in src/seo.js to static HTML and writes it as a real file
// (dist/features/index.html), which Pages then serves as a 200 with content
// already in the markup.
//
// Every route is emitted once per language in src/seo.js — Greek at the bare
// path, English under /en/ — so the English site is crawlable instead of being
// a client-side toggle Google never sees. The two are cross-linked with
// hreflang and each carries its own canonical and <html lang>.
//
// Run after both builds:
//   vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr
//
// Also emits sitemap.xml and a noindex 404.html.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  ROUTES,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  LANGS,
  DEFAULT_LANG,
  localePath,
} from '../src/seo.js'
import { render } from '../dist-ssr/entry-server.js'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

const LANG_CODES = Object.keys(LANGS)

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// A route becomes a directory (dist/features/index.html), and GitHub Pages
// redirects /features -> /features/ with a 301. Advertising the slashless form
// in canonical tags and the sitemap would point search engines at a URL that
// redirects, so both are built from the trailing-slash form that actually
// answers 200.
const canonicalPath = (path) => (path.endsWith('/') ? path : `${path}/`)

const absolute = (path) => new URL(path, SITE_URL).href

// Route URLs only — asset URLs must not gain a trailing slash.
const routeUrl = (path, lang) =>
  absolute(canonicalPath(localePath(path, lang)))

function headTags(route, lang) {
  const { title, description } = route[lang]
  const url = routeUrl(route.path, lang)
  const image = absolute(DEFAULT_OG_IMAGE)

  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
  ]

  // Tell Google the two languages are the same page, not duplicates competing
  // with each other. Every version of a page must list every version including
  // itself, and x-default names the one served to everyone else.
  for (const code of LANG_CODES) {
    tags.push(
      `<link rel="alternate" hreflang="${esc(code)}" href="${esc(routeUrl(route.path, code))}" />`,
    )
  }
  tags.push(
    `<link rel="alternate" hreflang="x-default" href="${esc(routeUrl(route.path, DEFAULT_LANG))}" />`,
  )

  tags.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Skedio" />`,
    `<meta property="og:locale" content="${esc(LANGS[lang].ogLocale)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  )

  // Structured data on the homepages only — these describe the site and the
  // product themselves, so repeating them on every route would just hand Google
  // duplicate entities. Each language's homepage carries its own copy with
  // inLanguage set; the hreflang cluster above is what tells Google these are
  // one entity in two languages rather than two products.
  if (route.path === '/') {
    // WebSite is the documented way to tell Google which name to show above
    // a result. Without it Google infers one, and it inferred the old
    // ClassMap branding from the pre-rebrand crawl. og:site_name and <title>
    // are only weaker fallbacks.
    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Skedio',
      url: url,
      inLanguage: LANGS[lang].htmlLang,
    }

    const app = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Skedio',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows, macOS, Linux',
      description,
      url: url,
      inLanguage: LANGS[lang].htmlLang,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    }

    for (const ld of [website, app]) {
      tags.push(
        `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
      )
    }
  }

  return tags.join('\n    ')
}

function sitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10)

  // Each language gets its own <url> entry, and every entry repeats the full
  // set of alternates — the sitemap equivalent of the hreflang tags above.
  const urls = routes
    .flatMap(({ path }) =>
      LANG_CODES.map((lang) =>
        [
          '  <url>',
          `    <loc>${esc(routeUrl(path, lang))}</loc>`,
          ...LANG_CODES.map(
            (code) =>
              `    <xhtml:link rel="alternate" hreflang="${esc(code)}" href="${esc(routeUrl(path, code))}" />`,
          ),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(routeUrl(path, DEFAULT_LANG))}" />`,
          `    <lastmod>${lastmod}</lastmod>`,
          `    <priority>${path === '/' ? '1.0' : '0.8'}</priority>`,
          '  </url>',
        ].join('\n'),
      ),
    )
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls,
    '</urlset>',
    '',
  ].join('\n')
}

async function main() {
  const template = await readFile(join(DIST, 'index.html'), 'utf8')

  for (const marker of [
    '<div id="root"></div>',
    '<title>Skedio</title>',
    '<html lang="el">',
  ]) {
    if (!template.includes(marker)) {
      throw new Error(
        `prerender: could not find ${marker} in dist/index.html — ` +
          'did index.html change?',
      )
    }
  }

  let count = 0

  for (const route of ROUTES) {
    for (const lang of LANG_CODES) {
      const path = localePath(route.path, lang)
      const markup = render(path)

      const html = template
        .replace('<html lang="el">', `<html lang="${LANGS[lang].htmlLang}">`)
        .replace('<title>Skedio</title>', headTags(route, lang))
        .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

      const outFile =
        path === '/'
          ? join(DIST, 'index.html')
          : join(DIST, path, 'index.html')

      await mkdir(dirname(outFile), { recursive: true })
      await writeFile(outFile, html)
      console.log(`prerendered ${path} -> ${outFile.replace(ROOT + '/', '')}`)
      count += 1
    }
  }

  // SPA fallback for unknown paths. Served with a 404 status by Pages, so it
  // is explicitly noindex — an error page must never enter the index.
  const notFound = template.replace(
    '<title>Skedio</title>',
    '<title>Skedio</title>\n    <meta name="robots" content="noindex" />',
  )
  await writeFile(join(DIST, '404.html'), notFound)
  console.log('wrote 404.html (noindex SPA fallback)')

  await writeFile(join(DIST, 'sitemap.xml'), sitemap(ROUTES))
  console.log(`wrote sitemap.xml (${count} urls)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
