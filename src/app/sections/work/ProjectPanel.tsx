import { Fact } from '@/app/components/drawing/Fact';
import { ExternalLink } from '@/app/components/ui/ExternalLink';
import { Tool } from '@/app/components/ui/Tool';
import type { CaseStudy } from '@/app/data/content';
import { CasePoints } from './CasePoints';
import { CaseVisual } from './CaseVisual';

/** One project in the switcher: name, the visual, then the summary and notes beside the facts. */
export function ProjectPanel({ project }: { project: CaseStudy }) {
  return (
    <article>
      <h3 className="text-3xl font-semibold">{project.name}</h3>
      <p className="mt-2 flex flex-wrap gap-x-5 text-sm text-snow-3">
        <span>{project.kind}</span>
        <span>{project.context}</span>
      </p>

      <div className="mt-8">
        <CaseVisual project={project} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 xl:grid-cols-9">
        <div className="xl:col-span-5">
          <p className="text-lg text-snow">{project.summary}</p>
          <CasePoints points={project.points} />
        </div>
        <dl className="xl:col-span-4">
          <Fact term="Role">{project.role}</Fact>
          <Fact term="Built with">
            <ul aria-label="Built with" className="flex flex-wrap gap-x-4 gap-y-2 text-snow-2">
              {project.stack.map((name) => (
                <Tool key={name} name={name} />
              ))}
            </ul>
          </Fact>
          <Fact term="Link">
            {project.links.length > 0 ? (
              <span className="flex flex-col gap-1">
                {project.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href} className="font-medium">
                    {l.label}
                  </ExternalLink>
                ))}
              </span>
            ) : (
              <span className="text-snow-3">Private app, no public link</span>
            )}
          </Fact>
        </dl>
      </div>
    </article>
  );
}
