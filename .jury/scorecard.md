# XIS — jury score, redesign v3

Estimate, not affiliated with Awwwards. **Self-score** from screenshots and measurements on 20 Nov 2026. The independent critic subagent was unavailable, so this is not independent. Jury estimate uses the standard +1.1 offset measured on two Sites of the Day.

**The idea, as read from the screens:** an engineering ledger for intelligent systems, where services are specifications, projects are numbered figures with real workflow screenshots, and one oxide trace connects the evidence.

**Critic overall: 8.0**
**Jury estimate: about 9.1** (Site of the Day band)

| Criterion | Score | Evidence |
|---|---|---|
| Design (40%) | 8 | `v3d/d-01-hero.png`: paper ground, near-black Supreme display, oxide annotation ink, real workflow figure with leader lines. `v3d/d-02-scroll.png`: specification rows with aligned columns, no cards. Distinct from any AI template. |
| Usability (30%) | 8 | LCP 1.2 s desktop / 1.7 s mobile, CLS 0.001 / 0.005, 60 fps desktop, no overflow, no small targets, skip link first, reduced motion complete. |
| Creativity (20%) | 8 | The ledger concept comes from the owner's engineering background and documentation-first handover. It governs type, layout, figure numbering, copy and motion. |
| Content (10%) | 8 | Real projects with real n8n screenshots, exact Fiverr reviews, honest status labels, no invented metrics, dedicated Privacy and Terms pages. |

| Developer | Score | Evidence |
|---|---|---|
| Semantics/SEO | 9 | audit: 0 FAIL / 0 WARN across 17 pages, unique metadata, canonical, sitemap, robots, JSON-LD, 404. |
| Animations/Transitions | 8 | One GSAP ticker drives the trace; page rule-wipe; button fill; all hovers respond. `idleMotion: false` in stills. |
| Accessibility | 9 | 0 axe violations, 0 serious, visible focus, skip link, reduced-motion content complete. One focus artifact: a work link below the fold during auto-tab. |
| WPO | 9 | LCP 1.7 s throttled, CLS 0.005, no loader, 60 fps desktop, ~236 KB gz JS. |
| Responsive | 8 | Composed phone layout, no overflow; meta trimmed on mobile in the final pass. |
| Markup/Meta-data | 9 | Composed OG card, SVG favicon, self-hosted woff2, descriptive alt text. |

## Fixes still open

1. [Animations] `idleMotion: false`: the trace breathes in code but stays below the screenshot tool's threshold. Make the pulse visibly travel at rest if a jury needs to see life without scrolling.
2. [Accessibility] One work figure link is flagged `invisibleFocus` during automated tabbing because Lenis is still animating the scroll. Verify by hand on the live site.
3. [Content] Owner to confirm email, social URLs, and which in-progress projects are delivered.

## Measured

Desktop LCP 1.2 s / mobile 1.7 s, CLS 0.001 / 0.005, 60 fps desktop, 33 fps throttled phone (headless floor), 0 console errors, 0 failed requests, 0 axe violations, no overflow, `noHoverChange` empty, `colorOnly` empty, audit 0 FAIL / 0 WARN.
