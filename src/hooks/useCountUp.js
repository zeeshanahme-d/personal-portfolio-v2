import { useState, useEffect, useRef } from 'react';

/**
 * Animates a number from `start` to `target` over `duration` ms.
 * Only begins when the returned `ref` is scrolled into view.
 * @param {number} target — final value
 * @param {number} [duration=1600] — animation duration in ms
 * @param {number} [start=0] — starting value
 */
export function useCountUp(target, duration = 1600, start = 0) {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const hasRun = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasRun.current) {
                    hasRun.current = true;
                    observer.disconnect();

                    const startTime = performance.now();
                    const range = target - start;

                    const tick = (now) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.round(start + range * eased));
                        if (progress < 1) requestAnimationFrame(tick);
                    };

                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration, start]);

    return { count, ref };
}
