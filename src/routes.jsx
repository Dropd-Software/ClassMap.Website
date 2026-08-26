import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Features from './pages/Features'

// Shared by the browser entry (App.jsx, inside BrowserRouter) and the
// prerender entry (entry-server.jsx, inside StaticRouter) so the two can
// never drift apart. Route paths here must stay in sync with src/seo.js.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  )
}
