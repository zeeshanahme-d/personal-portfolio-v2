import React from 'react';
import Wrapper from "../components/Wrapper";
import Socials from "../components/Socials";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='py-8'>
            <Wrapper>
                <div className='flex justify-center gap-y-5 sm:justify-between flex-col sm:flex-row items-center'>
                    <span className='text-sm text-light-gray '>© Copyright {new Date().getFullYear()} . Made by
                        <Link href='/' className='text-white! underline! font-family-lobster text-base! -tracking-tight'> Zeeshan Ahmed</Link>
                    </span>
                    <Socials />
                </div>
            </Wrapper>
        </section>
    )
}

export default Footer;