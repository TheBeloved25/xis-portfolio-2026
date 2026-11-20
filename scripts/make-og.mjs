// Composed OG card, not a crop of the hero. Run: node scripts/make-og.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('.');
const bold = readFileSync(resolve(root, 'public/fonts/switzer-700-normal.woff2')).toString('base64');
const mono = readFileSync(resolve(root, 'public/fonts/azeretmono-400-normal.woff2')).toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Switzer;src:url(data:font/woff2;base64,${bold}) format('woff2');font-weight:700}
@font-face{font-family:Azeret;src:url(data:font/woff2;base64,${mono}) format('woff2');font-weight:400}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#07110e;color:#e8f3ec;font-family:Switzer,sans-serif;position:relative;overflow:hidden;padding:64px 72px}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(157,180,168,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(157,180,168,.055) 1px,transparent 1px);background-size:60px 60px}
.brand{position:relative;display:flex;align-items:center;gap:12px;font-size:22px;letter-spacing:-.02em}
.dot{width:11px;height:11px;border-radius:50%;background:#39e59b}
.top{position:relative;display:flex;justify-content:space-between;margin-top:46px;font-family:Azeret,monospace;font-size:13px;letter-spacing:.09em;color:#9db4a8;text-transform:uppercase}
h1{position:relative;margin-top:52px;font-size:88px;line-height:.94;letter-spacing:-.055em;max-width:900px}
h1 em{font-style:normal;color:#39e59b}
.rule{position:absolute;left:72px;right:72px;bottom:118px;height:1px;background:rgba(157,180,168,.24)}
.node{position:absolute;width:10px;height:10px;border-radius:50%;background:#07110e;border:2px solid #9db4a8;top:506px}
.n1{left:72px;border-color:#39e59b;background:#39e59b;box-shadow:0 0 0 6px rgba(57,229,155,.13)}
.n2{left:400px}.n3{left:730px}.n4{left:1094px}
.bottom{position:absolute;left:72px;right:72px;bottom:56px;display:flex;justify-content:space-between;font-family:Azeret,monospace;font-size:13px;color:#9db4a8;letter-spacing:.04em}
.bottom strong{color:#e8f3ec;font-weight:400}
</style></head><body>
<div class="grid"></div>
<div class="brand"><span class="dot"></span>XIS</div>
<div class="top"><span>AI Automation / AI Agents / Intelligent Business Systems</span><span>System / Online</span></div>
<h1>Building intelligent<br>systems for <em>modern</em><br>businesses.</h1>
<div class="rule"></div>
<span class="node n1"></span><span class="node n2"></span><span class="node n3"></span><span class="node n4"></span>
<div class="bottom"><span>Emmanuel Akinfesola · AI Automation Specialist</span><strong>xis-emmanuel.pages.dev</strong></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: resolve(root, 'public/og.png') });
await browser.close();
console.log('wrote public/og.png');
