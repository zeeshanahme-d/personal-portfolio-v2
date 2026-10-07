import { capabilities } from '@/app/data/content';
import { twoDigits } from '@/app/lib/format';
import { label } from '@/app/lib/styles';

/** The four strengths as the set's specification clauses, Spec 01–04. */
export function Specification() {
  return (
    <>
      <h3 className={`${label} mt-20 md:mt-24`}>Specification</h3>
      <ol className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <li key={c.title} className="border-t border-body pt-5 pb-7">
            <span className={`${label} tabular-nums`}>Spec {twoDigits(i + 1)}</span>
            <p className="mt-4 font-semibold">{c.title}</p>
            <p className="mt-1.5 text-sm text-ink-2">{c.body}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
