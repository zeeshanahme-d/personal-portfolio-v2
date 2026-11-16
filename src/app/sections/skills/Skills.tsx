import { Tool } from '@/app/components/ui/Tool';
import { practices } from '@/app/data/content';
import { layers } from '@/app/lib/skills';

/** The more projects a tool shipped in, the bigger its name. */
const size = (count: number) =>
  count >= 4
    ? 'font-display text-2xl font-semibold text-ink'
    : count >= 2
      ? 'text-xl font-semibold text-ink'
      : count === 1
        ? 'text-base font-medium text-ink'
        : 'text-sm font-normal';

/**
 * Skills as the stack itself: six ruled layers, from what people see down to how it ships. Built from the skill
 * groups and the project stacks in data/content.ts (lib/skills.ts), so the sizes stay true as projects change.
 */
export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="container-page py-20 md:py-28">
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 border-t border-line pt-8 lg:grid-cols-12">
        <h2 id="skills-title" className="max-w-[20ch] text-3xl font-semibold lg:col-span-6">
          The stack, top to bottom.
        </h2>
        <p className="max-w-md text-ink-2 lg:col-span-5 lg:col-start-8 lg:self-end">
          Six layers, from what people see down to how it ships. A bigger name means the tool shipped in more of the
          projects above.
        </p>
      </div>

      <ol className="mt-14 border-b border-line md:mt-20">
        {layers.map((layer) => (
          <li key={layer.name} className="grid grid-cols-1 gap-x-10 gap-y-5 border-t border-line py-9 lg:grid-cols-12 lg:py-11">
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl font-semibold">{layer.name}</h3>
              <p className="mt-1 text-sm text-ink-3">{layer.note}</p>
            </div>
            <ul aria-label={`${layer.name} tools`} className="flex flex-wrap items-baseline gap-x-6 gap-y-2.5 text-ink-2 lg:col-span-8">
              {layer.tools.map((t) => (
                <Tool key={t.name} name={t.name} className={size(t.count)}>
                  {t.count > 0 && (
                    <span className="sr-only">
                      , shipped in {t.count} project{t.count > 1 ? 's' : ''}
                    </span>
                  )}
                </Tool>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="mt-16 font-display text-2xl font-semibold md:mt-20">On every project</h3>
      <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {practices.map((p) => (
          <li key={p} className="border-t border-rule py-3 text-body-2">
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}
