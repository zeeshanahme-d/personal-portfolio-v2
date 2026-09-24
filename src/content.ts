// Every fact on the site lives here. Source of truth: public/resume/Zeeshan_Ahmed_Resume.pdf

export const profile = {
  name: 'Zeeshan Ahmed',
  nameUrdu: 'ذیشان احمد',
  role: 'Frontend developer',
  timeZone: 'Asia/Karachi',
  email: 'dev.zeeshanahmed@gmail.com',
  resume: '/resume/Zeeshan_Ahmed_Resume.pdf',
  status: 'Available to join immediately',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zeeshanahme-d' },
  { label: 'GitHub', href: 'https://github.com/zeeshanahme-d' },
  { label: 'X', href: 'https://x.com/Zeeshanahme_d' },
];

/**
 * A screenshot. `src` is either a base name with public/work/<src>-800.webp and <src>-1600.webp,
 * or a full path to one file (e.g. '/work/partner-portal.png').
 */
export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Page path shown in the browser frame's address bar, after the project's url. */
  path?: string;
};

/** About photo. null shows a white placeholder: drop a 4:5 photo in public/ and set it here. */
export const portrait: { src: string; alt: string } | null = { src: '/my-profile.jpg', alt: 'Zeeshan Ahmed, smiling, wearing a grey t-shirt.' };

export type CaseStudy = {
  name: string;
  context: string;
  summary: string;
  role: string;
  points: string[];
  stack: string[];
  /** Domain shown in the frame's address bar. Leave out for a private app: the bar shows a lock and the path. */
  url?: string;
  /** Public links only; private dashboards get none. */
  links: { label: string; href: string }[];
  /** One is a still, several become a carousel. Leave out for a white 16:10 placeholder. */
  images?: Screenshot[];
  /** Optional phone-sized capture shown beside the desktop one. */
  phone?: { src: string; alt: string; width: number; height: number };
};

