import './FeatureCard.css'

/**
 * Props:
 *   icon  — icon component from components/icons.jsx
 *   title — short feature name
 *   body  — one or two sentence description
 */
export default function FeatureCard({ icon: Icon, title, body }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">
        <Icon />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__body">{body}</p>
    </div>
  )
}
