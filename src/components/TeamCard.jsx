import { PersonIcon } from './icons'
import './TeamCard.css'

/**
 * Props:
 *   name   — team member's name
 *   role   — their role/title
 *   photo  — optional image src; falls back to a generic person icon
 *   accent — use the accent colour instead of primary for the icon fallback
 */
export default function TeamCard({ name, role, photo, accent }) {
  return (
    <div className="team-card">
      {photo ? (
        <img src={photo} alt={name} className="team-card__photo" />
      ) : (
        <div className={`team-card__avatar${accent ? ' team-card__avatar--accent' : ''}`}>
          <PersonIcon />
        </div>
      )}
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
    </div>
  )
}
