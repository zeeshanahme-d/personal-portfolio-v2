'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Notes } from '@/app/components/drawing/Notes';

const SHOWN = 3;

/** A project's points: the first three, and a button for the rest when there are more. */
export function CasePoints({ points }: { points: string[] }) {
  const [open, setOpen] = useState(false);
  const more = points.length - SHOWN;
  return (
    <>
      <Notes items={open || more <= 0 ? points : points.slice(0, SHOWN)} className="mt-8" />
      {more > 0 && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-snow-2 transition-colors hover:text-snow"
        >
          {open ? 'Show less' : `Show ${more} more`}
          <ChevronDown aria-hidden="true" className={`size-4 transition-transform duration-(--dur-base) ${open ? 'rotate-180' : ''}`} />
        </button>
      )}
    </>
  );
}
