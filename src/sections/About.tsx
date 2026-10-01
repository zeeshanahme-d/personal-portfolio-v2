import { ImageIcon } from 'lucide-react';
import { capabilities, portrait } from '../content';
import { stagger } from '../hooks/useReveal';

/**
 * About breaks the sticky-heading rhythm of Experience and Skills on purpose: photo and intro side by side,
 * two short notes on how I work, then the four strengths as one band across the full width.
 */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-page py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 xl:col-span-3">
          <h2 id="about-title" data-reveal="up" className="text-3xl font-semibold">
            About
          </h2>
          <div data-reveal="up" style={stagger(1)} className="mt-8 w-full max-w-68">
            {portrait ? (
              <img src={portrait.src} alt={portrait.alt} width={800} height={1000} className="aspect-4/5 w-full rounded-xl object-contain" />
            ) : (
              <div className="placeholder aspect-4/5 rounded-xl ring-1 ring-line">
                <ImageIcon aria-hidden="true" className="size-5" />
                Photo
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-8 lg:pt-2 xl:col-span-9">
          <p data-reveal="up" className="max-w-[40ch] text-2xl font-medium">
            I&apos;m Zeeshan Ahmed, a frontend developer in Islamabad. I trained as a full-stack web developer at Saylani in
            Karachi, joined XtecSoft in 2024 to work on ioMoVo, then shipped 7+ production apps at IR Solutions, most of
            them as the only frontend developer on the team.
          </p>

          <div className="mt-10 grid gap-8 border-t border-ink pt-8 md:grid-cols-2 md:gap-10">
            <div data-reveal="up">
              <h3 className="font-semibold">How I work</h3>
              <p className="mt-2 text-ink-2">
                I like the hard, unglamorous parts of product work: permissions, data-heavy screens and layouts that have
                to work right to left. I usually own the whole front end, from structure and state to API integration,
                code review and deployment, working closely with designers and backend engineers.
              </p>
            </div>
            <div data-reveal="up" style={stagger(1)}>
              <h3 className="font-semibold">Working with AI</h3>
              <p className="mt-2 text-ink-2">
                Claude Code, Cursor, ChatGPT and GitHub Copilot are part of my daily setup for debugging, refactoring and
                writing tests. They make me faster; the architecture decisions and the final review stay with me.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The strengths, as one band under everything. */}
      <h3 className="sr-only">Strengths</h3>
      <ul className="mt-14 grid gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <li key={c.title} data-reveal="up" style={stagger(i)}>
            <p className="font-semibold">{c.title}</p>
            <p className="mt-1.5 text-sm text-ink-2">{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
