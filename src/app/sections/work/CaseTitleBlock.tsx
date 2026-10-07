import { Fact } from '@/app/components/drawing/Fact';
import { ExternalLink } from '@/app/components/ui/ExternalLink';
import { Tool } from '@/app/components/ui/Tool';
import type { CaseStudy } from '@/app/data/content';

/** The summary, then the sheet's title block of facts: role, stack and the public links. Beside the visual from lg. */
export function CaseTitleBlock({ project }: { project: CaseStudy }) {
  return (
    <div className="lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1">
      <p className="text-lg text-snow">{project.summary}</p>
      <dl className="mt-8">
        <Fact term="Role">{project.role}</Fact>
        <Fact term="Stack">
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
  );
}
