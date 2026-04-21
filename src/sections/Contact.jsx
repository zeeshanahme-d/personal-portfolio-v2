import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiEnvelope, HiClock } from 'react-icons/hi2';
import Wrapper from '../components/Wrapper';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/SpotlightCard';
import { revealFrom } from '../utils/motion';
import { buttonClassNames } from '@/components/ui/buttonClassNames';
import { IoIosSend, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';
import { useLocalTime } from '@/hooks/useLocalTime';

function FloatingInput({ id, type = 'text', label, name, value, onChange, required }) {
    return (
        <div className="group relative">
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder=" "
                className="input-surface peer h-14 w-full px-4 pt-5 pb-2 text-sm"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute left-4 top-4 origin-left text-sm text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:scale-[0.75] peer-focus:top-2 peer-focus:scale-[0.75]"
                style={{ color: 'var(--text-muted)' }}
            >
                {label}
            </label>
        </div>
    );
}

function FloatingTextarea({ id, label, name, value, onChange, required, rows = 6 }) {
    return (
        <div className="group relative">
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder=" "
                rows={rows}
                className="input-surface peer w-full resize-none px-4 pt-7 pb-3 text-sm"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute left-4 top-3 origin-left text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:scale-[0.75] peer-focus:top-2 peer-focus:scale-[0.75]"
                style={{ color: 'var(--text-muted)' }}
            >
                {label}
            </label>
        </div>
    );
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const localTime = useLocalTime('Asia/Karachi', {
        hour: '2-digit', minute: '2-digit', hour12: true,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="section-shell relative scroll-mt-24 overflow-hidden">
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 opacity-20 blur-3xl"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, var(--accent) 0%, transparent 70%)' }}
                aria-hidden
            />

            <Wrapper className="relative z-1">
                <SectionHeader
                    eyebrow="Contact"
                    title="Get in"
                    accent="touch"
                    description="Brief introductions, project inquiries, or roles — send a note and I'll reply soon."
                    revealDirection="bottom"
                    HeadingIcon={HiEnvelope}
                />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-14 text-left"
                >
                    <h3
                        className="font-display leading-[1.05] tracking-[-0.04em] text-foreground"
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-Display)',
                        }}
                    >
                        Let&apos;s build something{' '}
                        <span className="gradient-text">remarkable</span> together.
                    </h3>

                    <div className="mt-5 flex flex-wrap items-center gap-5">
                        <span className="flex items-center gap-2">
                            <span
                                className="h-2.5 w-2.5 rounded-full bg-green-400 animate-availability"
                                aria-hidden
                            />
                            <span
                                className="text-xs font-semibold uppercase tracking-[0.18em]"
                                style={{ color: '#4ade80' }}
                            >
                                Available for work
                            </span>
                        </span>

                        <span
                            className="h-4 w-px"
                            style={{ background: 'var(--border-strong)' }}
                            aria-hidden
                        />

                        <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                            <HiClock className="h-3.5 w-3.5 text-primary" aria-hidden />
                            Pakistan (PKT) — {localTime}
                        </span>
                    </div>
                </motion.div>

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
                            <FloatingInput
                                id="contact-name"
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <FloatingInput
                                id="contact-email"
                                type="email"
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <FloatingInput
                            id="contact-subject"
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <FloatingTextarea
                            id="contact-message"
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={7}
                        />

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={submitted}
                            className={buttonClassNames({
                                variant: 'solid',
                                size: 'lg',
                                className: 'w-full cursor-pointer py-3.5 text-base disabled:opacity-70',
                            })}
                        >
                            {submitted ? (
                                <>
                                    <span>Message sent!</span>
                                    <span aria-hidden>✓</span>
                                </>
                            ) : (
                                <>
                                    Send message
                                    <IoIosSend size={22} aria-hidden />
                                </>
                            )}
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
                                className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-15"
                                style={{ background: 'var(--accent)' }}
                                aria-hidden
                            />
                            <SpotlightCard innerClassName="relative p-5 md:p-6 lg:p-8">
                                <motion.div
                                    className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ring-1"
                                    style={{
                                        background: 'var(--accent-soft)',
                                        color: 'var(--accent)',
                                        ringColor: 'var(--accent-ring)',
                                    }}
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

                                <div className="mt-7 space-y-1 border-t border-border pt-7">
                                    {[
                                        {
                                            Icon: IoMailOutline,
                                            label: 'dev.zeeshanahmed@gmail.com',
                                            href: 'mailto:dev.zeeshanahmed@gmail.com',
                                        },
                                        {
                                            Icon: IoLogoLinkedin,
                                            label: 'LinkedIn',
                                            href: 'https://linkedin.com/in/zeeshanahme-d',
                                        },
                                        {
                                            Icon: IoLogoGithub,
                                            label: 'GitHub',
                                            href: 'https://github.com/zeeshanahme-d',
                                        },
                                    ].map(({ Icon, label, href }) => (
                                        <motion.a
                                            key={label}
                                            whileHover={{ x: 5 }}
                                            href={href}
                                            target={href.startsWith('mailto') ? undefined : '_blank'}
                                            rel="noopener noreferrer"
                                            className="flex w-fit items-center gap-3 rounded-lg py-2.5 text-sm text-light-gray transition-colors duration-300 hover:text-primary"
                                        >
                                            <motion.span
                                                className="text-primary"
                                                whileHover={{ rotate: [0, -14, 14, 0] }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <Icon size={20} />
                                            </motion.span>
                                            {label}
                                        </motion.a>
                                    ))}
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
