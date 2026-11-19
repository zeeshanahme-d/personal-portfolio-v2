'use client';

import type { ReactNode } from 'react';
import { useActiveSection } from '@/app/hooks/useActiveSection';

type Props = { ids: string[]; tabs: { name: string; kind: string }[]; panels: ReactNode[] };

/**
 * Work as a story: the projects one after another, and from lg a list beside them that stays in view and marks
 * the project being read, so scrolling to the end of one moves the mark to the next. The list links jump to a
 * project. The panels are rendered on the server and passed in.
 */
export function ProjectStory({ ids, tabs, panels }: Props) {
  const active = useActiveSection(ids) ?? ids[0];
  return (
    <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-12">
      <nav aria-label="Projects" className="sticky top-24 col-span-3 self-start max-lg:hidden">
        <ul>
          {tabs.map((tab, i) => (
            <li key={ids[i]}>
              <a href={`#${ids[i]}`} aria-current={active === ids[i] ? 'true' : undefined} className="project-tab">
                <span className="block font-display text-xl font-semibold">{tab.name}</span>
                <span className="block text-sm">{tab.kind}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="min-w-0 lg:col-span-9">
        {panels.map((panel, i) => (
          <div key={ids[i]} id={ids[i]} className="scroll-mt-24 mt-24 border-t border-night-line pt-10 first:mt-0 first:border-t-0 first:pt-0">
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
