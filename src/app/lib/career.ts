import { education, experience } from '@/app/data/content';
import { parsePeriod } from './period';

// Everything on the Experience drawing, oldest first: studies, then work. Each work line links to its entry.
export const careerLines = [
  ...education.map((e) => ({ label: e.short, period: e.period, work: false, href: '#education' })),
  ...[...experience].reverse().map((r) => ({
    label: r.company,
    period: r.period,
    work: true,
    href: `#e-${experience.indexOf(r) + 1}`,
  })),
]
  .map((line) => ({ ...line, ...parsePeriod(line.period) }))
  .sort((a, b) => a.start - b.start);

export type CareerLine = (typeof careerLines)[number];

// The scale runs January to January, a year per tick.
const FIRST_YEAR = Math.floor(Math.min(...careerLines.map((l) => l.start)) / 12);
const LAST_YEAR = Math.ceil(Math.max(...careerLines.map((l) => l.end)) / 12);

export const careerYears = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);

/** Where a month (from parsePeriod) sits on the scale, as a percentage of its width. */
export const scaleAt = (month: number) => ((month - FIRST_YEAR * 12) / ((LAST_YEAR - FIRST_YEAR) * 12)) * 100;
