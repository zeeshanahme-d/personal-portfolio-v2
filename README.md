# zeeshanahmed.dev

Personal site of Zeeshan Ahmed, frontend developer.

Next.js 16 (App Router, Cache Components, React Compiler), React 19, TypeScript and Tailwind CSS 4. One static page
plus a custom 404. Fonts are self-hosted in `public/fonts`: Mona Sans for text, Besley for display sizes and a subset of
IBM Plex Sans Arabic for the hero's Arabic version. Icons: Lucide (UI); technology marks in `public/marks.svg`, a
sprite kept out of the JS bundle.

## Scripts

```bash
npm install
npm run dev     # local dev server
npm run build   # production build (the page is prerendered as static HTML)
npm run start   # serve the production build
npm run lint
```

## Where things live

```
src/app/layout.tsx        <html>: site-wide metadata, the theme script, font preloads, header and footer
src/app/page.tsx          the home page: its canonical URL, share cards and JSON-LD, then the sections
src/app/not-found.tsx     the 404 page for every unknown URL (404 status, noindex)
src/app/sections/         one folder per section; every sub-component in its own file
src/app/components/       shared UI: header, footer, drawing primitives (Fact, Notes, IndexRow), links, Tool
src/app/hooks/            useTheme, useActiveSection, useLocalTime, useReveal
src/app/lib/              plain helpers: formatting, career scale, skills schedule, theme store, class lists
src/app/data/             content.ts (every fact on the site), marks, navigation, site URL, structured data
src/app/styles/           globals.css (imports the rest), fonts.css, variables.css (tokens), scrollbar.css
public/work/              project screenshots, 800w and 1600w WebP
vercel.json               redirects: www to the bare domain, /index.html to /
```

To change copy or add a project, edit `src/app/data/content.ts`.

Components are Server Components unless they need the browser. Only the interactive ones are client components:
`Hero` (language switch), `SiteHeader` and `ThemeToggle`, `LocalTime`, `ScreenshotFrame` (carousel) and `CopyEmail`.

Screenshots: a project's `images` is a list. One image is a still; several become a carousel in the browser frame,
whose address bar shows each screen's `path` (written without the leading slash, so the page carries no `/leads`-style
strings that Google would try as URLs). A base name (`src: 'ioportal'`) uses `<name>-800.webp` and `<name>-1600.webp`
in `public/work/`; a full path is one file. `showScreenshots` in `content.ts` switches them all off.

## Notes

- The theme lives on `<html data-theme>`, set by an inline script before first paint, so a reload never flashes.
- Motion: hero entrance, scroll reveals, scroll-driven parallax and hover details; fades only under
  `prefers-reduced-motion`.
- If you change the hero's Arabic copy (`sections/hero/copy.ts`), regenerate `public/fonts/plex-arabic-*.woff2`
  with the new text: the font files only contain the glyphs in use. Fonts are cached for a year, so save the new
  files under new names (e.g. `plex-arabic-600-2.woff2`) and update `styles/fonts.css`.
