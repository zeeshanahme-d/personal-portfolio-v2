import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/contexts/ThemeContext';

function TestimonialCard({ quote, name, role, className = '' }) {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const bodyTone = isLight ? 'text-[#4a4a4a]' : 'text-[#b8b8cc]';
    const roleTone = isLight ? 'text-[#888888]' : 'text-[#8b8ba3]';

    return (
        <SpotlightCard className={className} innerClassName="relative p-5 sm:p-6 md:p-8">
            <span
                className="font-display mb-1 block select-none text-[clamp(3.25rem,7vw,4.25rem)] font-bold leading-[0.52] -tracking-[0.07em] opacity-90 bg-[linear-gradient(160deg,var(--accent)_0%,var(--gradient-accent-mid)_100%)] bg-clip-text text-transparent"
                aria-hidden
            >
                &ldquo;
            </span>
            <blockquote className="m-0 border-none p-0">
                <p
                    className={`m-0 mb-7 max-w-[36ch] text-[0.9375rem] font-normal italic leading-[1.78] md:text-base ${bodyTone}`}
                >
                    {quote}
                </p>
                <footer>
                    <cite className="font-display block bg-[linear-gradient(118deg,var(--accent)_0%,var(--gradient-accent-mid)_100%)] bg-clip-text text-[1.0625rem] font-bold not-italic leading-snug text-transparent">
                        {name}
                    </cite>
                    <p className={`mt-1.5 text-[0.8125rem] font-normal leading-[1.45] ${roleTone}`}>{role}</p>
                </footer>
            </blockquote>
        </SpotlightCard>
    );
}

export default TestimonialCard;
