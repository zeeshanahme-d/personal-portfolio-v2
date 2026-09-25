# zeeshanahmed.dev

Personal site of Zeeshan Ahmed, frontend developer.

React 19, TypeScript, Tailwind CSS 4 and Vite. Font: Geist. Icons: Lucide (UI); technology marks in `public/marks.svg`, a sprite kept out of the JS bundle: simple-icons (CC0), plus a few from Devicon, File Icons, Tabler, Lucide, Remix Icon, Boxicons and Hugeicons (MIT, ISC, Apache-2.0) for tools simple-icons doesn't cover.

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
src/sections/             Hero, Work (dark), Experience, Skills, About, Contact (dark, + footer)
src/components/           SiteHeader (with mobile menu), Screenshot, ExternalLink
src/hooks/                useReveal (scroll reveals), useActiveSection (nav state), useLocalTime
src/index.css             design tokens (@theme), components (buttons, links, browser frame) and the motion system
scripts/prerender.js      renders the app into dist/index.html and preloads the text font
public/work/              project screenshots, 800w and 1600w WebP
public/resume/            résumé PDF
```

To change copy or add a project, edit `src/content.ts`.

Screenshots: a project's `images` is a list. One image is a still; several become a carousel in the browser frame
(back/forward buttons, swipe, the address bar shows each screen's `path`). A project without `images` is shown as text
only. All project screenshots are switched off until the companies approve them: set `showScreenshots` to `true` in
`src/content.ts` to bring them back. Put files in `public/work/` (1600 x 1000 is ideal) and add `{ src: '/work/partner-portal.png', alt, width, height }`.
A base name instead of a path (`src: 'ioportal'`) uses `<name>-800.webp` and `<name>-1600.webp`. The About photo works the
same way: set `portrait` in `src/content.ts` (4:5, e.g. 800 x 1000).

## Notes

- The page is prerendered at build time, so the HTML is complete before JavaScript loads; React hydrates it.
- Motion: a hero entrance sequence, scroll reveals and hover micro-interactions, all disabled under `prefers-reduced-motion`.
- The footer signature uses a 22 KB subset of Noto Nastaliq Urdu, self-hosted in `public/fonts`.
- The hero can flip to Arabic (right to left). Its font is a subset of IBM Plex Sans Arabic with only the glyphs
  used; if you change the Arabic copy in `Hero.tsx`, regenerate `public/fonts/plex-arabic-*.woff2` with the new text.
