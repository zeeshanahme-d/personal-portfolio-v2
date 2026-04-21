import Wrapper from './Wrapper';
import Socials from './Socials';
import { smoothScroll } from '../lib/ScrollToElement';
import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi2';

const FOOTER_NAV = [
    { label: 'About',    path: 'about' },
    { label: 'Skills',   path: 'skills' },
    { label: 'Work',     path: 'experience' },
    { label: 'Projects', path: 'projects' },
    { label: 'Contact',  path: 'contact' },
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="relative border-t pt-16 pb-10 md:pt-20 md:pb-12"
            style={{ borderColor: 'var(--border-subtle)' }}
        >
            {/* Top gradient accent line */}
            <div
                className="pointer-events-none absolute top-0 left-0 h-px w-full"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, var(--accent) 40%, var(--gradient-accent-mid) 60%, transparent 100%)',
                    opacity: 0.4,
                }}
                aria-hidden
            />

            <Wrapper>
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]"
                >
                    {/* Left: brand + tagline */}
                    <div className="flex flex-col gap-4">
                        <button
                            type="button"
                            onClick={() => smoothScroll('home')}
                            className="font-lobster w-fit cursor-pointer text-left text-2xl font-normal tracking-wide text-foreground hover:text-primary transition-colors duration-300 md:text-3xl"
                        >
                            Zeeshan <span className="text-primary">Ahmed</span>
                        </button>
                        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                            Front-end developer crafting performant, accessible React &amp; Next.js
                            interfaces — one pixel at a time.
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                            Handcrafted with ♥ · Islamabad, Pakistan
                        </p>
                    </div>

                    {/* Right: nav links + socials */}
                    <div className="flex flex-col items-start gap-6 md:items-end">
                        <nav aria-label="Footer navigation">
                            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
                                {FOOTER_NAV.map(({ label, path }) => (
                                    <li key={path}>
                                        <button
                                            type="button"
                                            onClick={() => smoothScroll(path)}
                                            className="cursor-pointer text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                                        >
                                            {label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Socials />
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <div
                    className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
                    style={{ borderColor: 'var(--border-subtle)' }}
                >
                    <p className="text-xs text-muted-foreground">
                        © {year} Zeeshan Ahmed. Built with React &amp; Framer Motion.
                    </p>

                    {/* Back to top */}
                    <motion.button
                        type="button"
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => smoothScroll('home')}
                        className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                        style={{ borderColor: 'var(--border-subtle)' }}
                    >
                        <HiArrowUp className="h-3.5 w-3.5" aria-hidden />
                        Back to top
                    </motion.button>
                </div>
            </Wrapper>
        </footer>
    );
}

export default Footer;
