import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Landing from './pages/Landing'
import Features from './pages/Features'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
