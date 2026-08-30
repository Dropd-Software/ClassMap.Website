import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes'

// LanguageProvider sits inside the router because it reads the active language
// off the URL.
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LanguageProvider>
          <AppRoutes />
        </LanguageProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
