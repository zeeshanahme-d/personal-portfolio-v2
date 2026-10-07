import { useSyncExternalStore } from 'react';

// ponytail: minute interval can lag the wall clock by up to 59s; align to :00 if that ever matters.
const everyMinute = (onTick: () => void) => {
  const id = setInterval(onTick, 60_000);
  return () => clearInterval(id);
};

/**
 * Current time in `timeZone`, e.g. "4:05 PM", updated once a minute.
 * Null in the server render, so the static HTML never carries a stale build-time clock.
 */
export function useLocalTime(timeZone: string) {
  return useSyncExternalStore(
    everyMinute,
    () => new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone }).format(new Date()),
    () => null,
  );
}
