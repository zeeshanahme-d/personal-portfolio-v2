import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import { useTheme } from '@/contexts/ThemeContext';

/** Hero-only particles — mount inside `#home` with `relative overflow-hidden`. */
const ParticlesContainer = () => {
    const [init, setInit] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => {
        const accent =
            typeof document !== 'undefined'
                ? getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#8b5cf6'
                : '#8b5cf6';
        const mid =
            typeof document !== 'undefined'
                ? getComputedStyle(document.documentElement).getPropertyValue('--gradient-accent-mid').trim() ||
                '#22d3ee'
                : '#22d3ee';
        const isLight = theme === 'light';
        return {
            fullScreen: { enable: false, zIndex: 0 },
            fpsLimit: 72,
            interactivity: {
                events: {
                    onClick: { enable: false, mode: 'push' },
                    onHover: { enable: true, mode: 'repulse' },
                    resize: true,
                },
                modes: {
                    push: { quantity: 60 },
                    repulse: { distance: 42, duration: 0.35 },
                },
            },
            particles: {
                color: { value: accent },
                links: {
                    color: mid,
                    distance: 118,
                    enable: true,
                    opacity: isLight ? 0.08 : 0.12,
                    width: 1,
                },
                collisions: { enable: true },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: { default: 'bounce' },
                    random: false,
                    speed: isLight ? 0.22 : 0.28,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 820 },
                    value: isLight ? 46 : 54,
                },
                opacity: { value: isLight ? 0.11 : 0.17 },
                shape: { type: 'circle' },
                size: { value: { min: 1, max: 3.5 } },
            },
            detectRetina: true,
        };
    }, [theme]);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles-hero"
            className="pointer-events-none absolute inset-0 z-1 h-full min-h-full w-full opacity-[0.88]"
            options={options}
        />
    );
};

export default ParticlesContainer;
