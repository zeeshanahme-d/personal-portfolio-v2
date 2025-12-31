import { motion } from 'framer-motion';
import Wrapper from '../components/Wrapper';
import { HiAcademicCap } from 'react-icons/hi2';

const EDUCATION_DATA = {
    title: 'education',
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
        <section id="education" className="py-20 md:py-28 relative">
            <Wrapper>
                <div className="flex flex-col justify-center items-center gap-y-4 mb-16 lg:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', duration: 1.25, delay: 0.2 }}
                        className="section-heading text-center">
                        My <span className="text-primary">Education</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="section-subheading">
                        Academic background and professional certifications that strengthen my web development expertise.
                    </motion.p>
                </div>

                {/* Education Cards */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {EDUCATION_DATA.info.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="glass-card p-6 md:p-8 rounded-3xl hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, delay: 0.3 + idx * 0.1 }}
                                    className="w-16 h-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center"
                                >
                                    <HiAcademicCap className="text-3xl text-primary" />
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h4 className="text-lg md:text-xl font-medium mb-0.5">{item.university}</h4>
                                    <p className="text-base text-primary font-medium mb-0.5">{item.degree}</p>
                                    <p className="text-sm text-light-gray mb-4">{item.duration}</p>

                                    <ul className="space-y-2">
                                        {item.highlights.map((highlight, hIdx) => (
                                            <motion.li
                                                key={hIdx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.5 + hIdx * 0.1 }}
                                                className="text-sm text-light-gray flex items-start gap-2"
                                            >
                                                <span className="text-primary mt-1">▹</span>
                                                {highlight}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Education;
