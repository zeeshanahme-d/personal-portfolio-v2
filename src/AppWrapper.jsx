import React, { lazy, Suspense } from 'react'
import Header from '@/components/Header';
import Banner from '@/sections/Banner';
import About from '@/sections/About';

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
                <Projects />
                <Contact />
                <ParticlesContainer />
            </Suspense>
        </div>
    )
}

export default AppWrapper;