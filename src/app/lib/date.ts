import { cacheLife } from 'next/cache';

/**
 * This year, for the footer. Cached, so it is part of the static page (a bare `new Date()` fails the prerender
 * under Cache Components), and refreshed daily, so it rolls over at New Year without a redeploy.
 */
export async function currentYear() {
  'use cache';
  cacheLife('days');
  return new Date().getFullYear();
}
