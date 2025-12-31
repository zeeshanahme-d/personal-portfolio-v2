import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Wrapper from '../components/Wrapper';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { SiReact, SiTailwindcss, SiTypescript, SiNextdotjs, SiFirebase, SiMongodb, SiFramer, SiNodedotjs } from 'react-icons/si';

const projectsData = [
    {
        title: '3D Solar System Planets to Explore',
        description: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
        image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&auto=format&fit=crop&q=80',
        tags: [SiReact, SiTailwindcss, SiTypescript, SiFramer],
        link: '#',
    },
    {
        title: 'Yoom - Video Conferencing App',
        description: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
        tags: [SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs],
        link: '#',
    },
    {
        title: 'AI Image Generator',
        description: 'Generate stunning AI-powered images from text prompts using cutting-edge machine learning models.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
        tags: [SiReact, SiTypescript, SiNodedotjs, SiTailwindcss],
        link: '#',
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform with cart, payments, and admin dashboard for managing products.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
        tags: [SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss],
        link: '#',
    },
    {
        title: 'Real-time Chat Application',
        description: 'A modern real-time chat application with rooms, direct messages, and file sharing capabilities.',
        image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&auto=format&fit=crop&q=80',
        tags: [SiReact, SiFirebase, SiTypescript, SiFramer],
        link: '#',
    },
    {
        title: 'Task Management Dashboard',
        description: 'Collaborative task management tool with drag-and-drop, real-time updates, and team features.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80',
        tags: [SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs],
        link: '#',
    },
];

const ProjectCard = ({ project, idx }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group glass-card p-6 md:p-8 rounded-3xl hover:border-primary/50 transition-all duration-300"
        >

            <div className="relative rounded-2xl overflow-hidden mb-5 aspect-16/10 bg-linear-to-br from-primary/20 via-card/60 to-card/30">
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