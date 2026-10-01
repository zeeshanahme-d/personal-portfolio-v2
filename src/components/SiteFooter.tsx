import { ArrowUp } from 'lucide-react';
import { profile } from '../content';
import { useLocalTime } from '../hooks/useLocalTime';

/** Closes the dark Contact stage: signature, local time, back to top, then an oversized name. */
export function SiteFooter() {
  const time = useLocalTime(profile.timeZone);

  return (
    <footer className="overflow-hidden dark bg-night text-snow">
      <div className="container-page">
        <div className="flex flex-col gap-4 border-t border-night-line py-8 text-sm text-snow-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3">
            <span suppressHydrationWarning>
              © {new Date().getFullYear()} {profile.name}
            </span>
            {/* My name in Urdu, as a small signature. */}
            <span lang="ur" dir="rtl" aria-hidden="true" className="font-sans text-base leading-none text-snow-2">
              {profile.nameUrdu}
            </span>
          </p>
          <p className="flex items-center gap-6">
            {time && <span>{time} in Islamabad</span>}
            <a href="#top" className="group inline-flex items-center gap-1.5 text-snow-2 hover:text-snow">
              Back to top
              <ArrowUp aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none bg-linear-to-b from-white/10 to-transparent bg-clip-text text-center text-[20vw] leading-[0.8] font-semibold tracking-[-0.04em] whitespace-nowrap text-transparent select-none"
      >
        ZEESHAN
      </p>
    </footer>
  );
}
