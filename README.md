# zeeshanahmed.vercel.app

Personal site of Zeeshan Ahmed, front-end developer.

React 19, TypeScript, Tailwind CSS 4 and Vite. Font: Geist. Icons: Lucide (UI); technology marks from simple-icons (CC0) in `public/marks.svg`, a sprite kept out of the JS bundle.

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck, build, then prerender the page to static HTML
npm run preview    # serve the production build
npm run lint
```

## Where things live

```
src/content.ts            every fact on the site: case studies, products, experience, stack, links
src/sections/             Hero, Work (dark), Experience, About (+ stack), Contact (dark, + footer)
src/components/           SiteHeader (with mobile menu), Screenshot, ExternalLink
src/hooks/                useReveal (scroll reveals), useActiveSection (nav state), useLocalTime
src/index.css             design tokens (@theme), components (buttons, links, browser frame) and the motion system
scripts/prerender.js      renders the app into dist/index.html and preloads the text font
public/work/              project screenshots, 800w and 1600w WebP
public/resume/            résumé PDF
```

To change copy or add a project, edit `src/content.ts`. A screenshot needs
`public/work/<name>-800.webp` and `public/work/<name>-1600.webp`; set its real width and height in the content entry.

## Notes

- The page is prerendered at build time, so the HTML is complete before JavaScript loads; React hydrates it.
- Motion: a hero entrance sequence, scroll reveals and hover micro-interactions, all disabled under `prefers-reduced-motion`.
- The footer signature uses a 22 KB subset of Noto Nastaliq Urdu, self-hosted in `public/fonts`.
