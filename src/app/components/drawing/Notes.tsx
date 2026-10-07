import type { ReactNode } from 'react';

type Props = {
  items: ReactNode[];
  /** Continues the numbering of an earlier list. */
  start?: number;
  /** Drops the first rule, for a list that sits right under another rule (Education). */
  flush?: boolean;
  className?: string;
};

/** Numbered drawing notes, ruled between rows. */
export function Notes({ items, start = 0, flush, className = '' }: Props) {
  return (
    <ol className={className}>
      {items.map((item, n) => (
        <li
          key={n}
          className={`grid grid-cols-[2rem_1fr] border-t border-rule py-3 text-body-2 last:border-b ${flush ? 'first:border-t-0 first:pt-0' : ''}`}
        >
          <span className="pt-[0.2em] text-(length:--text-xs) text-label tabular-nums">{start + n + 1}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}
