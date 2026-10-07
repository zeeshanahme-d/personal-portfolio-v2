// Site-wide facts for the <head>: the metadata in the root layout and the structured data share them.

export const SITE_URL = 'https://zeeshanahmed.dev/';

// Name first: the page should answer a search for "Zeeshan Ahmed". Title ~50-60 chars, description ~150-160.
export const SITE_TITLE = 'Zeeshan Ahmed | Frontend Developer, React & Next.js';
export const SITE_DESCRIPTION =
  'Zeeshan Ahmed, frontend developer in Islamabad, Pakistan. CRMs, dashboards and admin panels built with React, Next.js and TypeScript. Open to frontend roles.';

// The browser bar colour of each theme (the page colour, --color-paper). lib/theme.ts switches between them.
export const THEME_COLOR = { light: '#eef0ea', dark: '#0b1712' } as const;
