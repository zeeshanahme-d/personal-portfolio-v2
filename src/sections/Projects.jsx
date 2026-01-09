import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Wrapper from '../components/Wrapper';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { SiReact, SiTailwindcss, SiTypescript, SiNextdotjs, SiFirebase, SiMongodb, SiFramer, SiNodedotjs, SiJavascript, SiSass, SiRedux } from 'react-icons/si';

const projectsData = [
    {
        title: 'Linea Properties – African Real-Estate App',
        description: 'Modern single-page marketing website built with Next.js, React, TypeScript, and Tailwind CSS for an African real-estate mobile app, featuring smooth scrolling, animated CTAs, reusable sections, and an EmailJS-powered contact form with responsive design.',
        image: '/images/lineaproperties.png',
        tags: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
        link: 'https://lineaproperties.com/',
    },
    {
        title: 'Organics by Appa - Natural Snacks E-Commerce Platform',
        description: 'Modern e-commerce platform built with Next.js & TypeScript, featuring automated AWS deployment via GitHub Actions, EmailJS integration, and responsive design optimized for all devices.',
        image: '/images/organicsbyappa.png',
        tags: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
        link: 'https://organicsbyappa.pk/',
    },
    {
        title: 'Movix - Movie & TV Show Discovery Platform',
        description: 'Responsive movie discovery app built with React and Redux Toolkit, integrated with TMDB API, featuring real-time search, infinite scroll, video playback, dynamic routing, and performance optimizations like lazy loading and code splitting.',
        image: '/images/movix.png',
        tags: [SiReact, SiJavascript, SiSass, SiRedux],
        link: 'https://movie-discovery-platform.vercel.app/',
    },
    {
        title: 'AI Language Translator – LinguaSpeak',
        description: 'AI-powered language translator built with React, TypeScript, and Vite, supporting 112+ languages via the Lingva.ml API. Features debounced real-time translation.',
        image: '/images/linguaspeak.png',
        tags: [SiReact, SiTypescript, SiSass],
        link: 'https://ai-languagetranslator.vercel.app/',
    },
];

const ProjectCard = ({ project, idx }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group glass-card p-3 sm:p-5 md:p-8 rounded-3xl hover:border-primary/50 transition-all duration-300"
        >

            <div className='flex flex-col justify-between h-full'>
                <div className='space-y-5'>
                    <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-linear-to-br from-primary/20 via-card/60 to-card/30">
                        {/* Floating Image with Tilt */}
                        <div className="absolute inset-x-4 top-8 bottom-[-20%] group-hover:bottom-[-10%] rounded-4xl transition-all duration-500 ease-out">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top rounded-xl shadow-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"
                                style={{
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(var(--primary-rgb, 220 38 38) / 0.1)'
                                }}
                            />
                        </div>
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-background/30 to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                        <h3 className="text-lg md:text-xl font-medium  group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-light-gray leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
                {/* Footer: Tech Icons + Link */}
                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                        {project.tags.map((Icon, tagIdx) => (
                            <div
                                key={tagIdx}
                                className="w-8 h-8 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-light-gray hover:text-primary hover:border-primary/50 transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </div>
                        ))}
                    </div>
                    <a
                        href={project.link}
                        target='_blank'
                        className="flex items-center gap-2 text-sm font-medium text-light-gray hover:text-primary! transition-colors group/link"
                    >
                        Check Live Site
                        <HiArrowTopRightOnSquare className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleCount = showAll ? projectsData.length : 4;

    return (
        <section id="projects" className="py-20 md:py-28 relative">
            <Wrapper>
                {/* Section Header */}
                <div className="flex flex-col justify-center items-center gap-y-4 mb-16 lg:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', duration: 1.25, delay: 0.2 }}
                        className="section-heading text-center">
                        Featured <span className="text-primary">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="section-subheading">
                        Here you will find some of the personal and client projects that I created with the latest tech stack.
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <AnimatePresence>
                        {projectsData.slice(0, visibleCount).map((project, idx) => (
                            <ProjectCard key={idx} project={project} idx={idx} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button */}
                {!showAll && projectsData.length > 4 && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            variant="outline"
                            size="lg"
                            onClick={() => setShowAll(true)}
                            className="border-primary/30 border border-input bg-background hover:bg-primary hover:text-accent-foreground h-12 px-6 transition-all duration-300 rounded-lg cursor-pointer"
                        >
                            Load More Projects
                        </button>
                    </motion.div>
                )}
            </Wrapper>
        </section>
    );
};

export default Projects;