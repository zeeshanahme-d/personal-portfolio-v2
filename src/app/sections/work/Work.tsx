import { builds, cases } from '@/app/data/content';
import { BuildFigure } from './BuildFigure';
import { ProjectPanel } from './ProjectPanel';
import { ProjectStory } from './ProjectStory';

const slug = (name: string) => `project-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

/** Work as a story: one project after another, with a list beside them marking the one in view; smaller builds last. */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="dark bg-night text-snow">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 border-t border-night-line pt-8 lg:grid-cols-12">
          <h2 id="work-title" className="max-w-[20ch] text-3xl font-semibold lg:col-span-6">
            Products used by real businesses.
          </h2>
          <p className="max-w-md text-snow-2 lg:col-span-5 lg:col-start-8 lg:self-end">
            From an AI thumbnail generator I built alone, front end to API, to enterprise asset management and pilgrim taxi
            bookings. On most of the client work, I was the only frontend developer.
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          <ProjectStory
            ids={[...cases.map((c) => slug(c.name)), 'project-smaller-builds']}
            tabs={[...cases.map(({ name, kind }) => ({ name, kind })), { name: 'Smaller builds', kind: `${builds.length} projects` }]}
            panels={[
              ...cases.map((project) => <ProjectPanel key={project.name} project={project} />),
              <div key="builds">
                <h3 className="text-3xl font-semibold">Smaller builds</h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
                  {builds.map((build) => (
                    <BuildFigure key={build.name} build={build} />
                  ))}
                </ul>
              </div>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
