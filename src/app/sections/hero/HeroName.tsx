import { twoDigits } from '@/app/lib/format';
import { stagger } from '@/app/lib/motion';
import { wideCaps } from '@/app/lib/styles';
import { LETTERS, type Lang } from './copy';

/** The giant name's type: wide caps in English; Plex Arabic (from the [lang=ar] rule) at its heaviest, 600. */
export const nameType = (lang: Lang) =>
  `hero-name ms-[-0.045em] text-(length:--name) leading-[0.8] whitespace-nowrap ${lang === 'ar' ? 'font-semibold' : wideCaps}`;

/**
 * The name, letter by letter (ZEE / SHAN on phones). Arabic letters join, so the Arabic name stays one run.
 * Search engines read the h1 as text, so nothing but the name may be text in it: the callouts are generated content,
 * and the phone line break is a block ::before on the S (a <br> would index as "Zee shan").
 */
export function HeroName({ lang, callouts }: { lang: Lang; callouts?: boolean }) {
  if (lang === 'ar') return 'ذيشان';
  return LETTERS.map(([letter, kind], i) => (
    // inline-block, so each box is the 0.8em line box and its top sits right at the cap line (phones have no
    // callouts, so the letters go inline there and the S can break the line).
    <span key={i} className={`relative inline-block max-md:inline ${i === 3 ? 'max-md:before:block' : ''}`}>
      {letter}
      {callouts && (
        // A drawing callout: index, kind of product, and a tick down to the cap line. The Z bleeds off the page,
        // so its callout lines up with the page margin instead.
        <span
          aria-hidden="true"
          data-index={twoDigits(i + 1)}
          data-kind={kind}
          style={stagger(i)}
          className={`callout absolute bottom-[calc(100%+0.5rem)] max-w-[calc(var(--name)*0.55)] pb-3.5 text-[0.6875rem] leading-[1.3] font-medium tracking-[0.07em] whitespace-normal text-ink-2 font-stretch-100% max-md:hidden before:text-ink-3 before:tabular-nums before:content-[attr(data-index)_'_'] after:content-[attr(data-kind)] ${
            i === 0 ? 'left-[calc(var(--name)*0.045+clamp(1.25rem,4vw,2.5rem))]' : 'left-[0.1rem]'
          }`}
        >
          <span className="absolute bottom-0 left-0 h-2 w-px bg-current opacity-60" />
        </span>
      )}
    </span>
  ));
}
