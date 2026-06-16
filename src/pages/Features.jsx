import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import './Features.css'

export default function Features() {
  const { t } = useLanguage()
  const { hero, steps, detail } = t.features

  return (
    <div className="page">
      <Navbar />

      {/* ── Page header ───────────────────────────────── */}
      <section className="features-hero container">
        <h1>{hero.title}</h1>
        <p>{hero.sub}</p>
      </section>

      {/* ── Step-by-step breakdown ────────────────────── */}
      <section className="steps container">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step__number">{step.number}</div>
            <div className="step__content">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Detail block ──────────────────────────────── */}
      <section className="detail-block container">
        <div className="detail-block__text">
          <h2>{detail.title}</h2>
          <p>{detail.body}</p>
          {/* TODO: add a bullet list of specific benefits here */}
        </div>

        <div className="detail-block__visual">
          {/* TODO: replace with a real screenshot or illustration */}
          <div className="placeholder-img">{detail.mockup}</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
