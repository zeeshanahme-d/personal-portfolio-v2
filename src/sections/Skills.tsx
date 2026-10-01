import { practices, skills } from '../content';
import { Tool } from '../components/Tool';
import { stagger } from '../hooks/useReveal';

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="container-page py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
        {/* Sticky heading, the same as Experience and About. */}
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start xl:col-span-3">
          <h2 id="skills-title" data-reveal="up" className="text-3xl font-semibold">
            Skills
          </h2>
          <p data-reveal="up" style={stagger(1)} className="mt-4 max-w-xs text-ink-2">
            Everything on my Resume, grouped by the job it does in a project.
          </p>
        </div>

        {/* Groups two across: the same hairline rows as the other sections, at half the height. */}
        <ol className="grid border-t border-ink md:grid-cols-2 md:gap-x-10 lg:col-span-8 xl:col-span-9">
          {skills.map((group, i) => (
            <li key={group.area} data-reveal="up" style={stagger(i % 2)} className="border-b border-line py-6">
              <h3 className="font-semibold tracking-tight">{group.area}</h3>
              <p className="mt-0.5 text-sm text-ink-3">{group.note}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
                {group.items.map((name) => (
                  <Tool key={name} name={name} />
                ))}
              </ul>
            </li>
          ))}
          <li data-reveal="up" style={stagger(skills.length % 2)} className="border-b border-line py-6">
            <h3 className="font-semibold tracking-tight">Practices</h3>
            <p className="mt-0.5 text-sm text-ink-3">How the work gets done</p>
            <ul className="bullets mt-4 text-sm text-ink-2">
              {practices.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
