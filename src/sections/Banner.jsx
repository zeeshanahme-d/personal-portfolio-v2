import { motion } from 'framer-motion';
import { HiArrowRight, HiEnvelope, HiSparkles, HiMapPin } from 'react-icons/hi2';
import { fadeIn, staggerContainer } from '../utils/motion';
import ParticlesContainer from '@/components/ParticlesContainer';
import { buttonClassNames } from '@/components/ui/buttonClassNames';
import ScrambleText from '@/components/ScrambleText';
import TypewriterCycle from '@/components/TypewriterCycle';
import { smoothScroll } from '../lib/ScrollToElement';
import { ROLES } from '../utils/Constant';


const Banner = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
        >
            <ParticlesContainer />

            <div
                className="pointer-events-none absolute -top-40 left-[10%] z-2 h-[min(440px,50vw)] w-[min(440px,50vw)] transform-gpu rounded-full blur-[110px] backface-hidden max-md:opacity-70 max-md:blur-[60px]"
                style={{ backgroundColor: 'var(--mesh-1)' }}
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-[-25%] right-[6%] z-2 h-[min(360px,45vw)] w-[min(360px,45vw)] transform-gpu rounded-full blur-[100px] backface-hidden max-md:opacity-70 max-md:blur-[60px]"
                style={{ backgroundColor: 'var(--mesh-2)' }}
                aria-hidden
            />

            <motion.div
                variants={staggerContainer(0.07, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="container relative z-10"
            >
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:max-w-5xl">

                    <motion.div
                        variants={fadeIn('down', 'tween', 0.06, 0.48)}
                        className="mb-7 flex flex-wrap items-center justify-center gap-2.5"
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
                            Open to work · {new Date().getFullYear()}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
                            <HiMapPin className="h-3 w-3 text-primary" aria-hidden />
                            Pakistan
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn('up', 'tween', 0.12, 0.6)}
                        className="font-display mb-5 text-[clamp(2.6rem,7.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
                    >
                        <ScrambleText text="Crafting Interfaces That " delay={200} className="block" />
                        <ScrambleText
                            text="Feel Alive"
                            delay={300}
                            className="gradient-text block"
                        />
                    </motion.h1>

                    <motion.div
                        variants={fadeIn('up', 'tween', 0.22, 0.55)}
                        className="mb-5 flex items-center justify-center gap-2 text-[1rem] text-light-gray md:text-[1.0625rem]"
                    >
                        <span className="font-medium text-foreground">I&apos;m a</span>
                        <TypewriterCycle
                            words={ROLES}
                            className="min-w-[12ch] font-semibold text-primary"
                        />
                    </motion.div>

                    <motion.p
                        variants={fadeIn('up', 'tween', 0.3, 0.55)}
                        className="mb-9 max-w-xl text-pretty text-[0.9375rem] font-light leading-[1.75] text-light-gray md:text-base"
                    >
                        Hi, I&apos;m{' '}
                        <span className="font-medium text-foreground">Zeeshan Ahmed</span>
                        {' '}— I build fast, accessible interfaces with React, Next.js and TypeScript,
                        focused on performance and detail.
                    </motion.p>

                    <motion.div
                        variants={fadeIn('up', 'spring', 0.38, 0.55)}
                        className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                    >
                        <motion.button
                            type="button"
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => smoothScroll('projects')}
                            className={buttonClassNames({ variant: 'solid', size: 'lg', className: 'cursor-pointer group' })}
                        >
                            View Selected Work
                            <motion.span
                                className="inline-flex"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <HiArrowRight className="h-4 w-4" aria-hidden />
                            </motion.span>
                        </motion.button>

                        <motion.button
                            type="button"
                            whileHover={{ y: -3, scale: 1.01 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => smoothScroll('contact')}
                            className={buttonClassNames({ variant: 'ghost', size: 'lg', className: 'cursor-pointer' })}
                        >
                            <HiEnvelope className="h-4 w-4 text-primary" aria-hidden />
                            Start a Conversation
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
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
