import { createContext, use } from 'react';

export type Theme = 'light' | 'dark';

/*
 * The theme lives on <html data-theme>. The inline script in index.html sets it before first paint
 * (saved choice first, else the system setting), so a reload never flashes the wrong colours.
 * React reads it as an external store; the provider shares it through context.
 */
const KEY = 'theme';
const listeners = new Set<() => void>();

export const getTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

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
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111113' : '#f7f7f5');
    listeners.forEach((listener) => listener());
  };
  // Cross-fade where the browser supports it, unless the visitor prefers reduced motion.
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(apply);
  else apply();
}

export const ThemeContext = createContext<{ theme: Theme; toggle: () => void } | null>(null);

export function useTheme() {
  const value = use(ThemeContext);
  if (!value) throw new Error('useTheme must be used inside <ThemeProvider>');
  return value;
}
