import { profile } from '@/app/data/content';
import { NAV } from '@/app/data/navigation';
import { stagger } from '@/app/lib/motion';

type Props = { open: boolean; active: string | null; onNavigate: () => void };

/** The phone menu under the header bar. Closed, it stays in the DOM for the fade but drops out of the tab order. */
export function MobileMenu({ open, active, onNavigate }: Props) {
  return (
    <div
      id="mobile-menu"
      data-open={open ? '' : undefined}
      className="menu-panel absolute inset-x-0 top-full border-b border-line bg-paper shadow-[0_20px_40px_-24px_rgb(0_0_0/0.25)] md:hidden"
    >
      <ul className="container-page py-2">
        {NAV.map(({ id, label }, i) => (
          <li key={id} className="border-b border-line last:border-0">
            <a
              href={`/#${id}`}
              tabIndex={open ? undefined : -1}
              onClick={onNavigate}
              style={stagger(i)}
              aria-current={active === id ? 'location' : undefined}
              className="flex items-center justify-between py-4 text-lg font-medium aria-[current]:text-accent"
            >
              {label}
              {active === id && <span className="live-dot" aria-hidden="true" />}
            </a>
          </li>
        ))}
        <li className="py-4">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? undefined : -1}
            style={stagger(NAV.length)}
            className="btn btn-solid w-full"
          >
            Resume (PDF)
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
