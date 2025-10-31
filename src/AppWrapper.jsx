import React from 'react'
import Header from '@/components/Header';
import Banner from '@/sections/Banner';
import About from '@/sections/About';
import ParticlesContainer from './components/ParticlesContainer';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const AppWrapper = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <ParticlesContainer />
        </div>
    )
}

export default AppWrapper;