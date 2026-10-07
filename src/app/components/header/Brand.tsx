import { profile } from '@/app/data/content';

/** Brand: a Z monogram with a marigold cursor block (the site's "live" colour), then the full name. */
export function Brand() {
  return (
    // A section link like the nav's: on the home page the browser just scrolls, from the 404 page it goes home.
    // eslint-disable-next-line @next/next/no-html-link-for-pages -- native fragment scroll, not a page navigation
    <a href="/#top" aria-label={`${profile.name}, back to top`} className="flex items-center gap-2.5">
      <svg viewBox="0 0 28 28" aria-hidden="true" className="size-7 shrink-0">
        <rect width="28" height="28" rx="7" className="fill-ink" />
        <path
          d="M8.5 8.5h10.5L8.5 19.5h8"
          fill="none"
          className="stroke-paper"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="18.2" y="17.3" width="3.4" height="4.4" rx="0.8" className="fill-accent-bright" />
      </svg>
      <span className="text-sm font-semibold tracking-[-0.015em] whitespace-nowrap">{profile.name}</span>
    </a>
  );
}