// Selected work, in page order. Screens alternate sides; Saudi Taxi must sit on a flipped (odd) slot
// because its phone capture overlaps toward the text column.
export const cases: CaseStudy[] = [
  {
    name: 'ioPortal',
    context: 'XtecSoft, 2024',
    summary:
      'Client portal software inside ioMoVo, an award-winning AI-powered digital asset management platform shown at IBC 2024 in Amsterdam.',
    role: 'Built the module end to end',
    points: [
      'Shareable portals with secure file management and rich previews.',
      'Role-based access on every portal, from read-only guests to contributors.',
      'Shipped in English and right-to-left Arabic, in a codebase I migrated to TypeScript.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI'],
    url: 'iomovo.io/products/ioportal',
    links: [{ label: 'Visit ioPortal', href: 'https://www.iomovo.io/products/ioportal' }],
    images: [{ src: 'ioportal', alt: 'ioPortal product page: "Client Portal Software for Enterprise Content".', width: 1600, height: 741 }],
  },
  {
    name: 'Partner Portal',
    context: 'IR Solutions, 2025',
    summary:
      'A business platform for a software agency: leads, clients, partners, projects, documents and payments in one app. Admins, sales executives, partners and clients each get their own dashboard and menu.',
    role: 'Sole frontend developer, development to deployment',
    points: [
      'Permission-driven UI: View, Add, Update and Delete rights per module guard every route and build each user’s sidebar.',
      'Sales pipeline from soft lead to signed client: stage tracker, notes, lead requests and conversion to client or project.',
      'Stripe Checkout for milestone payments and support packages, plus in-browser e-signatures for SOWs and contracts.',
      'Live Socket.io notifications with an unread counter, a system-wide audit log and a recycle bin that restores deleted records.',
      'About 120 REST endpoints across 19 modules, each with typed requests and a TanStack Query hook, behind one shared Axios client.',
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Ant Design', 'Tailwind CSS', 'Socket.io', 'Stripe'],
    // Private admin app: no public link or domain.
    links: [],
    // Captured from the sandbox with test data; email addresses blurred.
    images: [
      { src: 'partner-dashboard', path: '/', alt: 'Super admin dashboard: lead, client and project totals, leads by stage and upcoming reminders.', width: 1600, height: 1000 },
      { src: 'partner-permissions', path: '/roles-management/role-information', alt: 'Role permissions: View, Add, Update and Delete toggles for every module, set per role.', width: 1600, height: 1000 },
      { src: 'partner-leads', path: '/leads', alt: 'Leads management in dark mode: pipeline totals, stage and date filters, and the leads table.', width: 1600, height: 1000 },
      { src: 'partner-projects', path: '/projects', alt: 'Projects as cards with status, attached statement of work, owner and due date.', width: 1600, height: 1000 },
      { src: 'partner-milestones', path: '/milestones', alt: 'Milestones with payment status, project and due date.', width: 1600, height: 1000 },
      { src: 'partner-documents', path: '/documents', alt: 'Documents: statements of work and contracts with signature status per client and project.', width: 1600, height: 1000 },
      { src: 'partner-audit', path: '/audit-logs', alt: 'Audit logs: every action by every user, with totals and module and date filters.', width: 1600, height: 1000 },
    ],
  },
  {
    name: 'Scalezy Admin Panel',
    context: 'IR Solutions, 2026',
    summary:
      'Admin panel for a community and e-learning platform. Admins manage users, build courses and tests, run communities and schedule workshops from one dashboard.',
    role: 'Sole frontend developer, development to deployment',
    points: [
      '3-step course builder: drag-and-drop modules, four lesson types, quizzes and video uploads straight to S3.',
      '5-step community setup with channels, members and join questions; join requests reviewed one by one or in bulk.',
      'User management with a pending-approvals view, roles and mentors, and profiles with course progress and test scores.',
      '60+ REST endpoints behind one shared Axios client for tokens, errors and expired sessions, cached with TanStack Query.',
      'Fast with long lists: virtualised tables, debounced search saved in the URL and loading skeletons; deployed to S3 and CloudFront by script.',
    ],
    stack: ['React', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'AWS S3', 'CloudFront'],
    url: 'community.scalezy.com',
    links: [{ label: 'Visit community.scalezy.com', href: 'https://community.scalezy.com' }],
    // Captured from the admin panel with demo data; email addresses blurred.
    images: [
      { src: 'community-dashboard', path: '/', alt: 'Admin dashboard: user, course and enrolment totals above the user and course tables.', width: 1600, height: 1000 },
      { src: 'community-builder', path: '/course-management/create-course', alt: 'Course builder, step 2: six draggable module cards and an Add module card.', width: 1600, height: 1000 },
      { src: 'community-lessons', path: '/course-management/create-course', alt: 'A module open in the course builder: draggable video, document and text lessons, then the quiz settings.', width: 1600, height: 1000 },
      { src: 'community-courses', path: '/course-management', alt: 'Course management: modules, lessons, mentor, participants and visibility for each course.', width: 1600, height: 1000 },
      { src: 'community-users', path: '/user-management', alt: 'User management: searchable table of users with role and status.', width: 1600, height: 1000 },
      { src: 'community-communities', path: '/community-management', alt: 'Community management: channels, polls, participants and visibility, with a join-requests tab.', width: 1600, height: 1000 },
      { src: 'community-media', path: '/management', alt: 'Platform management: media, reports and announcements.', width: 1600, height: 1000 },
    ],
  },
  {
    name: 'Saudi Taxi',
    context: 'IR Solutions, 2026',
    summary: 'Taxi booking for Umrah and Hajj travellers moving between Jeddah, Makkah and Madinah.',
    role: 'Sole frontend developer, development to deployment',
    points: [
      'Route, vehicle and passenger selection in one form that fits on a phone.',
      'Instant booking confirmations through the WhatsApp Business API.',
      'Clean, accessible UI that works the same on mobile and desktop.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    url: 'sauditaxi.online',
    links: [{ label: 'Visit sauditaxi.online', href: 'https://sauditaxi.online' }],
    images: [{ src: 'sauditaxi', alt: 'Saudi Taxi home page with a Makkah skyline hero and the booking form.', width: 1600, height: 1000 }],
    phone: { src: '/work/sauditaxi-phone.webp', alt: 'The Saudi Taxi booking form on a phone.', width: 780, height: 1560 },
  },
  {
    // Two apps, one card: the Business Owner Portal and the Branch Manager Portal share a product and a stack.
    name: 'Stampy',
    context: 'IR Solutions, 2026',
    summary:
      'Digital stamp cards for cafés and retailers: buy nine coffees, get the tenth free, no paper. I built both of its web apps, the Business Owner Portal and the Branch Manager Portal.',
    role: 'Sole frontend developer on both apps, development to deployment',
    points: [
      'Owner portal: onboarding and subscription billing with Stripe Elements, including payment retry and plan upgrades.',
      'Branches on a Google Maps location picker with a QR code each; campaigns, rewards, staff roles and Recharts analytics.',
      'Manager portal: salespeople, customer lookup with stamp history, and the business’s products, campaigns and rewards.',
      '25+ REST endpoints in each app, from auth and billing to branches, stamps and notifications.',
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'Ant Design', 'Tailwind CSS', 'Stripe', 'Google Maps'],
    // The portals are private; the only public link is the product site, which I didn't build.
    links: [{ label: 'stampyapp.me (product site)', href: 'https://stampyapp.me' }],
  },
];

export type Build = { name: string; kind: string; summary: string; href: string; source?: string; image: Screenshot };

export const builds: Build[] = [
  {
    name: 'Movix',
    kind: 'Hackathon project',
    summary: 'Movie discovery on the TMDB API, with search, filters, detail pages and virtualised infinite scroll.',
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
    title: 'Frontend Developer',
    period: 'Jun 2025 – Jul 2026',
    place: 'Islamabad',
    summary: 'Owned the front end of client products end to end: architecture, REST APIs and deployment.',
    points: [
      'Delivered 7+ production web apps, including a CRM, a loyalty rewards system, a learning admin panel and a real-time quiz app.',
      'Role-based dashboards with protected routes across 15+ modules, plus real-time Socket.io notifications.',
      'Reusable components and feature-based structure; TanStack Query and Zustand for state.',
      'Lazy loading, code splitting and caching for speed; ESLint, Husky and code reviews for quality.',
      'Worked with designers and backend engineers on responsive, accessible interfaces.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Zustand', 'Socket.io'],
  },
  {
    company: 'XtecSoft',
    title: 'Frontend Developer',
    period: 'Jan 2024 – Mar 2025',
    place: 'Karachi',
    summary: 'Worked on ioMoVo, an award-winning AI-powered digital asset management platform shown at IBC 2024.',
    points: [
      'Built the ioPortal module end to end: shareable portals, secure file management, previews and role-based access.',
      'Led the migration from JavaScript to TypeScript, and the React 16 → 18 and Material UI 4 → 5 upgrades.',
      'Refactored class components into hooks, improving rendering performance.',
      'Implemented RTL layouts and localisation for Arabic-speaking markets.',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI'],
  },
];

export const education = [
  { title: 'Website Development, full-stack certification', place: 'Saylani Mass IT Training, Karachi', period: 'Dec 2022 – Dec 2023' },
  { title: 'Intermediate (HSC) in Computer Science', place: 'Govt. Dehli Science College, Karachi', period: 'Jun 2021 – Jun 2023' },
];

// What I'm good at, in the words of the work itself (About section).
export const capabilities = [
  {
    title: 'Complex product UI',
    body: 'Role-based dashboards, a 15-module CRM, a drag-and-drop course builder and virtualised tables.',
  },
  {
    title: 'Built for production',
    body: 'REST API integration, auth and onboarding, Stripe payments, and deployments I own end to end.',
  },
  {
    title: 'Fast by default',
    body: 'Lazy-loaded routes, code splitting, query caching, debounced search and optimistic updates.',
  },
  {
    title: 'For every user',
    body: 'RTL and localisation for Arabic-speaking markets; semantic HTML, ARIA and screen-reader testing.',
  },
];

// The Skills section, grouped by the job each tool does. Names with a logo are mapped in src/marks.ts.
export const skills = [
  { area: 'Languages & frameworks', note: 'Next.js for SSR and SSG', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Sass', 'Less'] },
  { area: 'State & data', note: 'Server state, client state, forms', items: ['TanStack Query', 'Redux Toolkit', 'Zustand', 'React Hook Form', 'Socket.io', 'REST APIs'] },
  { area: 'UI & styling', note: 'Design systems and charts', items: ['Tailwind CSS', 'Ant Design', 'Material UI', 'shadcn/ui', 'Radix UI', 'Bootstrap', 'Framer Motion', 'Recharts'] },
  { area: 'Testing & quality', note: 'Tests, linting, commit hooks', items: ['Jest', 'React Testing Library', 'ESLint', 'Prettier', 'Husky'] },
  { area: 'Tools & platforms', note: 'Build, auth, deploy', items: ['Git', 'GitHub', 'Vite', 'Vercel', 'Firebase', 'Clerk', 'Chrome DevTools', 'Figma'] },
  { area: 'Backend', note: 'APIs and data', items: ['Node.js', 'Express', 'MongoDB'] },
  { area: 'AI-assisted development', note: 'Debugging, refactoring, tests', items: ['Claude Code', 'Cursor', 'ChatGPT / Codex', 'GitHub Copilot', 'Google Antigravity'] },
];

export const practices = [
  'Accessibility: semantic HTML, ARIA, screen-reader testing',
  'Performance: lazy loading, code splitting, query caching',
  'Responsive, cross-browser layouts',
  'i18n and RTL localisation',
  'SEO-friendly markup',
  'Agile and Scrum',
];
