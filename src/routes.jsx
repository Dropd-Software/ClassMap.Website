import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Features from './pages/Features'
import { LANGS, localePath } from './seo'

// Shared by the browser entry (App.jsx, inside BrowserRouter) and the prerender
// entry (entry-server.jsx, inside StaticRouter) so the two can never drift
// apart. Page paths here must stay in sync with ROUTES in src/seo.js — every
// page is mounted once per language, at that language's prefixed path.
const PAGES = {
  '/': <Landing />,
  '/features': <Features />,
}

export default function AppRoutes() {
  return (
    <Routes>
      {Object.keys(LANGS).flatMap((lang) =>
        Object.entries(PAGES).map(([path, element]) => (
          <Route
            key={`${lang}${path}`}
            path={localePath(path, lang)}
            element={element}
          />
        )),
      )}
    </Routes>
  )
}
