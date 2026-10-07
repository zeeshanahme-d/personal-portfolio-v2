import { THEME_COLOR } from '@/app/data/site';

export type Theme = 'light' | 'dark';

/*
 * The theme lives on <html data-theme>. themeScript runs in <head> before first paint (saved choice first, else
 * the system setting), so a reload never flashes the wrong colours. React reads it as an external store
 * (hooks/useTheme.ts); the header toggle changes it with setTheme.
 */
const KEY = 'theme';
const listeners = new Set<() => void>();

/** The inline <head> script. Plain ES5, as it runs before anything else. */
export const themeScript = `(function () {
  var theme = null;
  try {
    theme = localStorage.getItem('${KEY}');
  } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta && theme === 'dark') meta.setAttribute('content', '${THEME_COLOR.dark}');
})();`;

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
  listeners.forEach((listener) => listener());
}

export const getTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

/** The static HTML is always light; after hydration React switches to what the page really shows. */
export const getServerTheme = (): Theme => 'light';

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // Storage blocked (private mode): the choice lasts for this visit only.
  }
  // Cross-fade where the browser supports it, unless the visitor prefers reduced motion.
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.startViewTransition(() => apply(theme));
  } else {
    apply(theme);
  }
}
