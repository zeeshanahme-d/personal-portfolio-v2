import type { ReactNode } from 'react';

type Props = { term: ReactNode; children: ReactNode; className?: string };

/** A row of facts (inside a <dl>): term on the left, detail on the right, ruled above and below the last. */
export function Fact({ term, children, className = '' }: Props) {
  return (
    <div className={`grid grid-cols-[6.5rem_1fr] gap-4 border-t border-rule py-3.5 last:border-b ${className}`}>
      <dt className="text-(length:--text-sm) text-label">{term}</dt>
      <dd className="text-(length:--text-sm) wrap-anywhere text-body">{children}</dd>
    </div>
  );
}
