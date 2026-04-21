import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowTopRightOnSquare, HiViewColumns, HiCodeBracket } from 'react-icons/hi2';
import {
    SiReact, SiTailwindcss, SiTypescript, SiNextdotjs,
    SiJavascript, SiSass, SiRedux, SiMui,
} from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';
import { buttonClassNames } from '@/components/ui/buttonClassNames';

const TAG_NAMES = {
    [SiReact]: 'React',
    [SiJavascript]: 'JS',
    [SiSass]: 'Sass',
    [SiRedux]: 'Redux',
    [SiTypescript]: 'TS',
    [SiMui]: 'MUI',
    [SiNextdotjs]: 'Next.js',
    [SiTailwindcss]: 'Tailwind',
};

const projectsData = [
    {
        title: 'Movix — Movie & TV Discovery',
        description:
            'Responsive movie discovery app built with React and Redux Toolkit, integrated with TMDB API, featuring real-time search, infinite scroll, video playback, dynamic routing, and lazy loading.',
        image: '/images/movix.png',
        tags: [
            { Icon: SiReact, label: 'React' },
            { Icon: SiJavascript, label: 'JavaScript' },
            { Icon: SiSass, label: 'Sass' },
            { Icon: SiRedux, label: 'Redux' },
        ],
        link: 'https://movie-discovery-platform.vercel.app/',
        github: 'https://github.com/zeeshanahme-d',
        featured: true,
    },
    {
        title: 'ioPortal — AI-Powered Digital Asset Collaboration Platform',
        description:
            'ioPortal is an AI-powered digital asset sharing platform within ioMoVo enabling secure, branded collaboration. Built with React, TypeScript, Redux Toolkit, and Material UI.',
        image: '/images/iomovo.png',
        tags: [
            { Icon: SiReact, label: 'React' },
            { Icon: SiTypescript, label: 'TypeScript' },
            { Icon: SiMui, label: 'MUI' },
            { Icon: SiSass, label: 'Sass' },
        ],
        link: 'https://www.iomovo.io/products/ioportal',
        github: null,
    },
    {
        title: 'Linea Properties — Real-Estate App',
        description:
            'Modern SPA marketing website for an African real-estate app with smooth scrolling, animated CTAs, and an EmailJS-powered contact form.',
        image: '/images/lineaproperties.png',
        tags: [
            { Icon: SiReact, label: 'React' },
            { Icon: SiNextdotjs, label: 'Next.js' },
            { Icon: SiTailwindcss, label: 'Tailwind' },
            { Icon: SiTypescript, label: 'TypeScript' },
        ],
        link: 'https://lineaproperties.com/',
        github: null,
    },
    {
        title: 'Organics by Appa — E-Commerce',
        description:
            'E-commerce platform with automated AWS deployment via GitHub Actions, EmailJS integration, and responsive design optimised for all devices.',
        image: '/images/organicsbyappa.png',
        tags: [
            { Icon: SiReact, label: 'React' },
            { Icon: SiNextdotjs, label: 'Next.js' },
            { Icon: SiTailwindcss, label: 'Tailwind' },
            { Icon: SiTypescript, label: 'TypeScript' },
        ],
        link: 'https://organicsbyappa.pk/',
        github: null,
    },
];

