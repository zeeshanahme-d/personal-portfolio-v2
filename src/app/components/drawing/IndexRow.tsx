import type { ReactNode } from 'react';

type Props = {
  href: string;
  /** Sheet or section number on the left: W-01, A–C, 01. */
  number: string;
  title: string;
  /** The note after the leader: the kind of project, a count. */
  note: ReactNode;
  noteClassName?: string;
};

/**
 * A row of a drawing set's index (render inside an <ol>): number, title, then the dotted leader of a printed index,
 * as a rule that turns marigold on hover, to a note. Drawing colours, so it works on limestone and on pine.
 */
export function IndexRow({ href, number, title, note, noteClassName = '' }: Props) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-baseline gap-3.5 border-t border-rule py-3 transition-transform duration-(--dur-base) ease-out hover:translate-x-[3px]"
      >
        <span className="text-label tabular-nums">{number}</span>
        <span className="font-medium">{title}</span>
        <span
          className="h-px min-w-6 flex-1 self-center bg-rule transition-colors duration-(--dur-base) group-hover:bg-accent-bright"
          aria-hidden="true"
        />
        <span className={`text-sm text-label tabular-nums ${noteClassName}`}>{note}</span>
      </a>
    </li>
  );
}
