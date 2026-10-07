import { ArrowUpRight } from 'lucide-react';
import { ExternalLink } from '@/app/components/ui/ExternalLink';
import { Screenshot } from '@/app/components/ui/Screenshot';
import type { Build } from '@/app/data/content';
import { label } from '@/app/lib/styles';

/** One smaller build as an appendix figure (Fig. A, B, C…). The whole figure opens the live site. */
export function BuildFigure({ build, index }: { build: Build; index: number }) {
  return (
    <li className="group relative">
      <p className={label}>Fig. {String.fromCharCode(65 + index)}</p>
      {/* A hairline frame, square corners, like a plate in a drawing set. */}
      <div className="tile mt-3 overflow-hidden border border-night-line">
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
