import { Notes } from '@/app/components/drawing/Notes';
import { Period } from '@/app/components/ui/Period';
import { Tool } from '@/app/components/ui/Tool';
import type { Role } from '@/app/data/content';
import { formatMonths, parsePeriod } from '@/app/lib/period';
import { label } from '@/app/lib/styles';
import { entryBox } from './styles';

/** One role: the company beside the summary, the notes and the stack. */
export function RoleEntry({ role, index }: { role: Role; index: number }) {
  const { start, end } = parsePeriod(role.period);
  return (
    <li id={`e-${index + 1}`} className={`${entryBox} gap-y-8`}>
      {/* Stays in view while the notes scroll past on wide screens. */}
      <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
        <h3 className="text-3xl font-bold">{role.company}</h3>
        <p className="mt-4 font-medium">{role.title}</p>
        <p className="text-sm text-ink-2">
          <Period period={role.period} />
        </p>
        <p className="text-sm text-ink-3">
          {role.place}, {formatMonths(end - start)}
        </p>
      </div>
      <div className="lg:col-span-8">
        <p className="max-w-[44ch] text-xl">{role.summary}</p>
        <Notes items={role.points} className="mt-8" />
        <p className={`${label} mt-8`}>Built with</p>
        <ul aria-label="Built with" className="mt-3 flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-ink-2">
          {role.stack.map((name) => (
            <Tool key={name} name={name} />
          ))}
        </ul>
      </div>
    </li>
  );
}
