import { cases, skills } from '@/app/data/content';

/** How many Work projects a tool shipped in. */
const count = (name: string) => cases.filter((c) => c.stack.includes(name)).length;

/** Every tool that shipped in a Work project. */
export const shippedTools = [...new Set(cases.flatMap((c) => c.stack))];

// The stack from top to bottom. Each layer takes its skill groups (data/content.ts) plus the shipped tools no
// group lists.
const LAYERS = [
  { name: 'Interface', note: 'What people see and use', areas: ['Languages & frameworks', 'UI & styling'], extra: ['React Router', 'Google Maps'] },
  { name: 'State & data', note: 'Server state, client state, forms', areas: ['State & data'], extra: [] },
  { name: 'Server', note: 'APIs, data, auth and payments', areas: ['Backend'], extra: ['Stripe', 'Paddle', 'Google Gemini', 'Cloudinary'] },
  { name: 'Quality', note: 'Tests, linting, commit hooks', areas: ['Testing & quality'], extra: [] },
  { name: 'Ship', note: 'Build, hosting, deploy', areas: ['Tools & platforms'], extra: ['AWS S3', 'CloudFront'] },
  { name: 'AI tools', note: 'Debugging, refactoring, tests', areas: ['AI-assisted development'], extra: [] },
];

/** The layers, each tool with the number of projects it shipped in; most used first (sort is stable). */
export const layers = LAYERS.map(({ name, note, areas, extra }) => ({
  name,
  note,
  tools: [...new Set([...skills.filter((g) => areas.includes(g.area)).flatMap((g) => g.items), ...extra])]
    .map((tool) => ({ name: tool, count: count(tool) }))
    .sort((a, b) => b.count - a.count),
}));

// Fails the build if a project's stack gains a tool no layer shows, or a layer names a skill group that's gone.
const placed = new Set(layers.flatMap((l) => l.tools.map((t) => t.name)));
const unplaced = shippedTools.filter((t) => !placed.has(t));
if (unplaced.length) throw new Error(`lib/skills.ts: no layer for ${unplaced.join(', ')}`);
const groups = new Set(skills.map((g) => g.area));
const missing = LAYERS.flatMap((l) => l.areas).filter((a) => !groups.has(a));
if (missing.length) throw new Error(`lib/skills.ts: no skill group named ${missing.join(', ')}`);
