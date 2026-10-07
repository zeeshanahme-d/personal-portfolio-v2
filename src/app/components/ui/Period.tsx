import { isoMonth } from '@/app/lib/period';

/** 'Jun 2025 – Jul 2026' as two <time> elements, so the dates are machine-readable. */
export function Period({ period }: { period: string }) {
  const [from, to] = period.split(' – ');
  return (
    <>
      <time dateTime={isoMonth(from)}>{from}</time> – <time dateTime={isoMonth(to)}>{to}</time>
    </>
  );
}
