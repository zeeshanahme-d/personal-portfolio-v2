import { Notes } from '@/app/components/drawing/Notes';
import { Tool } from '@/app/components/ui/Tool';
import type { Role } from '@/app/data/content';
import { twoDigits } from '@/app/lib/format';
import { formatMonths, parsePeriod } from '@/app/lib/period';
import { label, wideCaps } from '@/app/lib/styles';
import { entryBox } from './styles';

/** One role, E-01, E-02…: the company in wide caps beside the summary, the numbered notes and the stack. */
export function RoleEntry({ role, index }: { role: Role; index: number }) {
  const { start, end } = parsePeriod(role.period);
  return (
    <li id={`e-${index + 1}`} className={`${entryBox} gap-y-8`}>
      {/* Stays in view while the notes scroll past on wide screens. */}
      <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
        <p className={`${label} tabular-nums`}>E-{twoDigits(index + 1)}</p>
        <h3 className={`${wideCaps} mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[0.95]`}>{role.company}</h3>
        <p className="mt-4 font-medium">{role.title}</p>
        <p className="text-sm text-ink-2">{role.period}</p>
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
