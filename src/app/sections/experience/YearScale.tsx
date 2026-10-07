import { careerYears, scaleAt } from '@/app/lib/career';

/** The drawing's scale bar: a tick and a label at each January. */
export function YearScale() {
  return (
    <div className="relative mt-4 h-7 border-t border-body text-(length:--text-xs) text-label tabular-nums" aria-hidden="true">
      {careerYears.map((y) => (
        <span
          key={y}
          style={{ left: `${scaleAt(y * 12)}%` }}
          className="absolute top-2 -translate-x-1/2 before:absolute before:-top-3.5 before:left-1/2 before:h-1.5 before:w-px before:bg-body"
        >
          {y}
        </span>
      ))}
    </div>
  );
}
