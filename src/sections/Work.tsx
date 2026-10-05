import { useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { builds, cases, showScreenshots, type CaseStudy } from '../content';
import { ExternalLink } from '../components/ExternalLink';
import { Screenshot } from '../components/Screenshot';
import { Fact, Notes } from '../components/Drawing';
import { StampySchematic } from '../components/StampySchematic';
import { Tool } from '../components/Tool';
import { label, wideCaps } from '../styles';

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
    if (!el || i < 0 || i >= shots.length) return;
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
            <button type="button" onClick={() => go(index - 1)} aria-disabled={index === 0} aria-label="Previous screen" className="frame-nav">
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-disabled={index === shots.length - 1} aria-label="Next screen" className="frame-nav">
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </span>
        )}
        <span aria-hidden="true" className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 font-mono text-xs text-snow-3">
          {/* Private apps have no public domain: a lock and the page path stand in for it. */}
          {!project.url && <Lock className="size-3 shrink-0" />}
          <span className="truncate">
            {project.url}
            {(!project.url || shots[index]?.path !== '/') && shots[index]?.path}
          </span>
        </span>
        {many && (
          <span aria-live="polite" className="shrink-0 text-xs tabular-nums text-snow-3">
            {index + 1} / {shots.length}
          </span>
        )}
      </div>

      {many ? (
        <div
          ref={track}
          onScroll={onScroll}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${project.name} screens`}
          className="frame-track"
        >
          {shots.map((s, i) => (
            <div key={s.src} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${shots.length}`} className="frame-slide">
              <Screenshot image={s} sizes={sizes} />
            </div>
          ))}
        </div>
      ) : (
        <Screenshot image={shots[0]} sizes={sizes} />
      )}
    </div>
  );
}

/** Notes shown on each sheet before the rest fold away, so the section stays skimmable. One left over isn't worth
 * a click, so a sheet folds only when two or more remain. */
const SHOWN = 3;

/** Drawing-sheet numbers: W-01, W-02… */
const sheet = (i: number) => `W-${String(i + 1).padStart(2, '0')}`;

// A sheet, ruled above; the last one ends on the section's padding rather than its own.
const sheetBox = 'border-t border-rule pt-5 pb-24 last:pb-0';

// The rule along a sheet's top: number, kind, client.
const sheetRule = 'flex flex-wrap justify-between gap-x-6 gap-y-1 text-(length:--text-xs) tracking-[0.08em] text-label uppercase';

// An index row, and its leader: the dotted leader of a printed index, as a rule that turns marigold on hover.
const indexRow =
  'group flex items-baseline gap-3.5 border-t border-night-line py-3 transition-transform duration-(--dur-base) ease-out hover:translate-x-[3px]';
const leader = 'h-px min-w-6 flex-1 self-center bg-night-line transition-colors duration-(--dur-base) group-hover:bg-accent-bright';

/**
 * One project as a drawing sheet: sheet number, kind and client on a rule; the name across the full width,
 * in outline until it scrolls into view and then filled (the hero's hidden lines, brought into focus); the
 * summary and numbered notes on the left, and a title block of facts on the right.
 */
