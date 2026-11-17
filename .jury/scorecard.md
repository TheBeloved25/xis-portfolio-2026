# XIS / Emmanuel portfolio: jury score

Estimate, not affiliated with Awwwards. **Self-score**, from 6 page types on 17 Nov 2026. The independent critic subagent was unavailable (usage limit), so this card was written by the builder from screenshots and measurements only. It is **not independent**. The jury estimate uses the standard +1.1 offset measured on two recent Sites of the Day.

**The idea, as the critic read it:** a dark portfolio built as a live automation workflow, where an emerald signal travels a wire through the services and work, and each node lights as the signal reaches it.

**Critic overall: 7.8** (0.4 Design + 0.3 Usability + 0.2 Creativity + 0.1 Content, strict scale)
**Jury estimate: about 8.9** (critic + 1.1, measured on two Sites of the Day)
**Band, from the estimate:** Site of the Day range (7.2 and up)

| Criterion | Score | Evidence |
|---|---|---|
| Design (40%) | 8 | `home/d-01-hero.png`: display type ~7vw, tracking -0.05em, headline optically aligned and the first frame works as a poster. `home/d-02-scroll.png`: node grid, green status dots, mono tools, varied section families. `work/d-03-scroll.png`: index rows with consistent rules. `404/d-01-hero.png` and `footer` carry the system. Not 9: `home/d-03-scroll.png` has a large empty gap between the proof and stack sections. |
| Usability (30%) | 8 | `report.json`: mobile LCP 1.25 s, CLS 0.018, no overflow, no small targets, skip link first, no focus faults. `home/r-01-hero.png`: complete and calm under reduced motion. `home/d-90-transition-b.png`: continuous curtain between pages. Not 9: `idleMotion: false` and headless mobile FPS 31. |
| Creativity (20%) | 7 | The signal/wire is derived from the trade's own material and reaches hero, work status, case diagrams and the 404 ("Signal lost"). It is specific and legible, but its visual expression is a 2 px line and dots, so it reads as quiet rather than as a new interaction idea. |
| Content (10%) | 8 | Real named projects with actual n8n screenshots (`case2/d-01-hero.png`), exact Fiverr reviews (`home/d-03-scroll.png`), honest `In progress` / `Scoped` labels (`work/d-03-scroll.png`), no invented metrics. Not 9: a few owner-supplied phrases are generic and status confirmations remain open. |

| Developer | Score | Evidence |
|---|---|---|
| Semantics/SEO | 9 | audit: 0 FAIL, 0 WARN; unique titles/descriptions, canonical, robots, sitemap, 404, JSON-LD, one h1 per page. |
| Animations/Transitions | 8 | `hover` reports all targets `moves`, 0 `noHoverChange`, 0 `colorOnly`; GSAP ticker drives scroll, idle, button fill and the clip-path curtain. Docked for `idleMotion: false` in stills. |
| Accessibility | 9 | axe: 0 violations, 0 serious; `hiddenText: 0`, `moving: false` under reduced motion, skip link and visible focus rings in `k-*`. |
| WPO | 8 | mobile LCP 1.25 s, CLS 0.018, no loader, ~236 KB gz JS, heaviest page ~539 KB. Headless phone FPS 31 (software GPU floor). |
| Responsive | 8 | `m-01`, `m-02`, `case2/m-01`: composed phone layouts, no overflow, no small targets. |
| Markup/Meta-data | 9 | audit: 0 FAIL; composed 1200×630 OG image, SVG favicon, self-hosted woff2, descriptive alt text. |

## Fixes, most score first

1. [Creativity] `home/d-01-hero.png` + `desktop.idleMotion: false`: the signal is too quiet at rest. Make the idle pulse or the wire visibly breathe when the pointer is still, so a visitor sees the concept alive without scrolling.
2. [Design] `home/d-03-scroll.png`: roughly 250 px of dead space between the testimonials and the technology stack. Tighten the section rhythm where two content-heavy sections meet.
3. [Creativity] `case2/d-01-hero.png`: the case hero uses the raw workflow screenshot well, but the procedural diagrams elsewhere are hard to read at row size. Increase node size and contrast in `Diagram.tsx` for the work index.
4. [WPO] `mobile.scrollFps: 31`: headless software GPU, but worth verifying on a real mid-range phone before publishing.

## Measured

Mobile LCP 1.25 s, desktop LCP 1.4 s, CLS 0.018 / 0, no loader, desktop FPS 47, mobile FPS 31, 0 serious axe violations, no overflow, `noHoverChange` empty, `colorOnly` empty, `idleMotion: false`, audit 0 FAIL and 0 WARN.

Not scored: anything stills can't show (how motion feels, sound).
