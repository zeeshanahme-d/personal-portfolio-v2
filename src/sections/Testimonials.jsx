import { useCallback, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';
import { revealFrom } from '../utils/motion';

const QUOTES = [
    {
        quote: 'Zeeshan ships interfaces that feel production-grade on day one—clear structure, fast iteration, and rare attention to detail.',
        name: 'Product lead',
        role: 'Collaboration (NDA)',
    },
    {
        quote: 'Our dashboard went from sluggish to snappy; lazy loading and TS refactors cut perceived load time dramatically.',
        name: 'Engineering manager',
        role: 'Enterprise SaaS',
    },
    {
        quote: 'He bridges design and engineering effortlessly—RTL, i18n, and accessibility were handled without drama.',
        name: 'Delivery director',
        role: 'International client',
    },
    {
        quote: 'Reliable communicator, owns the UI layer end-to-end, and leaves the codebase easier for the next person.',
        name: 'Tech lead',
        role: 'Product team',
    },
];

function Testimonials() {
    const sectionRef = useRef(null);
    const scrollerRef = useRef(null);
    const pausedRef = useRef(false);
    const rafRef = useRef(0);
    const reduceMotion = useReducedMotion();

    const tick = useCallback(() => {
        const el = scrollerRef.current;
        if (!pausedRef.current && !reduceMotion && el) {
            el.scrollLeft += 0.62;
            const loopWidth = el.scrollWidth / 2;
            if (loopWidth > 0 && el.scrollLeft >= loopWidth) {
                el.scrollLeft -= loopWidth;
            }
        }
        rafRef.current = requestAnimationFrame(tick);
    }, [reduceMotion]);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [tick]);

    const loopItems = [...QUOTES, ...QUOTES];

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="section-shell relative scroll-mt-24 overflow-hidden"
        >
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Voices"
                    title="Trusted"
                    accent="feedback"
                    description="Snapshots of how partners describe working together—auto-scrolling; pause on hover."
                    revealDirection="right"
                    HeadingIcon={HiChatBubbleLeftRight}
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={revealFrom('bottom', 40)}
                >
                    <div
                        ref={scrollerRef}
                        onMouseEnter={() => {
                            pausedRef.current = true;
                        }}
                        onMouseLeave={() => {
                            pausedRef.current = false;
                        }}
                        className="flex gap-6 overflow-x-auto pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        style={{ scrollBehavior: 'auto' }}
                    >
                        {loopItems.map((item, idx) => (
                            <TestimonialCard
                                key={`${item.name}-${idx}`}
                                quote={item.quote}
                                name={item.name}
                                role={item.role}
                                className="min-w-[min(100%,340px)] shrink-0 sm:min-w-[380px] md:min-w-[420px]"
                            />
                        ))}
                    </div>
                </motion.div>
            </Wrapper>
        </section>
    );
}

export default Testimonials;