function Case({ project, i }: { project: CaseStudy; i: number }) {
  const screens = showScreenshots && project.images?.length;
  const id = `w-${i + 1}`;
  const folds = project.points.length > SHOWN + 1;
  return (
    <article id={id} aria-labelledby={`${id}-name`} className={sheetBox}>
      <p className={sheetRule}>
        <span className="tabular-nums">{sheet(i)}</span>
        <span>{project.kind}</span>
        <span>{project.context}</span>
      </p>
      {/* Wide caps. fit-content, so the fill (index.css) sweeps the words, not the empty width after them; the end
          padding keeps it over the last letter, which the tight tracking pulls past the box. */}
      <h3 id={`${id}-name`} className={`sheet-name ${wideCaps} mt-7 w-fit pe-[0.06em] text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] text-snow`}>
        {project.name}
      </h3>

      {/* From lg: the visual on the left two-thirds, the summary and title block beside it, the notes under the
          visual. Placed explicitly, so a sheet without a visual still lines up. */}
      <div className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-12">
        {screens ? (
          // Whole screenshots, never cropped: on a short window the frame narrows instead, so it fits on screen with
          // the header, rule and name above it (about 19rem; the captures are 16:10). Extra room under a phone
          // capture, which hangs below the frame.
          <div className={`relative lg:col-span-8 lg:row-start-1 lg:max-w-[calc((100svh-19rem)*1.6)] ${project.phone ? 'md:mb-10' : ''}`}>
            <Frame project={project} sizes="(min-width: 64rem) 50rem, 92vw" />
            {project.phone && (
              <img
                src={project.phone.src}
                width={project.phone.width}
                height={project.phone.height}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute right-6 -bottom-12 hidden w-[15%] rounded-[1.25rem] border-[5px] border-night-2 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] ring-1 ring-white/10 md:block lg:right-10"
              />
            )}
          </div>
        ) : (
          // No screenshots for a private app: a drawn schematic where there is one.
          project.name === 'Stampy' && (
            <div className="lg:col-span-8 lg:row-start-1">
              <StampySchematic />
            </div>
          )
        )}

        <div className="lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1">
          <p className="text-lg text-snow">{project.summary}</p>
          {/* The title block. */}
          <dl className="mt-8">
            <Fact term="Role">{project.role}</Fact>
            <Fact term="Stack">
              <ul aria-label="Built with" className="flex flex-wrap gap-x-4 gap-y-2 text-snow-2">
                {project.stack.map((name) => (
                  <Tool key={name} name={name} />
                ))}
              </ul>
            </Fact>
            <Fact term="Link">
              {project.links.length > 0 ? (
                <span className="flex flex-col gap-1">
                  {project.links.map((l) => (
                    <ExternalLink key={l.href} href={l.href} className="font-medium">
                      {l.label}
                    </ExternalLink>
                  ))}
                </span>
              ) : (
                <span className="text-snow-3">Private app, no public link</span>
              )}
            </Fact>
          </dl>
        </div>

        <div className="lg:col-span-8 lg:col-start-1">
          <h4 className={label}>Notes</h4>
          <Notes items={folds ? project.points.slice(0, SHOWN) : project.points} className="mt-3" />
          {folds && (
            // The rest behind a native toggle, labelled like a drawing reference so it reads right open or closed.
            <details className="group">
              <summary className={`${label} flex cursor-pointer list-none items-center gap-2.5 py-3 transition-colors hover:text-body [&::-webkit-details-marker]:hidden`}>
                <span aria-hidden="true" className="text-base leading-none transition-transform duration-(--dur-base) group-open:rotate-45">
                  +
                </span>
                Notes {SHOWN + 1}–{project.points.length}
              </summary>
              <Notes items={project.points.slice(SHOWN)} start={SHOWN} />
            </details>
          )}
        </div>
      </div>
    </article>
  );
}

/** Smaller builds, as the set's appendix: figures A, B, C. */
function Builds() {
  return (
    <section id="builds" aria-labelledby="builds-title" className={sheetBox}>
      <p className={sheetRule}>
        <span>Appendix</span>
        <span>
          {builds.length} figures
        </span>
      </p>
      <h3 id="builds-title" className="mt-6 text-3xl font-semibold">
        Smaller builds
      </h3>
      <ul className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-3">
        {builds.map((b, i) => (
          <li key={b.name} className="group relative">
            <p className={label}>Fig. {String.fromCharCode(65 + i)}</p>
            {/* A hairline frame, square corners, like a plate in a drawing set. */}
            <div className="tile mt-3 overflow-hidden border border-night-line">
              <Screenshot image={b.image} sizes="(min-width: 48rem) 24rem, 92vw" className="aspect-16/10 w-full object-cover object-top" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold">
                  {/* Stretched link: the whole figure opens the live site. */}
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
    </section>
  );
}

/**
 * Work as a drawing set: an index of sheets first (each row jumps to its project), then one sheet per
 * project, then the appendix. Pine, like the hero's foreground it continues.
 */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="dark bg-night text-snow">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-x-10 gap-y-12 border-t border-night-line pt-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className={label}>
              <span className="tabular-nums">01</span> / Work
            </p>
            <h2 id="work-title" className="mt-5 max-w-[20ch] text-3xl font-semibold">
              Products used by real businesses.
            </h2>
            <p className="mt-5 max-w-md text-snow-2">
              From enterprise asset management to pilgrim taxi bookings. On most of them, I was the only frontend developer.
            </p>
          </div>

          <nav aria-label="Projects" className="lg:col-span-5 lg:col-start-8">
            <p className={label}>Index</p>
            <ol className="mt-4 border-b border-night-line">
              {cases.map((c, i) => (
                <li key={c.name}>
                  <a href={`#w-${i + 1}`} className={indexRow}>
                    <span className="tabular-nums text-snow-3">{sheet(i)}</span>
                    <span className="font-medium">{c.name}</span>
                    <span className={leader} aria-hidden="true" />
                    <span className="text-sm text-snow-3 max-sm:hidden">{c.kind}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#builds" className={indexRow}>
                  <span className="text-snow-3">A–C</span>
                  <span className="font-medium">Smaller builds</span>
                  <span className={leader} aria-hidden="true" />
                  <span className="text-sm text-snow-3 tabular-nums">{builds.length}</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <div className="mt-20 md:mt-28">
          {cases.map((project, i) => (
            <Case key={project.name} project={project} i={i} />
          ))}
          <Builds />
        </div>
      </div>
    </section>
  );
}
