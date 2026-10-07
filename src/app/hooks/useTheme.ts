import { useSyncExternalStore } from 'react';
import { getServerTheme, getTheme, setTheme, subscribe } from '@/app/lib/theme';

/** The theme on <html data-theme>, and a toggle that switches (and saves) it. */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  return { theme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') };
}
