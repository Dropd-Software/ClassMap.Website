import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'
import { CalendarIcon, TeacherIcon, StudentIcon, ClassroomIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'
import './Landing.css'

const FEATURE_ICONS = [CalendarIcon, TeacherIcon, StudentIcon, ClassroomIcon]

export default function Landing() {
  const { t } = useLanguage()
  const { hero, overview, cards, cta } = t.landing

  return (
    <div className="page">
      <Navbar />

      {/* ── Hero + feature overview share one continuous background glow ── */}
      <div className="hero-glow">
        <section className="hero">
          <div className="container">
            <h1 className="hero__headline">
              {hero.headline[0]}<br />
              <span className="hero__headline-accent">{hero.headline[1]}</span>
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
          </div>
        </section>

        <section id="features" className="features-overview container">
          <h2 className="section-title">{overview.title}</h2>
          <p className="section-sub">{overview.sub}</p>

          <div className="features-grid">
            {cards.map((f, i) => (
              <FeatureCard key={f.title} icon={FEATURE_ICONS[i]} title={f.title} body={f.body} />
            ))}
          </div>
        </section>
      </div>

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
