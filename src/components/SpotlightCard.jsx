import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react';

/** Aligns with Tailwind `lg` (64rem = 1024px). */
const LG_MEDIA = '(min-width: 1024px)';

function subscribeLg(onChange) {
    const mq = window.matchMedia(LG_MEDIA);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
}

function getLgSnapshot() {
    return window.matchMedia(LG_MEDIA).matches;
}

function getLgServerSnapshot() {
    return false;
}

function useIsLg() {
    return useSyncExternalStore(subscribeLg, getLgSnapshot, getLgServerSnapshot);
}

function SpotlightCardStatic({ children, className = '', innerClassName = '' }) {
    return (
        <div className={`relative rounded-4xl ${className}`}>
            <div className={`spotlight-border-inner h-full rounded-4xl ${innerClassName}`}>{children}</div>
        </div>
    );
}

const LERP = 0.11;
const EPS = 0.25;

function SpotlightCardInteractive({ children, className = '', innerClassName = '' }) {
    const ref = useRef(null);
    const targetRef = useRef({ x: 50, y: 50 });
    const currentRef = useRef({ x: 50, y: 50 });
    const rafRef = useRef(0);

    const applyVars = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        const { x, y } = currentRef.current;
        el.style.setProperty('--spot-x', `${x}%`);
        el.style.setProperty('--spot-y', `${y}%`);
    }, []);

    const tick = useCallback(() => {
        const t = targetRef.current;
        const c = currentRef.current;
        c.x += (t.x - c.x) * LERP;
        c.y += (t.y - c.y) * LERP;
        applyVars();

        const dx = t.x - c.x;
        const dy = t.y - c.y;
        if (dx * dx + dy * dy > EPS * EPS) {
            rafRef.current = requestAnimationFrame(tick);
        } else {
            c.x = t.x;
            c.y = t.y;
            applyVars();
            rafRef.current = 0;
        }
    }, [applyVars]);

    const ensureLoop = useCallback(() => {
        if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(tick);
        }
    }, [tick]);

    const onMove = useCallback(
        (e) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const w = r.width || 1;
            const h = r.height || 1;
            targetRef.current = {
                x: ((e.clientX - r.left) / w) * 100,
                y: ((e.clientY - r.top) / h) * 100,
            };
            ensureLoop();
        },
        [ensureLoop],
    );

    const onLeave = useCallback(() => {
        targetRef.current = { x: 50, y: 50 };
        ensureLoop();
    }, [ensureLoop]);

    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`spotlight-border rounded-4xl p-px ${className}`}
            style={{ '--spot-x': '50%', '--spot-y': '50%' }}
        >
            <div className={`spotlight-border-inner h-full rounded-4xl ${innerClassName}`}>{children}</div>
        </div>
    );
}

export default function SpotlightCard(props) {
    const isLg = useIsLg();
    if (!isLg) {
        return <SpotlightCardStatic {...props} />;
    }
    return <SpotlightCardInteractive {...props} />;
}
