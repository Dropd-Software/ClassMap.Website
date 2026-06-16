import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'
import './Landing.css'

const FEATURES = [
  {
    icon: '🗓️',
    title: 'Weekly Scheduling',
    body: 'Build and manage your school\'s weekly timetable in minutes, not hours.',
  },
  {
    icon: '👩‍🏫',
    title: 'Teacher Management',
    body: 'Assign teachers to classes, track availability, and avoid double-bookings.',
  },
  {
    icon: '🎓',
    title: 'Student Organisation',
    body: 'Group students by level or class and keep track of who goes where.',
  },
  {
    icon: '🏫',
    title: 'Classroom Allocation',
    body: 'See which rooms are free at a glance and assign them automatically.',
  },
]

export default function Landing() {
  return (
    <div className="page">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hero container">
        <h1 className="hero__headline">
          {/* TODO: write your main headline here */}
          Schedule smarter.<br />Teach better.
        </h1>

        <p className="hero__sub">
          {/* TODO: 1–2 sentence value proposition */}
          Classmap helps schools and cram schools build conflict-free weekly
          schedules in minutes — no spreadsheets, no headaches.
        </p>

        <div className="hero__actions">
          <Link to="/features" className="btn btn-primary">See How It Works</Link>
          <a href="#features" className="btn btn-outline">Learn More</a>
        </div>

        {/* TODO: drop a screenshot / mockup image here */}
        <div className="hero__mockup">
          <p className="hero__mockup-placeholder">[ App screenshot / mockup ]</p>
        </div>
      </section>

      {/* ── Feature overview ──────────────────────────── */}
      <section id="features" className="features-overview container">
        <h2 className="section-title">Everything your school needs</h2>
        <p className="section-sub">
          One place to manage teachers, students, classrooms, and schedules.
        </p>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} body={f.body} />
          ))}
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container">
          {/* TODO: adjust copy and link destination */}
          <h2>Ready to organise your school?</h2>
          <p>Join schools already using Classmap to save hours every week.</p>
          <Link to="/features" className="btn btn-primary">Get Started Free</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
