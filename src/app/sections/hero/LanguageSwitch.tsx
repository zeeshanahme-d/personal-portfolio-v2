import type { Lang } from './copy';

const langButton =
  'relative text-snow-2 underline-offset-[0.4em] transition-colors duration-(--dur-quick) hover:text-snow aria-pressed:text-snow aria-pressed:underline aria-pressed:decoration-accent-bright aria-pressed:decoration-1 after:absolute after:-inset-x-2 after:-inset-y-3';

// Fetch the bold Arabic weight before the click, so the flip doesn't flash the fallback font.
const warm = () => void document.fonts?.load('600 1em "IBM Plex Sans Arabic"', 'ع');

/** EN / العربية: flips the hero's name and introduction between English and Arabic. */
export function LanguageSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div role="group" aria-label="Language of the introduction" className="flex items-center gap-2.5 text-snow-3">
      <button type="button" aria-pressed={lang === 'en'} onClick={() => onChange('en')} className={langButton}>
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        lang="ar"
        aria-pressed={lang === 'ar'}
        onClick={() => onChange('ar')}
        onPointerEnter={warm}
        onFocus={warm}
        className={langButton}
      >
        العربية
      </button>
    </div>
  );
}
