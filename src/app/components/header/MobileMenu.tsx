'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '@/app/data/content';
import { NAV, NAV_IDS } from '@/app/data/navigation';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { stagger } from '@/app/lib/motion';

/**
 * The phone menu: its toggle in the header bar and the panel under the bar (positioned against the sticky header).
 * Closed, the panel stays in the DOM for the fade but drops out of the tab order.
 */
export function MobileMenu() {
  const active = useActiveSection(NAV_IDS);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // While open: Escape closes it (focus back on the toggle), and so do a tap anywhere outside the menu (the brand
  // link included) and widening past md.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !toggleRef.current?.contains(target)) setOpen(false);
    };
    const wide = window.matchMedia('(min-width: 48rem)');
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    wide.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
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

      <div
        ref={panelRef}
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
                onClick={close}
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
    </>
  );
}
