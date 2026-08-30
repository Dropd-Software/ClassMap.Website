import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes'

// Build-time only: scripts/prerender.js calls this once per route in src/seo.js
// and injects the result into dist/index.html.
//
// renderToStaticMarkup (not renderToString) is deliberate. The browser entry
// uses createRoot, not hydrateRoot, so React replaces this markup on mount
// rather than hydrating it. That avoids mismatch warnings from markup that
// legitimately differs between server and client — Navbar renders a Sun or
// Moon icon based on the stored theme, which Node cannot know.
export function render(url) {
  return renderToStaticMarkup(
    <ThemeProvider>
      <StaticRouter location={url}>
        <LanguageProvider>
          <AppRoutes />
        </LanguageProvider>
      </StaticRouter>
    </ThemeProvider>,
  )
}