/* ────────────────────────────
   Featured card (full-width)
───────────────────────────── */
function FeaturedCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const ordinal = String(index + 1).padStart(2, '0');

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={revealFrom('bottom', 40)}
            className="col-span-1 md:col-span-2"
        >
            <SpotlightCard
                className="h-full"
                innerClassName="group relative h-full overflow-hidden p-5 md:p-7 lg:p-9"
            >
                {/* Decorative ordinal */}
                <span
                    className="pointer-events-none absolute right-5 top-4 select-none leading-none font-bold md:right-8 md:top-6"
                    style={{
                        fontSize: 'clamp(5rem, 14vw, 9rem)',
                        color: 'var(--border-subtle)',
                        fontFamily: 'var(--font-Display)',
                        letterSpacing: '-0.04em',
                    }}
                    aria-hidden
                >
                    {ordinal}
                </span>

                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                    {/* Text side */}
                    <div className="flex flex-col gap-5 pr-0 lg:pr-4 lg:order-1 order-2">
                        <span
                            className="w-fit rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em]"
                            style={{
                                background: 'var(--accent-soft)',
                                color: 'var(--accent)',
                            }}
                        >
                            Featured Project
                        </span>

                        <h3
                            className="font-display text-2xl font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-primary md:text-3xl"
                        >
                            {project.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-light-gray md:text-[0.9375rem]">
                            {project.description}
                        </p>

                        {/* Tag pills */}
                        <div className="flex flex-wrap items-center gap-2">
                            {project.tags.map(({ Icon, label }) => (
                                <span
                                    key={label}
                                    className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-semibold"
                                    style={{
                                        borderColor: 'var(--border-strong)',
                                        color: 'var(--text-secondary)',
                                        background: 'var(--surface-card)',
                                    }}
                                >
                                    <Icon className="text-primary" aria-hidden /> {label}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonClassNames({ variant: 'solid', size: 'sm', className: 'cursor-pointer text-[#fff]!' })}
                            >
                                Live site <HiArrowTopRightOnSquare className="h-3.5 w-3.5" aria-hidden />
                            </a>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonClassNames({ variant: 'ghost', size: 'sm', className: 'cursor-pointer' })}
                                >
                                    <FaGithub className="h-4 w-4" aria-hidden /> GitHub
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Image side */}
                    <div
                        className="relative overflow-hidden rounded-2xl ring-1 ring-border lg:order-2 order-1"
                        style={{ aspectRatio: '16/9' }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-top"
                            animate={{ scale: hovered ? 1.04 : 1 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <div
                            className="pointer-events-none absolute inset-0 rounded-2xl"
                            style={{
                                background: 'linear-gradient(to top, rgba(5,5,14,0.5) 0%, transparent 60%)',
                            }}
                        />
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}

/* ────────────────────────────
   Standard card
───────────────────────────── */
function ProjectCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const ordinal = String(index + 1).padStart(2, '0');
    const dir = index % 2 === 0 ? 'bottom' : 'top';

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
            <SpotlightCard className="h-full" innerClassName="group relative flex h-full flex-col overflow-hidden p-5 md:p-6 lg:p-8">
                {/* Ordinal */}
                <span
                    className="pointer-events-none absolute right-4 top-3 select-none leading-none font-bold"
                    style={{
                        fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                        color: 'var(--border-subtle)',
                        fontFamily: 'var(--font-Display)',
                        letterSpacing: '-0.04em',
                    }}
                    aria-hidden
                >
                    {ordinal}
                </span>

                <div className="relative flex h-full flex-col justify-between gap-4">
                    <div className="space-y-4">
                        {/* Image container with hover overlay */}
                        <div
                            className="relative aspect-video overflow-hidden rounded-2xl bg-linear-to-br ring-1 ring-border cursor-pointer"
                            style={{ background: 'linear-gradient(135deg, var(--accent-soft), var(--surface-card))' }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="absolute inset-x-4 top-6 h-full w-[calc(100%-2rem)] rounded-lg object-cover object-top shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)] ring-1 ring-black/20"
                                animate={{ scale: hovered ? 1.03 : 1 }}
                                transition={{ duration: 0.45 }}
                            />

                            {/* Slide-up overlay with description */}
                            <AnimatePresence>
                                {hovered && (
                                    <motion.div
                                        initial={{ y: '100%' }}
                                        animate={{ y: 0 }}
                                        exit={{ y: '100%' }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute inset-0 flex items-end rounded-2xl p-4"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(5,5,14,0.92) 0%, rgba(5,5,14,0.6) 60%, transparent 100%)',
                                        }}
                                    >
                                        <p className="line-clamp-3 text-sm leading-relaxed text-[#f4f4ff]!">
                                            {project.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div
                                className="pointer-events-none absolute inset-0 rounded-2xl"
                                style={{ background: 'linear-gradient(to top, rgba(5,5,14,0.4) 0%, transparent 50%)' }}
                            />
                        </div>

                        {/* Title (description now in overlay) */}
                        <h3 className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary md:text-xl">
                            {project.title}
                        </h3>
                    </div>

                    {/* Footer: tags + link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
                        <div className="flex flex-wrap items-center gap-2">
                            {project.tags.map(({ Icon, label }) => (
                                <span
                                    key={label}
                                    className="flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold"
                                    style={{
                                        borderColor: 'var(--border-strong)',
                                        color: 'var(--text-secondary)',
                                        background: 'var(--surface-card)',
                                    }}
                                >
                                    <Icon className="h-3 w-3 text-primary" aria-hidden /> {label}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-end xl:justify-normal xl:w-auto w-full gap-3 shrink-0">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light-gray transition-colors duration-300 hover:text-primary"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="h-4 w-4" />
                                </a>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link flex shrink-0 items-center gap-2 text-sm font-semibold text-light-gray transition-colors duration-300 hover:text-primary!"
                            >
                                Live site
                                <HiArrowTopRightOnSquare className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}

/* ────────────────────────────
   Projects section
───────────────────────────── */
const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const featured = projectsData[0];
    const rest = projectsData.slice(1);
    const visibleRest = showAll ? rest : rest.slice(0, 3);

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
                    {/* Featured first project */}
                    <FeaturedCard project={featured} index={0} />

                    {/* Standard cards */}
                    {visibleRest.map((project, idx) => (
                        <ProjectCard key={project.title} project={project} index={idx + 1} />
                    ))}
                </div>

                {!showAll && rest.length > 3 && (
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
                            className={buttonClassNames({ variant: 'ghost', size: 'md', className: 'cursor-pointer px-10 py-3 text-sm' })}
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
