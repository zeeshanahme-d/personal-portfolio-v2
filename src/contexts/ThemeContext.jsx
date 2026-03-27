import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext({
    theme: 'dark',
    resolvedTheme: 'dark',
    setTheme: () => { },
    toggleTheme: () => { },
});

function getStoredTheme() {
    if (typeof window === 'undefined') return null;
    try {
        const v = window.localStorage.getItem(STORAGE_KEY);
        if (v === 'light' || v === 'dark') return v;
    } catch {
        /* ignore */
    }
    return null;
}

function applyDomTheme(theme) {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(() => getStoredTheme() || 'dark');

    useEffect(() => {
        applyDomTheme(theme);
    }, [theme]);

    const setTheme = useCallback((next) => {
        const t = next === 'light' ? 'light' : 'dark';
        setThemeState(t);
        applyDomTheme(t);
        try {
            window.localStorage.setItem(STORAGE_KEY, t);
        } catch {
            /* ignore */
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, setTheme]);

    const value = useMemo(
        () => ({
            theme,
            resolvedTheme: theme,
            setTheme,
            toggleTheme,
        }),
        [theme, setTheme, toggleTheme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
