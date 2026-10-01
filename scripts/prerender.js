// Renders the app to static HTML and injects it into dist/index.html,
// so the page is readable before JavaScript loads and React only hydrates it.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';

const { render } = await import('../dist-ssr/entry-server.js');
const file = 'dist/index.html';
let html = readFileSync(file, 'utf8');

const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error(`${file} has no empty root to fill`);
html = html.replace(marker, `<div id="root">${render()}</div>`);

writeFileSync(file, html);
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerendered', file);
