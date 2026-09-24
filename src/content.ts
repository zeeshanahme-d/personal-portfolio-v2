// Every fact on the site lives here. Source of truth: public/resume/Zeeshan_Ahmed_Resume.pdf

export const profile = {
  name: 'Zeeshan Ahmed',
  nameUrdu: 'ذیشان احمد',
  timeZone: 'Asia/Karachi',
  email: 'dev.zeeshanahmed@gmail.com',
  resume: '/resume/Zeeshan_Ahmed_Resume.pdf',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zeeshanahme-d' },
  { label: 'GitHub', href: 'https://github.com/zeeshanahme-d' },
  { label: 'X', href: 'https://x.com/Zeeshanahme_d' },
];

/** In-page anchor for a project in the Work section (the hero's work index links to these). */
export const workAnchor = (name: string) => 'work-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

// The hero's index of shipped products, most substantial first.
export const heroIndex = [
  { name: 'ioPortal', kind: 'Enterprise asset platform', org: 'XtecSoft' },
  { name: 'Partner Portal', kind: 'CRM with 15+ modules', org: 'IR Solutions' },
  { name: 'Community Software', kind: 'CMS and course builder', org: 'IR Solutions' },
  { name: 'Stampy', kind: 'Loyalty rewards platform', org: 'IR Solutions' },
  { name: 'Saudi Taxi', kind: 'Booking platform', org: 'Sole front end' },
];

/** Files live at public/work/<src>-800.webp and <src>-1600.webp. */
export type Screenshot = { src: string; alt: string; width: number; height: number };

export type CaseStudy = {
  name: string;
  context: string;
  summary: string;
  role: string;
  points: string[];
  stack: string[];
  url: string;
  links: { label: string; href: string }[];
  image: Screenshot;
  /** Optional phone-sized capture shown beside the desktop one. */
  phone?: { src: string; alt: string; width: number; height: number };
};

export const ioPortal: CaseStudy = {
  name: 'ioPortal',
  context: 'XtecSoft, 2024',
  summary:
    'Client portal software inside ioMoVo, an AI-powered digital asset management platform shown at IBC 2024 in Amsterdam.',
  role: 'Built the module end to end',
  points: [
    'Portal creation, secure file sharing and rich previews for enterprise teams.',
    'Granular role-based access on every portal, from read-only guests to contributors.',
    'Shipped in English and right-to-left Arabic, in a codebase I migrated to TypeScript.',
  ],
  stack: ['React', 'TypeScript', 'Redux Toolkit', 'MUI'],
  url: 'iomovo.io/products/ioportal',
  links: [{ label: 'Visit ioPortal', href: 'https://www.iomovo.io/products/ioportal' }],
  image: { src: 'ioportal', alt: 'ioPortal product page: "Client Portal Software for Enterprise Content".', width: 1600, height: 741 },
};

export const saudiTaxi: CaseStudy = {
  name: 'Saudi Taxi',
  context: 'Booking platform',
  summary: 'Taxi booking for Umrah and Hajj pilgrims travelling between Jeddah, Makkah and Madinah.',
  role: 'Sole front-end developer',
  points: [
    'A booking flow that fits on a phone: route, vehicle and passenger details in one form.',
    'Confirmations sent straight to WhatsApp through the WhatsApp Business API.',
    'Clean, accessible UI that performs consistently on mobile and desktop.',
  ],
  stack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
  url: 'sauditaxi.online',
  links: [{ label: 'Visit sauditaxi.online', href: 'https://sauditaxi.online' }],
  image: { src: 'sauditaxi', alt: 'Saudi Taxi home page with a Makkah skyline hero and the booking form.', width: 1600, height: 1000 },
  phone: { src: '/work/sauditaxi-phone.webp', alt: 'The Saudi Taxi booking form on a phone.', width: 780, height: 1560 },
};

export type Product = { name: string; kind: string; summary: string; points: string[]; stack: string[]; href: string };

// Production apps at IR Solutions where I was the only front-end developer (private dashboards, so no screenshots).
export const products: Product[] = [
  {
    name: 'Partner Portal',
    kind: 'CRM and business platform',
    summary: 'Leads, clients, partners, projects, milestones and payouts in one role-based app.',
    points: ['15+ modules of CRUD workflows', 'Per-action permissions for routes, buttons and widgets', 'Real-time notifications over Socket.io'],
    stack: ['React', 'TypeScript', 'Ant Design', 'TanStack Query', 'Zustand'],
    href: 'https://partner.irsolutions.tech',
  },
  {
    name: 'Community Software',
    kind: 'CMS and admin panel',
    summary: 'Courses, workshops, communities, members, lessons and quizzes, managed from one panel.',
    points: ['Drag-and-drop multi-step course builder', 'Virtualised tables with debounced search', 'Optimistic updates on top of query caching'],
    stack: ['React', 'TypeScript', 'Ant Design', 'TanStack Query', 'Zustand'],
    href: 'https://community.scalezy.com',
  },
  {
    name: 'Stampy',
    kind: 'Loyalty rewards platform',
    summary: 'Two web apps, one for business owners and one for branch managers.',
    points: ['Onboarding, authentication and Stripe payments', 'Branches, staff, campaigns and rewards', 'Analytics dashboards'],
    stack: ['React', 'TypeScript', 'React Hook Form', 'Stripe'],
    href: 'https://stampyapp.me',
  },
];

