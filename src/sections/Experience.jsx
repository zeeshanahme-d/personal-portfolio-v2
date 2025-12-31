import { motion } from 'framer-motion';
import Wrapper from "../components/Wrapper"

const EXPERIENCE_DATA = {
    title: 'experience',
    info: [
        {
            company: 'IR Solutions',
            role: 'Front-End Developer (React / Next.js / JavaScript / TypeScript)',
            duration: 'June 2025 – Present',
            logo: <img src="images/irlogowhite.png" alt="IR Solutions" className="w-14" />,
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
            company: 'XtecSoft',
            role: 'Front-End Developer (React / TypeScript)',
            duration: 'Jan 2024 – Mar 2025',
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
    return (
        <section id="experience" className="py-20 md:py-28 relative">
            <Wrapper>
                {/* Section Header */}
                <div className="flex flex-col justify-center items-center gap-y-4 mb-16 lg:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', duration: 1.25, delay: 0.2 }}
                        className="section-heading text-center">
                        Work <span className="text-primary">Experience</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="section-subheading">
                        Built and optimized web applications while collaborating with cross-functional teams in various companies.
                    </motion.p>
                </div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {EXPERIENCE_DATA.info.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 md:p-8 rounded-3xl h-full flex flex-col hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, delay: 0.3 + idx * 0.1 }}
                                    className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl"
                                >
                                    {item.logo}

                                </motion.div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-medium">{item.company}</h4>
                                    <p className="text-sm text-primary font-medium">{item.duration}</p>
                                </div>
                            </div>

                            {/* Role */}
                            <h5 className="text-base md:text-lg font-medium mb-3">{item.role}</h5>

                            {/* Summary */}
                            <p className="text-sm md:text-base text-light-gray mb-4 leading-relaxed">
                                {item.summary}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-2 mt-auto">
                                {item.highlights.map((highlight, hIdx) => (
                                    <motion.li
                                        key={hIdx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 + hIdx * 0.1 }}
                                        className="text-sm text-light-gray flex items-start gap-2"
                                    >
                                        <span className="text-primary mt-1">▹</span>
                                        {highlight}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Experience;
