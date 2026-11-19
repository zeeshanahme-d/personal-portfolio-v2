import type { ReactNode } from 'react';

type Props = {
  items: ReactNode[];
  /** Drops the first rule, for a list that sits right under another rule (Education). */
  flush?: boolean;
  className?: string;
};

/** A list of notes, ruled between rows. */
export function Notes({ items, flush, className = '' }: Props) {
  return (
    <ul className={className}>
      {items.map((item, n) => (
        <li key={n} className={`border-t border-rule py-3 text-body-2 last:border-b ${flush ? 'first:border-t-0 first:pt-0' : ''}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