export type Build = { name: string; kind: string; summary: string; href: string; source?: string; image: Screenshot };

export const builds: Build[] = [
  {
    name: 'Movix',
    kind: 'Hackathon project',
    summary: 'Movie and TV discovery on the TMDB API, with search, infinite scroll and trailers.',
    href: 'https://movie-discovery-platform.vercel.app/',
    source: 'https://github.com/zeeshanahme-d/Movies-website-react.js',
    image: { src: 'movix', alt: 'Movix home page with a search banner and trending posters.', width: 1600, height: 800 },
  },
  {
    name: 'Linea Properties',
    kind: 'Client website',
    summary: 'Marketing site for a real-estate app, with a contact form wired to EmailJS.',
    href: 'https://lineaproperties.com/',
    image: { src: 'lineaproperties', alt: 'Linea landing page with a phone mockup and app store buttons.', width: 1600, height: 800 },
  },
  {
    name: 'Organics by Appa',
    kind: 'Client storefront',
    summary: 'Storefront for an organic food brand, deployed to AWS with GitHub Actions.',
    href: 'https://organicsbyappa.pk/',
    image: { src: 'organicsbyappa', alt: 'Organics by Appa hero showing a jar of panjeeri.', width: 1600, height: 800 },
  },
];

export type Role = { company: string; title: string; period: string; place: string; summary: string; points: string[]; stack: string[] };

export const experience: Role[] = [
  {
    company: 'IR Solutions',
    title: 'Front-end Developer',
    period: 'Jun 2025 – Present',
    place: 'Islamabad, on-site',
    summary: 'I own the front end of client products end to end: architecture, API integration and deployment.',
    points: [
      'Shipped 7+ production apps, including a CRM, a loyalty platform, a learning admin panel and a real-time multiplayer quiz.',
      'Role-based dashboards with protected routes and per-module permissions across 15+ modules.',
      'Feature-based structure and shared components; TanStack Query for server state, Zustand for client state.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Zustand', 'Socket.io'],
  },
  {
    company: 'XtecSoft',
    title: 'Front-end Developer',
    period: 'Jan 2024 – Mar 2025',
    place: 'Karachi, hybrid',
    summary: 'Worked on ioMoVo, an AI-powered digital asset management platform for enterprise clients.',
    points: [
      'Built the ioPortal module end to end.',
      'Led the codebase migration to TypeScript and the React 16 → 18 and MUI 4 → 5 upgrades.',
      'Moved class components to hooks and added RTL layouts for Arabic-speaking markets.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'MUI'],
  },
];

export const education = [
  { title: 'Full-stack web development certification', place: 'Saylani Mass IT Training', period: '2022 – 2023' },
  { title: 'Intermediate in Computer Science', place: 'Govt. Dehli Science College', period: '2021 – 2023' },
];

// What I'm good at, in the words of the work itself (About section).
export const capabilities = [
  {
    title: 'Complex product UI',
    body: 'Role-based dashboards, 15-module CRMs, drag-and-drop builders and data-heavy tables.',
  },
  {
    title: 'Built for production',
    body: 'API integration, auth flows, loading and error states, and deployments I own end to end.',
  },
  {
    title: 'Performance-minded',
    body: 'Route-level code splitting, lazy loading, query caching and virtualised lists.',
  },
  {
    title: 'International interfaces',
    body: 'Responsive, accessible layouts, localised and right-to-left for Arabic-speaking markets.',
  },
];

// Grouped by what they do in a project. Each name maps to its official mark in About.tsx.
export const stack = [
  { area: 'Core', items: ['React', 'Next.js', 'TypeScript', 'JavaScript'] },
  { area: 'State & data', items: ['TanStack Query', 'Redux Toolkit', 'React Hook Form', 'Socket.io'] },
  { area: 'UI', items: ['Tailwind CSS', 'Ant Design', 'MUI', 'shadcn/ui'] },
  { area: 'Quality & tooling', items: ['Jest', 'Testing Library', 'ESLint', 'Vite', 'Git', 'Vercel'] },
] as const;

export const alsoUsed = ['Zustand', 'Node.js', 'Express', 'MongoDB', 'Figma'];
