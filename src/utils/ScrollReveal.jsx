import { motion, useInView } from 'framer-motion';
import { useRef, forwardRef } from 'react';

const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    },
};

const ScrollReveal = forwardRef(({
    children,
    variants = defaultVariants,
    className = '',
    delay = 0,
    once = true
}, forwardedRef) => {
    const internalRef = useRef(null);
    const ref = forwardedRef || internalRef;
    const isInView = useInView(internalRef, { once, margin: '-100px' });

    return (
        <motion.div
            ref={internalRef}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={variants}
            className={className}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </motion.div>
    );
});

export default ScrollReveal;
