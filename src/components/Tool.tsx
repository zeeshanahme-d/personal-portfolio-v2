import type { CSSProperties } from 'react';
import { marks } from '../marks';

/** Rough perceived brightness of a hex colour, 0–255. */
const brightness = (hex: string) => {
  const n = parseInt(hex, 16);
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
};

/**
 * A tool with its logo: text-coloured until hovered, then its brand colour. Used by Skills and by the
 * stack lines in Work and Experience. Tools without a logo get a dot. Render inside a <ul>.
 */
export function Tool({ name }: { name: string }) {
  const mark = marks[name];
  return (
    <li
      style={mark ? ({ '--brand': `#${mark.hex}` } as CSSProperties) : undefined}
      // Very dark brand colours get a lighter hover on dark backgrounds (see index.css).
      data-dark-brand={mark && brightness(mark.hex) < 80 ? '' : undefined}
      className="tool inline-flex items-center gap-2 font-medium"
    >
      {mark ? (
        // Wordmarks (Less) get a wider box so they read at the same size as the square logos.
        <svg aria-hidden="true" className={`tool-icon shrink-0 fill-current ${mark.wide ? 'h-4.5 w-8' : 'size-4.5'}`}>
          <use href={`/marks.svg#${mark.id}`} />
        </svg>
      ) : (
        <span aria-hidden="true" className="grid size-4.5 shrink-0 place-items-center">
          <span className="size-1.5 rounded-full bg-current opacity-40" />
        </span>
      )}
      {name}
    </li>
  );
}
