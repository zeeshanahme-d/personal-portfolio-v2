import type { CSSProperties } from 'react';
import { education, experience, profile } from '../content';
import { ExternalLink } from '../components/ExternalLink';
import { Notes } from '../components/Drawing';
import { Tool } from '../components/Tool';
import { label, wideCaps } from '../styles';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'Jun 2025' → months since year 0. */
const month = (s: string) => {
  const [m, y] = s.split(' ');
  return Number(y) * 12 + MONTHS.indexOf(m);
};

/** 'Jun 2025 – Jul 2026' → [start, end), both months counted, as a CV counts them. */
const span = (period: string) => {
  const [a, b] = period.split(' – ');
  return { start: month(a), end: month(b) + 1 };
};

/** 14 → '1 yr 2 mo'. */
const length = (months: number) => {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr`, m && `${m} mo`].filter(Boolean).join(' ');
};

// A role's box: ruled above; the last ends on the section's padding rather than its own.
const entryBox = 'grid gap-x-10 border-t border-rule pt-10 pb-16 last:pb-0 lg:grid-cols-12';

// The architect's slash ticks at both ends of a dimension line.
const ticks =
  'before:absolute before:-top-[7px] before:left-0 before:h-[13px] before:w-px before:rotate-45 before:bg-current after:absolute after:-top-[7px] after:right-0 after:h-[13px] after:w-px after:rotate-45 after:bg-current';

// Everything on the drawing, oldest first: studies, then work. Each work line links to its entry below.
const lines = [
  ...education.map((e) => ({ label: e.short, period: e.period, work: false, href: '#education' })),
  ...[...experience].reverse().map((r) => ({
    label: r.company,
    period: r.period,
    work: true,
    href: `#e-${experience.indexOf(r) + 1}`,
  })),
]
  .map((l) => ({ ...l, ...span(l.period) }))
  .sort((a, b) => a.start - b.start);

// The scale runs January to January, a year per tick.
const FIRST_YEAR = Math.floor(Math.min(...lines.map((l) => l.start)) / 12);
const LAST_YEAR = Math.ceil(Math.max(...lines.map((l) => l.end)) / 12);
const YEARS = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);
const at = (m: number) => ((m - FIRST_YEAR * 12) / ((LAST_YEAR - FIRST_YEAR) * 12)) * 100;

/**
 * The career as a dimension drawing: one chained dimension line per role or course, to scale, with its exact
 * length written on it. Studies are dashed construction lines, work is solid; it reads as a stair climbing to
 * the right. Labels hang from the line's start in the left half and from its end in the right, so none runs
 * off the drawing on a phone.
 */
function Dimensions() {
  return (
    <figure className="dims mt-14 md:mt-20">
      <figcaption className={label}>Fig. 02.1 / To scale, {YEARS[0]}–{YEARS[YEARS.length - 1]}</figcaption>
      {/* column-reverse: oldest at the bottom, so the drawing climbs, while the list still reads oldest first. */}
      <ol className="mt-8 flex flex-col-reverse gap-3">
        {lines.map((l, i) => {
          const left = at(l.start);
          const right = 100 - at(l.end);
          const style = { '--left': `${left}%`, '--right': `${right}%`, '--i': i } as CSSProperties;
          return (
            <li key={l.label} style={style} className="relative h-11">
              {/* The tap target is taller than the one line of text. */}
              <a
                href={l.href}
                className={`dim-label absolute top-0 flex items-baseline gap-2.5 text-(length:--text-sm) whitespace-nowrap transition-transform duration-(--dur-base) ease-out hover:translate-x-[3px] after:absolute after:-inset-x-2 after:-inset-y-3 ${left > 50 ? 'right-(--right)' : 'left-(--left)'}`}
              >
                <span className="font-medium">{l.label}</span>
                <span className="text-ink-3 tabular-nums">{length(l.end - l.start)}</span>
                <span className="sr-only">, {l.period}</span>
              </a>
              {/* Studies are dashed construction lines, quieter than the work. */}
              <span
                aria-hidden="true"
                className={`dim-line absolute bottom-2 left-(--left) right-(--right) border-current ${ticks} ${
                  l.work ? 'border-t-[1.5px] text-body' : 'border-t border-dashed text-label'
                }`}
              />
            </li>
          );
        })}
      </ol>
      <div className="relative mt-4 h-7 border-t border-body text-(length:--text-xs) text-label tabular-nums" aria-hidden="true">
        {YEARS.map((y) => (
          <span
            key={y}
            style={{ left: `${at(y * 12)}%` }}
            className="absolute top-2 -translate-x-1/2 before:absolute before:-top-3.5 before:left-1/2 before:h-1.5 before:w-px before:bg-body"
          >
            {y}
          </span>
        ))}
      </div>
    </figure>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="container-page py-20 md:py-28">
      <div className="grid gap-x-10 gap-y-6 border-t border-line pt-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className={label}>
            <span className="tabular-nums">02</span> / Experience
          </p>
          <h2 id="experience-title" className="mt-5 max-w-[20ch] text-3xl font-semibold">
            Two companies, two and a half years.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="text-ink-2">
            Building and shipping production front ends for SaaS, dashboards, CRM systems and client products.
          </p>
          <p className="mt-4 font-medium">
            <ExternalLink href={profile.resume}>Full Resume (PDF)</ExternalLink>
          </p>
        </div>
      </div>

      <Dimensions />

      <ol className="mt-20 md:mt-28">
        {experience.map((role, i) => {
          const { start, end } = span(role.period);
          return (
            <li key={role.company} id={`e-${i + 1}`} className={`${entryBox} gap-y-8`}>
              {/* Stays in view while the notes scroll past on wide screens. */}
              <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
                <p className={`${label} tabular-nums`}>E-{String(i + 1).padStart(2, '0')}</p>
                <h3 className={`${wideCaps} mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[0.95]`}>{role.company}</h3>
                <p className="mt-4 font-medium">{role.title}</p>
                <p className="text-sm text-ink-2">{role.period}</p>
                <p className="text-sm text-ink-3">
                  {role.place}, {length(end - start)}
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-[44ch] text-xl">{role.summary}</p>
                <Notes items={role.points} className="mt-8" />
                <p className={`${label} mt-8`}>Built with</p>
                <ul aria-label="Built with" className="mt-3 flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-ink-2">
                  {role.stack.map((name) => (
                    <Tool key={name} name={name} />
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
        <li id="education" className={`${entryBox} gap-y-6`}>
          <h3 className={`${label} lg:col-span-4`}>Education</h3>
          {/* flush: the entry's rule is already right above it. */}
          <Notes
            flush
            className="lg:col-span-8"
            items={education.map((e) => (
              <span key={e.title}>
                <span className="block font-medium text-ink">{e.title}</span>
                <span className="text-sm text-ink-3">
                  {e.place}, {e.period}
                </span>
              </span>
            ))}
          />
        </li>
      </ol>
    </section>
  );
}
