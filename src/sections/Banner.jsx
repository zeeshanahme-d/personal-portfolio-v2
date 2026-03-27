import { smoothScroll } from '../lib/ScrollToElement';
import { motion } from 'framer-motion';
import { HiArrowRight, HiEnvelope, HiSparkles } from 'react-icons/hi2';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import ParticlesContainer from '@/components/ParticlesContainer';
import { buttonClassNames } from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';

const Banner = () => {
    const { theme } = useTheme();
    return (
        <section
            id="home"
            className="relative flex min-h-dvh max-h-[920px] items-center justify-center overflow-hidden pt-24 pb-32 md:pt-28 md:pb-36"
        >
            <ParticlesContainer />

            <div
                className="pointer-events-none absolute -top-40 left-[10%] z-2 h-[min(440px,50vw)] w-[min(440px,50vw)] rounded-full blur-[110px]"
                style={{ backgroundColor: 'var(--mesh-1)' }}
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-[-25%] right-[6%] z-2 h-[min(360px,45vw)] w-[min(360px,45vw)] rounded-full blur-[100px]"
                style={{ backgroundColor: 'var(--mesh-2)' }}
                aria-hidden
            />

            <motion.div
                variants={staggerContainer(0.07, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="container relative z-10"
            >
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:max-w-5xl">
                    <motion.div
                        variants={fadeIn('down', 'tween', 0.06, 0.48)}
                        className="mb-6 flex flex-wrap items-center justify-center gap-2"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
                            <motion.span
                                animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.08, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="text-primary"
                                aria-hidden
                            >
                                <HiSparkles className="h-3.5 w-3.5" />
                            </motion.span>
                            {new Date().getFullYear()}
                        </span>
                        <span className="hidden h-1 w-1 rounded-full bg-border sm:block" aria-hidden />
                        <span className="section-eyebrow text-primary/95">Front-end · React & Next.js</span>
                    </motion.div>

                    <motion.h1
                        variants={textVariant(0.16)}
                        className="font-display mb-7 text-[clamp(2.25rem,7.8vw,4.35rem)] font-semibold leading-[1.03] tracking-[-0.038em] md:mb-8"
                    >
                        Interfaces that feel{' '}
                        <span className="gradient-text">effortless</span>
                        <span className="text-foreground"> at scale</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn('up', 'tween', 0.3, 0.55)}
                        className="max-w-lg text-pretty text-[0.9375rem] font-light leading-[1.75] text-light-gray md:max-w-2xl md:text-lg"
                    >
                        Hi, I&apos;m{' '}
                        <span className="font-medium text-foreground">Zeeshan Ahmed</span>
                        —shipping fast, accessible product UI with React, TypeScript, and careful attention to
                        performance.
                    </motion.p>

                    <motion.div
                        variants={fadeIn('up', 'spring', 0.44, 0.55)}
                        className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center"
                    >
                        <motion.button
                            type="button"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => smoothScroll('projects')}
                            className={buttonClassNames({ variant: 'solid', size: 'lg', className: 'cursor-pointer' })}
                        >
                            View selected work
                            <HiArrowRight className="h-4 w-4" aria-hidden />
                        </motion.button>
                        <motion.button
                            type="button"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => smoothScroll('contact')}
                            className={buttonClassNames({ variant: 'ghost', size: 'lg', className: 'cursor-pointer' })}
                        >
                            <HiEnvelope className="h-4 w-4 text-primary" aria-hidden />
                            Start a conversation
                        </motion.button>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('up', 'tween', 0.54, 0.5)}
                        className="mt-14 flex justify-center md:mt-16"
                    >
                        <div className="buttonContainer">
                            <button
                                type="button"
                                onClick={() => smoothScroll('about')}
                                className="link group relative cursor-pointer"
                                aria-label="Scroll to about"
                            >
                                <img
                                    src={theme === 'dark' ? "/images/rounded-text.png" : "/images/rounded-text-dark.png"}
                                    width={140}
                                    height={140}
                                    alt=""
                                    className="image opacity-90"
                                />
                                <HiArrowRight className="arrow-icon text-foreground/85 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
                aria-hidden
            >
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Scroll
                </span>
                <span className="flex h-9 w-px overflow-hidden rounded-full bg-border">
                    <span className="mx-auto mt-1 block h-2 w-0.5 rounded-full bg-primary/90 animate-scroll-hint" />
                </span>
            </motion.div>
        </section>
    );
};

export default Banner;
