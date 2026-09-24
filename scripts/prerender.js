// Renders the app to static HTML and injects it into dist/index.html,
// so the page is readable before JavaScript loads and React only hydrates it.
// Also preloads the Latin text fonts, so text never paints in a fallback face first.
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const { render } = await import('../dist-ssr/entry-server.js');
const file = 'dist/index.html';
let html = readFileSync(file, 'utf8');

const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error(`${file} has no empty root to fill`);
html = html.replace(marker, `<div id="root">${render()}</div>`);

// Fontsource emits hashed files per subset; only the Latin ones are used by the English page.
const fonts = readdirSync('dist/assets').filter((f) => /-latin-wght-normal-.*\.woff2$/.test(f));
if (fonts.length === 0) throw new Error('no Latin font files found to preload');
const preloads = fonts
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');
html = html.replace('</title>', `</title>\n    ${preloads}`);

writeFileSync(file, html);
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerendered', file, '+ preloaded', fonts.join(', '));
