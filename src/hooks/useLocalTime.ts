import { useEffect, useState } from 'react';

/**
 * Current time in `timeZone`, e.g. "4:05 PM", updated once a minute.
 * Null until mounted, so the prerendered HTML never carries a stale build-time clock.
 */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone }).format(new Date()));
    tick();
    // ponytail: minute interval can lag the wall clock by up to 59s; align to :00 if that ever matters.
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
