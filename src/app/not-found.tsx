import type { Metadata } from 'next';
import Link from 'next/link';
import { IndexRow } from '@/app/components/drawing/IndexRow';
import { cases, experience } from '@/app/data/content';
import { NAV } from '@/app/data/navigation';
import { twoDigits } from '@/app/lib/format';
import { shippedTools } from '@/app/lib/skills';
import { label } from '@/app/lib/styles';

export const metadata: Metadata = {
  title: 'Page not found | Zeeshan Ahmed',
  description: 'This page doesn’t exist. The whole portfolio is one page: work, experience, skills, about and contact.',
};

// What each section holds, as the index's notes. Counts come from the content, so they stay true.
const NOTES: Record<(typeof NAV)[number]['id'], string> = {
  work: `${cases.length} projects`,
  experience: `${experience.length} companies`,
  skills: `${shippedTools.length} tools`,
  about: 'Profile',
  contact: 'Email, links',
};

/**
 * Every URL that isn't the home page lands here. Next serves it with a real 404 status and a noindex tag, so dead
 * links drop out of Google instead of being indexed as thin pages. Styled as a missing sheet of the drawing set,
 * with the set's index as the way back.
 */
export default function NotFound() {
  return (
    <main id="main" className="container-page grow py-20 md:py-28">
      <div className="grid gap-x-10 gap-y-14 border-t border-line pt-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className={label}>
            <span className="tabular-nums">404</span> / Not found
          </p>
          <h1 className="mt-5 max-w-[16ch] text-4xl font-semibold">This sheet isn’t in the set.</h1>
          <p className="mt-6 max-w-md text-ink-2">
            The link you followed is broken or out of date. Everything lives on one page now: start from the top, or
            jump straight to a section.
          </p>
          <Link href="/" className="btn btn-solid mt-10">
            Back to the home page
          </Link>
        </div>

        <nav aria-label="Sections" className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className={label}>Index</p>
          <ol className="mt-4 border-b border-rule">
            {NAV.map(({ id, label: title }, i) => (
              <IndexRow key={id} href={`/#${id}`} number={twoDigits(i + 1)} title={title} note={NOTES[id]} />
            ))}
          </ol>
        </nav>
      </div>
    </main>
  );
}
