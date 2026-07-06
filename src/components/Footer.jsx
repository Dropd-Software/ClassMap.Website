import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const { tagline, product, company, copy } = t.footer

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <img src="/favicon.ico" alt="Classmap" className="footer__brand-icon" />
            Classmap
          </div>
          <p className="footer__tagline">{tagline}</p>
        </div>

        <div className="footer__col">
          <h4>{product.title}</h4>
          <ul>
            <li><Link to="/">{product.home}</Link></li>
            <li><Link to="/features">{product.features}</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>{company.title}</h4>
          <ul>
            <li><a href={`mailto:${t.contact.email}`}>{t.contact.email}</a></li>
            <li><a href={`tel:${t.contact.phone}`}>{t.contact.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Classmap. {copy}
        </p>
      </div>
    </footer>
  )
}
