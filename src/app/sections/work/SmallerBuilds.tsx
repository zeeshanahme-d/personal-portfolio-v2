import { builds } from '@/app/data/content';
import { BuildFigure } from './BuildFigure';
import { sheetBox, sheetRule } from './styles';

/** Smaller builds, as the set's appendix: figures A, B, C. */
export function SmallerBuilds() {
  return (
    <section id="builds" aria-labelledby="builds-title" className={sheetBox}>
      <p className={sheetRule}>
        <span>Appendix</span>
        <span>{builds.length} figures</span>
      </p>
      <h3 id="builds-title" className="mt-6 text-3xl font-semibold">
        Smaller builds
      </h3>
      <ul className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-3">
        {builds.map((build, i) => (
          <BuildFigure key={build.name} build={build} index={i} />
        ))}
      </ul>
    </section>
  );
}
