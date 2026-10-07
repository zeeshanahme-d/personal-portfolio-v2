import type { CaseStudy } from '@/app/data/content';
import { sheetNumber } from '@/app/lib/format';
import { wideCaps } from '@/app/lib/styles';
import { CaseNotes } from './CaseNotes';
import { CaseTitleBlock } from './CaseTitleBlock';
import { CaseVisual } from './CaseVisual';
import { sheetBox, sheetRule } from './styles';

/**
 * One project as a drawing sheet: sheet number, kind and client on a rule; the name across the full width,
 * in outline until it scrolls into view and then filled (the hero's hidden lines, brought into focus); the
 * summary and numbered notes on the left, and a title block of facts on the right.
 */
export function CaseSheet({ project, index }: { project: CaseStudy; index: number }) {
  const id = `w-${index + 1}`;
  return (
    <article id={id} aria-labelledby={`${id}-name`} className={sheetBox}>
      <p className={sheetRule}>
        <span className="tabular-nums">{sheetNumber(index)}</span>
        <span>{project.kind}</span>
        <span>{project.context}</span>
      </p>
      {/* Wide caps. fit-content, so the fill (styles/globals.css) sweeps the words, not the empty width after them;
          the end padding keeps it over the last letter, which the tight tracking pulls past the box. */}
      <h3 id={`${id}-name`} className={`sheet-name ${wideCaps} mt-7 w-fit pe-[0.06em] text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] text-snow`}>
        {project.name}
      </h3>

      <div className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-12">
        <CaseVisual project={project} />
        <CaseTitleBlock project={project} />
        <CaseNotes points={project.points} />
      </div>
    </article>
  );
}
