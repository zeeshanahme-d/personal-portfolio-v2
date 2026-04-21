import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Dual-element custom cursor: a sharp 6px dot + a lagging 40px ring.
 * Hidden on touch devices. Uses mix-blend-mode: difference for contrast inversion.
 */
function CustomCursor() {
    const [visible, setVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const rawX = useMotionValue(-120);
    const rawY = useMotionValue(-120);

    const springOpts = { stiffness: 200, damping: 24, mass: 0.5 };
    const x = useSpring(rawX, springOpts);
    const y = useSpring(rawY, springOpts);

    useEffect(() => {
        // Hide on touch-only devices
        if (!window.matchMedia('(pointer: fine)').matches) return;

        const onMove = (e) => {
            rawX.set(e.clientX);
            rawY.set(e.clientY);
            if (!visible) setVisible(true);

            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A'
            );
        };
        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        window.addEventListener('mousemove', onMove);
        document.documentElement.addEventListener('mouseleave', onLeave);
        document.documentElement.addEventListener('mouseenter', onEnter);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.documentElement.removeEventListener('mouseleave', onLeave);
            document.documentElement.removeEventListener('mouseenter', onEnter);
        };
    }, []);

    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
        return null;
    }

    return (
        <>
            {/* Sharp dot */}
            <motion.div
                aria-hidden
                style={{ x: rawX, y: rawY, translateX: '-50%', translateY: '-50%' }}
                animate={{ opacity: visible ? 1 : 0, scale: isPointer ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-none fixed left-0 top-0 z-99999 h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
            />
            {/* Lagging ring */}
            <motion.div
                aria-hidden
                style={{ x, y, translateX: '-50%', translateY: '-50%' }}
                animate={{
                    opacity: visible ? 1 : 0,
                    scale: isPointer ? 1.8 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none fixed left-0 top-0 z-99998 h-10 w-10 rounded-full border border-white mix-blend-difference"
            />
        </>
    );
}

export default CustomCursor;
