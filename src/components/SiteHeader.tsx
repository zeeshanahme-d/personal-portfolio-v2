import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../content';
import { useActiveSection } from '../hooks/useActiveSection';
import { stagger } from '../hooks/useReveal';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

const IDS = NAV.map((item) => item.id);

export function SiteHeader() {
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // While the mobile menu is open: Escape closes it (focus back on the toggle), and so does widening past md.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const wide = window.matchMedia('(min-width: 48rem)');
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    // Background and border come from CSS (.site-header), driven by scroll position rather than state.
    <header className="site-header sticky top-0 z-30">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
        {/* Brand: a Z monogram with an emerald cursor block (the site's "live" colour), then the full name. */}
        <a href="#top" onClick={close} aria-label={`${profile.name}, back to top`} className="flex items-center gap-2.5">
          <svg viewBox="0 0 28 28" aria-hidden="true" className="size-7 shrink-0">
            <rect width="28" height="28" rx="7" className="fill-ink" />
            <path
              d="M8.5 8.5h10.5L8.5 19.5h8"
              fill="none"
              stroke="#f7f7f5"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="18.2" y="17.3" width="3.4" height="4.4" rx="0.8" className="brand-cursor fill-accent-bright" />
          </svg>
          <span className="text-[0.9375rem] font-semibold tracking-[-0.015em]">{profile.name}</span>
        </a>

        <div className="flex items-center gap-9">
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className="nav-link text-[0.9375rem] text-ink-2 transition-colors duration-200 hover:text-ink aria-[current]:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-line h-9 gap-1.5 px-4 text-sm max-md:hidden"
          >
            Résumé
            <ArrowUpRight aria-hidden="true" className="arrow size-3.5" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 grid size-11 place-items-center rounded-lg md:hidden"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        data-open={open ? '' : undefined}
        className="menu-panel absolute inset-x-0 top-full border-b border-line bg-paper shadow-[0_20px_40px_-24px_rgb(0_0_0/0.25)] md:hidden"
      >
        <ul className="container-page py-2">
          {NAV.map(({ id, label }, i) => (
            <li key={id} className="border-b border-line last:border-0">
              <a
                href={`#${id}`}
                tabIndex={open ? undefined : -1}
                onClick={close}
                style={stagger(i)}
                aria-current={active === id ? 'true' : undefined}
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
              Résumé (PDF)
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
