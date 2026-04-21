import { useEffect, useState } from 'react';

/**
 * Returns a live-updating formatted time string in a given IANA timezone.
 * @param {string} [timezone='Asia/Karachi'] — IANA timezone identifier
 * @param {Intl.DateTimeFormatOptions} [options] — Intl.DateTimeFormat options
 * @returns {string} formatted time string, updated every second
 */
export function useLocalTime(
    timezone = 'Asia/Karachi',
    options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }
) {
    const fmt = new Intl.DateTimeFormat('en-US', { ...options, timeZone: timezone });

    const [time, setTime] = useState(() => fmt.format(new Date()));

    useEffect(() => {
        setTime(fmt.format(new Date()));
        const id = setInterval(() => setTime(fmt.format(new Date())), 1000);
        return () => clearInterval(id);
    }, [timezone]);

    return time;
}
