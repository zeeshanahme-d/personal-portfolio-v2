import type { CSSProperties, ReactNode } from 'react';
import { alsoUsed, capabilities, profile, stack } from '../content';
import { marks } from '../marks';
import { stagger } from '../hooks/useReveal';

/** One row of the right column: a label on the left, content on the right (same proportions as Experience). */
function Row({ label, note, children }: { label: string; note?: string; children: ReactNode }) {
  return (
    <li data-reveal="up" className="grid gap-4 border-b border-line py-9 md:grid-cols-8 md:gap-6">
      <div className="md:col-span-3">
        <h3 className="text-xl font-semibold tracking-tight">{label}</h3>
        {note && <p className="mt-1 text-sm text-ink-3">{note}</p>}
      </div>
      <div className="md:col-span-5">{children}</div>
    </li>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-page py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Sticky heading, exactly like Experience: it stays in view while the rows scroll past. */}
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="about-title" data-reveal="up" className="text-h2 font-semibold">
            About
          </h2>
          <p data-reveal="up" style={stagger(1)} className="mt-4 max-w-xs text-ink-2">
            How I work, what I&apos;m good at, and the tools I use every day.
          </p>
          <p data-reveal="up" style={stagger(2)} className="mt-6 font-medium">
            <a href={`mailto:${profile.email}`} className="link">
              Say hello
            </a>
          </p>
        </div>

        <ol className="border-t border-ink lg:col-span-8">
          <Row label="How I work" note="Small teams, whole front end">
            <p className="text-[1.3125rem] leading-[1.45] font-medium tracking-[-0.015em]">
              I enjoy the hard parts of product work:{' '}
              <span className="text-ink-3">permissions, data-heavy screens and flows that have to work in two languages.</span>{' '}
              I usually own the whole front end,{' '}
              <span className="text-ink-3">from structure and state to API integration and deployment.</span>
            </p>
          </Row>

          <Row label="Strengths">
            <ul className="space-y-6">
              {capabilities.map((c) => (
                <li key={c.title}>
                  <p className="font-semibold">{c.title}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-2">{c.body}</p>
                </li>
              ))}
            </ul>
          </Row>

          <Row label="Stack" note="What I reach for every day">
            <dl className="space-y-6">
              {stack.map(({ area, items }) => (
                <div key={area}>
                  <dt className="text-sm text-ink-3">{area}</dt>
                  <dd className="mt-2.5">
                    <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                      {items.map((name) => {
                        const icon = marks[name];
                        return (
                          <li
                            key={name}
                            style={{ '--brand': `#${icon.hex}` } as CSSProperties}
                            className="tool inline-flex items-center gap-2 font-medium"
                          >
                            <svg aria-hidden="true" className="tool-icon size-4 shrink-0 fill-current">
                              <use href={`/marks.svg#${icon.id}`} />
                            </svg>
                            {name}
                          </li>
                        );
                      })}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 text-sm text-ink-3">Also: {alsoUsed.join(', ')}.</p>
          </Row>
        </ol>
      </div>
    </section>
  );
}
