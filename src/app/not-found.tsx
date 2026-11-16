import type { Metadata } from 'next';
import Link from 'next/link';
import { cases, experience } from '@/app/data/content';
import { NAV } from '@/app/data/navigation';
import { shippedTools } from '@/app/lib/skills';
import { label } from '@/app/lib/styles';

export const metadata: Metadata = {
  title: 'Page not found | Zeeshan Ahmed',
  description: 'This page doesn’t exist. The whole portfolio is one page: work, experience, skills, about and contact.',
};

// What each section holds. Counts come from the content, so they stay true.
const NOTES: Record<(typeof NAV)[number]['id'], string> = {
  work: `${cases.length} projects`,
  experience: `${experience.length} companies`,
  skills: `${shippedTools.length} tools`,
  about: 'Profile',
  contact: 'Email, links',
};

/**
 * Every URL that isn't the home page lands here. Next serves it with a real 404 status and a noindex tag, so dead
 * links drop out of Google instead of being indexed as thin pages. The sections are the way back.
 */
export default function NotFound() {
  return (
    <main id="main" className="container-page grow py-20 md:py-28">
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 border-t border-line pt-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h1 className="max-w-[16ch] text-4xl font-semibold">This page doesn’t exist.</h1>
          <p className="mt-6 max-w-md text-ink-2">
            The link you followed is broken or out of date. Everything lives on one page now: start from the top, or
            jump straight to a section.
          </p>
          <Link href="/" className="btn btn-solid mt-10">
            Back to the home page
          </Link>
        </div>

        <nav aria-labelledby="sections-title" className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <h2 id="sections-title" className={label}>
            Or jump to a section
          </h2>
          <ul className="mt-4 border-b border-rule">
            {NAV.map(({ id, label: title }) => (
              <li key={id}>
                <a href={`/#${id}`} className="flex items-baseline justify-between gap-4 border-t border-rule py-3">
                  <span className="link font-medium">{title}</span>
                  <span className="text-sm text-label">{NOTES[id]}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
