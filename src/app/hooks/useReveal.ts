import { useEffect, type RefObject } from 'react';

// How long an entrance takes before an element is handed back to its own (hover) transitions.
const SETTLE_MS = 1400;

/**
 * Scroll reveal for one element marked data-reveal, without a flash on load or reload.
 *
 * It renders visible (it is prerendered). On mount, if it is still below the fold it is marked data-pending,
 * which hides it, and it animates in the first time it scrolls into view. Already on screen, it is left alone,
 * so a reload never blanks it. The animation itself lives in CSS (styles/globals.css, "Scroll reveals").
 * Called from the element's own component, so the attributes only change once that component has hydrated.
 */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.removeAttribute('data-reveal'); // already seen: no animation, no flash
      return;
    }

    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.removeAttribute('data-pending');
        observer.disconnect();
        // Drop the attribute once the entrance is over so hover transitions aren't delayed by the stagger.
        const i = Number(el.style.getPropertyValue('--i')) || 0;
        timer = window.setTimeout(() => el.removeAttribute('data-reveal'), SETTLE_MS + i * 70);
      },
      // Trigger a little after the element's top edge clears the bottom of the screen.
      { rootMargin: '0px 0px -10% 0px' },
    );
    el.setAttribute('data-pending', '');
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [ref]);
}
