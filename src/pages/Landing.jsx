import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'
import TeamCard from '../components/TeamCard'
import { ClassroomIcon, CalendarIcon, TeacherIcon, SettingsIcon, GiftIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'
import { mailtoHref, telHref } from '../mailto'
import panagiotisPhoto from '../assets/team/panagiotis-petrakopoulos.jpg'
import dimitrisPhoto from '../assets/team/dimitris-orfanidis.jpg'
import appScreenshot from '../assets/app-screenshot.png'
import './Landing.css'

// Order matches landing.cards: Entity Configuration, Time Blocks, Staff Availability, Constraint Engine
const FEATURE_ICONS = [ClassroomIcon, CalendarIcon, TeacherIcon, SettingsIcon]
const TEAM_PHOTOS = [panagiotisPhoto, dimitrisPhoto]
// Dimitris's source photo is a tall portrait with a lot of headroom above
// his face — bias the crop further down the frame so his face isn't tiny.
const TEAM_PHOTO_POSITIONS = [undefined, 'center 45%']

export default function Landing() {
  const { t, to } = useLanguage()
  const { hero, overview, cards, promo, team, cta } = t.landing

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
              <Link to={to('/features')} className="btn btn-primary">
                {hero.ctaPrimary}
              </Link>
            </div>

            <div className="hero__mockup">
              <img src={appScreenshot} alt={hero.mockup} className="hero__mockup-img" />
            </div>
          </div>
        </section>

        {/* ── Limited-time promotion ───────────────────────── */}
        <section className="promo container">
          <div className="promo__card">
            <span className="promo__badge">
              <GiftIcon width={16} height={16} />
              {promo.badge}
            </span>
            <h2 className="promo__title">{promo.title}</h2>
            <p className="promo__body">{promo.body}</p>

            <div className="promo__tiers">
              <div className="promo__tier">
                <h3 className="promo__tier-title">{promo.tier1.title}</h3>
                <p className="promo__tier-desc">{promo.tier1.desc}</p>
              </div>
              <div className="promo__tier">
                <h3 className="promo__tier-title">{promo.tier2.title}</h3>
                <p className="promo__tier-desc">{promo.tier2.desc}</p>
              </div>
            </div>

            <p className="promo__note">{promo.note}</p>

            <a
              href={mailtoHref(t.contact.email, t.contact.enquiry)}
              className="btn btn-accent"
            >
              {promo.btn}
            </a>
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

      {/* ── Meet the team ─────────────────────────────── */}
      <section className="team-section container">
        <h2 className="section-title">{team.title}</h2>
        <p className="section-sub">{team.sub}</p>

        <div className="team-grid">
          {team.members.map((m, i) => (
            <TeamCard
              key={i}
              name={m.name}
              photo={TEAM_PHOTOS[i]}
              photoPosition={TEAM_PHOTO_POSITIONS[i]}
              accent={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────── */}
      <section id="download" className="cta-banner">
        <div className="container">
          <h2>{cta.title}</h2>
          <p>{cta.sub}</p>
          <p className="cta-banner__contact-intro">{cta.contact}</p>
          <div className="cta-banner__contact">
            <a href={mailtoHref(t.contact.email, t.contact.enquiry)}>
              {t.contact.labels.email}: {t.contact.email}
            </a>
            <a href={telHref(t.contact.phone)}>
              {t.contact.labels.phone}: {t.contact.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
