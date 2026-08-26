import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

function getInitialTheme() {
  // Runs during render, so it also runs under the prerenderer in Node where
  // there is no window/localStorage. The inline script in index.html applies
  // the visitor's real theme before first paint, so this fallback is never
  // what they actually see.
  if (typeof window === 'undefined') return 'light'

  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Ignore storage read errors (e.g. storage disabled)
  }

  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore storage write errors (e.g. storage disabled)
    }
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
