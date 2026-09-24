import { ArrowUpRight } from 'lucide-react';
import { builds, ioPortal, products, saudiTaxi, workAnchor, type CaseStudy } from '../content';
import { ExternalLink } from '../components/ExternalLink';
import { Screenshot } from '../components/Screenshot';
import { stagger } from '../hooks/useReveal';

const hostname = (href: string) => new URL(href).hostname.replace(/^www\./, '');

/** A browser window around a screenshot, showing the product's real address. */
function Frame({ project, sizes }: { project: CaseStudy; sizes: string }) {
  return (
    <div data-reveal="frame" className="frame">
      <div className="frame-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="ml-3 truncate font-mono text-[0.6875rem] text-snow-3">{project.url}</span>
      </div>
      <Screenshot image={project.image} sizes={sizes} />
    </div>
  );
}

/** One large project: screenshot on one side, the story on the other. `flip` swaps the sides. */
function Case({ project, flip = false }: { project: CaseStudy; flip?: boolean }) {
  const primary = project.links[0];
  return (
    <article id={workAnchor(project.name)} className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <a
        href={primary.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={`relative block lg:col-span-8 ${flip ? 'lg:order-2' : ''}`}
      >
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
      </a>

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
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] font-medium">
            {project.links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/** The IR Solutions apps are private dashboards, so they get a text composition instead of screenshots. */
function Products() {
  return (
    <div>
      <div data-reveal="up" className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-xl font-semibold tracking-tight">Production apps at IR Solutions</h3>
        <p className="text-snow-3">Private dashboards, built as the only front-end developer.</p>
      </div>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-xl bg-night-line md:grid-cols-3">
        {products.map((p, i) => (
          <li key={p.name} id={workAnchor(p.name)} data-reveal="up" style={stagger(i)} className="flex flex-col bg-night p-6 md:p-7">
            <p className="text-sm text-snow-3">{p.kind}</p>
            <h4 className="mt-1.5 text-xl font-semibold tracking-tight">{p.name}</h4>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-snow-2">{p.summary}</p>
            <ul className="bullets mt-4 text-sm leading-relaxed text-snow-2">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-sm text-snow-3">{p.stack.join(', ')}</p>
            <ExternalLink href={p.href} className="mt-3 self-start text-sm font-medium">
              {hostname(p.href)}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
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
              <Screenshot image={b.image} sizes="(min-width: 48rem) 24rem, 92vw" className="aspect-[16/10] w-full object-cover object-top" />
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
          <Case project={ioPortal} />
          <Products />
          <Case project={saudiTaxi} flip />
          <Builds />
        </div>
      </div>
    </section>
  );
}
