import { ArrowUpRight } from 'lucide-react';
import { ExternalLink } from '@/app/components/ui/ExternalLink';
import { Screenshot } from '@/app/components/ui/Screenshot';
import type { Build } from '@/app/data/content';

/** One smaller build. The whole figure opens the live site. */
export function BuildFigure({ build }: { build: Build }) {
  return (
    <li className="group relative">
      <div className="tile overflow-hidden rounded-lg border border-night-line">
        <Screenshot image={build.image} sizes="(min-width: 48rem) 24rem, 92vw" className="aspect-16/10 w-full object-cover object-top" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold">
            {/* Stretched link: the whole figure opens the live site. */}
            <a href={build.href} target="_blank" rel="noopener noreferrer" className="link after:absolute after:inset-0">
              {build.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </h4>
          <p className="text-sm text-snow-3">{build.kind}</p>
        </div>
        <ArrowUpRight aria-hidden="true" className="arrow mt-0.5 size-4 shrink-0 text-snow-3" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-snow-2">{build.summary}</p>
      {build.source && (
        <ExternalLink href={build.source} className="relative z-10 mt-3 text-sm font-medium text-snow-2">
          Source on GitHub
        </ExternalLink>
      )}
    </li>
  );
}
