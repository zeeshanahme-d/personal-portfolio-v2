import { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowPath } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import { revealFrom } from '../utils/motion';

const STEPS = [
    {
        step: '01',
        title: 'Discover',
        text: 'Goals, users, and constraints—aligned before a single component is built.',
    },
    {
        step: '02',
        title: 'Design & prototype',
        text: 'Structure, motion, and states explored early so engineering stays predictable.',
    },
    {
        step: '03',
        title: 'Build',
        text: 'Typed React, composable UI, and performance budgets tracked as features land.',
    },
    {
        step: '04',
        title: 'Refine',
        text: 'Telemetry, polish, and handoff docs so the product keeps improving after launch.',
    },
];

function Process() {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} id="process" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Method"
                    title="How I"
                    accent="work"
                    description="A calm, repeatable flow—fewer surprises, clearer milestones, better outcomes."
                    align="center"
                    revealDirection="right"
                    HeadingIcon={HiArrowPath}
                />

                <div className="mx-auto max-w-3xl">
                    <ol className="relative space-y-0 border-l border-border pl-8 md:pl-10">
                        {STEPS.map(({ step, title, text }, idx) => (
                            <motion.li
                                key={step}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-40px' }}
                                variants={revealFrom('left', 36)}
                                className="relative pb-14 last:pb-0 md:pb-16"
                            >
                                <span
                                    className="absolute -left-8 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background shadow-[0_0_0_4px_var(--surface-base)] md:-left-10 md:h-4 md:w-4"
                                    aria-hidden
                                >
                                    <motion.span
                                        className="h-1.5 w-1.5 rounded-full bg-linear-to-br from-primary to-(--gradient-accent-mid)"
                                        animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
                                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                                    />
                                </span>
                                <p className="section-eyebrow mb-2 text-primary/90">{step}</p>
                                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                                <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-light-gray md:text-base">
                                    {text}
                                </p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </Wrapper>
        </section>
    );
}

export default Process;
