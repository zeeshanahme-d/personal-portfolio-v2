'use client';

import { NAV, NAV_IDS } from '@/app/data/navigation';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { twoDigits } from '@/app/lib/format';

/** The section links from md up, indexed like the hero's callouts; the current section is underlined. */
export function DesktopNav() {
  const active = useActiveSection(NAV_IDS);
  return (
    <ul className="hidden items-center gap-5 md:flex lg:gap-8">
      {NAV.map(({ id, label }, i) => (
        <li key={id}>
          <a
            href={`/#${id}`}
            aria-current={active === id ? 'location' : undefined}
            className="nav-link text-sm text-ink-2 transition-colors duration-200 hover:text-ink aria-[current]:text-ink"
          >
            <span aria-hidden="true" className="me-1.5 text-xs text-ink-3 tabular-nums max-lg:hidden">
              {twoDigits(i + 1)}
            </span>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
