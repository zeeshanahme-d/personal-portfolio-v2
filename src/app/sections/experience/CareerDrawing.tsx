import { careerLines, careerYears } from '@/app/lib/career';
import { label } from '@/app/lib/styles';
import { DimensionLine } from './DimensionLine';
import { YearScale } from './YearScale';

/**
 * The career as a dimension drawing: one chained dimension line per role or course, to scale. Studies are dashed
 * construction lines, work is solid; it reads as a stair climbing to the right.
 */
export function CareerDrawing() {
  return (
    <figure className="dims mt-14 md:mt-20">
      <figcaption className={label}>
        Fig. 02.1 / To scale, {careerYears[0]}–{careerYears[careerYears.length - 1]}
      </figcaption>
      {/* column-reverse: oldest at the bottom, so the drawing climbs, while the list still reads oldest first. */}
      <ol className="mt-8 flex flex-col-reverse gap-3">
        {careerLines.map((line, i) => (
          <DimensionLine key={line.label} line={line} index={i} />
        ))}
      </ol>
      <YearScale />
    </figure>
  );
}
