import { PersonIcon } from './icons'
import './TeamCard.css'

/**
 * Props:
 *   name          — team member's name
 *   role          — their role/title
 *   photo         — optional image src; falls back to a generic person icon
 *   photoPosition — optional CSS object-position override (e.g. 'center 45%')
 *   accent        — use the accent colour instead of primary for the icon fallback
 */
export default function TeamCard({ name, role, photo, photoPosition, accent }) {
  return (
    <div className="team-card">
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="team-card__photo"
          style={photoPosition ? { '--photo-position': photoPosition } : undefined}
        />
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
