import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    HiUser,
    HiViewColumns,
    HiEnvelope,
} from 'react-icons/hi2';
import { MdOutlineFileDownload } from "react-icons/md";
import { Spin as Hamburger } from 'hamburger-react'



const navData = [
    { name: 'About', path: '/about', icon: <HiUser /> },
    { name: 'Skills', path: '/about', icon: <HiUser /> },
    { name: 'Experiance', path: '/about', icon: <HiUser /> },
    { name: 'Education', path: '/about', icon: <HiUser /> },
    { name: 'Projects', path: '/work', icon: <HiViewColumns /> },
    {
        name: 'Contact',
        path: '/contact',
        icon: <HiEnvelope />,
    },
];

const Header = () => {

    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    const scrollNavbar = () => {
        if (window.scrollY > 80) {
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

    const handleResumeDownload = async () => {
        try {
            const url = '/resume/Zeeshan_Ahmed_Resume.pdf';
            const response = await fetch(url);
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'Zeeshan Ahmed Resume.pdf';
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            alert('Error downloading the resume.');
        } finally {
        }
    };

    return (
        <header className={`w-full fixed z-10 transition-all duration-500 flex translate-y-0 items-center p-0 h-20 ${show === "hide" ? "translate-y-[-80px]" : show === "show" ? "backdrop-blur-xl contrast-[0.9]" : ""}`}>
            <div className="container my-0 mx-auto">
                <div className="flex justify-between flex-row items-center gap-2 py-2">
                    <Link to="/" className=''>
                        <h1 className='text-2xl md:text-4xl font-medium tracking-wider font-Lobster  letter-spacing-0-05em'>
                            Zeeshan <span className="text-primary">Ahmed</span>
                        </h1>
                    </Link>
                    <nav className='navBar hidden lg:block'>
                        <div className='flex items-center gap-x-1'>
                            {navData.map((link, index) => {
                                return (
                                    <Link
                                        to={link.path}
                                        key={index}
                                        className="nav-link">
                                        <div>{link.name}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>
                    <div className=" block md:hidden">
                        <Hamburger rounded size={24} />
                    </div>
                    <button
                        className={`bg-primary hidden md:flex items-center justify-center gap-2 cursor-pointer h-6 md:h-8 rounded-md text-sm px-2 md:px-3 md:text-base resume-download-btn`}
                        onClick={handleResumeDownload}
                    >
                        <MdOutlineFileDownload size={20} /> Resume
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;