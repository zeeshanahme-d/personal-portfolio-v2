'use client';

import { useState, type ReactNode } from 'react';
import { Fact } from '@/app/components/drawing/Fact';
import { delay } from '@/app/lib/motion';
import { heroCopy, type Lang } from './copy';
import { HeroIntro } from './HeroIntro';
import { HeroName, nameType } from './HeroName';
import { LanguageSwitch } from './LanguageSwitch';

type Props = {
  /** The survey contour behind the name (HeroContour). Static, so rendered on the server and passed in. */
  contour: ReactNode;
  /** The title block's fixed rows (HeroFacts), likewise; the language row is added here. */
  facts: ReactNode;
};

/**
 * The interface is built around the name. Four planes, each with its own scroll rate (styles/globals.css, "Hero"):
 * the limestone page, the giant name, a survey contour behind it, and the pine foreground rising in front.
 * Where the foreground covers the name, the letters carry on as cream outlines, like hidden lines in a
 * technical drawing; as you scroll the name sinks and the foreground rises, so more of it turns to outline.
 * A client component: the language switch re-renders the name, the status and the introduction together.
 * The parts that never change with the language come in as server-rendered props.
 */
export function Hero({ contour, facts }: Props) {
  const [lang, setLang] = useState<Lang>('en');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    // The pine strip at the bottom sits under the foreground, so its parallax lift never opens a gap above Work.
    <section
      id="top"
      aria-labelledby="hero-name"
      className="overflow-x-clip pt-20 bg-[linear-gradient(to_top,var(--color-night)_3rem,transparent_3rem)]"
    >
      <div className="container-page flex justify-between gap-6 text-xs/[1.6] tracking-[0.06em] text-ink-2 uppercase" dir={dir}>
        <p key={lang} lang={lang} className="enter flex items-center gap-2.5" style={delay(900)}>
          <span className="live-dot" aria-hidden="true" />
          {heroCopy[lang].status}
        </p>
      </div>

      {/* .hero-stage holds the geometry (--name, --overlap…) in styles/globals.css. */}
      <div className="hero-stage relative">
        {contour}

        <div className="hero-name-plane relative z-1 pt-(--callouts)">
          {/* Keyed by language: flipping replays the rise, now in Arabic letters. */}
          <h1 id="hero-name" key={lang} lang={lang} dir={dir} className={`${nameType(lang)} text-night dark:text-ink`}>
            <HeroName lang={lang} callouts />
            <span className="sr-only"> Ahmed, frontend developer</span>
          </h1>
        </div>

        <div className="hero-fore edge-mask dark relative z-2 -mt-(--overlap) bg-night text-snow">
          {/* The covered part of the name, as outlines. Exactly the name's box, so a rising letter is clipped to it
              and never crosses the text below. Decorative: the h1 above carries the text. */}
          <div
            className="hero-xray-plane pointer-events-none absolute inset-x-0 top-[calc(var(--overlap)-var(--name-h))] h-(--name-h) overflow-hidden"
            aria-hidden="true"
          >
            <p key={lang} lang={lang} dir={dir} className={`${nameType(lang)} text-transparent [-webkit-text-stroke:1.25px_rgb(238_240_234/0.5)]`}>
              <HeroName lang={lang} />
            </p>
          </div>

          <div className="container-page grid gap-x-10 gap-y-12 pt-[calc(var(--overlap)+2.75rem)] pb-2 lg:grid-cols-12" dir={dir}>
            {/* Keyed by language, so the introduction plays its entrance again in the new language. */}
            <HeroIntro key={lang} lang={lang} />
            {/* The hero's title block. Always left to right. */}
            <dl dir="ltr" className="enter lg:col-span-4 lg:col-start-9 lg:self-end" style={delay(1000)}>
              {facts}
              <Fact term="Languages">
                <LanguageSwitch lang={lang} onChange={setLang} />
              </Fact>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
