import type { CSSProperties } from 'react';

/** Inline style that staggers a revealed element by `index` steps. */
export const stagger = (index: number) => ({ '--i': index }) as CSSProperties;

/** Inline style that delays a load animation (hero entrance) by `ms`. */
export const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties;
