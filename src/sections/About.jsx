import { motion } from 'framer-motion';
import Wrapper from '../components/Wrapper';

const developerProfile = {
    name: "Zeeshan Ahmed",
    skills: ["JavaScript", "TypeScript", "React ", "Next.js"],
    experience: "2+ Years",
    passion: `Building scalable web apps with great UI/UX and \n clean code`,
};

const About = () => {
    return (
        <section id="about" className="py-20 md:py-28 relative">
            <Wrapper>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Section Header */}
                    <div className="flex flex-col justify-center items-center gap-y-4 mb-16 lg:mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', duration: 1.25, delay: 0.2 }}
                            className="section-heading text-center">
                            About <span className="text-primary">Me</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="section-subheading">
                            Here you will find more information about me, what I do, and my current skills.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center items-start gap-y-5"
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                Get to <span className="text-primary">know</span> me!
                            </h3>

                            <div className="space-y-4 text-light-gray">
                                <p className="font-light leading-relaxed text-base xl:text-lg">
                                    Dedicated Front-End Developer with <strong className="text-foreground font-medium">2 years of professional experience</strong> building responsive and high quality web applications using React, Next.js, JavaScript, and TypeScript. Skilled in creating clean, user friendly interfaces, improving performance, and delivering smooth, accessible experiences.
                                </p>
                                <p className="font-light leading-relaxed text-base xl:text-lg">
                                    I was part of the team behind <strong className="text-foreground font-medium">ioMoVo</strong>, an award winning digital asset management platform showcased at <strong className="text-foreground font-medium">IBC Show 2024</strong>, recognized for its innovation and performance.
                                </p>
                                <p className="font-light leading-relaxed text-base xl:text-lg">
                                    I'm passionate about learning new technologies, solving real world problems, and creating products that make a difference.
                                </p>
                                <p className="font-light leading-relaxed text-base xl:text-lg">
                                    I'm open to job opportunities where I can contribute, learn, and grow. If you have a role that matches my skills and experience, don't hesitate to reach out!
                                </p>
                            </div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="w-full flex items-center justify-start gap-8 mt-6"
                            >
                                <div className="relative pr-8 border-r border-border">
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                                        className="text-3xl xl:text-5xl font-extrabold text-primary mb-1"
                                    >
                                        2+
                                    </motion.p>
                                    <p className="text-xs uppercase tracking-widest text-light-gray">
                                        Years of experience
                                    </p>
                                </div>
                                <div className="relative">
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: 'spring', stiffness: 100, delay: 0.7 }}
                                        className="text-3xl xl:text-5xl font-extrabold text-primary mb-1"
                                    >
                                        25+
                                    </motion.p>
                                    <p className="text-xs uppercase tracking-widest text-light-gray">
                                        Finished projects
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex items-center justify-center"
                        >
                            <div className="relative w-full max-w-xl">
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary/30 rounded-lg animate-pulse" />
                                <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-primary/20 rounded-full blur-2xl animate-pulse" />

                                {/* Code Card */}
                                <div className="relative glass-card p-6 rounded-xl">
                                    {/* Window dots */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <span className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>

                                    {/* Code Block */}
                                    <pre className="text-sm md:text-base font-family-sora overflow-x-auto text-light-gray leading-relaxed">
                                        <code>
                                            <span className="text-primary">const</span> developer = {"{"}
                                            {"\n"}  <span className="text-green-400">name</span>:{" "}
                                            <span className="text-yellow-400">"{developerProfile.name}"</span>,
                                            {"\n"}  <span className="text-green-400">skills</span>: [
                                            {developerProfile.skills.map((skill, i) => (
                                                <span key={skill}>
                                                    <span className="text-yellow-400">"{skill}"</span>
                                                    {i < developerProfile.skills.length - 1 && ", "}
                                                </span>
                                            ))}
                                            ],
                                            {"\n"}  <span className="text-green-400">experience</span>:{" "}
                                            <span className="text-primary">"{developerProfile.experience}"</span>,
                                            {"\n"}  <span className="text-green-400">passion</span>:{" "}
                                            <span className="text-yellow-400">
                                                "{developerProfile.passion}"
                                            </span>
                                            {"\n"}{"}"};
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </Wrapper>
        </section>
    );
};

export default About;
