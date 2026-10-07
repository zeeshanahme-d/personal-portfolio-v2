'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/app/data/content';
import { NAV_IDS } from '@/app/data/navigation';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { Brand } from './Brand';
import { DesktopNav } from './DesktopNav';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  const active = useActiveSection(NAV_IDS);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // While the mobile menu is open: Escape closes it (focus back on the toggle), and so do a tap outside the
  // header and widening past md.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
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
    // Background and border come from CSS (.site-header), driven by scroll position rather than state.
    <header ref={headerRef} className="site-header sticky top-0 z-30">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
        <Brand onClick={close} />

        <div className="flex items-center gap-5 lg:gap-9">
          <DesktopNav active={active} />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line h-9 gap-1.5 px-4 text-sm max-md:hidden"
            >
              Resume
              <ArrowUpRight aria-hidden="true" className="arrow size-3.5" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
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
        </div>
      </nav>

      <MobileMenu open={open} active={active} onNavigate={close} />
    </header>
  );
}
