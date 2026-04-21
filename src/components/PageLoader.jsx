import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Full-screen entrance loader. Shows for ~1.6s then fades to reveal the page.
 * Call onComplete when done — AppWrapper sets `loaded` to unmount it.
 */
function PageLoader({ onComplete }) {
    const [phase, setPhase] = useState(0); // 0=letter, 1=full-name, 2=fade-out

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 500);
        const t2 = setTimeout(() => setPhase(2), 1500);
        const t3 = setTimeout(() => { if (onComplete) onComplete(); }, 1500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase < 2 && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-100000 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--surface-base)' }}
                >
                    {/* Background glow */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-[120px]"
                        style={{ backgroundColor: 'var(--mesh-1)' }}
                        aria-hidden
                    />

                    <div className="relative flex flex-col items-center gap-4">
                        {/* Animated "Z" mark → full name */}
                        <motion.div
                            className="font-display overflow-hidden text-center"
                            style={{ fontFamily: 'var(--font-Display)' }}
                        >
                            <motion.span
                                className="block leading-none font-semibold tracking-[-0.04em]"
                                style={{ color: 'var(--text-primary)' }}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <AnimatePresence mode="wait">
                                    {phase === 0 ? (
                                        <motion.span
                                            key="letter"
                                            className="text-4xl sm:text-5xl"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.15 }}
                                            transition={{ duration: 0.28 }}
                                            style={{ color: 'var(--accent)' }}
                                        >
                                            Z
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="fullname"
                                            className="text-4xl sm:text-5xl"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                        >
                                            Zeeshan{' '}
                                            <span style={{ color: 'var(--accent)' }}>Ahmed</span>
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.span>
                        </motion.div>

                        {/* Tagline */}
                        {phase >= 1 &&
                            <motion.p
                                className="text-xs font-semibold uppercase tracking-[0.22em]"
                                style={{ color: 'var(--text-muted)' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Front-End Developer
                            </motion.p>}

                        {/* Loading bar */}
                        <motion.div
                            className="mt-2 h-px w-32 overflow-hidden rounded-full"
                            style={{ backgroundColor: 'var(--border-subtle)' }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: 'linear-gradient(90deg, var(--btn-gradient-from), var(--btn-gradient-to))' }}
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.4, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PageLoader;
