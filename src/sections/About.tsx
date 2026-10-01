import { ImageIcon } from 'lucide-react';
import { capabilities, portrait } from '../content';
import { label } from '../styles';

/**
 * The author's sheet, closing the drawing set: the portrait as a figure plate with crop marks, the intro as the
 * statement, two notes on how I work, then the four strengths as the set's specification clauses.
 */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-page py-20 md:py-28">
      <div className="border-t border-line pt-8">
        <p className={label}>
          <span className="tabular-nums">04</span> / About
        </p>
        <h2 id="about-title" className="mt-5 text-4xl font-semibold">
          About
        </h2>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-12 md:mt-20 lg:grid-cols-12">
        <figure className="w-full max-w-80 lg:col-span-4 xl:col-span-3">
          <div className="plate">
            {portrait ? (
              <img
                src={portrait.src}
                alt={portrait.alt}
                width={800}
                height={993}
                loading="lazy"
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
            ) : (
              <div className="placeholder aspect-4/5">
                <ImageIcon aria-hidden="true" className="size-5" />
                Photo
              </div>
            )}
          </div>
          <figcaption className={`${label} mt-3`}>Fig. 04.1 / Zeeshan Ahmed, Islamabad</figcaption>
        </figure>

        <div className="lg:col-span-8 xl:col-span-8 xl:col-start-5">
          <p className="max-w-[36ch] font-display text-2xl font-medium">
            I’m Zeeshan Ahmed, a frontend developer in Islamabad. I trained as a full-stack web developer at Saylani in
            Karachi, joined XtecSoft in 2024 to work on ioMoVo, then shipped 7+ production apps at IR Solutions, most of
            them as the only frontend developer on the team.
          </p>

          <div className="mt-12 grid gap-x-10 border-t border-line md:grid-cols-2">
            <div className="border-b border-line py-6 md:border-b-0">
              <h3 className={label}>How I work</h3>
              <p className="mt-3 text-ink-2">
                I like the hard, unglamorous parts of product work: permissions, data-heavy screens and layouts that have
                to work right to left. I usually own the whole front end, from structure and state to API integration,
                code review and deployment, working closely with designers and backend engineers.
              </p>
            </div>
            <div className="py-6">
              <h3 className={label}>Working with AI</h3>
              <p className="mt-3 text-ink-2">
                Claude Code, Cursor, ChatGPT and GitHub Copilot are part of my daily setup for debugging, refactoring and
                writing tests. They make me faster; the architecture decisions and the final review stay with me.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className={`${label} mt-20 md:mt-24`}>Specification</h3>
      <ol className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <li key={c.title} className="border-t border-body pt-5 pb-7">
            <span className={`${label} tabular-nums`}>Spec {String(i + 1).padStart(2, '0')}</span>
            <p className="mt-4 font-semibold">{c.title}</p>
            <p className="mt-1.5 text-sm text-ink-2">{c.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
