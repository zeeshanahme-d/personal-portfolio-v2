import { Notes } from '@/app/components/drawing/Notes';
import { education } from '@/app/data/content';
import { label } from '@/app/lib/styles';
import { entryBox } from './styles';

/** Education, as the last entry: a ruled list of courses. */
export function EducationEntry() {
  return (
    <li id="education" className={`${entryBox} gap-y-6`}>
      <h3 className={`${label} lg:col-span-4`}>Education</h3>
      {/* flush: the entry's rule is already right above it. */}
      <Notes
        flush
        className="lg:col-span-8"
        items={education.map((e) => (
          <span key={e.title}>
            <span className="block font-medium text-ink">{e.title}</span>
            <span className="text-sm text-ink-3">
              {e.place}, {e.period}
            </span>
          </span>
        ))}
      />
    </li>
  );
}
