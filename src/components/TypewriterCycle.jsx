import { useEffect, useState } from 'react';

/**
 * Cycles through an array of words with a typewriter effect.
 * @param {{ words: string[], typeSpeed?: number, deleteSpeed?: number, pauseMs?: number, className?: string }} props
 */
function TypewriterCycle({
    words = [],
    typeSpeed = 80,
    deleteSpeed = 45,
    pauseMs = 2000,
    className = '',
}) {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

    useEffect(() => {
        if (words.length === 0) return;
        const current = words[wordIndex];
        let timeout;

        if (phase === 'typing') {
            if (displayText.length < current.length) {
                timeout = setTimeout(
                    () => setDisplayText(current.slice(0, displayText.length + 1)),
                    typeSpeed
                );
            } else {
                timeout = setTimeout(() => setPhase('pausing'), pauseMs);
            }
        } else if (phase === 'pausing') {
            setPhase('deleting');
        } else if (phase === 'deleting') {
            if (displayText.length > 0) {
                timeout = setTimeout(
                    () => setDisplayText(displayText.slice(0, -1)),
                    deleteSpeed
                );
            } else {
                setWordIndex((i) => (i + 1) % words.length);
                setPhase('typing');
            }
        }

        return () => clearTimeout(timeout);
    }, [phase, displayText, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

    return (
        <span className={className}>
            {displayText}
            <span
                className="ml-0.5 inline-block h-[1em] w-0.5 rounded-full bg-current align-middle"
                style={{
                    animation: 'scroll-hint 0.9s ease-in-out infinite',
                    opacity: phase === 'pausing' ? 0.3 : 1,
                }}
                aria-hidden
            />
        </span>
    );
}

export default TypewriterCycle;
