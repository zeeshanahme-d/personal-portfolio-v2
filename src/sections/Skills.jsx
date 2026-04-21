import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap,
    FaNodeJs, FaGitAlt, FaGithub, FaAws,
} from 'react-icons/fa';
import {
    SiNextdotjs, SiFirebase, SiTailwindcss, SiMongodb,
    SiExpress, SiAntdesign, SiRedux, SiShadcnui, SiFigma,
    SiVercel, SiNetlify, SiNestjs, SiTypescript, SiMui,
} from 'react-icons/si';
import { HiCodeBracket } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom, staggerContainer } from '../utils/motion';

const SKILLS_DATA = {
    info: [
        {
            title: 'Frontend',
            subtitle: 'Interfaces & design systems',
            accent: 'var(--accent)',
            icons: [
                { name: 'HTML5', icon: <FaHtml5 />, },
                { name: 'CSS3', icon: <FaCss3 />, },
                { name: 'JavaScript', icon: <FaJs />, },
                { name: 'TypeScript', icon: <SiTypescript />, },
                { name: 'React', icon: <FaReact />, },
                { name: 'Next.js', icon: <SiNextdotjs />, },
                { name: 'Redux', icon: <SiRedux />, },
                { name: 'Tailwind', icon: <SiTailwindcss /> },
                { name: 'Bootstrap', icon: <FaBootstrap />, },
                { name: 'Ant Design', icon: <SiAntdesign />, },
                { name: 'MUI', icon: <SiMui />, },
                { name: 'Shadcn', icon: <SiShadcnui />, },
            ],
        },
        {
            title: 'Backend',
            subtitle: 'APIs & data',
            accent: 'var(--gradient-accent-mid)',
            icons: [
                { name: 'Node.js', icon: <FaNodeJs />, },
                { name: 'Express', icon: <SiExpress />, },
                { name: 'NestJS', icon: <SiNestjs />, },
                { name: 'Firebase', icon: <SiFirebase />, },
                { name: 'MongoDB', icon: <SiMongodb />, },
            ],
        },
        {
            title: 'Tooling',
            subtitle: 'Ship & collaborate',
            accent: 'var(--amber-accent)',
            icons: [
                { name: 'Git', icon: <FaGitAlt />, },
                { name: 'GitHub', icon: <FaGithub />, },
                { name: 'AWS', icon: <FaAws />, },
                { name: 'Vercel', icon: <SiVercel />, },
                { name: 'Netlify', icon: <SiNetlify />, },
                { name: 'Figma', icon: <SiFigma />, },
            ],
        },
    ],
};

function SkillChip({ item }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.88, y: 10, filter: 'blur(4px)' },
                show: {
                    opacity: 1, scale: 1, y: 0, filter: 'blur(0px)',
                    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
                },
            }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative flex cursor-default flex-col gap-1.5 rounded-xl border px-3 py-2.5 transition-[border-color,box-shadow] duration-300"
            style={{
                borderColor: hovered ? 'color-mix(in srgb, var(--accent) 35%, transparent)' : 'var(--border-subtle)',
                background: 'linear-gradient(135deg, var(--surface-card) 0%, color-mix(in srgb, var(--surface-base) 60%, transparent) 100%)',
                boxShadow: hovered ? '0 8px 32px -12px var(--accent-soft)' : 'none',
            }}
        >
            <div className="flex items-center gap-2">
                <motion.span
                    animate={hovered ? { rotate: 12, scale: 1.15 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="text-lg text-primary md:text-xl"
                >
                    {item.icon}
                </motion.span>
                <span className="text-[0.8125rem] font-semibold text-foreground/95">{item.name}</span>
            </div>
        </motion.div>
    );
}

function SkillPanel({ group, colClass, reveal }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={revealFrom(reveal, 40)}
            className={colClass}
        >
            <SpotlightCard className="h-full" innerClassName="flex h-full flex-col p-5 md:p-6 lg:p-8">
                <div
                    className="mb-5 border-b border-border pb-4 pl-3"
                    style={{ borderLeft: `3px solid ${group.accent}` }}
                >
                    <p className="section-eyebrow mb-1" style={{ color: group.accent }}>
                        {group.subtitle}
                    </p>
                    <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                        {group.title}
                    </h3>
                </div>

                <motion.div
                    variants={staggerContainer(0.04, 0.02)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-20px' }}
                    className="flex flex-wrap gap-2.5"
                >
                    {group.icons.map((item) => (
                        <SkillChip key={item.name} item={item} />
                    ))}
                </motion.div>
            </SpotlightCard>
        </motion.div>
    );
}

const Skills = () => {
    const [front, back, tools] = SKILLS_DATA.info;

    return (
        <section id="skills" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Stack"
                    title="Technical"
                    accent="skills"
                    description="Technologies I use to design, build, and ship production interfaces."
                    revealDirection="left"
                    HeadingIcon={HiCodeBracket}
                />

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
                    <SkillPanel group={front} colClass="lg:col-span-7" reveal="bottom" />
                    <SkillPanel group={back} colClass="lg:col-span-5" reveal="right" />
                    <SkillPanel group={tools} colClass="lg:col-span-12" reveal="top" />
                </div>
            </Wrapper>
        </section>
    );
};

export default Skills;
