import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    HiUser,
    HiViewColumns,
    HiEnvelope,
    HiCodeBracket,
    HiBriefcase,
    HiAcademicCap,
    HiSparkles,
    HiArrowPath,
    HiChatBubbleLeftRight,
} from 'react-icons/hi2';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Spin as Hamburger } from 'hamburger-react';
import { smoothScroll } from '../lib/ScrollToElement';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { buttonClassNames } from './ui/buttonClassNames';

const navData = [
    { name: 'About', path: 'about', icon: <HiUser /> },
    // { name: 'Services', path: 'services', icon: <HiSparkles /> },
    { name: 'Skills', path: 'skills', icon: <HiCodeBracket /> },
    { name: 'Work', path: 'experience', icon: <HiBriefcase /> },
    // { name: 'Education', path: 'education', icon: <HiAcademicCap /> },
    // { name: 'Process', path: 'process', icon: <HiArrowPath /> },
    { name: 'Projects', path: 'projects', icon: <HiViewColumns /> },
    // { name: 'Voices', path: 'testimonials', icon: <HiChatBubbleLeftRight /> },
    { name: 'Contact', path: 'contact', icon: <HiEnvelope /> },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const [show, setShow] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const scrollNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow('hide')
            } else {
                setShow('show')
            }
            setLastScrollY(window.scrollY)
        } else {
            setShow('top')
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollNavbar);
        return () => { window.removeEventListener("scroll", scrollNavbar); }
    }, [lastScrollY]);

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/Zeeshan_Ahmed_Resume.pdf';
        link.download = 'Zeeshan_Ahmed_Resume.pdf';
        link.click();
        window.open('/resume/Zeeshan_Ahmed_Resume.pdf', '_blank');
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 88, damping: 20, delay: 0.12 }}
            className={`${show === "hide" ? "-translate-y-full" : show === "show" ? "translate-y-0" : "translate-y-0"} fixed top-0 z-50 w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
        >
            <div className="container pt-3 md:pt-4 " >
                <div
                    className={`flex min-h-13 items-center justify-between gap-2 rounded-2xl border px-5 py-0 lg:py-5 transition-[background,border-color,box-shadow] duration-500 md:min-h-14 border-border bg-background/75 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.4)] backdrop-blur-xl`}
                >
                    <motion.button
                        type="button"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.35 }}
                        className="font-lobster shrink-0 cursor-pointer text-left text-xl font-normal tracking-wide text-foreground md:text-2xl lg:text-3xl"
                        onClick={() => smoothScroll('home')}
                    >
                        Zeeshan <span className="text-primary">Ahmed</span>
                    </motion.button>

                    <nav className="hidden lg:block" aria-label="Primary">
                        <div className="nav-pill-track flex max-w-208 flex-wrap items-center justify-end gap-y-1 rounded-full border border-border/90 bg-card/40 px-1 py-1 lg:justify-center">
                            {navData.map((link, index) => (
                                <motion.button
                                    key={link.path}
                                    type="button"
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.18 + index * 0.035, duration: 0.35 }}
                                    onClick={() => smoothScroll(link.path)}
                                    className="nav-link-desktop rounded-full px-4 py-1.5 text-[0.8rem] font-medium tracking-tight text-light-gray hover:text-foreground lg:px-3 lg:text-sm"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </nav>

                    <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
                        <ThemeToggle className="hidden sm:flex" />
                        <motion.button
                            type="button"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.32, duration: 0.35 }}
                            className={buttonClassNames({
                                variant: 'solid',
                                size: 'sm',
                                className: 'hidden cursor-pointer md:flex',
                            })}
                            onClick={handleResumeDownload}
                        >
                            <MdOutlineFileDownload size={18} /> Resume
                        </motion.button>
                        <ThemeToggle className="flex sm:hidden" />
                        <button
                            type="button"
                            className="flex p-1.5 text-foreground lg:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <Hamburger
                                rounded
                                size={26}
                                duration={0.35}
                                easing="ease-in-out"
                                toggled={menuOpen}
                                toggle={setMenuOpen}
                                color="currentColor"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className={`border-b border-border bg-background/92 backdrop-blur-xl lg:hidden ${menuOpen ? 'block' : 'hidden'}`}
                >
                    <div className="container flex max-h-[min(70vh,520px)] flex-col gap-0.5 overflow-y-auto px-3 py-4">
                        {navData.map((link, index) => (
                            <motion.button
                                key={link.path}
                                type="button"
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.04 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    smoothScroll(link.path);
                                    setMenuOpen(false);
                                }}
                                className="nav-link flex items-center gap-3 rounded-xl py-3 text-left text-base"
                            >
                                <span className="text-primary">{link.icon}</span>
                                {link.name}
                            </motion.button>
                        ))}
                        <motion.button
                            type="button"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className={buttonClassNames({
                                variant: 'solid',
                                size: 'sm',
                                className:
                                    'mt-2 flex h-12 w-full cursor-pointer items-center justify-center gap-2 text-base font-semibold active:scale-[0.99]',
                            })}
                            onClick={handleResumeDownload}
                        >
                            <MdOutlineFileDownload size={22} /> Resume
                        </motion.button>
                    </div>
                </motion.div>

            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
