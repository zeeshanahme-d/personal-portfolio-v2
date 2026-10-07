import { IndexRow } from '@/app/components/drawing/IndexRow';
import { builds, cases } from '@/app/data/content';
import { sheetNumber } from '@/app/lib/format';
import { label } from '@/app/lib/styles';

/** The drawing set's index of sheets: each row jumps to its project, the last one to the appendix. */
export function WorkIndex() {
  return (
    <nav aria-label="Projects" className="lg:col-span-5 lg:col-start-8">
      <p className={label}>Index</p>
      <ol className="mt-4 border-b border-rule">
        {cases.map((c, i) => (
          <IndexRow key={c.name} href={`#w-${i + 1}`} number={sheetNumber(i)} title={c.name} note={c.kind} noteClassName="max-sm:hidden" />
        ))}
        <IndexRow href="#builds" number="A–C" title="Smaller builds" note={builds.length} />
      </ol>
    </nav>
  );
}
