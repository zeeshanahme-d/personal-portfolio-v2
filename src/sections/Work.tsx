import { useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, ImageIcon, Lock } from 'lucide-react';
import { builds, cases, type CaseStudy } from '../content';
import { ExternalLink } from '../components/ExternalLink';
import { Screenshot } from '../components/Screenshot';
import { stagger } from '../hooks/useReveal';

/**
 * A browser window around the project's screenshots. One screenshot is a still; several become a
 * carousel: back/forward buttons in the frame bar, the address follows the page, and the track is a
 * native scroll-snap strip, so swipe, trackpad and arrow keys all work without extra code.
 */
function Frame({ project, sizes }: { project: CaseStudy; sizes: string }) {
  const shots = project.images ?? [];
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const many = shots.length > 1;

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
  };
  const onScroll = () => {
    const el = track.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div data-reveal="frame" className="frame">
      <div className="frame-bar">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        {many && (
          <span className="ml-2 flex">
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous screen" className="frame-nav">
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>
            <button type="button" onClick={() => go(index + 1)} disabled={index === shots.length - 1} aria-label="Next screen" className="frame-nav">
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </span>
        )}
        <span aria-hidden="true" className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 font-mono text-[0.6875rem] text-snow-3">
          {/* Private apps have no public domain: a lock and the page path stand in for it. */}
          {!project.url && <Lock className="size-3 shrink-0" />}
          <span className="truncate">
            {project.url}
            {(!project.url || shots[index]?.path !== '/') && shots[index]?.path}
          </span>
        </span>
        {many && (
          <span aria-live="polite" className="shrink-0 text-[0.6875rem] tabular-nums text-snow-3">
            {index + 1} / {shots.length}
          </span>
        )}
      </div>

      {shots.length === 0 ? (
        // White slot until the real screenshots are set in content.ts (16:10, e.g. 1600 × 1000).
        <div className="placeholder aspect-16/10">
          <ImageIcon aria-hidden="true" className="size-5" />
          {project.name} screenshot
        </div>
      ) : many ? (
        <div
          ref={track}
          onScroll={onScroll}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${project.name} screens`}
          className="frame-track"
        >
          {shots.map((shot, i) => (
            <div key={shot.src} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${shots.length}`} className="frame-slide">
              <Screenshot image={shot} sizes={sizes} />
            </div>
          ))}
        </div>
      ) : (
        <Screenshot image={shots[0]} sizes={sizes} />
      )}
    </div>
  );
}

/** One large project: screenshot on one side, the story on the other. `flip` swaps the sides. */
function Case({ project, flip = false }: { project: CaseStudy; flip?: boolean }) {
  return (
    // grid-cols-1 = minmax(0, 1fr): a long address in the frame bar truncates instead of widening the page.
    <article className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Not a link any more: the frame can hold carousel buttons, and the live link sits in the text. */}
      <div className={`relative lg:col-span-8 ${flip ? 'lg:order-2' : ''}`}>
        <Frame project={project} sizes="(min-width: 64rem) 46rem, 92vw" />
        {project.phone && (
          <img
            data-reveal="up"
            style={stagger(3)}
            src={project.phone.src}
            width={project.phone.width}
            height={project.phone.height}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute -bottom-10 -left-8 hidden w-[24%] rounded-[1.25rem] border-[5px] border-night-2 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] ring-1 ring-white/10 md:block"
          />
        )}
      </div>

      <div className={`lg:col-span-4 ${flip ? 'lg:order-1' : ''}`}>
        <p data-reveal="up" className="text-sm text-snow-3">
          {project.context}
        </p>
        <h3 data-reveal="up" style={stagger(1)} className="mt-2 text-h3 font-semibold">
          {project.name}
        </h3>
        <p data-reveal="up" style={stagger(2)} className="mt-4 leading-relaxed text-snow-2">
          {project.summary}
        </p>
        <div data-reveal="up" style={stagger(3)} className="mt-6 border-t border-night-line pt-5">
          <p className="text-sm font-medium text-accent-bright">{project.role}</p>
          <ul className="bullets mt-3 text-[0.9375rem] leading-relaxed text-snow-2">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-snow-3">{project.stack.join(', ')}</p>
          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] font-medium">
              {project.links.map((l) => (
                <ExternalLink key={l.href} href={l.href}>
                  {l.label}
                </ExternalLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/** Smaller builds: screenshot tiles, three across. */
function Builds() {
  return (
    <div>
      <h3 data-reveal="up" className="text-xl font-semibold tracking-tight">
        Smaller builds
      </h3>
      <ul className="mt-8 grid gap-x-6 gap-y-12 md:grid-cols-3">
        {builds.map((b, i) => (
          <li key={b.name} data-reveal="up" style={stagger(i)} className="group relative">
            <div className="tile overflow-hidden rounded-xl ring-1 ring-white/10">
              <Screenshot image={b.image} sizes="(min-width: 48rem) 24rem, 92vw" className="aspect-16/10 w-full object-cover object-top" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold">
                  {/* Stretched link: the whole tile opens the live site. */}
                  <a href={b.href} target="_blank" rel="noopener noreferrer" className="link after:absolute after:inset-0">
                    {b.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </h4>
                <p className="text-sm text-snow-3">{b.kind}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="arrow mt-0.5 size-4 shrink-0 text-snow-3" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-snow-2">{b.summary}</p>
            {b.source && (
              <ExternalLink href={b.source} className="relative z-10 mt-3 text-sm font-medium text-snow-2">
                Source on GitHub
              </ExternalLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="dark bg-night text-snow">
      <div className="container-page py-24 md:py-32">
        <header className="flex flex-col gap-3 border-b border-night-line pb-8 md:flex-row md:items-end md:justify-between">
          <h2 id="work-title" data-reveal="up" className="text-h2 font-semibold">
            Selected work
          </h2>
          <p data-reveal="up" style={stagger(1)} className="max-w-md text-snow-2">
            Products I&apos;ve built for real users, from enterprise asset management to pilgrim taxi bookings.
          </p>
        </header>

        <div className="mt-16 space-y-28 md:mt-20 md:space-y-36">
          {cases.map((project, i) => (
            <Case key={project.name} project={project} flip={i % 2 === 1} />
          ))}
          <Builds />
        </div>
      </div>
    </section>
  );
}
