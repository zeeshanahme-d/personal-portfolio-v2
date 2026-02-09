import { useState } from 'react';
import { motion } from 'framer-motion';
import Wrapper from '../components/Wrapper';
import { IoIosSend, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';

const Contact = () => {
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
        console.log('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 md:py-28 relative">
            <Wrapper>
                {/* Section Header */}
                <div className="flex flex-col justify-center items-center gap-y-4 mb-16 lg:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', duration: 1.25, delay: 0.2 }}
                        className="section-heading text-center">
                        Get In <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="section-subheading">
                        Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <motion.input
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                type="text"
                                required
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="h-14 rounded-lg px-6 bg-transparent border border-border outline-none focus:border-primary hover:border-primary/50 transition-all duration-300 text-foreground placeholder:text-dark-gray"
                            />
                            <motion.input
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                type="email"
                                required
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="h-14 rounded-lg px-6 bg-transparent border border-border outline-none focus:border-primary hover:border-primary/50 transition-all duration-300 text-foreground placeholder:text-dark-gray"
                            />
                        </div>

                        <motion.input
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            type="text"
                            required
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="h-14 rounded-lg px-6 bg-transparent border border-border outline-none focus:border-primary hover:border-primary/50 transition-all duration-300 text-foreground placeholder:text-dark-gray"
                        />

                        <motion.textarea
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            required
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="h-[200px] p-6 rounded-lg resize-none bg-transparent border border-border outline-none focus:border-primary hover:border-primary/50 transition-all duration-300 text-foreground placeholder:text-dark-gray"
                        />

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            type="submit"
                            // className="bg-primary hidden md:flex hover:bg-primary/80 transition-all duration-300 items-center justify-center gap-2 cursor-pointer h-10 rounded-lg px-4 text-sm font-medium"

                            className="w-full bg-primary px-8 py-4 rounded-lg cursor-pointer hover:bg-primary/80 transition-all duration-300 font-semibold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                        >
                            Send Message
                            <IoIosSend size={24} />
                        </motion.button>
                    </motion.form>

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:flex flex-col items-center justify-center"
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl" />

                            {/* Contact Card */}
                            <div className="relative glass-card p-8 rounded-2xl">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
                                    className="text-7xl mb-6 text-center"
                                >
                                    📬
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-3 text-center">Let's Work Together</h3>
                                <p className="text-light-gray text-center text-sm leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>

                                <div className="mt-6 pt-6 border-t border-border space-y-3">
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href="mailto:zeeshanahmed@example.com"
                                        className="flex items-center gap-3 text-sm text-light-gray hover:text-primary transition-colors"
                                    >
                                        <span className="text-primary"><IoMailOutline size={20} /></span>
                                        dev.zeeshanahmed@gmail.com
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href="https://linkedin.com/in/zeeshanahme-d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm text-light-gray hover:text-primary transition-colors"
                                    >
                                        <span className="text-primary"><IoLogoLinkedin size={20} /></span>
                                        LinkedIn Profile
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href="https://github.com/zeeshanahme-d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm text-light-gray hover:text-primary transition-colors"
                                    >
                                        <span className="text-primary"><IoLogoGithub size={20} /></span>
                                        GitHub Profile
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Contact;
