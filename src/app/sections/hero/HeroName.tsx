import { stagger } from '@/app/lib/motion';
import { LETTERS, type Lang } from './copy';

/** The giant name's type: Anybody at 800, expanded caps in English; Kufam's Arabic in Arabic. */
export const nameType = (lang: Lang) =>
  `hero-name text-(length:--name) leading-(--name-lh) font-extrabold whitespace-nowrap ${lang === 'ar' ? '' : 'uppercase'}`;

/**
 * The name, letter by letter (ZEE / SHAN on phones). Arabic letters join, so the Arabic name stays one run.
 * Search engines read the h1 as text, so nothing but the name may be text in it: the callouts are generated content,
 * and the phone line break is a block ::before on the S (a <br> would index as "Zee shan").
 */
export function HeroName({ lang, callouts }: { lang: Lang; callouts?: boolean }) {
  if (lang === 'ar') return 'ذيشان';
  return LETTERS.map(([letter, kind], i) => (
    // inline-block, so each box is the line box and its top sits at the cap line (phones have no callouts, so the
    // letters go inline there and the S can break the line).
    <span key={i} className={`relative inline-block max-md:inline ${i === 3 ? 'max-md:before:block' : ''}`}>
      {letter}
      {callouts && (
        // A callout: the kind of product, and a tick down to the cap line. The Z bleeds off the page, so its
        // callout lines up with the page margin instead.
        <span
          aria-hidden="true"
          data-kind={kind}
          style={stagger(i)}
          className={`callout absolute bottom-[calc(100%+0.5rem)] max-w-[calc(var(--name)*0.55)] pb-3.5 font-sans text-(length:--text-xs) leading-[1.3] font-medium tracking-normal normal-case whitespace-normal text-ink-2 max-md:hidden after:content-[attr(data-kind)] ${i === 0 ? 'left-[calc(var(--name)*0.03+clamp(1.25rem,4vw,2.5rem))]' : 'left-[0.1rem]'
            }`}
        >
          <span className="absolute bottom-0 left-0 h-2 w-px bg-current opacity-60" />
        </span>
      )}
    </span>
  ));
}
