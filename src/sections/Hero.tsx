import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { heroIndex, profile, workAnchor } from '../content';
import { delay } from '../hooks/useReveal';

/** The right side of the hero: what I've shipped, as an index that jumps straight to each project. */
function WorkIndex() {
  return (
    <nav aria-label="Selected work" className="w-full">
      <div className="enter flex items-baseline justify-between border-b border-ink pb-3" style={delay(260)}>
        <p className="text-sm font-medium">Selected work</p>
        <p className="text-sm text-ink-3">2024 – now</p>
      </div>
      <ol>
        {heroIndex.map((item, i) => (
          <li key={item.name} className="enter" style={delay(340 + i * 70)}>
            <a
              href={`#${workAnchor(item.name)}`}
              className="index-row group grid grid-cols-[1.75rem_1fr_auto] items-baseline gap-x-3 border-b border-line py-4"
            >
              <span className="text-sm tabular-nums text-ink-3">{String(i + 1).padStart(2, '0')}</span>
              <span className="min-w-0">
                <span className="index-name block text-lg font-semibold tracking-tight">{item.name}</span>
                <span className="block text-sm text-ink-2">{item.kind}</span>
              </span>
              <span className="flex items-center gap-2 text-sm text-ink-3">
                <span className="max-sm:hidden">{item.org}</span>
                <ArrowRight aria-hidden="true" className="index-arrow size-4" />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="container-page pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="enter flex items-center gap-2 text-sm font-medium text-ink-2" style={delay(0)}>
            {profile.name}
            <span aria-hidden="true" className="text-ink-3">
              /
            </span>
            Front-end developer, Islamabad
          </p>
          <h1 className="enter mt-5 max-w-[16ch] text-hero font-semibold" style={delay(80)}>
            I build complex interfaces for real web products.
          </h1>
          <p className="enter mt-6 max-w-[34rem] text-lede text-ink-2" style={delay(160)}>
            Dashboards, admin systems and product UI in React, Next.js and TypeScript. Two and a half years of
            production work, most of it as the only front-end developer on the team.
          </p>
          <div className="enter mt-8 flex flex-wrap items-center gap-3" style={delay(240)}>
            <a href="#work" className="btn btn-solid">
              View selected work
              <ArrowDown aria-hidden="true" className="btn-icon btn-icon-down size-4" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              Résumé
              <ArrowUpRight aria-hidden="true" className="arrow size-4" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
          </div>
          <p className="enter mt-6 flex items-center gap-2 text-sm text-ink-2" style={delay(320)}>
            <span className="live-dot" aria-hidden="true" />
            Open to new front-end roles
          </p>
        </div>

        <div className="lg:col-span-5">
          <WorkIndex />
        </div>
      </div>
    </section>
  );
}
