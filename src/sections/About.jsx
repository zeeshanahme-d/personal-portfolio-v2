import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiUser } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';
import { useCountUp } from '../hooks/useCountUp';

const TERMINAL_LINES = [
    { delay: 0, text: 'const developer = {', color: 'var(--accent)' },
    { delay: 0.6, text: '  name: "Zeeshan Ahmed",', color: 'var(--text-secondary)' },
    { delay: 1.0, text: '  role: "Frontend Developer",', color: 'var(--text-secondary)' },
    { delay: 1.4, text: '  stack: ["React", "Next.js", "TS"],', color: 'var(--text-secondary)' },
    { delay: 1.8, text: '  exp: "2+ years",', color: 'var(--text-secondary)' },
    { delay: 2.2, text: '  award: "IBC Show 2024",', color: '#4ade80' },
    { delay: 2.6, text: '  open: true,', color: '#f59e0b' },
    { delay: 3.0, text: '};', color: 'var(--accent)' },
];

function TerminalLine({ text, color, delay, inView }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!inView) return;
        const t = setTimeout(() => setVisible(true), delay * 1000);
        return () => clearTimeout(t);
    }, [inView, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2"
        >
            <span
                className="font-mono text-xs leading-relaxed md:text-sm"
                style={{ color, fontFamily: 'var(--font-Mono)' }}
            >
                {text}
            </span>
            {visible && delay === TERMINAL_LINES[TERMINAL_LINES.length - 1].delay && (
                <span
                    className="inline-block h-3.5 w-0.5 rounded-sm bg-current opacity-90"
                    style={{
                        color: 'var(--accent)',
                        animation: 'scroll-hint 0.9s ease-in-out infinite',
                    }}
                    aria-hidden
                />
            )}
        </motion.div>
    );
}

function Stat({ target, suffix = '', label }) {
    const { count, ref } = useCountUp(target, 1400);
    return (
        <div ref={ref}>
            <p
                className="font-display mb-1 text-3xl font-bold md:text-4xl"
                style={{ color: 'var(--accent)' }}
            >
                {count}{suffix}
            </p>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {label}
            </p>
        </div>
    );
}

const About = () => {
    const terminalRef = useRef(null);
    const [terminalInView, setTerminalInView] = useState(false);

    useEffect(() => {
        const el = terminalRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setTerminalInView(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Profile"
                    title="About"
                    accent="Me"
                    description="What I do, how I work, and the stack I use day to day."
                    revealDirection="bottom"
                    HeadingIcon={HiUser}
                />

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={revealFrom('left', 48)}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                            Get to <span className="gradient-text">know</span> me
                        </h3>

                        <div className="space-y-5 text-light-gray">
                            <p className="text-[0.9375rem] font-light leading-relaxed md:text-base">
                                Front-end developer with{' '}
                                <strong className="font-medium text-foreground">
                                    two years of professional experience
                                </strong>{' '}
                                shipping responsive apps in React, Next.js, TypeScript, and
                                JavaScript—focused on performance, accessibility, and maintainable UI.
                            </p>
                            <p className="text-[0.9375rem] font-light leading-relaxed md:text-base">
                                I contributed to{' '}
                                <strong className="font-medium text-foreground">ioMoVo</strong>, an
                                award-winning digital asset platform recognized at{' '}
                                <strong className="font-medium text-foreground">IBC Show 2024</strong>. I&apos;m
                                open to roles where I can ship quality product and keep growing.
                            </p>
                        </div>

                        <blockquote
                            className="relative border-l-2 pl-5 italic"
                            style={{
                                borderColor: 'var(--accent)',
                                color: 'var(--text-muted)',
                            }}
                        >
                            <span
                                className="pointer-events-none absolute -left-1 -top-1 text-4xl leading-none opacity-30"
                                style={{ color: 'var(--accent)' }}
                                aria-hidden
                            >
                                "
                            </span>
                            Ship it. Then make it beautiful. Then make it fast.
                        </blockquote>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.12 }}
                            className="flex flex-wrap items-end gap-10 border-t border-border pt-8"
                        >
                            <Stat target={2} suffix="+" label="Years experience" />
                            <Stat target={25} suffix="+" label="Projects shipped" />
                            <div>
                                <p
                                    className="font-display mb-1 text-3xl font-bold md:text-4xl"
                                    style={{ color: 'var(--amber-accent)' }}
                                >
                                    IBC
                                </p>
                                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                    2024 Award
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={revealFrom('right', 48)}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-lg" ref={terminalRef}>
                            <div
                                className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full blur-3xl opacity-25"
                                style={{ backgroundColor: 'var(--accent)' }}
                                aria-hidden
                            />

                            <SpotlightCard innerClassName="relative overflow-hidden p-5 md:p-6 lg:p-8">
                                {/* Traffic lights */}
                                <div className="mb-5 flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                                    <span
                                        className="ml-auto text-[0.6rem] font-semibold uppercase tracking-[0.18em]"
                                        style={{ color: 'var(--text-muted)' }}
                                    >
                                        developer.ts
                                    </span>
                                </div>

                                <div className="space-y-1.5">
                                    {TERMINAL_LINES.map((line) => (
                                        <TerminalLine
                                            key={line.delay}
                                            text={line.text}
                                            color={line.color}
                                            delay={line.delay}
                                            inView={terminalInView}
                                        />
                                    ))}
                                </div>
                            </SpotlightCard>
                        </div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default About;
