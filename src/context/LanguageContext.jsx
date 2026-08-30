import { createContext, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import en from '../i18n/en'
import el from '../i18n/el'
import { LANGS, langFromPath, localePath, stripLang } from '../seo'

const TRANSLATIONS = { en, el }

const LanguageContext = createContext(null)

// The active language is derived from the URL rather than held in state. That
// is what makes the English site reachable at all: it has its own crawlable
// URLs, a reload or a shared link keeps the language, and the prerenderer can
// stamp a matching <html lang> on each page. Switching language is a
// navigation, so the switcher renders real links.
export function LanguageProvider({ children }) {
  const { pathname } = useLocation()

  const value = useMemo(() => {
    const lang = langFromPath(pathname)
    const routePath = stripLang(pathname)

    return {
      lang,
      t: TRANSLATIONS[lang],
      LANGUAGES: LANGS,
      // Href for a route path (e.g. '/features') in the current language.
      to: (path) => localePath(path, lang),
      // Href for the page the visitor is on, in another language.
      hrefForLang: (code) => localePath(routePath, code),
      // Whether the visitor is on a given route path, language aside.
      isCurrent: (path) => routePath === path,
    }
  }, [pathname])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
