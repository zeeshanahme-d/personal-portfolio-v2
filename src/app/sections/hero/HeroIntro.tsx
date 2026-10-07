import { ArrowDown } from 'lucide-react';
import { delay } from '@/app/lib/motion';
import { label } from '@/app/lib/styles';
import { heroCopy, type Lang } from './copy';

/** The statement in the pine under the name: role, headline, lede and the way into the work. */
export function HeroIntro({ lang }: { lang: Lang }) {
  const t = heroCopy[lang];
  return (
    <div lang={lang} className="lg:col-span-7">
      <p className={`enter ${label}`} style={delay(700)}>
        <span className="tabular-nums">00</span> / {t.role}
      </p>
      <p className="enter mt-5 max-w-[20ch] text-3xl font-semibold text-snow" style={delay(780)}>
        {t.title}
      </p>
      <p className="enter mt-5 max-w-120 text-snow-2" style={delay(860)}>
        {t.lede}
      </p>
      {/* Editorial navigation, not a button: label, rule, arrow. The marigold arrow is the hero's one accent. */}
      <a
        href="#work"
        className="enter group mt-9 inline-flex items-center gap-3.5 py-3 text-(length:--text-xs) font-semibold tracking-widest text-snow uppercase transition-transform duration-(--dur-base) ease-out hover:translate-x-[3px]"
        style={delay(940)}
      >
        {t.cta}
        <span className="h-px w-14 bg-current transition-[width] duration-(--dur-slow) ease-out group-hover:w-20" aria-hidden="true" />
        <ArrowDown
          aria-hidden="true"
          className="size-4 text-accent-bright transition-transform duration-(--dur-base) ease-out group-hover:translate-y-[3px]"
        />
      </a>
    </div>
  );
}
