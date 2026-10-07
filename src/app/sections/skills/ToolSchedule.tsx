import { Tool } from '@/app/components/ui/Tool';
import { cases } from '@/app/data/content';
import { sheetNumber, twoDigits } from '@/app/lib/format';
import { shippedTools } from '@/app/lib/skills';
import { label } from '@/app/lib/styles';

// Table cells: a header row ruled in the body colour, body rows in the rule colour.
const head = 'border-b border-body py-2.5 align-bottom font-medium';
const cell = 'border-b border-rule py-2.5';

/**
 * Table 03.1: every tool that shipped, marked against the Work sheet it shipped in. The column heads link back to
 * the projects. Scrolls sideways rather than squeezing, if a very narrow screen ever needs it.
 */
export function ToolSchedule() {
  return (
    <div className="overflow-x-auto lg:col-span-7">
      <table className="w-full border-collapse text-(length:--text-sm)">
        {/* Short column heads keep the header one line tall; the key names the sheets. */}
        <caption className="pb-5 text-start">
          <span className={label}>Table 03.1 / Tools, by the projects they shipped in</span>
          <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-1 text-(length:--text-xs) text-body-2">
            {cases.map((c, i) => (
              <li key={c.name}>
                <span className="tabular-nums text-snow-3">{sheetNumber(i)}</span> {c.name}
              </li>
            ))}
          </ul>
        </caption>
        <thead>
          <tr>
            <th scope="col" className={`${label} ${head} text-start`}>
              Tool
            </th>
            {cases.map((c, i) => (
              <th key={c.name} scope="col" className={`${head} text-center`}>
                {/* Links back to the sheet, with a tap target taller than the label. */}
                <a
                  href={`#w-${i + 1}`}
                  title={c.name}
                  aria-label={`${sheetNumber(i)} ${c.name}`}
                  className="relative inline-block text-(length:--text-xs) tracking-[0.04em] whitespace-nowrap text-body-2 tabular-nums transition-colors duration-(--dur-quick) hover:text-accent-bright after:absolute after:-inset-x-1 after:-inset-y-3"
                >
                  {/* Just the number on phones, where the columns are narrow. */}
                  <span className="max-sm:hidden">W-</span>
                  {twoDigits(i + 1)}
                </a>
              </th>
            ))}
            {/* The marks already show the count; on phones the column makes way for them. */}
            <th scope="col" className={`${label} ${head} w-11 text-end max-sm:hidden`}>
              Uses
            </th>
          </tr>
        </thead>
        <tbody>
          {shippedTools.map((t) => (
            <tr key={t.name} className="hover:bg-snow/4">
              <th scope="row" className={`${cell} pe-4 text-start`}>
                {/* nowrap on the tool itself: the base `li { text-wrap: pretty }` would switch wrapping back on. */}
                <ul className="contents *:whitespace-nowrap">
                  <Tool name={t.name} />
                </ul>
              </th>
              {t.used.map((on, i) => (
                <td key={i} className={`${cell} w-8 text-center sm:w-13`}>
                  {on && (
                    <>
                      <span className="inline-block size-2 bg-body" aria-hidden="true" />
                      <span className="sr-only">Used</span>
                    </>
                  )}
                </td>
              ))}
              <td className={`${cell} w-11 text-end text-label tabular-nums max-sm:hidden`}>{t.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
