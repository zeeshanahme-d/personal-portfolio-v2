import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Banner from '@/sections/Banner';
import Footer from '@/components/Footer';

const About = lazy(() => import('@/sections/About'));
const Services = lazy(() => import('@/sections/Services'));
const Experience = lazy(() => import('@/sections/Experience'));
const Skills = lazy(() => import('@/sections/Skills'));
const Projects = lazy(() => import('@/sections/Projects'));
const Process = lazy(() => import('@/sections/Process'));
const Testimonials = lazy(() => import('@/sections/Testimonials'));
const Contact = lazy(() => import('@/sections/Contact'));

const AppWrapper = () => {
    return (
        <div className="app-wrapper">
            <div className="pointer-events-none fixed inset-0 -z-20">
                <div className="absolute inset-0 bg-background" />
                <div
                    className="absolute left-[-12%] top-0 h-[min(72vh,560px)] w-[min(72vw,560px)] rounded-full blur-[120px]"
                    style={{ backgroundColor: 'var(--mesh-1)' }}
                />
                <div
                    className="absolute bottom-0 right-[-8%] h-[min(58vh,480px)] w-[min(62vw,520px)] rounded-full blur-[100px]"
                    style={{ backgroundColor: 'var(--mesh-2)' }}
                />
                <div
                    className="absolute left-1/2 top-[38%] h-[min(40vh,320px)] w-[min(90vw,720px)] -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
                    style={{ backgroundColor: 'var(--accent-soft)' }}
                    aria-hidden
                />
            </div>
            <Header />
            <Banner />
            <Suspense fallback={null}>
                <About />
            </Suspense>
            <Suspense fallback={null}>
                <Skills />
            </Suspense>
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
            <Suspense fallback={null}>
                <Projects />
            </Suspense>
            <Suspense fallback={null}>
                <Services />
            </Suspense>
            <Suspense fallback={null}>
                <Process />
            </Suspense>
            <Suspense fallback={null}>
                <Testimonials />
            </Suspense>
            <Suspense fallback={null}>
                <Contact />
            </Suspense>
            <div
                className="container mx-auto h-px w-full max-w-5xl bg-linear-to-r from-transparent via-border to-transparent opacity-90"
                aria-hidden
            />
            <Footer />
        </div>
    );
};

export default AppWrapper;
