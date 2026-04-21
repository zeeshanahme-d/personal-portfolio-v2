import { motion } from 'framer-motion';
import { HiBriefcase, HiCheckCircle, HiMapPin } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';
import { useTheme } from '@/contexts/ThemeContext';

const EXPERIENCE_DATA = [
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
            'Developed multilingual and RTL-supported interfaces for international clients.',
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
            'Worked on ioMoVo, an enterprise digital asset management platform displayed at IBC Show 2024.',
        highlights: [
            'Developed and optimized the ioPortal module with role-based access and file management.',
            'Migrated the codebase from JavaScript to TypeScript and upgraded React 16→18.',
            'Implemented localization and RTL support for global accessibility.',
            'Enhanced performance via lazy loading and code splitting — 30% load time reduction.',
        ],
    },
];

function TimelineEntry({ item }) {
    const { theme } = useTheme();

    return (
        <div className="relative flex gap-6 lg:gap-8">
            <div className={'lg:pl-10 w-full flex-1'}>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={revealFrom('right', 48)}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                >
                    <EntryCard item={item} theme={theme} />
                </motion.div>
            </div>

        </div>
    );
}

function EntryCard({ item, theme }) {
    return (
        <SpotlightCard className="h-full" innerClassName="group w-full flex h-full flex-col p-5 md:p-6 lg:p-7">
            <div className="mb-4 flex items-start gap-4">
                <div
                    className={`hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ring-1 ring-border ${theme === 'light' ? 'bg-[#1b1c35]' : 'bg-primary/10'
                        }`}
                >
                    {item.logo}
                </div>
                <div className="min-w-0 flex-1 space-y-0.5 pt-0.5">
                    <h3 className="text-base font-bold leading-snug text-foreground md:text-lg">
                        {item.title}
                    </h3>
                    <p className="text-sm leading-snug text-light-gray">
                        {item.company}
                        <span className="mx-1.5 text-border" aria-hidden>·</span>
                        {item.employmentType}
                    </p>
                    <span
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em]"
                        style={{
                            background: 'var(--accent-soft)',
                            color: 'var(--accent)',
                        }}
                    >
                        {item.period}
                        <span className="opacity-60">· {item.tenure}</span>
                    </span>
                </div>
            </div>

            <p className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <HiMapPin className="h-3 w-3 text-primary shrink-0" aria-hidden />
                {item.location} · {item.workMode}
            </p>

            <p className="mb-4 text-sm leading-relaxed text-light-gray md:text-[0.9375rem]">
                {item.summary}
            </p>

            <ul className="mt-auto space-y-2 border-t border-border pt-4">
                {item.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-light-gray">
                        <HiCheckCircle
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                            aria-hidden
                        />
                        {hl}
                    </li>
                ))}
            </ul>
        </SpotlightCard>
    );
}

const Experience = () => {

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

                <div className="relative">

                    <div className="flex flex-col space-y-16">
                        {EXPERIENCE_DATA.map((item, idx) => (
                            <TimelineEntry
                                key={item.company}
                                item={item}
                                index={idx}
                                totalCount={EXPERIENCE_DATA.length}
                            />
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Experience;
