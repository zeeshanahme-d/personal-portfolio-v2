import type { ReactNode } from 'react';

/** A row of a title block (inside a <dl>): term on the left, detail on the right, ruled above and below the last. */
export function Fact({ term, children, className = '' }: { term: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-[6.5rem_1fr] gap-4 border-t border-rule py-3.5 last:border-b ${className}`}>
      <dt className="pt-[0.15em] text-(length:--text-xs) tracking-[0.08em] text-label uppercase">{term}</dt>
      <dd className="text-(length:--text-sm) text-body">{children}</dd>
    </div>
  );
}

/**
 * Numbered drawing notes, ruled between rows. `start` continues the numbering of an earlier list; `flush` drops the
 * first rule, for a list that sits right under another rule (Education).
 */
export function Notes({
  items,
  start = 0,
  flush,
  className = '',
}: {
  items: ReactNode[];
  start?: number;
  flush?: boolean;
  className?: string;
}) {
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
