// Single source of truth for per-route SEO metadata.
//
// Consumed by scripts/prerender.js at build time to inject <head> tags and to
// generate sitemap.xml, so adding a route here is all that's needed to get it
// prerendered, indexed and listed in the sitemap.
//
// Copy is Greek because LanguageProvider defaults to 'el' — the prerendered
// HTML crawlers receive is the Greek render, so the metadata must match it.

export const SITE_URL = 'https://www.skedio.gr'

export const DEFAULT_OG_IMAGE = '/icon-192.png'

export const ROUTES = [
  {
    path: '/',
    title: 'Skedio — Αυτόματο ωρολόγιο πρόγραμμα για σχολεία',
    description:
      'Το Skedio είναι εφαρμογή desktop που λύνει αυτόματα τις συγκρούσεις ' +
      'ανάμεσα σε καθηγητές, μαθητές και αίθουσες, και δημιουργεί βέλτιστα ' +
      'εβδομαδιαία προγράμματα σε λίγα λεπτά. Windows, macOS και Linux.',
  },
  {
    path: '/features',
    title: 'Λειτουργίες — Skedio',
    description:
      'Διαχείριση δεδομένων, μπλοκ χρόνου, διαθεσιμότητα καθηγητών και ' +
      'σύστημα κανόνων: όλα τα εργαλεία του Skedio για τη δημιουργία ' +
      'ωρολογίου προγράμματος χωρίς συγκρούσεις.',
  },
]
