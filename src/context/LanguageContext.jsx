import { createContext, useContext, useState } from 'react'
import en from '../i18n/en'
import el from '../i18n/el'

const LANGUAGES = {
  en: { label: 'English', translations: en },
  el: { label: 'Ελληνικά', translations: el },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('el')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: LANGUAGES[lang].translations, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
