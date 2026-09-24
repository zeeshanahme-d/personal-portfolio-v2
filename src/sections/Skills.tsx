import type { CSSProperties } from 'react';
import { practices, skills } from '../content';
import { marks } from '../marks';
import { stagger } from '../hooks/useReveal';

/** A tool with its logo (grey until hovered, then its brand colour). Tools without a logo get a dot. */
function Tool({ name }: { name: string }) {
  const mark = marks[name];
  return (
    <li
      style={mark ? ({ '--brand': `#${mark.hex}` } as CSSProperties) : undefined}
      className="tool inline-flex items-center gap-2 font-medium"
    >
      {mark ? (
        <svg aria-hidden="true" className="tool-icon size-4 shrink-0 fill-current">
          <use href={`/marks.svg#${mark.id}`} />
        </svg>
      ) : (
        <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center">
          <span className="size-1.5 rounded-full bg-ink-3" />
        </span>
      )}
      {name}
    </li>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="container-page py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Sticky heading, the same as Experience and About. */}
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="skills-title" data-reveal="up" className="text-h2 font-semibold">
            Skills
          </h2>
          <p data-reveal="up" style={stagger(1)} className="mt-4 max-w-xs text-ink-2">
            Everything on my résumé, grouped by the job it does in a project.
          </p>
        </div>

        <ol className="border-t border-ink lg:col-span-8">
          {skills.map((group) => (
            <li key={group.area} data-reveal="up" className="grid gap-4 border-b border-line py-7 md:grid-cols-8 md:gap-6">
              <div className="md:col-span-3">
                <h3 className="font-semibold tracking-tight">{group.area}</h3>
                <p className="mt-0.5 text-sm text-ink-3">{group.note}</p>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-3 md:col-span-5">
                {group.items.map((name) => (
                  <Tool key={name} name={name} />
                ))}
              </ul>
            </li>
          ))}
          <li data-reveal="up" className="grid gap-4 border-b border-line py-7 md:grid-cols-8 md:gap-6">
            <div className="md:col-span-3">
              <h3 className="font-semibold tracking-tight">Practices</h3>
              <p className="mt-0.5 text-sm text-ink-3">How the work gets done</p>
            </div>
            <ul className="bullets text-[0.9375rem] text-ink-2 md:col-span-5">
              {practices.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
