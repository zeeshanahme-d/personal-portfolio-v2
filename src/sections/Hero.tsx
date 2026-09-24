import { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { experience, profile } from '../content';
import { delay } from '../hooks/useReveal';

// The intro in both languages. The Arabic version is a live demo of the RTL work on my résumé.
const copy = {
  en: {
    status: profile.status,
    title: 'I build the front ends that businesses run on.',
    lede: 'Frontend developer in Islamabad with two and a half years in production and 7+ shipped apps: CRMs, admin panels, a loyalty platform, and a module of an enterprise asset platform shown at IBC 2024 in Amsterdam. On most of them I was the only frontend developer.',
    work: 'See the work',
    resume: 'Résumé',
    newTab: '(PDF, opens in a new tab)',
  },
  ar: {
    status: 'متاح للانضمام فوراً',
    title: 'أبني واجهات الويب التي تُدار بها الأعمال.',
    lede: 'مطوّر واجهات أمامية في إسلام آباد، بخبرة سنتين ونصف في بيئات الإنتاج وأكثر من سبعة تطبيقات منشورة: أنظمة CRM ولوحات إدارة ومنصة ولاء، ووحدة في منصة مؤسسية لإدارة الأصول الرقمية عُرضت في معرض IBC 2024 في أمستردام. وفي معظمها كنت مطوّر الواجهات الوحيد في الفريق.',
    work: 'شاهد الأعمال',
    resume: 'السيرة الذاتية',
    newTab: '(PDF، تُفتح في علامة تبويب جديدة)',
  },
};

type Lang = keyof typeof copy;

export function Hero() {
  const [lang, setLang] = useState<Lang>('en');
  const t = copy[lang];
  // Fetch the bold Arabic weight before the click, so the flip doesn't flash the fallback font.
  const warm = () => void document.fonts?.load('600 1em "IBM Plex Sans Arabic"', 'ع');

  return (
    <section id="top" aria-label="Introduction" className="container-page pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-24">
      {/* Keyed by language: flipping replays the entrance, now right to left. */}
      <div key={lang} lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <p className="enter flex items-center gap-2.5 text-sm font-medium text-ink-2" style={delay(0)}>
          <span className="live-dot" aria-hidden="true" />
          {t.status}
        </p>
        <h1 className="enter mt-7 text-hero font-semibold" style={delay(80)}>
          {t.title}
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="enter max-w-[38rem] text-lede text-ink-2 lg:col-span-7" style={delay(160)}>
            {t.lede}
          </p>
          <div className="enter flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end" style={delay(240)}>
            <a href="#work" className="btn btn-solid">
              {t.work}
              <ArrowDown aria-hidden="true" className="btn-icon btn-icon-down size-4" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              {t.resume}
              <ArrowUpRight aria-hidden="true" className="arrow size-4 rtl:-scale-x-100" />
              <span className="sr-only">{t.newTab}</span>
            </a>
          </div>
        </div>
      </div>

      <dl className="enter mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-6 md:mt-20 lg:grid-cols-4" style={delay(320)}>
        <div>
          <dt className="text-sm text-ink-3">Most recently</dt>
          <dd className="mt-1.5 font-medium">{experience[0].company}</dd>
          <dd className="text-sm text-ink-2">{experience[0].period}</dd>
        </div>
        <div>
          <dt className="text-sm text-ink-3">Before that</dt>
          <dd className="mt-1.5 font-medium">{experience[1].company}, on ioMoVo</dd>
          <dd className="text-sm text-ink-2">{experience[1].period}</dd>
        </div>
        <div>
          <dt className="text-sm text-ink-3">Works with</dt>
          <dd className="mt-1.5 font-medium">React, Next.js, TypeScript</dd>
          <dd className="text-sm">
            <a href="#skills" className="link text-ink-2">
              All skills
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-ink-3">Right to left</dt>
          <dd className="mt-1.5 font-medium">Shipped for Arabic markets</dd>
          <dd className="mt-2.5">
            <div role="group" aria-label="Language of the introduction" data-ar={lang === 'ar' ? '' : undefined} className="lang-switch">
              <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
                English
              </button>
              <button type="button" lang="ar" aria-pressed={lang === 'ar'} onClick={() => setLang('ar')} onPointerEnter={warm} onFocus={warm}>
                العربية
              </button>
            </div>
          </dd>
        </div>
      </dl>
    </section>
  );
}
