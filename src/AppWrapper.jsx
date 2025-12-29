import React, { lazy, Suspense } from 'react'
import Header from '@/components/Header';
import Banner from '@/sections/Banner';
import About from '@/sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Footer from './components/Footer';

const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const ParticlesContainer = lazy(() => import('./components/ParticlesContainer'));

const AppWrapper = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Banner />
            <About />
            <Suspense fallback={null}>
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
                <ParticlesContainer />
            </Suspense>
            <div className='w-full h-0.5 bg-dark-gray container mx-auto'></div>
            <Footer />
        </div>
    )
}

export default AppWrapper;