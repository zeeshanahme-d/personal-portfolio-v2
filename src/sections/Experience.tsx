import { education, experience, profile } from '../content';
import { ExternalLink } from '../components/ExternalLink';
import { Tool } from '../components/Tool';
import { stagger } from '../hooks/useReveal';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="container-page py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
        {/* The heading stays in view while the roles scroll past on wide screens. */}
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start xl:col-span-3">
          <h2 id="experience-title" data-reveal="up" className="text-3xl font-semibold">
            Experience
          </h2>
          <p data-reveal="up" style={stagger(1)} className="mt-4 max-w-xs text-ink-2">
            2.5 years building and shipping production front ends across SaaS, dashboards, CRM systems and client products.
          </p>
          <p data-reveal="up" style={stagger(2)} className="mt-6 font-medium">
            <ExternalLink href={profile.resume}>Full Resume (PDF)</ExternalLink>
          </p>
        </div>

        <div className="lg:col-span-8 xl:col-span-9">
          <ol className="border-t border-ink">
            {experience.map((role) => (
              <li key={role.company} data-reveal="up" className="grid gap-4 border-b border-line py-8 md:grid-cols-8 md:gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold tracking-tight">{role.company}</h3>
                  <p className="text-sm text-ink-2">{role.title}</p>
                  <p className="mt-2 text-sm text-ink-3">
                    {role.period}
                    <br />
                    {role.place}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="font-medium">{role.summary}</p>
                  <ul className="bullets mt-3 max-w-prose text-ink-2">
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <ul aria-label="Built with" className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-ink-2">
                    {role.stack.map((name) => (
                      <Tool key={name} name={name} />
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div data-reveal="up" className="mt-8 grid gap-4 md:grid-cols-8 md:gap-6">
            <h3 className="text-sm font-medium text-ink-3 md:col-span-2">Education</h3>
            <ul className="space-y-3 md:col-span-6">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-ink-3">
                    {e.place}, {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
