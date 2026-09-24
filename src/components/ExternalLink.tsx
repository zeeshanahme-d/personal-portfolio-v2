import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Props = { href: string; children: ReactNode; className?: string };

/** A link that opens in a new tab: underline sweep on the label, arrow that nudges up and right. */
export function ExternalLink({ href, children, className = '' }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="link">{children}</span>
      <ArrowUpRight aria-hidden="true" className="arrow size-4 shrink-0 opacity-70" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
