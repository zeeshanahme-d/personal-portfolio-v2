import { motion } from 'framer-motion';
import { headerReveal } from '../utils/motion';

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.09, delayChildren: 0.04 },
    },
};

/**
 * Shared section title block: eyebrow, heading (title + accent), optional description.
 * @param {{ revealDirection?: 'top'|'bottom'|'left'|'right', HeadingIcon?: import('react').ComponentType<{ className?: string }> }} props
 */
function SectionHeader({
    eyebrow,
    title,
    accent,
    description,
    align = 'center',
    revealDirection = 'bottom',
    HeadingIcon,
}) {
    const showAccent = accent != null && String(accent).length > 0;
    const alignClass =
        align === 'center' ? 'items-center text-center' : 'items-start text-left';

    const item = headerReveal(revealDirection, 38);
    const rowAlign = align === 'center' ? 'justify-center' : 'justify-start';

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-72px' }}
            variants={container}
            className={`mb-10 flex flex-col gap-2.5 md:mb-12 md:gap-3 lg:mb-14 ${alignClass}`}
        >
            {eyebrow ? (
                <motion.span variants={item} className="section-eyebrow">
                    {eyebrow}
                </motion.span>
            ) : null}
            <motion.div variants={item} className={`flex flex-wrap items-center gap-3 ${rowAlign} md:gap-4`}>
                {HeadingIcon ? (
                    <motion.span
                        className="inline-flex shrink-0 text-primary"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                        aria-hidden
                    >
                        <HeadingIcon className="h-9 w-9 md:h-10 md:w-10" />
                    </motion.span>
                ) : null}
                <h2 className="section-heading font-display">
                    {title}
                    {showAccent ? (
                        <>
                            {' '}
                            <span className="gradient-text">{accent}</span>
                        </>
                    ) : null}
                </h2>
            </motion.div>
            {description ? (
                <motion.p
                    variants={item}
                    className={`section-subheading ${align === 'left' ? 'is-left self-start' : ''}`}
                >
                    {description}
                </motion.p>
            ) : null}
        </motion.div>
    );
}

export default SectionHeader;
