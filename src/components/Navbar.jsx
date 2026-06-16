import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {/* Replace this text with your logo image if you have one */}
        <Link to="/" className="navbar__logo">Classmap</Link>

        <ul className="navbar__links">
          <li>
            <Link to="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className={pathname === '/features' ? 'active' : ''}>
              Features
            </Link>
          </li>
          {/* Add more nav links here as needed */}
        </ul>

        {/* CTA button — link this to your sign-up or contact page */}
        <Link to="/" className="btn btn-primary navbar__cta">Get Started</Link>
      </div>
    </nav>
  )
}
