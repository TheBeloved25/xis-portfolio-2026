// Composed OG card for the Systems Ledger identity. Run: node scripts/make-og.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('.');
const display = readFileSync(resolve(root, 'public/fonts/supreme-700-normal.woff2')).toString('base64');
const mono = readFileSync(resolve(root, 'public/fonts/azeretmono-400-normal.woff2')).toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Display;src:url(data:font/woff2;base64,${display}) format('woff2');font-weight:700}
@font-face{font-family:Mono;src:url(data:font/woff2;base64,${mono}) format('woff2');font-weight:400}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#f2efe8;color:#191c1a;font-family:Display,sans-serif;position:relative;padding:64px 72px}
.top{display:flex;justify-content:space-between;align-items:center;font-family:Mono;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#5c635e}
.brand{display:flex;align-items:center;gap:12px;color:#191c1a;font-size:20px}
.mark{width:12px;height:12px;background:#a84427}
h1{margin-top:56px;font-size:82px;line-height:.95;letter-spacing:-.045em;max-width:860px}
h1 em{font-style:normal;color:#a84427}
.rule{position:absolute;left:72px;right:72px;bottom:132px;height:2px;background:#191c1a}
.progress{position:absolute;left:72px;width:420px;bottom:132px;height:2px;background:#a84427}
.marks{position:absolute;left:72px;right:72px;bottom:64px;display:flex;justify-content:space-between;font-family:Mono;font-size:13px;color:#5c635e;letter-spacing:.04em}
.fig{position:absolute;right:72px;top:180px;width:260px;height:150px;background:#141816;border:1px solid #191c1a;display:grid;place-items:center;color:#f2efe8;font-family:Mono;font-size:11px;letter-spacing:.08em}
.fig span{display:block;border-left:2px solid #a84427;padding-left:12px}
</style></head><body>
<div class="top"><span class="brand"><span class="mark"></span>XIS</span><span>AI Automation / AI Agents / Intelligent Business Systems</span></div>
<h1>Building intelligent<br>systems for <em>modern</em><br>businesses.</h1>
<div class="fig"><span>FIG. 01<br>SYSTEM TOPOLOGY<br>TRACE / ACTIVE</span></div>
<div class="rule"></div><div class="progress"></div>
<div class="marks"><span>Emmanuel Akinfesola · AI Automation Specialist</span><strong>xis-emmanuel.pages.dev</strong></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: resolve(root, 'public/og.png') });
await browser.close();
console.log('wrote public/og.png');
