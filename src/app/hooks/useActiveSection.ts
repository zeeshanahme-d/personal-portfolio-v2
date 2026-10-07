import { useEffect, useState } from 'react';

/**
 * Id of the last section whose top has passed the middle of the viewport, or null above the first.
 * A scroll check rather than an IntersectionObserver: observers never report "nothing is current"
 * after a jump from the bottom of the page straight back to the top.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let current: string | null = null;
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= middle) current = id;
      }
      setActive(current);
    };
    // At most one check per frame, however fast the scroll events come.
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule(); // the first check, for a reload part-way down the page
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  return active;
}
