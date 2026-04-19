import { motion } from 'framer-motion';
import { HiUser } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';

const developerProfile = {
    name: 'Zeeshan Ahmed',
    skills: ['JavaScript', 'TypeScript', 'React ', 'Next.js'],
    experience: '2+ Years',
    passion: `Building scalable web apps with great UI/UX and \n clean code`,
};

const About = () => {

    return (
        <section id="about" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Profile"
                    title="About"
                    accent="Me"
                    description="What I do, how I work, and the stack I use day to day."
                    revealDirection="bottom"
                    HeadingIcon={HiUser}
                />

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={revealFrom('left', 48)}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                            Get to <span className="gradient-text">know</span> me
                        </h3>

                        <div className="space-y-5 text-light-gray">
                            <p className="text-[0.9375rem] font-light leading-relaxed md:text-base">
                                Front-end developer with{' '}
                                <strong className="font-medium text-foreground">
                                    two years of professional experience
                                </strong>{' '}
                                shipping responsive apps in React, Next.js, TypeScript, and JavaScript—focused on
                                performance, accessibility, and maintainable UI.
                            </p>
                            <p className="text-[0.9375rem] font-light leading-relaxed md:text-base">
                                I contributed to{' '}
                                <strong className="font-medium text-foreground">ioMoVo</strong>
                                , an award-winning digital asset platform recognized at{' '}
                                <strong className="font-medium text-foreground">IBC Show 2024</strong>
                                . I&apos;m open to roles where I can ship quality product and keep growing.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.12 }}
                            className="flex flex-wrap items-end gap-10 border-t border-border pt-8"
                        >
                            <div>
                                <p className="font-display mb-1 text-3xl font-bold text-primary md:text-4xl">2+</p>
                                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                    Years experience
                                </p>
                            </div>
                            <div>
                                <p className="font-display mb-1 text-3xl font-bold text-primary md:text-4xl">25+</p>
                                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                    Projects shipped
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                        variants={revealFrom('right', 48)}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-lg">
                            <div
                                className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
                                aria-hidden
                            />
                            <SpotlightCard innerClassName="relative overflow-hidden p-5 md:p-6 lg:p-8">
                                <div className="mb-5 flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                                </div>
                                <pre className="font-sora overflow-x-auto text-xs leading-relaxed text-light-gray md:text-sm">
                                    <code>
                                        <span className="text-primary">const</span> developer = {'{'}
                                        {'\n'} <span className="text-emerald-400/90">name</span>:{' '}
                                        <span className="text-foreground">&quot;{developerProfile.name}&quot;</span>,
                                        {'\n'} <span className="text-emerald-400/90">skills</span>: [
                                        {developerProfile.skills.map((skill, i) => (
                                            <span key={skill}>
                                                <span className="text-foreground">&quot;{skill}&quot;</span>
                                                {i < developerProfile.skills.length - 1 && ', '}
                                            </span>
                                        ))}
                                        ],
                                        {'\n'} <span className="text-emerald-400/90">experience</span>:{' '}
                                        <span className="text-primary">&quot;{developerProfile.experience}&quot;</span>,
                                        {'\n'} <span className="text-emerald-400/90">passion</span>:{' '}
                                        <span className="text-foreground">&quot;{developerProfile.passion}&quot;</span>
                                        {'\n'}
                                        {'}'};
                                    </code>
                                </pre>
                            </SpotlightCard>
                        </div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default About;
