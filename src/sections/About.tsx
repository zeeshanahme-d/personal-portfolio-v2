import type { ReactNode } from 'react';
import { ImageIcon } from 'lucide-react';
import { capabilities, portrait, profile } from '../content';
import { stagger } from '../hooks/useReveal';

/** One row of the right column: a label on the left, content on the right (same proportions as Experience). */
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li data-reveal="up" className="grid gap-4 border-b border-line py-9 md:grid-cols-8 md:gap-6">
      <h3 className="text-xl font-semibold tracking-tight md:col-span-3">{label}</h3>
      <div className="md:col-span-5">{children}</div>
    </li>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-page py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Sticky, like Experience and Skills: the heading and photo stay in view while the rows scroll past. */}
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="about-title" data-reveal="up" className="text-h2 font-semibold">
            About
          </h2>
          <div data-reveal="up" style={stagger(1)} className="mt-8 w-full max-w-68">
            {portrait ? (
              <img src={portrait.src} alt={portrait.alt} width={800} height={1000} className="aspect-4/5 w-full rounded-xl" />
            ) : (
              <div className="placeholder aspect-4/5 rounded-xl ring-1 ring-line">
                <ImageIcon aria-hidden="true" className="size-5" />
                Photo
              </div>
            )}
          </div>
          <p data-reveal="up" style={stagger(2)} className="mt-6 font-medium">
            <a href={`mailto:${profile.email}`} className="link">
              Say hello
            </a>
          </p>
        </div>

        <div className="lg:col-span-8">
          <p data-reveal="up" className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.4] font-medium tracking-[-0.02em]">
            I&apos;m Zeeshan, a frontend developer in Islamabad. I trained as a full-stack web developer at Saylani in
            Karachi, joined XtecSoft in 2024 to work on ioMoVo, then shipped 7+ production apps at IR Solutions, most of
            them as the only frontend developer on the team.
          </p>

          <ol className="mt-14 border-t border-ink">
            <Row label="How I work">
              <p className="leading-relaxed text-ink-2">
                I like the hard, unglamorous parts of product work: permissions, data-heavy screens and layouts that have
                to work right to left. I usually own the whole front end, from structure and state to API integration,
                code review and deployment, and I work closely with designers and backend engineers along the way.
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

            <Row label="Working with AI">
              <p className="leading-relaxed text-ink-2">
                Claude Code, Cursor, ChatGPT and GitHub Copilot are part of my daily setup for debugging, refactoring and
                writing tests. They make me faster; the architecture decisions and the final review stay with me.
              </p>
            </Row>
          </ol>
        </div>
      </div>
    </section>
  );
}
