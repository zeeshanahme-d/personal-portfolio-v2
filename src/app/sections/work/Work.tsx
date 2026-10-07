import { cases } from '@/app/data/content';
import { label } from '@/app/lib/styles';
import { CaseSheet } from './CaseSheet';
import { SmallerBuilds } from './SmallerBuilds';
import { WorkIndex } from './WorkIndex';

/**
 * Work as a drawing set: an index of sheets first (each row jumps to its project), then one sheet per
 * project, then the appendix. Pine, like the hero's foreground it continues.
 */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="dark bg-night text-snow">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-x-10 gap-y-12 border-t border-night-line pt-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className={label}>
              <span className="tabular-nums">01</span> / Work
            </p>
            <h2 id="work-title" className="mt-5 max-w-[20ch] text-3xl font-semibold">
              Products used by real businesses.
            </h2>
            <p className="mt-5 max-w-md text-snow-2">
              From enterprise asset management to pilgrim taxi bookings. On most of them, I was the only frontend developer.
            </p>
          </div>

          <WorkIndex />
        </div>

        <div className="mt-20 md:mt-28">
          {cases.map((project, i) => (
            <CaseSheet key={project.name} project={project} index={i} />
          ))}
          <SmallerBuilds />
        </div>
      </div>
    </section>
  );
}
