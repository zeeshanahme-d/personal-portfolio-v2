import { useMemo, useSyncExternalStore, type ReactNode } from 'react';
import { ThemeContext, getTheme, setTheme, subscribe, type Theme } from '../theme';

// The prerendered HTML is always light; after hydration React switches to what the page really shows.
const serverTheme = (): Theme => 'light';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, serverTheme);
  const value = useMemo(() => ({ theme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') }), [theme]);
  return <ThemeContext value={value}>{children}</ThemeContext>;
}
