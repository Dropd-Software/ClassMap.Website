const en = {
  nav: {
    home: 'Home',
    features: 'Features',
  },
  landing: {
    hero: {
      headline: ['The direct solution', 'for scheduling.'],
      sub: 'ClassMap automatically resolves scheduling conflicts between professors, students, and classrooms to build your weekly schedule in minutes. It centralizes your operations by keeping professors, students, rooms, and schedules in one accessible place.',
      ctaPrimary: 'See How It Works',
      ctaSecondary: 'Learn More',
      mockup: 'ClassMap weekly schedule preview',
    },
    overview: {
      title: 'Core Advantages',
      sub: 'One place to manage teachers, students, classrooms, and schedules.',
    },
    cards: [
      {
        title: 'Weekly Scheduling',
        body: 'Generate complete schedules efficiently.',
      },
      {
        title: 'Professor Management',
        body: 'Assign staff to sections and track availability.',
      },
      {
        title: 'Student Organisation',
        body: 'Group students by section or level.',
      },
      {
        title: 'Classroom Allocation',
        body: 'Monitor available rooms at a glance to prevent double-booking.',
      },
    ],
    promo: {
      badge: 'Beta',
      title: 'Beta Access & Early Adopter Promo',
      body: 'ClassMap is currently in open beta and completely free for all users. Your feedback will drive our official Version 1.0 launch this September. Secure a lifetime license now before spots fill up:',
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
      sub: 'The people building ClassMap.',
      members: [
        { name: 'Panagiotis Petrakopoulos' },
        { name: 'Dimitris Orfanidis' },
      ],
    },
    cta: {
      title: 'Download ClassMap',
      sub: 'The application requires a valid license key for activation. Available for Windows, macOS, and Linux.',
      contact: 'To purchase a license and receive the download link, contact us directly:',
      btn: 'Get Started',
    },
  },
  features: {
    hero: {
      title: 'How It Works',
      sub: 'From zero to a complete schedule in less than 10 minutes:',
    },
    steps: [
      {
        number: '01',
        title: 'Add Staff & Students',
        body: 'Input your personnel and set specific professor availability.',
      },
      {
        number: '02',
        title: 'Define Classrooms',
        body: 'Register room capacities to establish availability.',
      },
      {
        number: '03',
        title: 'Generate Schedule',
        body: 'Select courses and durations; ClassMap generates a conflict-free timetable.',
      },
      {
        number: '04',
        title: 'Share & Adjust',
        body: 'Distribute the schedule and make manual adjustments as needed.',
      },
    ],
    sections: [
      {
        title: 'Everything You Need to Build a Schedule',
        items: [
          { name: 'Sections & Classes', desc: 'Group entities hierarchically (e.g., "A1") and handle composite classes that combine multiple groups (e.g., "PE Combined A1+A2").' },
          { name: 'Professors & Students', desc: 'Manage staff with an intuitive drag-to-paint availability calendar. Track student rosters and assign them directly to classes.' },
          { name: 'Subjects & Classrooms', desc: 'Maintain flat lists of subjects and physical rooms.' },
          { name: 'Courses Matrix', desc: 'Link the variables together: assign a Professor, Subject, Class, and Classroom, while defining occurrences, difficulty, and duration.' },
        ],
      },
      {
        title: 'Generation & Optimization',
        items: [
          { name: 'Scheduling Modes', desc: 'Build using predefined periods (Fixed mode) or free-form blocks with specific start/end times (Flexible mode).' },
          { name: 'Constraint Engine', desc: 'Set custom scheduling rules to reflect staff availability and pedagogical limits, ensuring the final timetable meets your exact operational requirements.' },
          { name: 'Alternatives Generator', desc: 'Instantly generate multiple valid schedules and choose the one that best optimizes your resources, whether your priority is saving classroom space or improving staff daily routines.' },
        ],
      },
    ],
    cta: {
      title: 'Contact us to acquire ClassMap:',
    },
  },
  contact: {
    email: 'info@classmap.gr',
    phone: '+30 6970372110',
  },
  footer: {
    tagline: "Your school's schedule, without the headache.",
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
