'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/hooks/useTheme';

/** Light/dark switch. The icon shows where you'll go: a moon in light mode, a sun in dark mode. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid cursor-pointer size-11 place-items-center rounded-lg text-ink-2 transition-colors duration-200 hover:text-ink"
    >
      {/* Keyed so the new icon plays the swap-in animation. */}
      {dark ? (
        <Sun key="sun" aria-hidden="true" className="swap-in size-4.5" />
      ) : (
        <Moon key="moon" aria-hidden="true" className="swap-in size-4.5" />
      )}
    </button>
  );
}
