import type { CSSProperties, ReactNode } from 'react';
import { marks } from '@/app/data/marks';
import { brightness } from '@/app/lib/color';

type Props = { name: string; className?: string; children?: ReactNode };

/**
 * A tool with its logo: text-coloured until hovered, then its brand colour. Tools without a logo get a dot.
 * The logo scales with the text (Skills sets names at several sizes). Render inside a <ul>.
 */
export function Tool({ name, className = 'font-medium', children }: Props) {
  const mark = marks[name];
  return (
    <li
      style={mark ? ({ '--brand': `#${mark.hex}` } as CSSProperties) : undefined}
      // Very dark brand colours get a lighter hover on dark backgrounds (see styles/globals.css).
      data-dark-brand={mark && brightness(mark.hex) < 80 ? '' : undefined}
      className={`tool inline-flex items-baseline gap-2 ${className}`}
    >
      {mark ? (
        // Wordmarks (Less, GSAP) get a wider box so they read at the same size as the square logos.
        <svg aria-hidden="true" className={`tool-icon shrink-0 self-center fill-current ${mark.wide ? 'h-[1.1em] w-[1.95em]' : 'size-[1.1em]'}`}>
          <use href={`/marks.svg#${mark.id}`} />
        </svg>
      ) : (
        <span aria-hidden="true" className="grid size-[1.1em] shrink-0 place-items-center self-center">
          <span className="size-1.5 rounded-full bg-current opacity-40" />
        </span>
      )}
      {name}
      {children}
    </li>
  );
}
