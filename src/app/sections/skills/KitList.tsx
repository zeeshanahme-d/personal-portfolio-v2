import { Tool } from '@/app/components/ui/Tool';
import { kit } from '@/app/lib/skills';

/** "Also in the kit": the skill groups, minus every tool the schedule already lists. */
export function KitList() {
  return (
    <dl className="mt-4">
      {kit.map((g) => (
        <div key={g.area} className="border-t border-rule py-3.5 last:border-b">
          <dt className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span className="font-medium text-snow">{g.area}</span>
            <span className="text-sm text-snow-3">{g.note}</span>
          </dt>
          <dd className="mt-2.5">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-snow-2">
              {g.items.map((name) => (
                <Tool key={name} name={name} />
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
