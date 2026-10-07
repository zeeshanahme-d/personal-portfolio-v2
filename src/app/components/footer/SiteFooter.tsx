import { ArrowUp } from 'lucide-react';
import { profile } from '@/app/data/content';
import { currentYear } from '@/app/lib/date';
import { LocalTime } from './LocalTime';

/** Closes the page on Contact's pine: signature, local time, back to top. The big name lives in the hero only. */
export async function SiteFooter() {
  const year = await currentYear();

  return (
    <footer className="dark bg-night text-snow">
      <div className="container-page">
        <div className="flex flex-col gap-4 border-t border-night-line py-8 text-sm text-snow-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3">
            <span>
              © {year} {profile.name}
            </span>
            {/* My name in Urdu, as a small signature. */}
            <span lang="ur" dir="rtl" aria-hidden="true" className="font-sans text-base leading-none text-snow-2">
              {profile.nameUrdu}
            </span>
          </p>
          <p className="flex items-center gap-6">
            <LocalTime />
            <a href="#top" className="group inline-flex items-center gap-1.5 text-snow-2 hover:text-snow">
              Back to top
              <ArrowUp aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
