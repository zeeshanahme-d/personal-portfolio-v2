'use client';

import { profile } from '@/app/data/content';
import { useLocalTime } from '@/app/hooks/useLocalTime';

/** "4:05 PM in Islamabad", from the visitor's clock. Absent from the static HTML, so it is never stale. */
export function LocalTime() {
  const time = useLocalTime(profile.timeZone);
  return time && <span>{time} in Islamabad</span>;
}
