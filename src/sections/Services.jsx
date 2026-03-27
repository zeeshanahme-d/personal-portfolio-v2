import { motion } from 'framer-motion';
import {
    HiBolt,
    HiDevicePhoneMobile,
    HiPaintBrush,
    HiRocketLaunch,
    HiSparkles,
} from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom, staggerContainer } from '../utils/motion';
import { useRef } from 'react';

const ITEMS = [
    {
        title: 'Product interfaces',
        body: 'Design systems, responsive layouts, and polished UI that scales across breakpoints without losing clarity.',
        icon: HiPaintBrush,
    },
    {
        title: 'Performance',
        body: 'Lazy loading, code splitting, and measurable Core Web Vitals so experiences feel instant, not just “fast enough.”',
        icon: HiBolt,
    },
    {
        title: 'Cross-platform',
        body: 'Web apps that behave consistently on desktop and mobile, with accessibility and touch targets built in from day one.',
        icon: HiDevicePhoneMobile,
    },
    {
        title: 'Delivery',
        body: 'Clear handoffs, readable components, and documentation that helps teams ship the next iteration with confidence.',
        icon: HiRocketLaunch,
    },
];

const DIRS = ['top', 'right', 'bottom', 'left'];

function Services() {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} id="services" className="section-shell relative scroll-mt-24 overflow-hidden">
            <div
                className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-80"
                aria-hidden
            />
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Capabilities"
                    title="What I"
                    accent="ship"
                    description="Focused front-end work: from first pixel to production, with maintainability in mind."
                    revealDirection="top"
                    HeadingIcon={HiSparkles}
                />

                <motion.div
                    variants={staggerContainer(0.1, 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
                >
                    {ITEMS.map(({ title, body, icon: Icon }, idx) => (
                        <motion.div
                            key={title}
                            variants={revealFrom(DIRS[idx % 4], 44)}
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                            className="h-full"
                        >
                            <SpotlightCard className="h-full" innerClassName="group relative h-full overflow-hidden p-7 md:p-8">
                                <div
                                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/8 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                                    aria-hidden
                                />
                                <div className="relative flex flex-col gap-4">
                                    <motion.span
                                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-border"
                                        whileHover={{ rotate: [0, -6, 6, 0], scale: 1.06 }}
                                        transition={{ duration: 0.45 }}
                                    >
                                        <Icon className="h-5 w-5" aria-hidden />
                                    </motion.span>
                                    <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">{title}</h3>
                                    <p className="text-[0.9375rem] leading-relaxed text-light-gray md:text-base">{body}</p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </Wrapper>
        </section>
    );
}

export default Services;
