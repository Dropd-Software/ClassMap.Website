import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const { lang, setLang, t, LANGUAGES } = useLanguage()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function selectLanguage(code) {
    setLang(code)
    setDropdownOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">Classmap</Link>

        <ul className="navbar__links">
          <li>
            <Link to="/" className={pathname === '/' ? 'active' : ''}>
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link to="/features" className={pathname === '/features' ? 'active' : ''}>
              {t.nav.features}
            </Link>
          </li>
        </ul>

        {/* Language switcher */}
        <div className="lang-switcher" ref={dropdownRef}>
          <button
            className="lang-switcher__trigger"
            onClick={() => setDropdownOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <GlobeIcon />
            <span>{LANGUAGES[lang].label}</span>
            <ChevronIcon open={dropdownOpen} />
          </button>

          {dropdownOpen && (
            <ul className="lang-switcher__dropdown" role="listbox">
              {Object.entries(LANGUAGES).map(([code, { label }]) => (
                <li key={code} role="option" aria-selected={lang === code}>
                  <button
                    className={lang === code ? 'active' : ''}
                    onClick={() => selectLanguage(code)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link to="/" className="btn btn-primary navbar__cta">{t.nav.cta}</Link>
      </div>
    </nav>
  )
}
