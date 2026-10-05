import { Fragment, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { profile } from '../content';
import { Fact } from '../components/Drawing';
import { delay, stagger } from '../hooks/useReveal';
import { label, wideCaps } from '../styles';

const copy = {
  en: {
    status: profile.status,
    role: 'Frontend Developer',
    title: 'I build the interfaces businesses actually run on.',
    lede: 'CRMs, dashboards, admin systems and product interfaces, built with React, Next.js and TypeScript.',
    cta: 'Selected work',
  },
  ar: {
    status: 'متاح الآن لوظائف الواجهات الأمامية، عن بُعد أو في المكتب',
    role: 'مطوّر واجهات أمامية',
    title: 'أبني واجهات الويب التي تُدار بها الأعمال.',
    lede: 'أنظمة CRM ولوحات معلومات وأنظمة إدارة وواجهات منتجات، باستخدام React وNext.js وTypeScript.',
    cta: 'أعمال مختارة',
  },
};

type Lang = keyof typeof copy;

/**
 * One kind of product per letter, each from a real project: the work hangs off the name.
 * (Partner Portal, Scalezy, Stampy, Organics by Appa and Saudi Taxi, plus the dashboards and Socket.io work.)
 */
const LETTERS = [
  ['Z', 'CRM'],
  ['e', 'Dashboards'],
  ['e', 'Admin systems'],
  ['s', 'Real-time'],
  ['h', 'Loyalty'],
  ['a', 'E‑commerce'],
  ['n', 'RTL UI'],
] as const;

const index = (i: number) => String(i + 1).padStart(2, '0');

/** The giant name's type: wide caps in English; Plex Arabic (from the [lang=ar] rule) at its heaviest, 600. */
const nameType = (lang: Lang) =>
  `hero-name ms-[-0.045em] text-(length:--name) leading-[0.8] whitespace-nowrap ${lang === 'ar' ? 'font-semibold' : wideCaps}`;

/** The name, letter by letter (ZEE / SHAN on phones). Arabic letters join, so the Arabic name stays one run. */
function Name({ lang, callouts }: { lang: Lang; callouts?: boolean }) {
  if (lang === 'ar') return 'ذيشان';
  return LETTERS.map(([letter, kind], i) => (
    <Fragment key={i}>
      {/* inline-block, so each box is the 0.8em line box and its top sits right at the cap line. */}
      <span className="relative inline-block">
        {letter}
        {callouts && (
          // A drawing callout: index, kind of product, and a tick down to the cap line. The Z bleeds off the page,
          // so its callout lines up with the page margin instead.
          <span
            aria-hidden="true"
            style={stagger(i)}
            className={`callout absolute bottom-[calc(100%+0.5rem)] max-w-[calc(var(--name)*0.55)] pb-3.5 text-[0.6875rem] leading-[1.3] font-medium tracking-[0.07em] whitespace-normal text-ink-2 font-stretch-100% max-md:hidden after:absolute after:bottom-0 after:left-0 after:h-2 after:w-px after:bg-current after:opacity-60 ${
              i === 0 ? 'left-[calc(var(--name)*0.045+clamp(1.25rem,4vw,2.5rem))]' : 'left-[0.1rem]'
            }`}
          >
            <span className="text-ink-3 tabular-nums">{index(i)}</span> {kind}
          </span>
        )}
      </span>
      {i === 2 && <br className="md:hidden" />}
    </Fragment>
  ));
}

/**
 * The interface is built around the name. Four planes, each with its own scroll rate (index.css, "Hero"):
 * the limestone page, the giant name, a survey contour behind it, and the pine foreground rising in front.
 * Where the foreground covers the name, the letters carry on as cream outlines, like hidden lines in a
 * technical drawing; as you scroll the name sinks and the foreground rises, so more of it turns to outline.
 */
export function Hero() {
  const [lang, setLang] = useState<Lang>('en');
  const t = copy[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Fetch the bold Arabic weight before the click, so the flip doesn't flash the fallback font.
  const warm = () => void document.fonts?.load('600 1em "IBM Plex Sans Arabic"', 'ع');
  const langButton =
    'relative text-snow-2 underline-offset-[0.4em] transition-colors duration-(--dur-quick) hover:text-snow aria-pressed:text-snow aria-pressed:underline aria-pressed:decoration-accent-bright aria-pressed:decoration-1 after:absolute after:-inset-x-2 after:-inset-y-3';

  return (
    // The pine strip at the bottom sits under the foreground, so its parallax lift never opens a gap above Work.
    <section
      id="top"
      aria-labelledby="hero-name"
      className="overflow-x-clip pt-20 bg-[linear-gradient(to_top,var(--color-night)_3rem,transparent_3rem)]"
    >
      <div className="container-page flex justify-between gap-6  text-xs/[1.6] tracking-[0.06em] text-ink-2 uppercase" dir={dir}>
        <p key={lang} lang={lang} className="enter flex items-center gap-2.5" style={delay(900)}>
          <span className="live-dot" aria-hidden="true" />
          {t.status}
        </p>
      </div>

      {/* .hero-stage holds the geometry (--name, --overlap…) in index.css. */}
      <div className="hero-stage relative">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="hero-contour absolute top-[calc(var(--callouts)+var(--name-h)*0.1)] left-0 h-[calc(var(--name-h)*0.45)] w-full overflow-visible"
        >
          <path pathLength={1} vectorEffect="non-scaling-stroke" strokeWidth={1} className="fill-none stroke-ink-3 opacity-60" d="M0 80L23 77L45 76L68 73L90 70L113 70L135 69L158 65L180 64L203 64L225 62L248 62L270 63L293 65L315 65L338 67L360 66L383 66L405 66L428 68L450 67L473 65L495 62L518 63L540 62L563 58L585 56L608 54L630 54L653 53L675 54L698 52L720 52L743 54L765 54L788 54L810 54L833 54L855 53L878 53L900 53L923 52L945 52L968 49L990 47L1013 44L1035 40L1058 37L1080 34L1103 32L1125 29L1148 30L1170 30L1193 27L1215 27L1238 27L1260 27L1283 27L1305 28L1328 28L1350 28L1373 27L1395 26L1418 23L1440 22" />
        </svg>

        <div className="hero-name-plane relative z-1 pt-(--callouts)">
          {/* Keyed by language: flipping replays the rise, now in Arabic letters. */}
          <h1 id="hero-name" key={lang} lang={lang} dir={dir} className={`${nameType(lang)} text-night dark:text-ink`}>
            <Name lang={lang} callouts />
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
              <Name lang={lang} />
            </p>
          </div>

          <div className="container-page grid gap-x-10 gap-y-12 pt-[calc(var(--overlap)+2.75rem)] pb-2 lg:grid-cols-12" dir={dir}>
            <div key={lang} lang={lang} className="lg:col-span-7">
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

            <dl dir="ltr" className="enter lg:col-span-4 lg:col-start-9 lg:self-end" style={delay(1000)}>
              <Fact term="Role">Frontend Developer, 2.5 years in production</Fact>
              <Fact term="Stack">React / Next.js / TypeScript</Fact>
              {/* On phones the letters carry no callouts, so the same index lives here. Screen readers get it here on
                  every size (the callouts are hidden from them). */}
              <Fact term="Builds" className="md:sr-only">
                <ul className="grid gap-1 text-(length:--text-xs) tracking-[0.06em] uppercase">
                  {LETTERS.map(([, kind], i) => (
                    <li key={kind}>
                      <span className="text-snow-3 tabular-nums">{index(i)}</span> {kind}
                    </li>
                  ))}
                </ul>
              </Fact>
              <Fact term="Languages">
                <div role="group" aria-label="Language of the introduction" className="flex items-center gap-2.5 text-snow-3">
                  <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')} className={langButton}>
                    EN
                  </button>
                  <span aria-hidden="true">/</span>
                  <button
                    type="button"
                    lang="ar"
                    aria-pressed={lang === 'ar'}
                    onClick={() => setLang('ar')}
                    onPointerEnter={warm}
                    onFocus={warm}
                    className={langButton}
                  >
                    العربية
                  </button>
                </div>
              </Fact>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
