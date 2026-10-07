const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'Jun 2025' → months since year 0. */
const toMonths = (date: string) => {
  const [month, year] = date.split(' ');
  return Number(year) * 12 + MONTHS.indexOf(month);
};

/** 'Jun 2025 – Jul 2026' → [start, end), both months counted, as a CV counts them. */
export const parsePeriod = (period: string) => {
  const [from, to] = period.split(' – ');
  return { start: toMonths(from), end: toMonths(to) + 1 };
};

/** 14 → '1 yr 2 mo'. */
export const formatMonths = (months: number) => {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr`, m && `${m} mo`].filter(Boolean).join(' ');
};
