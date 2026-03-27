import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare, HiViewColumns } from 'react-icons/hi2';
import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiJavascript,
    SiSass,
    SiRedux,
    SiMui,
} from 'react-icons/si';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';
import { buttonClassNames } from '@/components/ui/buttonClassNames';

const projectsData = [
    {
        title: 'Movix - Movie & TV Show Discovery Platform',
        description:
            'Responsive movie discovery app built with React and Redux Toolkit, integrated with TMDB API, featuring real-time search, infinite scroll, video playback, dynamic routing, and performance optimizations like lazy loading and code splitting.',
        image: '/images/movix.png',
        tags: [SiReact, SiJavascript, SiSass, SiRedux],
        link: 'https://movie-discovery-platform.vercel.app/',
    },
    {
        title: 'ioPortal - AI-Powered Digital Asset Sharing Platform',
        description:
            'ioPortal is an AI-powered digital asset sharing platform within ioMoVo that enables secure, branded collaboration across multiple storage systems. Built with React, TypeScript, Redux Toolkit, and Material UI.',
        image: '/images/iomovo.png',
        tags: [SiReact, SiTypescript, SiMui, SiSass, SiRedux],
        link: 'https://www.iomovo.io/products/ioportal',
    },
    {
        title: 'Linea Properties – African Real-Estate App',
        description:
            'Modern single-page marketing website built with Next.js, React, TypeScript, and Tailwind CSS for an African real-estate mobile app, featuring smooth scrolling, animated CTAs, reusable sections, and an EmailJS-powered contact form with responsive design.',
        image: '/images/lineaproperties.png',
        tags: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
        link: 'https://lineaproperties.com/',
    },
    {
        title: 'Organics by Appa - Natural Snacks E-Commerce Platform',
        description:
            'Modern e-commerce platform built with Next.js & TypeScript, featuring automated AWS deployment via GitHub Actions, EmailJS integration, and responsive design optimized for all devices.',
        image: '/images/organicsbyappa.png',
        tags: [SiReact, SiNextdotjs, SiTailwindcss, SiTypescript],
        link: 'https://organicsbyappa.pk/',
    },
];

const ProjectCard = ({ project, idx }) => {
    const dir = idx % 2 === 0 ? 'bottom' : 'top';
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={revealFrom(dir, 42)}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="h-full"
        >
            <SpotlightCard className="h-full" innerClassName="group flex h-full flex-col p-5 sm:p-6 md:p-8">
                <div className="flex h-full flex-col justify-between gap-6">
                    <div className="space-y-5">
                        <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-linear-to-br from-primary/20 via-card/50 to-background/80 ring-1 ring-border">
                            <div className="absolute inset-x-4 top-7 bottom-[-18%] transition-[bottom] duration-500 ease-out group-hover:bottom-[-10%]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="h-full w-full rounded-lg object-cover object-top shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)] ring-1 ring-black/20 transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/35 to-transparent" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary md:text-xl">
                                {project.title}
                            </h3>
                            <p className="line-clamp-3 text-sm leading-relaxed text-light-gray md:text-[0.9375rem] md:line-clamp-4">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                        <div className="flex flex-wrap items-center gap-2">
                            {project.tags.map((Icon, tagIdx) => (
                                <motion.div
                                    key={tagIdx}
                                    whileHover={{ scale: 1.12, rotate: 6 }}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-light-gray transition-colors duration-300 group-hover:border-primary/35 group-hover:text-primary"
                                >
                                    <Icon className="h-4 w-4" aria-hidden />
                                </motion.div>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex shrink-0 items-center gap-2 text-sm font-semibold text-light-gray transition-colors duration-300 hover:text-primary"
                        >
                            Live site
                            <HiArrowTopRightOnSquare className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleCount = showAll ? projectsData.length : 4;

    return (
        <section id="projects" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Portfolio"
                    title="Featured"
                    accent="projects"
                    description="Selected client and personal work built with modern front-end stacks."
                    revealDirection="top"
                    HeadingIcon={HiViewColumns}
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {projectsData.slice(0, visibleCount).map((project, idx) => (
                        <ProjectCard key={project.title} project={project} idx={idx} />
                    ))}
                </div>

                {!showAll && projectsData.length > 4 && (
                    <motion.div
                        className="mt-12 flex justify-center md:mt-14"
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                    >
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setShowAll(true)}
                            className={buttonClassNames({
                                variant: 'ghost',
                                size: 'md',
                                className: 'cursor-pointer px-10 py-3 text-sm',
                            })}
                        >
                            Load more work
                        </motion.button>
                    </motion.div>
                )}
            </Wrapper>
        </section>
    );
};

export default Projects;
