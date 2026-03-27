import Wrapper from './Wrapper';
import Socials from './Socials';
import { smoothScroll } from '../lib/ScrollToElement';
import { motion } from 'framer-motion';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border/80 py-12 md:py-14">
            <Wrapper>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-center"
                >
                    <p className="max-w-md text-center text-sm leading-relaxed text-muted-foreground sm:text-left">
                        © {year} Zeeshan Ahmed.
                        <span className="mx-2 text-border">·</span>
                        <button
                            type="button"
                            onClick={() => smoothScroll('home')}
                            className="font-lobster cursor-pointer text-[0.9375rem] text-foreground underline decoration-border underline-offset-[5px] transition-colors duration-300 hover:text-primary hover:decoration-primary/40"
                        >
                            Back to top
                        </button>
                    </p>
                    <Socials />
                </motion.div>
            </Wrapper>
        </footer>
    );
}

export default Footer;
