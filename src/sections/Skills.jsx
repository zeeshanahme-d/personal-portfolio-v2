import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaAws,
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiFirebase,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiAntdesign,
    SiRedux,
    SiShadcnui,
    SiFigma,
    SiVercel,
    SiNetlify,
    SiNestjs,
    SiTypescript,
    SiMui,
} from 'react-icons/si';
import Wrapper from '../components/Wrapper';

const SKILLS_DATA = {
    title: 'skills',
    info: [
        {
            title: 'Frontend Development',
            icons: [
                { name: 'HTML', icon: <FaHtml5 /> },
                { name: 'CSS', icon: <FaCss3 /> },
                { name: 'JavaScript', icon: <FaJs /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'React', icon: <FaReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Redux / Toolkit', icon: <SiRedux /> },
                { name: 'Zustand', icon: <FaReact /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                { name: 'Bootstrap', icon: <FaBootstrap /> },
                { name: 'Ant Design', icon: <SiAntdesign /> },
                { name: 'Material UI', icon: <SiMui /> },
                { name: 'Shadcn UI', icon: <SiShadcnui /> },
            ],
        },
        {
            title: 'Backend Development',
            icons: [
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'NestJS', icon: <SiNestjs /> },
                { name: 'Firebase', icon: <SiFirebase /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
            ],
        },
        {
            title: 'Other Tools',
            icons: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'GitHub', icon: <FaGithub /> },
                { name: 'AWS', icon: <FaAws /> },
                { name: 'Vercel', icon: <SiVercel /> },
                { name: 'Netlify', icon: <SiNetlify /> },
                { name: 'Figma', icon: <SiFigma /> },
            ],
        },
    ],
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-28 relative">
            <Wrapper>
                {/* Section Header */}
                <div className="flex flex-col justify-center items-center gap-y-4 mb-16 lg:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', duration: 1.25, delay: 0.2 }}
                        className="section-heading text-center">
                        My <span className="text-primary">Skills</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="section-subheading">
                        Building interactive and responsive web experiences using modern frontend technologies.
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="space-y-12">
                    {SKILLS_DATA.info.map((group, gIdx) => (
                        <motion.div
                            key={gIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: gIdx * 0.1 }}
                            className="text-center lg:text-left"
                        >
                            <h4 className="font-medium text-xl mb-6">{group.title}</h4>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {group.icons.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex items-center gap-2 rounded-lg px-4 py-3 glass-card hover:border-primary/50 transition-all duration-300 cursor-default"
                                    >
                                        <span className="text-xl md:text-2xl text-primary">{item.icon}</span>
                                        <span className="text-sm md:text-base font-normal">{item.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Skills;
