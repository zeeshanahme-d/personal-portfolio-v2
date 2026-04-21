import {
    FaReact, FaNodeJs, FaGitAlt,
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss,
    SiRedux, SiFirebase, SiMongodb, SiFigma,
    SiVercel, SiNestjs,
} from 'react-icons/si';

const ITEMS = [
    { name: 'React', Icon: FaReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
    { name: 'Redux', Icon: SiRedux },
    { name: 'Node.js', Icon: FaNodeJs },
    { name: 'NestJS', Icon: SiNestjs },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Git', Icon: FaGitAlt },
    { name: 'Figma', Icon: SiFigma },
    { name: 'Vercel', Icon: SiVercel },
];

// Duplicate the list so the marquee loops seamlessly
const DOUBLE = [...ITEMS, ...ITEMS];

function TickerItem({ name, Icon }) {
    return (
        <span className="flex shrink-0 items-center gap-2.5 px-6">
            <Icon className="text-lg shrink-0" style={{ color: 'var(--accent)' }} aria-hidden />
            <span
                className="text-xs font-semibold uppercase tracking-[0.18em] whitespace-nowrap"
                style={{ color: 'var(--text-secondary)' }}
            >
                {name}
            </span>
        </span>
    );
}

/**
 * A horizontally scrolling infinite marquee strip showing tech icons + names.
 * Pauses on hover. Insert between sections.
 */
function SkillsTicker() {
    return (
        <div
            className="w-full overflow-hidden border-y py-4 md:py-5"
            style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'color-mix(in srgb, var(--surface-elevated) 40%, transparent)',
                backdropFilter: 'blur(12px)',
            }}
            aria-label="Technology stack"
        >
            {/* Gradient masks on left/right edges */}
            <div className="relative mx-auto max-w-full">
                <div
                    className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-24"
                    style={{
                        background: 'linear-gradient(to right, var(--surface-base), transparent)',
                    }}
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-24"
                    style={{
                        background: 'linear-gradient(to left, var(--surface-base), transparent)',
                    }}
                    aria-hidden
                />

                {/* Scrolling track — pause-on-hover via CSS */}
                <div
                    className="flex"
                    style={{ '--marquee-duration': '28s' }}
                >
                    <div
                        className="flex animate-marquee"
                        style={{
                            animationPlayState: 'running',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.animationPlayState = 'paused';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.animationPlayState = 'running';
                        }}
                    >
                        {DOUBLE.map((item, idx) => (
                            <TickerItem key={`${item.name}-${idx}`} name={item.name} Icon={item.Icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsTicker;
