import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Features.css'

const STEPS = [
  {
    number: '01',
    title: 'Add your teachers & students',
    body: 'Import or manually enter your staff and student roster. Set availability windows for each teacher.',
  },
  {
    number: '02',
    title: 'Define your classrooms',
    body: 'Add your rooms with capacity and equipment info so Classmap knows what\'s available.',
  },
  {
    number: '03',
    title: 'Generate your schedule',
    body: 'Pick your subjects and session lengths. Classmap builds a conflict-free weekly timetable instantly.',
  },
  {
    number: '04',
    title: 'Share & adjust',
    body: 'Export or share the schedule with staff and students, and make live edits any time.',
  },
]

export default function Features() {
  return (
    <div className="page">
      <Navbar />

      {/* ── Page header ───────────────────────────────── */}
      <section className="features-hero container">
        <h1>How Classmap Works</h1>
        <p>
          {/* TODO: adjust this subtitle */}
          From setup to a full weekly schedule in under 10 minutes.
        </p>
      </section>

      {/* ── Step-by-step breakdown ────────────────────── */}
      <section className="steps container">
        {STEPS.map((step) => (
          <div key={step.number} className="step">
            <div className="step__number">{step.number}</div>
            <div className="step__content">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Detail sections ───────────────────────────── */}
      {/* TODO: add richer detail blocks here, e.g. screenshots + text side by side */}
      <section className="detail-block container">
        <div className="detail-block__text">
          <h2>Built for cram schools & private academies</h2>
          <p>
            {/* TODO: expand this with real product copy */}
            Classmap is designed around the way real tutoring centres operate —
            flexible hours, rotating teachers, and students who attend multiple sessions.
          </p>
          {/* Add a bullet list of specific benefits here */}
        </div>

        <div className="detail-block__visual">
          {/* TODO: place a screenshot or illustration here */}
          <div className="placeholder-img">[ Screenshot ]</div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
