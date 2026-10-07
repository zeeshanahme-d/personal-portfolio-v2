import type { ReactNode } from 'react';

type Props = { term: ReactNode; children: ReactNode; className?: string };

/** A row of a title block (inside a <dl>): term on the left, detail on the right, ruled above and below the last. */
export function Fact({ term, children, className = '' }: Props) {
  return (
    <div className={`grid grid-cols-[6.5rem_1fr] gap-4 border-t border-rule py-3.5 last:border-b ${className}`}>
      <dt className="pt-[0.15em] text-(length:--text-xs) tracking-[0.08em] text-label uppercase">{term}</dt>
      <dd className="text-(length:--text-sm) text-body">{children}</dd>
    </div>
  );
}
