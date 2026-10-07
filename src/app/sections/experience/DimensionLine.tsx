import type { CSSProperties } from 'react';
import { scaleAt, type CareerLine } from '@/app/lib/career';
import { formatMonths } from '@/app/lib/period';

// The architect's slash ticks at both ends of a dimension line.
const ticks =
  'before:absolute before:-top-[7px] before:left-0 before:h-[13px] before:w-px before:rotate-45 before:bg-current after:absolute after:-top-[7px] after:right-0 after:h-[13px] after:w-px after:rotate-45 after:bg-current';

type Props = { line: CareerLine; index: number };

/**
 * One role or course as a dimension line, to scale, with its exact length written on it. The label hangs from the
 * line's start in the left half of the drawing and from its end in the right, so none runs off it on a phone.
 */
export function DimensionLine({ line, index }: Props) {
  const left = scaleAt(line.start);
  const right = 100 - scaleAt(line.end);
  const style = { '--left': `${left}%`, '--right': `${right}%`, '--i': index } as CSSProperties;

  return (
    <li style={style} className="relative h-11">
      {/* The tap target is taller than the one line of text. */}
      <a
        href={line.href}
        className={`dim-label absolute top-0 flex items-baseline gap-2.5 text-(length:--text-sm) whitespace-nowrap transition-transform duration-(--dur-base) ease-out hover:translate-x-[3px] after:absolute after:-inset-x-2 after:-inset-y-3 ${left > 50 ? 'right-(--right)' : 'left-(--left)'}`}
      >
        <span className="font-medium">{line.label}</span>
        <span className="text-ink-3 tabular-nums">{formatMonths(line.end - line.start)}</span>
        <span className="sr-only">, {line.period}</span>
      </a>
      {/* Studies are dashed construction lines, quieter than the work. */}
      <span
        aria-hidden="true"
        className={`dim-line absolute bottom-2 left-(--left) right-(--right) border-current ${ticks} ${
          line.work ? 'border-t-[1.5px] text-body' : 'border-t border-dashed text-label'
        }`}
      />
    </li>
  );
}
