import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    HiUser,
    HiViewColumns,
    HiEnvelope,
    HiCodeBracket,
    HiBriefcase,
    HiAcademicCap,
} from 'react-icons/hi2';
import { MdOutlineFileDownload } from "react-icons/md";
import { Spin as Hamburger } from 'hamburger-react'
import { smoothScroll } from '../lib/ScrollToElement';
import { fadeIn } from "../utils/motion";
import ScrollReveal from './ScrollReveal';
import { AnimatePresence, motion } from 'framer-motion';



const navData = [
    { name: 'About', path: 'about', icon: <HiUser /> },
    { name: 'Skills', path: 'skills', icon: <HiCodeBracket /> },
    { name: 'Experience', path: 'experience', icon: <HiBriefcase /> },
    { name: 'Education', path: 'education', icon: <HiAcademicCap /> },
    { name: 'Projects', path: 'projects', icon: <HiViewColumns /> },
    { name: 'Contact', path: 'contact', icon: <HiEnvelope /> },
];

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    const scrollNavbar = () => {
        if (window.scrollY > 80) {
            if (window.scrollY > lastScrollY && !menuOpen) {
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
        window.open("/resume/Zeeshan_Ahmed_Resume.pdf", "_blank");
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.3 }}
            className={`w-full fixed z-50 transition-all duration-500 h-20 ${show === 'hide' ? '-translate-y-full' : 'translate-y-0'
                } ${show === 'show' || menuOpen ? 'bg-background/95 backdrop-blur-md' : ''}`}
        >
            <div className="flex items-center w-full h-full">
                <div className="container">
                    <div className="flex justify-between items-center gap-2 py-2">
                        {/* Logo */}
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="text-3xl md:text-4xl font-medium tracking-wider font-family-lobster cursor-pointer"
                            onClick={() => smoothScroll('home')}
                        >
                            Zeeshan <span className="text-primary">Ahmed</span>
                        </motion.h1>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <div className="flex items-center gap-x-1">
                                {navData.map((link, index) => (
                                    <motion.button
                                        key={link.path}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                        onClick={() => smoothScroll(link.path)}
                                        className="nav-link"
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                            </div>
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-x-3">

                            {/* Resume Button */}
                            <motion.button
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                                className="bg-primary hidden md:flex hover:bg-primary/80 transition-all duration-300 items-center justify-center gap-2 cursor-pointer h-10 rounded-lg px-4 text-sm font-medium"
                                onClick={handleResumeDownload}
                            >
                                <MdOutlineFileDownload size={20} /> Resume
                            </motion.button>
                            {/* Mobile Menu Toggle */}
                            <button
                                className="block lg:hidden p-2 text-2xl"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <div className="block lg:hidden">
                                    <Hamburger rounded size={30} duration={0.4} easing="ease-in-out" toggled={menuOpen} toggle={setMenuOpen} color={menuOpen ? "#F13024" : "#fff"} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full bg-background/98 backdrop-blur-lg lg:hidden"
                    >
                        <div className="flex flex-col items-start gap-y-2 px-6 py-4">
                            {navData.map((link, index) => (
                                <motion.button
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => smoothScroll(link.path)}
                                    className="nav-link text-xl! py-2 flex items-center gap-3"
                                >
                                    <span className="text-primary">{link.icon}</span>
                                    {link.name}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-primary w-full hover:bg-primary/80 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer h-12 rounded-lg px-4 text-base font-medium mt-4"
                                onClick={handleResumeDownload}
                            >
                                <MdOutlineFileDownload size={24} /> Resume
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header;