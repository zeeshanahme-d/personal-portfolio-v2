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
            icons: [
                { name: 'HTML', icon: <FaHtml5 /> },
                { name: 'CSS', icon: <FaCss3 /> },
                { name: 'JavaScript', icon: <FaJs /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'React', icon: <FaReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Redux', icon: <SiRedux /> },
                { name: 'Tailwind', icon: <SiTailwindcss /> },
                { name: 'Bootstrap', icon: <FaBootstrap /> },
                { name: 'Ant Design', icon: <SiAntdesign /> },
                { name: 'MUI', icon: <SiMui /> },
                { name: 'Shadcn', icon: <SiShadcnui /> },
            ],
        },
        {
            title: 'Backend',
            subtitle: 'APIs & data',
            icons: [
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express', icon: <SiExpress /> },
                { name: 'NestJS', icon: <SiNestjs /> },
                { name: 'Firebase', icon: <SiFirebase /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
            ],
        },
        {
            title: 'Tooling',
            subtitle: 'Ship & collaborate',
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

function SkillChip({ item }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.92, y: 8 },
                show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                },
            }}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex cursor-default items-center gap-2.5 rounded-xl border border-border/90 bg-linear-to-br from-card/80 to-background/30 px-3.5 py-2.5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_12px_40px_-28px_var(--accent-soft)]"
        >
            <span className="text-lg text-primary md:text-xl">{item.icon}</span>
            <span className="text-[0.8125rem] font-semibold text-foreground/95">{item.name}</span>
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
                <div className="mb-5 border-b border-border pb-4">
                    <p className="section-eyebrow mb-1 text-primary/90">{group.subtitle}</p>
                    <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{group.title}</h3>
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
