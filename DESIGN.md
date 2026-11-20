# XIS — Design system v3: The Systems Ledger

## What was preserved

From the v2 build: all real projects and their screenshots, the exact Fiverr reviews, the honest status labels, the four-page information architecture (Home, About, Work, Contact), per-project case studies, the 404, the mailto contact form, self-hosted fonts, SEO metadata, sitemap, robots, OG card and the static-export deploy pipeline. Nothing in the content model was deleted; the visual system and copy framing were rebuilt.

What was changed: the dark emerald/neon identity, the dot-and-wire pipeline, the three-column card grids, and the marketing-style section headlines. Those read as a generic AI portfolio rather than as an engineering practice.

## Concept card

```
Idea:        XIS presents itself as an engineering ledger. Every service is a specification,
             every project is a numbered figure with a caption, and one oxide trace connects
             the evidence.
Metaphor:    A mechanical engineer's drawing set and revision log. This is anchored in a real
             fact: Emmanuel studied Mechanical Engineering and hands over documentation.
Signature:   "Fig. 01" in the hero: a real n8n workflow screenshot mounted on paper with leader
             lines and labels. An oxide trace draws across it on load and travels on scroll.
Emotion:     Calm, exact, evidence first. "This person has built this before."
Motion verb: Trace. Lines draw, accents travel along paths, frames resolve. Nothing floats.
Screenshot:  The hero: a confident headline on warm paper beside a dark workflow figure with
             numbered callouts and a fine oxide line running through it.
```

## Palette (named by role)

| Role | Hex | Use |
|---|---|---|
| `ground` | `#F2EFE8` | warm paper, the dominant field |
| `panel` | `#E8E4DA` | inset surfaces, figure mounts |
| `figure` | `#141816` | dark workflow canvas behind real screenshots |
| `ink` | `#191C1A` | primary text, hairlines, footer |
| `muted` | `#5C635E` | secondary text, AA on paper and panel |
| `line` | `rgb(25 28 26 / 0.16)` | rules, dividers, borders |
| `accent` | `#A84427` | oxide marking ink: trace, active state, focus, CTA fill |
| `curtain` | `#191C1A` | page transition |

The accent appears as annotation ink, never as a field colour. No neon, no gradient, no glow. The dark figure panels are the only dark areas and they are real product evidence.

## Typography

- **Display: Supreme** (Fontshare, 500/700). Sharp, tall x-height, technical but with character. Display tracking −0.04em, leading 0.88–0.94, optical negative indent.
- **Body: Switzer** (Fontshare, 400/500). Neutral and readable at 17–18 px / 1.55, measure ≤ 62ch.
- **Technical labels: Azeret Mono** (Fontshare, 400/500). 11–12 px, uppercase, +0.06em tracking. Used for figure numbers, section IDs, stack labels, captions, nav and buttons. Never for body copy.
- Three families, three clear roles. Mono is the small functional voice. No serif (would push the warm palette into the cream-and-terracotta editorial cliché).

## Grid, rhythm, shape

- 12 columns desktop, 4 on phone. Text hangs from columns 1, 5 and 9. Outer margin is the fluid gutter.
- Strong horizontal rules between sections. Section IDs (`01 / ...`) sit in the left column.
- Three spacing moods: compact (specifications, stack), normal (services, testimonials), airy (hero, selected work, contact).
- One radius rule: `--radius: 0px`. Figures and buttons are square. One deliberate exception: the small status dot is a circle by function.
- Motion: one ease family (`expo.out`, `expo.inOut`, `power3.out`), 20–80 ms stagger, big things slower.

## Composition plan

```
HERO        [ split poster ]   headline cols 1–7 / dark workflow figure cols 8–12 with callouts
INTRO       [ statement ]      large paragraph cols 3–9, marginal note in col 11
SERVICES    [ spec ledger ]    numbered rows: title col 1–4, description col 5–9, tools col 10–12
WORK        [ figure wall ]    varied: one full-width figure, then two half-width offset figures
PROOF       [ pull quotes ]    two-column editorial quotes separated by a vertical rule
STACK       [ index ]          eight labelled columns of technology names, no logos
PROCESS     [ numbered ledger ] six rows with number, title and one-line description
ABOUT PAGE  [ dossier ]        portrait figure, bio, philosophy principles, direction, who I work with
WORK PAGE   [ figure index ]   status-grouped rows with inline figures, plus a Labs figure grid
CASE PAGE   [ drawing set ]    title, figure, specification table, capabilities, outcome, next figure
CONTACT     [ split form ]     left: direct routes and a note; right: form on paper
404         [ unlinked node ]  "Signal lost" equivalent: "Figure not found", one route back
```

## Signature implementation

`src/components/HeroFigure.tsx` renders a real workflow screenshot inside a dark `.figure` mount with three numbered leader lines. A single driver (`src/motion/trace.ts`) publishes `--trace` from one scroll variable plus a slow idle term. The trace line, the active callout and the section rule all read that same variable, so they never disagree. Reduced motion paints the final state statically.

## Genericness test

- "Dark portfolio with a green accent" — gone. Paper ground, oxide ink, no neon.
- "Three equal feature cards" — services are specification rows with unequal copy and aligned tool columns.
- "Bento grid" — work is a figure wall with varied widths, not equal tiles.
- "Logo wall" — stack is a categorized text index.
- "Dot grid / glowing orb / terminal mockup" — none. The only dark rectangle is a real workflow screenshot.

## Content rules

No invented clients, metrics or results. Status labels remain honest. No em/en dashes in visible copy, no filler verbs, sentence case. Privacy information lives on a dedicated page, not in a footer footnote.
