import { ExternalLink } from '@/app/components/ui/ExternalLink';
import { experience, profile } from '@/app/data/content';
import { label } from '@/app/lib/styles';
import { CareerDrawing } from './CareerDrawing';
import { EducationEntry } from './EducationEntry';
import { RoleEntry } from './RoleEntry';

/** The career: the to-scale drawing (Fig. 02.1), then one entry per role and Education. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="container-page py-20 md:py-28">
      <div className="grid gap-x-10 gap-y-6 border-t border-line pt-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className={label}>
            <span className="tabular-nums">02</span> / Experience
          </p>
          <h2 id="experience-title" className="mt-5 max-w-[20ch] text-3xl font-semibold">
            Two companies, two and a half years.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="text-ink-2">
            Building and shipping production front ends for SaaS, dashboards, CRM systems and client products.
          </p>
          <p className="mt-4 font-medium">
            <ExternalLink href={profile.resume}>Full Resume (PDF)</ExternalLink>
          </p>
        </div>
      </div>

      <CareerDrawing />

      <ol className="mt-20 md:mt-28">
        {experience.map((role, i) => (
          <RoleEntry key={role.company} role={role} index={i} />
        ))}
        <EducationEntry />
      </ol>
    </section>
  );
}
