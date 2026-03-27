// src/utils/motion.js

export const textVariant = (delay) => ({
    hidden: {
        y: 36,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 22,
            delay: delay,
        },
    },
});

export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: 'easeOut',
        },
    },
});

/** Directional section reveal: top | bottom | left | right */
export const revealFrom = (direction = 'bottom', distance = 52) => {
    const hidden = { opacity: 0 };
    if (direction === 'top') hidden.y = -distance;
    else if (direction === 'bottom') hidden.y = distance;
    else if (direction === 'left') hidden.x = -distance;
    else if (direction === 'right') hidden.x = distance;

    return {
        hidden,
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.62,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
};

export const headerReveal = (direction = 'bottom', distance = 40) => {
    const hidden = { opacity: 0 };
    if (direction === 'top') hidden.y = -distance;
    else if (direction === 'bottom') hidden.y = distance;
    else if (direction === 'left') hidden.x = -distance;
    else if (direction === 'right') hidden.x = distance;

    return {
        hidden,
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
    };
};

export const zoomIn = (delay, duration) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'tween',
            delay: delay,
            duration: duration,
            ease: 'easeOut',
        },
    },
});

export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: 'easeOut',
        },
    },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren || 0,
        },
    },
});
