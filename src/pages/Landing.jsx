import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'
import { useLanguage } from '../context/LanguageContext'
import './Landing.css'

export default function Landing() {
  const { t } = useLanguage()
  const { hero, overview, cards, cta } = t.landing

  return (
    <div className="page">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hero container">
        <h1 className="hero__headline">
          {hero.headline[0]}<br />{hero.headline[1]}
        </h1>

        <p className="hero__sub">{hero.sub}</p>

        <div className="hero__actions">
          <Link to="/features" className="btn btn-primary">{hero.ctaPrimary}</Link>
          <a href="#features" className="btn btn-outline">{hero.ctaSecondary}</a>
        </div>

        {/* TODO: replace with a real screenshot or mockup image */}
        <div className="hero__mockup">
          <p className="hero__mockup-placeholder">{hero.mockup}</p>
        </div>
      </section>

      {/* ── Feature overview ──────────────────────────── */}
      <section id="features" className="features-overview container">
        <h2 className="section-title">{overview.title}</h2>
        <p className="section-sub">{overview.sub}</p>

        <div className="features-grid">
          {cards.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} body={f.body} />
          ))}
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container">
          <h2>{cta.title}</h2>
          <p>{cta.sub}</p>
          <Link to="/features" className="btn btn-primary">{cta.btn}</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
