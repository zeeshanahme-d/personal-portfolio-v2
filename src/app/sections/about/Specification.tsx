import { capabilities } from '@/app/data/content';

/** The four strengths. */
export function Specification() {
  return (
    <>
      <h3 className="mt-20 font-display text-2xl font-semibold md:mt-24">What I’m good at</h3>
      <ul className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => (
          <li key={c.title} className="border-t border-body pt-5 pb-7">
            <p className="font-semibold">{c.title}</p>
            <p className="mt-1.5 text-sm text-ink-2">{c.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
