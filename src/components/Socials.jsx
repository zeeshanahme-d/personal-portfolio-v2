import { motion } from 'framer-motion';
import { RiFacebookFill, RiLinkedinFill, RiGithubFill, RiTwitterXFill } from 'react-icons/ri';

const SOCIALS_LINKS = [
    { name: 'Github', url: 'https://www.github.com/zeeshanahme-d', icon: RiGithubFill },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/zeeshanahme-d', icon: RiLinkedinFill },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100043989196385', icon: RiFacebookFill },
    { name: 'X', url: 'https://x.com/Zeeshanahme_d', icon: RiTwitterXFill },
];

const Socials = () => {
    return (
        <div className="flex items-center gap-1">
            {SOCIALS_LINKS.map((link, i) => {
                const Icon = link.icon;
                return (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{
                            scale: 1.12,
                            rotate: i % 2 === 0 ? 6 : -6,
                        }}
                        whileTap={{ scale: 0.94 }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl text-xl text-light-gray transition-[background-color,color] duration-300 hover:bg-primary/15 hover:text-primary"
                    >
                        <motion.span
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 2.8 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Icon />
                        </motion.span>
                    </motion.a>
                );
            })}
        </div>
    );
};

export default Socials;
