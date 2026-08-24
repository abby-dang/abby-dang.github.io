export const projects = [
  {
    id: 'ntms',
    name: 'Color — Nail Technician Management System',
    tag: 'In development',
    tagColor: 'var(--yellow)',
    role: 'Full-Stack Developer',
    timeframe: 'Jan 2026 — Present',
    blurb:
      "A salon management platform I'm building solo, backend-first. Owners will manage staff, services, and pricing; techs and clients get streamlined registration. Inspired directly by my own time working as a nail technician.",
    stack: ['Python', 'Django', 'Supabase', 'PostgreSQL', 'Postman', 'REST APIs'],
    status:
      "Backend logic and API are actively in progress. Frontend (React) hasn't started yet — that's next.",
    links: { repo: 'https://github.com/abby-dang/Color' },
    linkLabel: 'View repo ↗',
    accent: 'var(--yellow)',
  },
  {
    id: 'bubble',
    name: 'Bubble — Social Media App',
    tag: 'Senior Capstone',
    tagColor: 'var(--pink)',
    role: 'Project Lead & Frontend Developer',
    timeframe: 'Jan 2025 — Dec 2025',
    blurb:
      'A cross-platform React Native app for meeting people through shared-interest communities before ever meeting in person. I led a team of 5 through a full academic year, from concept to a fully working, demoable app.',
    stack: ['React Native', 'JavaScript', 'REST APIs', 'Expo', 'C#'],
    status: 'Demoed live via Expo, running on our own machine and shared with viewers by QR code — not deployed to app stores',
    links: { repo: 'https://my.eng.utah.edu/~u1217992/bubble/' },
    linkLabel: 'View project site ↗',
    accent: 'var(--pink)',
  },
];
