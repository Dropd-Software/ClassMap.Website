import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import './Features.css'

export default function Features() {
  const { t } = useLanguage()
  const { hero, steps, sections, cta } = t.features

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

      {/* ── Capability sections ──────────────────────── */}
      {sections.map((section) => (
        <section key={section.title} className="capabilities container">
          <h2 className="capabilities__title">{section.title}</h2>
          <div className="capabilities__grid">
            {section.items.map((item) => (
              <div key={item.name} className="cap-card">
                <h3 className="cap-card__name">{item.name}</h3>
                <p className="cap-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ── Contact CTA ──────────────────────────────── */}
      <section className="features-cta container">
        <h2>{cta.title}</h2>
        <div className="features-cta__contact">
          <a href={`mailto:${t.contact.email}`}>Email: {t.contact.email}</a>
          <a href={`tel:${t.contact.phone}`}>Phone: {t.contact.phone}</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
