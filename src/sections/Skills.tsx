import { cases, practices, skills } from '../content';
import { Notes } from '../components/Drawing';
import { Tool } from '../components/Tool';
import { label } from '../styles';

// Every tool that shipped in a Work project, with the projects it shipped in; most used first (ties keep their
// first appearance, as sort is stable).
const shipped = [...new Set(cases.flatMap((c) => c.stack))]
  .map((name) => {
    const used = cases.map((c) => c.stack.includes(name));
    return { name, used, count: used.filter(Boolean).length };
  })
  .sort((a, b) => b.count - a.count);

// The rest of the skill groups, without anything the schedule already lists.
/** Drawing-sheet numbers, as in Work: W-01, W-02… */
const sheet = (i: number) => `W-${String(i + 1).padStart(2, '0')}`;

// Table cells: a header row ruled in the body colour, body rows in the rule colour.
const head = 'border-b border-body py-2.5 align-bottom font-medium';
const cell = 'border-b border-rule py-2.5';

const inSchedule = new Set(shipped.map((t) => t.name));
const kit = skills.map((g) => ({ ...g, items: g.items.filter((n) => !inSchedule.has(n)) })).filter((g) => g.items.length);

/**
 * Skills as a drawing set's schedule: a table of every tool that shipped, marked against the Work sheet it
 * shipped in (the column heads link back to the projects), then the rest of the kit and the general notes.
 * Built from the project stacks in content.ts, so it stays true as they change.
 */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="dark bg-night text-snow">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-x-10 gap-y-6 border-t border-night-line pt-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className={label}>
              <span className="tabular-nums">03</span> / Skills
            </p>
            <h2 id="skills-title" className="mt-5 text-4xl font-semibold">
              Skills
            </h2>
          </div>
          <p className="max-w-md text-snow-2 lg:col-span-5 lg:col-start-8 lg:self-end">
            The tools I’ve shipped with, project by project, then the rest of the kit.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-16 md:mt-20 lg:grid-cols-12">
          {/* Scrolls sideways rather than squeezing, if a very narrow screen ever needs it. */}
          <div className="overflow-x-auto lg:col-span-7">
            <table className="w-full border-collapse text-(length:--text-sm)">
              {/* Short column heads keep the header one line tall; the key names the sheets. */}
              <caption className="pb-5 text-start">
                <span className={label}>Table 03.1 / Tools, by the projects they shipped in</span>
                <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-1 text-(length:--text-xs) text-body-2">
                  {cases.map((c, i) => (
                    <li key={c.name}>
                      <span className="tabular-nums text-snow-3">{sheet(i)}</span> {c.name}
                    </li>
                  ))}
                </ul>
              </caption>
              <thead>
                <tr>
                  <th scope="col" className={`${label} ${head} text-start`}>
                    Tool
                  </th>
                  {cases.map((c, i) => (
                    <th key={c.name} scope="col" className={`${head} text-center`}>
                      {/* Links back to the sheet, with a tap target taller than the label. */}
                      <a
                        href={`#w-${i + 1}`}
                        title={c.name}
                        aria-label={`${sheet(i)} ${c.name}`}
                        className="relative inline-block text-(length:--text-xs) tracking-[0.04em] whitespace-nowrap text-body-2 tabular-nums transition-colors duration-(--dur-quick) hover:text-accent-bright after:absolute after:-inset-x-1 after:-inset-y-3"
                      >
                        {/* Just the number on phones, where the columns are narrow. */}
                        <span className="max-sm:hidden">W-</span>
                        {String(i + 1).padStart(2, '0')}
                      </a>
                    </th>
                  ))}
                  {/* The marks already show the count; on phones the column makes way for them. */}
                  <th scope="col" className={`${label} ${head} w-11 text-end max-sm:hidden`}>
                    Uses
                  </th>
                </tr>
              </thead>
              <tbody>
                {shipped.map((t) => (
                  <tr key={t.name} className="hover:bg-snow/4">
                    <th scope="row" className={`${cell} pe-4 text-start`}>
                      {/* nowrap on the tool itself: the base `li { text-wrap: pretty }` would switch wrapping back on. */}
                      <ul className="contents *:whitespace-nowrap">
                        <Tool name={t.name} />
                      </ul>
                    </th>
                    {t.used.map((on, i) => (
                      <td key={i} className={`${cell} w-8 text-center sm:w-13`}>
                        {on && (
                          <>
                            <span className="inline-block size-2 bg-body" aria-hidden="true" />
                            <span className="sr-only">Used</span>
                          </>
                        )}
                      </td>
                    ))}
                    <td className={`${cell} w-11 text-end text-label tabular-nums max-sm:hidden`}>{t.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className={label}>Also in the kit</h3>
            <dl className="mt-4">
              {kit.map((g) => (
                <div key={g.area} className="border-t border-rule py-3.5 last:border-b">
                  <dt className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="font-medium text-snow">{g.area}</span>
                    <span className="text-sm text-snow-3">{g.note}</span>
                  </dt>
                  <dd className="mt-2.5">
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-snow-2">
                      {g.items.map((name) => (
                        <Tool key={name} name={name} />
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className={`${label} mt-14`}>General notes</h3>
            <Notes items={practices} className="mt-4 text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
