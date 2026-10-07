import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/app/data/content';
import { Brand } from './Brand';
import { DesktopNav } from './DesktopNav';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

/**
 * A Server Component. Only the parts that react to the visitor are client components: DesktopNav and MobileMenu
 * follow the scroll, MobileMenu opens and closes, ThemeToggle switches the theme.
 */
export function SiteHeader() {
  return (
    // Background and border come from CSS (.site-header), driven by scroll position rather than state.
    <header className="site-header sticky top-0 z-30">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
        <Brand />

        <div className="flex items-center gap-5 lg:gap-9">
          <DesktopNav />
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
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
