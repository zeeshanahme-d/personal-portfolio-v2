import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from '@/contexts/ThemeContext';

function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === 'light';

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            whileTap={{ scale: 0.94 }}
            className={`relative flex h-10 cursor-pointer w-10 items-center justify-center rounded-full border border-border/80 bg-card/50 text-foreground/90 shadow-sm backdrop-blur-md transition-[background-color,border-color,color] duration-300 hover:border-primary/25 hover:bg-primary/6 hover:text-primary ${className}`}
        >
            <span className="sr-only">Toggle color theme</span>
            <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -40, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="text-lg"
            >
                {isLight ? <HiMoon aria-hidden /> : <HiSun aria-hidden />}
            </motion.span>
        </motion.button>
    );
}

export default ThemeToggle;
