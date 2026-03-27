import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';
import { useTheme } from '@/contexts/ThemeContext';

const EXPERIENCE_DATA = {
    info: [
        {
            title: 'Frontend Developer',
            company: 'IR Solutions',
            employmentType: 'Full-time',
            period: 'Jun 2025 – Present',
            tenure: '10 mos',
            location: 'Islamabad, Pakistan',
            workMode: 'On-site',
            logo: <img src="/images/irlogowhite.png" alt="IR Solutions" className="w-14" />,
            summary:
                'Working as a Front-End Developer at IR Solutions, building modern, responsive web applications using React, Next.js and TypeScript.',
            highlights: [
                'Delivered 4 client projects in 5 months using Next.js, Tailwind CSS, and REST API integrations.',
                'Built dynamic dashboards and user interfaces with authentication and role-based access control.',
                'Implemented real-time functionality using WebSockets for live user interaction.',
                'Developed multilingual and RTL-supported front-end interfaces for international clients.',
            ],
        },
        {
            title: 'Frontend Developer',
            company: 'XtecSoft',
            employmentType: 'Full-time',
            period: 'Jan 2024 – Mar 2025',
            tenure: '1 yr 3 mos',
            location: 'Karachi, Pakistan',
            workMode: 'Hybrid',
            logo: <img src="/images/xtecsoft-logo.png" alt="Xtecsoft" className="w-20" />,
            summary:
                'Worked as a Front-End Developer on ioMoVo, an enterprise-level digital asset management platform showcased at IBC Show 2024.',
            highlights: [
                'Developed and optimized the ioPortal module with role-based access and file management.',
                'Migrated the legacy codebase from JavaScript to TypeScript and upgraded React (16→18).',
                'Implemented localization and RTL support for global accessibility.',
                'Enhanced app performance through lazy loading and code splitting, reducing load times by 30%.',
            ],
        },
    ],
};

const Experience = () => {
    const { theme } = useTheme();

    return (
        <section id="experience" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Career"
                    title="Work"
                    accent="experience"
                    description="Roles where I shipped product with cross-functional teams."
                    revealDirection="right"
                    HeadingIcon={HiBriefcase}
                />

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
                    {EXPERIENCE_DATA.info.map((item, idx) => (
                        <motion.div
                            key={item.company}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={revealFrom(idx % 2 === 0 ? 'left' : 'right', 46)}
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                            className="h-full"
                        >
                            <SpotlightCard className="h-full" innerClassName="group flex h-full flex-col p-6 md:p-8">
                                <div className="mb-6 flex items-start gap-4">
                                    <div className={`flex h-22 ${theme === 'light' ? 'bg-[#1b1c35]' : 'bg-primary/10'} w-22 shrink-0 items-center justify-center rounded-2xl ring-1 ring-border transition-colors duration-300`}>
                                        {item.logo}
                                    </div>
                                    <div className="min-w-0 flex-1 space-y-0.5 pt-0.5 text-left">
                                        <h3 className="text-lg font-bold leading-snug text-foreground md:text-xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm leading-snug text-light-gray">
                                            {item.company}
                                            <span className="mx-1.5 text-border" aria-hidden>
                                                ·
                                            </span>
                                            {item.employmentType}
                                        </p>
                                        <p className="text-sm leading-snug text-muted-foreground">
                                            {item.period}
                                            <span className="mx-1.5 text-border" aria-hidden>
                                                ·
                                            </span>
                                            {item.tenure}
                                        </p>
                                        <p className="text-sm leading-snug text-muted-foreground">
                                            {item.location}
                                            <span className="mx-1.5 text-border" aria-hidden>
                                                ·
                                            </span>
                                            {item.workMode}
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-5 text-sm leading-relaxed text-light-gray md:text-[0.9375rem]">
                                    {item.summary}
                                </p>

                                <ul className="mt-auto space-y-2.5 border-t border-border pt-5">
                                    {item.highlights.map((highlight, hIdx) => (
                                        <li
                                            key={hIdx}
                                            className="flex gap-2.5 text-sm leading-relaxed text-light-gray"
                                        >
                                            <span
                                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-linear-to-br from-primary to-(--gradient-accent-mid)"
                                                aria-hidden
                                            />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Experience;
