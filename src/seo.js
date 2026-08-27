// Single source of truth for per-route, per-language SEO metadata.
//
// Consumed by scripts/prerender.js at build time to inject <head> tags, set
// <html lang>, cross-link the two languages with hreflang, and generate
// sitemap.xml — so adding a route here is all that's needed to get it
// prerendered, indexed and listed in the sitemap in both languages.
//
// Also consumed at runtime by LanguageContext and routes.jsx, which derive the
// active language from the URL prefix defined below.

export const SITE_URL = 'https://www.skedio.gr'

export const DEFAULT_OG_IMAGE = '/icon-192.png'

// Greek is the site default and keeps the bare URLs, so every URL indexed under
// the previous Greek-only build still resolves unchanged. English lives under
// /en/ rather than being a client-side toggle, which is what makes it
// crawlable: each language now has its own prerendered page, its own canonical,
// and an <html lang> that matches the copy on it.
export const DEFAULT_LANG = 'el'

export const LANGS = {
  el: { prefix: '', label: 'Ελληνικά', htmlLang: 'el', ogLocale: 'el_GR' },
  en: { prefix: '/en', label: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
}

// The pages themselves. Route paths are language-independent; localePath()
// turns one into the URL for a given language.
export const ROUTES = [
  {
    path: '/',
    el: {
      title: 'Skedio — Αυτόματο ωρολόγιο πρόγραμμα για σχολεία',
      description:
        'Το Skedio είναι εφαρμογή desktop που λύνει αυτόματα τις συγκρούσεις ' +
        'ανάμεσα σε καθηγητές, μαθητές και αίθουσες, και δημιουργεί βέλτιστα ' +
        'εβδομαδιαία προγράμματα σε λίγα λεπτά. Windows, macOS και Linux.',
    },
    en: {
      title: 'Skedio — Automatic timetabling for schools',
      description:
        'Skedio is a desktop app that automatically resolves conflicts ' +
        'between teachers, students and rooms, and builds optimal weekly ' +
        'timetables in minutes. Windows, macOS and Linux.',
    },
  },
  {
    path: '/features',
    el: {
      title: 'Λειτουργίες — Skedio',
      description:
        'Διαχείριση δεδομένων, μπλοκ χρόνου, διαθεσιμότητα καθηγητών και ' +
        'σύστημα κανόνων: όλα τα εργαλεία του Skedio για τη δημιουργία ' +
        'ωρολογίου προγράμματος χωρίς συγκρούσεις.',
    },
    en: {
      title: 'Features — Skedio',
      description:
        'Data management, time blocks, teacher availability and a constraint ' +
        'engine: every tool Skedio gives you for building a timetable with no ' +
        'clashes.',
    },
  },
]

/**
 * The URL path a route occupies in a given language.
 *
 *   localePath('/',         'el') -> '/'
 *   localePath('/features', 'el') -> '/features'
 *   localePath('/',         'en') -> '/en'
 *   localePath('/features', 'en') -> '/en/features'
 *
 * No trailing slash — prerender.js adds one where a URL is advertised to search
 * engines, and React Router ignores it when matching.
 */
export function localePath(path, lang) {
  const { prefix } = LANGS[lang]
  if (!prefix) return path
  return path === '/' ? prefix : `${prefix}${path}`
}

/** The language a URL belongs to, falling back to the default. */
export function langFromPath(pathname) {
  const found = Object.keys(LANGS).find((lang) => {
    const { prefix } = LANGS[lang]
    return prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))
  })
  return found ?? DEFAULT_LANG
}

/**
 * Strip the language prefix, giving the language-independent route path.
 *
 * Also normalises the trailing slash. GitHub Pages 301s /features to
 * /features/, and that slashed form is what canonical tags advertise, so it is
 * the URL visitors are actually on — comparing it against a bare '/features'
 * would never match.
 */
export function stripLang(pathname) {
  const { prefix } = LANGS[langFromPath(pathname)]
  const rest = prefix ? pathname.slice(prefix.length) : pathname
  const trimmed = rest.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}
