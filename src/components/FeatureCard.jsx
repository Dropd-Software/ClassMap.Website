import './FeatureCard.css'

/**
 * Props:
 *   icon  — emoji or image element to show at the top
 *   title — short feature name
 *   body  — one or two sentence description
 */
export default function FeatureCard({ icon, title, body }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__body">{body}</p>
    </div>
  )
}
