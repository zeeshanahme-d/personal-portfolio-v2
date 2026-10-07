import { Fact } from '@/app/components/drawing/Fact';
import { twoDigits } from '@/app/lib/format';
import { delay } from '@/app/lib/motion';
import { LETTERS, type Lang } from './copy';
import { LanguageSwitch } from './LanguageSwitch';

type Props = { lang: Lang; onLangChange: (lang: Lang) => void };

/** The hero's title block: role, stack, the index of builds, and the language switch. Always left to right. */
export function HeroFacts({ lang, onLangChange }: Props) {
  return (
    <dl dir="ltr" className="enter lg:col-span-4 lg:col-start-9 lg:self-end" style={delay(1000)}>
      <Fact term="Role">Frontend Developer, 2.5 years in production</Fact>
      <Fact term="Stack">React / Next.js / TypeScript</Fact>
      {/* On phones the letters carry no callouts, so the same index lives here. Screen readers get it here on
          every size (the callouts are hidden from them). */}
      <Fact term="Builds" className="md:sr-only">
        <ul className="grid gap-1 text-(length:--text-xs) tracking-[0.06em] uppercase">
          {LETTERS.map(([, kind], i) => (
            <li key={kind}>
              <span className="text-snow-3 tabular-nums">{twoDigits(i + 1)}</span> {kind}
            </li>
          ))}
        </ul>
      </Fact>
      <Fact term="Languages">
        <LanguageSwitch lang={lang} onChange={onLangChange} />
      </Fact>
    </dl>
  );
}
