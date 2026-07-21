function iconProps(props) {
  return {
    width: 32,
    height: 32,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

export function CalendarIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="7" y1="15" x2="9" y2="15" />
      <line x1="12" y1="15" x2="14" y2="15" />
      <line x1="17" y1="15" x2="17" y2="15" />
    </svg>
  )
}

export function TeacherIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="11" cy="7" r="4" />
      <path d="M3 21v-1a8 8 0 0 1 13.5-5.8" />
      <path d="M16.5 16.5l1.75 1.75L22 14.5" />
    </svg>
  )
}

export function StudentIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </svg>
  )
}

export function ClassroomIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  )
}

export function GiftIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}
