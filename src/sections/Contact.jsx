import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiEnvelope } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';
import { buttonClassNames } from '@/components/ui/Button';
import { IoIosSend, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';

const Contact = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section ref={sectionRef} id="contact" className="section-shell relative scroll-mt-24 overflow-hidden">
            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Contact"
                    title="Get in"
                    accent="touch"
                    description="Brief introductions, project inquiries, or roles—send a note and I will reply soon."
                    revealDirection="bottom"
                    HeadingIcon={HiEnvelope}
                />

                <div className="mx-auto grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.form
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={revealFrom('left', 40)}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3.5 lg:col-span-7"
                    >
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input-surface h-12 px-4 text-sm"
                            />
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-surface h-12 px-4 text-sm"
                            />
                        </div>

                        <input
                            type="text"
                            required
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="input-surface h-12 px-4 text-sm"
                        />

                        <textarea
                            required
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={8}
                            className="input-surface min-h-[168px] resize-none p-4 text-sm"
                        />

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={buttonClassNames({
                                variant: 'solid',
                                size: 'lg',
                                className: 'w-full cursor-pointer py-3.5 text-base',
                            })}
                        >
                            Send message
                            <IoIosSend size={22} />
                        </motion.button>
                    </motion.form>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={revealFrom('right', 40)}
                        className="lg:col-span-5"
                    >
                        <div className="relative">
                            <div
                                className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/8 blur-2xl"
                                aria-hidden
                            />
                            <SpotlightCard innerClassName="relative p-7 md:p-8">
                                <motion.div
                                    className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/25"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <IoMailOutline size={28} aria-hidden />
                                </motion.div>
                                <h3 className="font-display text-center text-lg font-semibold tracking-tight md:text-xl">
                                    Direct channels
                                </h3>
                                <p className="mt-2 text-center text-sm leading-relaxed text-light-gray">
                                    Prefer email or socials? Reach out anytime.
                                </p>

                                <div className="mt-7 space-y-0.5 border-t border-border pt-7">
                                    <motion.a
                                        whileHover={{ x: 4 }}
                                        href="mailto:dev.zeeshanahmed@gmail.com"
                                        className="flex w-fit items-center gap-3 rounded-lg py-2.5 text-sm text-light-gray transition-colors duration-300 hover:text-primary"
                                    >
                                        <motion.span
                                            className="text-primary"
                                            whileHover={{ rotate: [0, -12, 12, 0] }}
                                            transition={{ duration: 0.45 }}
                                        >
                                            <IoMailOutline size={20} />
                                        </motion.span>
                                        dev.zeeshanahmed@gmail.com
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ x: 4 }}
                                        href="https://linkedin.com/in/zeeshanahme-d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-fit items-center gap-3 rounded-lg py-2.5 text-sm text-light-gray transition-colors duration-300 hover:text-primary"
                                    >
                                        <motion.span className="text-primary" whileHover={{ y: -2 }}>
                                            <IoLogoLinkedin size={20} />
                                        </motion.span>
                                        LinkedIn
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ x: 4 }}
                                        href="https://github.com/zeeshanahme-d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-fit items-center gap-3 rounded-lg py-2.5 text-sm text-light-gray transition-colors duration-300 hover:text-primary"
                                    >
                                        <motion.span className="text-primary" whileHover={{ y: -2 }}>
                                            <IoLogoGithub size={20} />
                                        </motion.span>
                                        GitHub
                                    </motion.a>
                                </div>
                            </SpotlightCard>
                        </div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Contact;
