import { PersonIcon } from './icons'
import './TeamCard.css'

/**
 * Props:
 *   name   — team member's name
 *   role   — their role/title
 *   accent — use the accent colour instead of primary for the avatar badge
 */
export default function TeamCard({ name, role, accent }) {
  return (
    <div className="team-card">
      <div className={`team-card__avatar${accent ? ' team-card__avatar--accent' : ''}`}>
        <PersonIcon />
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
    </div>
  )
}
