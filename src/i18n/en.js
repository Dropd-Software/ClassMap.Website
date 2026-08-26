const en = {
  nav: {
    home: 'Home',
    features: 'Features',
  },
  landing: {
    hero: {
      headline: ['The timetable,', 'solved.'],
      sub: 'Skedio is a desktop application that automatically resolves scheduling conflicts between teachers, students, and rooms. Built for Windows, macOS, and Linux, it centralizes your data and generates optimal weekly schedules in minutes.',
      ctaPrimary: 'See How It Works',
      mockup: 'Skedio schedule preview',
    },
    overview: {
      title: 'Core Operations',
      sub: 'The essentials for running your schedule.',
    },
    cards: [
      {
        title: 'Entity Configuration',
        body: 'Manage hierarchical sections, composite classes, flat classroom lists, and specific course parameters.',
      },
      {
        title: 'Time Blocks',
        body: 'Configure schedules using predefined fixed periods or flexible, free-form time blocks.',
      },
      {
        title: 'Staff Availability',
        body: 'Define teacher availability intuitively using an inline drag-to-paint calendar.',
      },
      {
        title: 'Constraint Engine',
        body: 'Apply strict operational rules for daily limits, resource spread, and consecutive classes to match your exact pedagogical needs.',
      },
    ],
    promo: {
      badge: 'Beta',
      title: 'Beta Access & Early Adopter Promo',
      body: 'Skedio is currently in open beta and completely free for all users. Your feedback will drive our official Version 1.0 launch this September. Secure a lifetime license now before spots fill up:',
      tier1: {
        title: 'First 10 Users: Free Lifetime Access (All Versions)',
        desc: 'Includes all future updates, features, and new versions forever.',
      },
      tier2: {
        title: 'Next 40 Users: Free Lifetime Access (V1 Only)',
        desc: 'Permanent access to the September release (V1.0) at no cost.',
      },
      note: 'Note: Everyone gets immediate free access during the beta phase. Contact us today to lock in your lifetime deal.',
      btn: 'Claim Your Spot',
    },
    team: {
      title: 'Meet the Team',
      sub: 'The people building Skedio.',
      members: [
        { name: 'Panagiotis Petrakopoulos' },
        { name: 'Dimitris Orfanidis' },
      ],
    },
    cta: {
      title: 'Download Skedio',
      sub: 'Activation requires a valid license key.',
      contact: 'To purchase a license and receive the direct download link, contact us:',
    },
  },
  features: {
    hero: {
      title: 'Everything You Need to Build a Schedule',
      sub: 'Every capability, from setup to export.',
    },
    steps: [
      {
        number: '01',
        title: 'Add Staff & Students',
        body: 'Input your personnel and set specific teacher availability.',
      },
      {
        number: '02',
        title: 'Define Classrooms',
        body: 'Register room capacities to establish availability.',
      },
      {
        number: '03',
        title: 'Generate Schedule',
        body: 'Select courses and durations; Skedio generates a conflict-free timetable.',
      },
      {
        number: '04',
        title: 'Share & Adjust',
        body: 'Distribute the schedule and make manual adjustments as needed.',
      },
    ],
    sections: [
      {
        title: 'Core Modules',
        items: [
          { name: 'Sections & Classes', desc: 'Group entities hierarchically and handle composite classes that combine multiple student groups.' },
          { name: 'Teachers & Students', desc: 'Manage staff with an intuitive availability calendar. Track student rosters and assign them directly to classes.' },
          { name: 'Subjects & Rooms', desc: 'Maintain flat lists of subjects and physical spaces. Add or edit entries via quick side panels.' },
          { name: 'Courses Matrix', desc: 'Link the variables: assign a Teacher, Subject, Class, and Room, while defining occurrences, difficulty, and duration.' },
        ],
      },
      {
        title: 'Generation & Optimization',
        items: [
          { name: 'Scheduling Modes', desc: 'Build using predefined periods (Fixed mode) or free-form blocks with specific start/end times (Flexible mode).' },
          { name: 'Constraint Engine', desc: 'Set custom scheduling rules to reflect staff availability and pedagogical limits, ensuring the final timetable meets your operational requirements.' },
          { name: 'Alternatives Generator', desc: 'Instantly generate multiple valid schedules and choose the one that best optimizes your resources—whether saving classroom space or improving staff routines.' },
        ],
      },
      {
        title: 'Management & Output',
        items: [
          { name: 'Interactive Grid', desc: 'View the generated weekly schedule. Click assignments to manually adjust them, or filter the view by Teacher, Subject, Class, or Room.' },
          { name: 'Diagnostics', desc: 'Monitor schedule health. Track room utilization hours and identify idle gaps for teachers and classes.' },
          { name: 'Export Engine', desc: 'Export the active grid to PDF, export to iCalendar (.ics), or automatically generate batch PDFs per class and per teacher.' },
          { name: 'Privacy by Design', desc: 'All data is stored locally in independent SQLite files, ensuring full GDPR compliance without relying on cloud services.' },
        ],
      },
    ],
    detail: {
      title: 'Built for educational institutions',
      body: 'Skedio is designed around the real-world operations of schools and educational centers, efficiently handling flexible hours, rotating staff, and complex student requirements.',
    },
    cta: {
      title: 'Contact & Licensing',
    },
  },
  contact: {
    email: 'info@skedio.gr',
    phone: '+30 6970372110',
    website: 'www.skedio.gr',
  },
  footer: {
    tagline: 'The timetable, solved.',
    product: {
      title: 'Product',
      home: 'Home',
      features: 'Features',
    },
    company: {
      title: 'Company',
      contact: 'Contact',
    },
    copy: 'All rights reserved.',
  },
}

export default en
