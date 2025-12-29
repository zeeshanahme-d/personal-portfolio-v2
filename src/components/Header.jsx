import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    HiUser,
    HiViewColumns,
    HiEnvelope,
} from 'react-icons/hi2';
import { MdOutlineFileDownload } from "react-icons/md";
import { Spin as Hamburger } from 'hamburger-react'
import { smoothScroll } from '../lib/ScrollToElement';
import { fadeIn } from "../utils/motion";
import ScrollReveal from './ScrollReveal';



const navData = [
    { name: 'About', path: 'about', icon: <HiUser /> },
    { name: 'Skills', path: 'skills', icon: <HiUser /> },
    { name: 'Experience', path: 'experience', icon: <HiUser /> },
    { name: 'Education', path: 'education', icon: <HiUser /> },
    { name: 'Projects', path: 'projects', icon: <HiViewColumns /> },
    {
        name: 'Contact',
        path: 'contact',
        icon: <HiEnvelope />,
    },
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
        <header className={`w-full fixed z-50 transition-all duration-500 translate-y-0 h-20 p-0 ${show === "hide" ? "translate-y-[-80px]" : show === "show" || menuOpen ? "bg-[#1a1a1a]" : ""}`}>
            <div className='flex items-center w-full h-full'>
                <div className="container my-0 mx-auto">
                    <div className="flex justify-between flex-row items-center gap-2 py-2">
                        <ScrollReveal variants={fadeIn("down", "spring", 0.2, 1)}>
                            <h1 className="text-3xl md:text-4xl font-medium tracking-wider font-Lobster">
                                Zeeshan <span className="text-primary">Ahmed</span>
                            </h1>
                        </ScrollReveal>
                        <nav className='navBar hidden lg:block'>
                            <div className='flex items-center gap-x-1'>
                                {navData.map((link, index) => {
                                    return (
                                        <button
                                            onClick={() => smoothScroll(link.path)}
                                            key={index}
                                            className="nav-link">
                                            {link.name}
                                        </button>
                                    )
                                })}
                            </div>
                        </nav>
                        <div className='flex items-center gap-x-2'>
                            <div className="block lg:hidden">
                                <Hamburger rounded size={30} duration={0.4} easing="ease-in-out" toggled={menuOpen} toggle={setMenuOpen} />
                            </div>
                            <button
                                className={`bg-primary hidden md:flex hover:bg-primary-hover transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 items-center justify-center gap-2 cursor-pointer h-10 rounded-lg px-4 text-base my-5`}
                                onClick={handleResumeDownload}
                            >
                                <MdOutlineFileDownload size={20} /> Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className={`absolute transition-all duration-500 w-full  ${menuOpen ? "bg-[#1a1a1a] top-0 z-10 outline-pink-100" : "-top-92 opacity-0 pointer-events-none"}`}>
                    <div className='flex flex-col items-start gap-x-1 px-6 py-2'>
                        {navData.map((link, index) => {
                            return (
                                <button
                                    onClick={() => smoothScroll(link.path)}
                                    key={index}
                                    className="nav-link my-1.5 text-xl! px-0!">
                                    {link.name}
                                </button>
                            )
                        })}
                        <button
                            className={`bg-primary w-full hover:bg-primary-hover transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex md:hidden items-center justify-center gap-2 cursor-pointer h-10 rounded-lg  px-4 text-base my-5`}
                            onClick={handleResumeDownload}
                        >
                            <MdOutlineFileDownload size={24} /> Resume
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;