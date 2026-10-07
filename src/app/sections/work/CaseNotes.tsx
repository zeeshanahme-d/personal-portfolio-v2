import { Notes } from '@/app/components/drawing/Notes';
import { label } from '@/app/lib/styles';

/** Notes shown on each sheet before the rest fold away, so the section stays skimmable. One left over isn't worth
 * a click, so a sheet folds only when two or more remain. */
const SHOWN = 3;

/** A sheet's numbered notes, under the visual from lg. */
export function CaseNotes({ points }: { points: string[] }) {
  const folds = points.length > SHOWN + 1;
  return (
    <div className="lg:col-span-8 lg:col-start-1">
      <h4 className={label}>Notes</h4>
      <Notes items={folds ? points.slice(0, SHOWN) : points} className="mt-3" />
      {folds && (
        // The rest behind a native toggle, labelled like a drawing reference so it reads right open or closed.
        <details className="group">
          <summary className={`${label} flex cursor-pointer list-none items-center gap-2.5 py-3 transition-colors hover:text-body [&::-webkit-details-marker]:hidden`}>
            <span aria-hidden="true" className="text-base leading-none transition-transform duration-(--dur-base) group-open:rotate-45">
              +
            </span>
            Notes {SHOWN + 1}–{points.length}
          </summary>
          <Notes items={points.slice(SHOWN)} start={SHOWN} />
        </details>
      )}
    </div>
  );
}
