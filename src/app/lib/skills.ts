import { cases, skills } from '@/app/data/content';

// Every tool that shipped in a Work project, with the projects it shipped in; most used first (ties keep their
// first appearance, as sort is stable). Built from the project stacks, so it stays true as they change.
export const shippedTools = [...new Set(cases.flatMap((c) => c.stack))]
  .map((name) => {
    const used = cases.map((c) => c.stack.includes(name));
    return { name, used, count: used.filter(Boolean).length };
  })
  .sort((a, b) => b.count - a.count);

const inSchedule = new Set(shippedTools.map((t) => t.name));

// The rest of the skill groups, without anything the schedule already lists.
export const kit = skills
  .map((g) => ({ ...g, items: g.items.filter((name) => !inSchedule.has(name)) }))
  .filter((g) => g.items.length);
