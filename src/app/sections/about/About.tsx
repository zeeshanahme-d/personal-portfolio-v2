import { label } from '@/app/lib/styles';
import { Portrait } from './Portrait';
import { Specification } from './Specification';

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
        <h2 id="about-title" className="mt-5 max-w-[24ch] text-3xl font-semibold">
          Trained in Karachi, shipping from Islamabad.
        </h2>
      </div>

      <div className="mt-14 grid gap-x-10 gap-y-12 md:mt-20 lg:grid-cols-12">
        <Portrait />

        <div className="lg:col-span-8 xl:col-span-8 xl:col-start-5">
          <p className="max-w-[36ch] font-display text-2xl font-medium">
            I’m Zeeshan Ahmed, a full-stack developer in Islamabad, trained at Saylani in Karachi. I joined XtecSoft in
            2024 to work on ioMoVo, then shipped 7+ production apps at IR Solutions, most of them as the only frontend
            developer. I built Eyecatch AI alone, from the React app to the Node.js API.
          </p>

          <div className="mt-12 grid gap-x-10 border-t border-line md:grid-cols-2">
            <div className="border-b border-line py-6 md:border-b-0">
              <h3 className={label}>How I work</h3>
              <p className="mt-3 text-ink-2">
                I like the hard, unglamorous parts of product work: permissions, data-heavy screens and layouts that have
                to work right to left. I usually own the whole front end, from structure and state to API integration,
                code review and deployment, working closely with designers and backend engineers. On my own products I
                build the backend too, with Node.js, Express and MongoDB.
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

      <Specification />
    </section>
  );
}
