// Post-build prerenderer.
//
// `vite build` alone ships an empty <div id="root"></div>, and GitHub Pages
// answers every non-root path with 404.html — which carries a 404 status, so
// Google refuses to index those URLs. This script fixes both: it renders each
// route in src/seo.js to static HTML and writes it as a real file
// (dist/features/index.html), which Pages then serves as a 200 with content
// already in the markup.
//
// Run after both builds:
//   vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr
//
// Also emits sitemap.xml and a noindex 404.html.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { ROUTES, SITE_URL, DEFAULT_OG_IMAGE } from '../src/seo.js'
import { render } from '../dist-ssr/entry-server.js'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

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
const routeUrl = (path) => absolute(canonicalPath(path))

function headTags({ path, title, description }) {
  const url = routeUrl(path)
  const image = absolute(DEFAULT_OG_IMAGE)

  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Skedio" />`,
    `<meta property="og:locale" content="el_GR" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ]

  // Structured data on the homepage only — describes the product itself, so
  // repeating it per route would just give Google duplicate entities.
  if (path === '/') {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Skedio',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows, macOS, Linux',
      description,
      url: routeUrl('/'),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    }
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
    )
  }

  return tags.join('\n    ')
}

function sitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = routes
    .map(({ path }) =>
      [
        '  <url>',
        `    <loc>${esc(routeUrl(path))}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <priority>${path === '/' ? '1.0' : '0.8'}</priority>`,
        '  </url>',
      ].join('\n'),
    )
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n')
}

async function main() {
  const template = await readFile(join(DIST, 'index.html'), 'utf8')

  if (!template.includes('<div id="root"></div>')) {
    throw new Error(
      'prerender: could not find <div id="root"></div> in dist/index.html — ' +
        'did index.html change?',
    )
  }
  if (!template.includes('<title>Skedio</title>')) {
    throw new Error(
      'prerender: could not find the placeholder <title> in dist/index.html — ' +
        'did index.html change?',
    )
  }

  for (const route of ROUTES) {
    const markup = render(route.path)
    const html = template
      .replace('<title>Skedio</title>', headTags(route))
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

    const outFile =
      route.path === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.path, 'index.html')

    await mkdir(dirname(outFile), { recursive: true })
    await writeFile(outFile, html)
    console.log(`prerendered ${route.path} -> ${outFile.replace(ROOT + '/', '')}`)
  }

  // SPA fallback for unknown paths. Served with a 404 status by Pages, so it
  // is explicitly noindex — an error page must never enter the index.
  const notFound = template
    .replace(
      '<title>Skedio</title>',
      '<title>Skedio</title>\n    <meta name="robots" content="noindex" />',
    )
  await writeFile(join(DIST, '404.html'), notFound)
  console.log('wrote 404.html (noindex SPA fallback)')

  await writeFile(join(DIST, 'sitemap.xml'), sitemap(ROUTES))
  console.log(`wrote sitemap.xml (${ROUTES.length} urls)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
