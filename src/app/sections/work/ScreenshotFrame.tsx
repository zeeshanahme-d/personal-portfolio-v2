'use client';

import { useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

type Props = {
  /** The project's name, for the carousel's label. */
  name: string;
  /** Domain for the address bar. Private apps have none: the bar shows a lock and the page path. */
  url?: string;
  /** The screenshots (<Screenshot>), rendered on the server: only the frame's state and controls need the browser. */
  screens: ReactNode[];
  /** Each screen's page path for the address bar, in the same order (Screenshot data's `path`). */
  paths: (string | undefined)[];
};

/**
 * A browser window around the project's screenshots. One screenshot is a still; several become a
 * carousel: back/forward buttons in the frame bar, the address follows the page, and the track is a
 * native scroll-snap strip, so swipe, trackpad and arrow keys all work without extra code.
 */
export function ScreenshotFrame({ name, url, screens, paths }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const many = screens.length > 1;
  const path = paths[index];
  useReveal(frame);

  const go = (i: number) => {
    const el = track.current;
    if (!el || i < 0 || i >= screens.length) return;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
  };
  const onScroll = () => {
    const el = track.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    // Unmasks from the bottom up as it first scrolls into view (hooks/useReveal.ts).
    <div ref={frame} data-reveal="frame" className="frame">
      <div className="frame-bar">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        {many && (
          <span className="ml-2 flex">
            <button type="button" onClick={() => go(index - 1)} aria-disabled={index === 0} aria-label="Previous screen" className="frame-nav">
              <ChevronLeft aria-hidden="true" className="size-4" />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-disabled={index === screens.length - 1} aria-label="Next screen" className="frame-nav">
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </span>
        )}
        <span aria-hidden="true" className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 font-mono text-xs text-snow-3">
          {!url && <Lock className="size-3 shrink-0" />}
          <span className="truncate">
            {url}
            {/* The page path; a public app's home page shows just the domain, like a browser. */}
            {path !== undefined && (!url || path) ? `/${path}` : null}
          </span>
        </span>
        {many && (
          <span aria-live="polite" className="shrink-0 text-xs tabular-nums text-snow-3">
            {index + 1} / {screens.length}
          </span>
        )}
      </div>

      {many ? (
        <div
          ref={track}
          onScroll={onScroll}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${name} screens`}
          className="frame-track"
        >
          {screens.map((screen, i) => (
            <div key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${screens.length}`} className="frame-slide">
              {screen}
            </div>
          ))}
        </div>
      ) : (
        screens[0]
      )}
    </div>
  );
}
