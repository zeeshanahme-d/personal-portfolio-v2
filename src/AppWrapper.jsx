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
            {/* Background Effects */}
            <div className="fixed inset-0 -z-20">
                <div className="absolute top-0 left-0 w-full h-full bg-background" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>
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