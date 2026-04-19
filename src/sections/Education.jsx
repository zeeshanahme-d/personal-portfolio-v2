import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';

const EDUCATION_DATA = {
    info: [
        {
            university: 'Govt. Dehli Science College',
            degree: 'Intermediate (HSC) in Computer Science',
            duration: 'June 2021 – June 2023',
            highlights: [
                'Completed coursework focused on programming fundamentals, computer systems, and mathematics.',
                'Built a strong foundation in problem-solving, algorithms, and front-end development concepts.',
            ],
        },
        {
            university: 'Saylani Mass IT Training (SMIT)',
            degree: 'MERN Stack Web and App Development Certification',
            duration: 'Dec 2022 – Dec 2023',
            highlights: [
                'Completed a professional MERN Stack training program focused on React, Node.js, and modern web technologies.',
                'Developed multiple full-stack projects using JavaScript, TypeScript, and RESTful APIs.',
            ],
        },
    ],
};

const Education = () => {

    return (
        <section id="education" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Background"
                    title="Education"
                    description="Formal study and certifications that support my engineering practice."
                    revealDirection="left"
                    HeadingIcon={HiAcademicCap}
                />
                <div className="mx-auto max-w-3xl space-y-4">
                    {EDUCATION_DATA.info.map((item, idx) => (
                        <motion.div
                            key={item.university}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={revealFrom(idx % 2 === 0 ? 'bottom' : 'top', 36)}
                            whileHover={{ y: -3 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                        >
                            <SpotlightCard innerClassName="p-5 md:p-6 lg:p-8">
                                <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                                    <motion.div
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-border"
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <HiAcademicCap className="text-2xl text-primary" aria-hidden />
                                    </motion.div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">
                                            {item.university}
                                        </h3>
                                        <p className="mt-1 text-base font-medium text-primary">{item.degree}</p>
                                        <p className="mt-1 text-sm text-muted-foreground">{item.duration}</p>
                                        <ul className="mt-5 space-y-2.5">
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
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Education;
