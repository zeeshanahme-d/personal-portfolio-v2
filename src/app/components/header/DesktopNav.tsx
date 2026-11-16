'use client';

import { NAV, NAV_IDS } from '@/app/data/navigation';
import { useActiveSection } from '@/app/hooks/useActiveSection';

/** The section links from md up; the current section is underlined. */
export function DesktopNav() {
  const active = useActiveSection(NAV_IDS);
  return (
    <ul className="hidden items-center gap-5 md:flex lg:gap-8">
      {NAV.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`/#${id}`}
            aria-current={active === id ? 'location' : undefined}
            className="nav-link text-sm text-ink-2 transition-colors duration-200 hover:text-ink aria-[current]:text-ink"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
