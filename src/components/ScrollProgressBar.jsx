import { useScroll, motion } from 'framer-motion';

/**
 * A thin gradient bar pinned to the very top of the viewport that fills
 * as the user scrolls down the page.
 */
function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            aria-hidden
            className="fixed left-0 top-0 z-55 h-[3px] origin-left"
            style={{
                scaleX: scrollYProgress,
                background: 'linear-gradient(90deg, var(--btn-gradient-from), var(--gradient-accent-mid))',
                transformOrigin: 'left',
            }}
        />
    );
}

export default ScrollProgressBar;
