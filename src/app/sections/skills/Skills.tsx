import { Notes } from '@/app/components/drawing/Notes';
import { practices } from '@/app/data/content';
import { shippedTools } from '@/app/lib/skills';
import { label } from '@/app/lib/styles';
import { KitList } from './KitList';
import { ToolSchedule } from './ToolSchedule';

/**
 * Skills as a drawing set's schedule: a table of every tool that shipped, marked against the Work sheet it
 * shipped in (the column heads link back to the projects), then the rest of the kit and the general notes.
 * Built from the project stacks in data/content.ts, so it stays true as they change.
 */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="dark bg-night text-snow">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-x-10 gap-y-6 border-t border-night-line pt-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className={label}>
              <span className="tabular-nums">03</span> / Skills
            </p>
            {/* The count comes from the schedule below, so it stays true as projects change. */}
            <h2 id="skills-title" className="mt-5 max-w-[20ch] text-3xl font-semibold">
              {shippedTools.length} tools shipped in real projects.
            </h2>
          </div>
          <p className="max-w-md text-snow-2 lg:col-span-5 lg:col-start-8 lg:self-end">
            Each one marked against the project it shipped in, then the rest of the kit.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-16 md:mt-20 lg:grid-cols-12">
          <ToolSchedule />

          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className={label}>Also in the kit</h3>
            <KitList />

            <h3 className={`${label} mt-14`}>General notes</h3>
            <Notes items={practices} className="mt-4 text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
