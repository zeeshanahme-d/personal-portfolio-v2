import { useEffect, type CSSProperties } from 'react';

// How long an entrance takes before an element is handed back to its own (hover) transitions.
const SETTLE_MS = 1400;

/**
 * Scroll reveals, without a flash on load or reload.
 *
 * Everything is visible by default (it is prerendered). On mount, only elements still below the
 * fold are marked data-pending, which hides them off-screen; each one animates in the first time
 * it scrolls into view. Elements already on screen are left alone, so a reload never blanks them.
 * The animation itself lives in CSS (index.css, "Scroll reveals").
 */
export function useReveal() {
  useEffect(() => {
    const settle = (el: Element) => {
      const i = Number((el as HTMLElement).style.getPropertyValue('--i')) || 0;
      // Drop the attribute once the entrance is over so hover transitions aren't delayed by the stagger.
      setTimeout(() => el.removeAttribute('data-reveal'), SETTLE_MS + i * 70);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.removeAttribute('data-pending');
          observer.unobserve(entry.target);
          settle(entry.target);
        }
      },
      // Trigger a little after an element's top edge clears the bottom of the screen.
      { rootMargin: '0px 0px -10% 0px' },
    );

    const fold = window.innerHeight * 0.9;
    for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]')) {
      if (el.getBoundingClientRect().top < fold) {
        el.removeAttribute('data-reveal'); // already seen: no animation, no flash
      } else {
        el.setAttribute('data-pending', '');
        observer.observe(el);
      }
    }
    return () => observer.disconnect();
  }, []);
}

/** Inline style that staggers a revealed element by `index` steps. */
export const stagger = (index: number) => ({ '--i': index }) as CSSProperties;

/** Inline style that delays a load animation (hero entrance) by `ms`. */
export const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties;
