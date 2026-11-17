# Design system: Emmanuel, AI automation developer

## Phase 0: Brief

- **Subject:** Emmanuel, independent AI automation developer.
- **Audience:** business owners and sales teams losing leads between tools; agencies needing white-label builds.
- **Job of the site:** prove the systems work in production, and get a "tell me what's breaking" enquiry.
- **Assets supplied:** full copy only. No images, no client names, no logo, no public URL.
- **Language:** English. **Constraints:** no location, no client names, in-progress work must be marked, unprovable claims excluded, contact details are placeholders.
- **Owner's visual cue:** "dark and emerald like the reports" — treat this as the owner's existing identity, not an AI default. Emerald is used sparingly as a signal colour, never as a flood.

### Explicit assumptions (mirrored in `src/data/site.ts`)

- Public name: **Emmanuel** (given). Years of experience: **not stated, omitted**.
- Email: `hello@emmanuel.studio` — **placeholder, must be replaced**.
- Fiverr URL: `https://www.fiverr.com/` — **placeholder profile link, must be replaced**.
- Production URL: `https://emmanuel.studio` — **placeholder for canonical/robots/sitemap**.
- Results on the site come from the owner's approved gig descriptions; they are labelled "Outcomes reported in past engagements" and flagged `verify: true` in the content file.
- Project status follows the owner's note: photography delivery, inbound SMS and GoHighLevel booking follow-up are **In progress**; the private relationship assistant is **Scoped** (build not started); the event report and the voice/booking system are the only fully delivered items described.

## Phase 1: Concepts

| | Territory | One sentence | Anchor | Signature | O / F / Fe / P |
|---|---|---|---|---|---|
| A | **Material of the profession** | The site is a workflow canvas: one wire runs through the page and each section is a node that fires when the signal reaches it. | Make.com / n8n are literally nodes, triggers and connections — his working material. | A signal pulse travels the wire on scroll and loops slowly at rest; each node lights and snaps as the signal arrives. | 5 / 5 / 5 / 2 |
| B | **How he works** | The site is a handover document: every section is a milestone with a status that ticks as you read. | "I scope before I build… deliver in clear milestones… tested and documented." | Status chips flip from `PENDING` to `RUNNING` to `DONE` on scroll. | 4 / 4 / 4 / 3 |
| C | **Formal system** | The whole homepage is one routed message: every sentence branches to the next with a connector. | Lead routing is the product. | Text branches into two paths that rejoin at the CTA. | 3 / 3 / 4 / 4 |

**Pick: A.** It is the only concept derived from the trade's own material, it produces decisions for layout, motion, type, colour and copy, and it survives to the case pages and the 404. **Borrow from B:** the `DELIVERED / IN PROGRESS / SCOPED` status chips on work, which also carry the owner's honesty requirement. None of the worked-example ideas are reused.

### Concept Card

```
Idea:        A portfolio built as a live automation workflow: a signal travels one wire through
             the page, and each node fires as the signal reaches it.
Metaphor:    A workflow builder canvas, with triggers, nodes, runs and status.
Signature:   One driver variable (scroll progress, with an idle pulse) sends an emerald signal
             along a continuous wire; nodes light, labels resolve and the status changes with it.
Emotion:     Calm competence. "This person's systems actually run."
Motion verb: travel along the wire, then snap into connection.
Screenshot:  The hero: plain-spoken headline on the left, the running pipeline on the right,
             an emerald pulse mid-wire, mono corner meta reading SYSTEM / ONLINE.
```

## Phase 2: Art direction system

### Palette (named by role, inspired by the owner's dark emerald reports)

| Role | Value | Use |
|---|---|---|
| `ground` | `#07110E` | page background, deep green-black |
| `panel` | `#0C1A15` | node surfaces, work rows, cards |
| `ink` | `#E8F3EC` | primary text, mint white |
| `muted` | `#9DB4A8` | secondary text (AA on ground and panel) |
| `line` | `rgb(157 180 168 / 0.24)` | hairlines, wire at rest |
| `accent` | `#39E59B` | the signal: progress, active node, focus ring, tiny UI accents only |
| `curtain` | `#0B1F18` | page transition field |

Emerald appears only where a signal is present. At rest the page is dark, mint and hairline grey. This is what keeps it out of the "near-black plus acid accent" default: the accent is a state, not the identity.

### Type

- **Display + text:** Switzer (Fontshare), weights 400 / 500 / 700. Neutral Swiss, close to the genre's workhorse grotesks; precise, not quirky.
- **Accent / data:** Azeret Mono (Fontshare), weights 400 / 500. Node IDs, statuses, counters, tool lists, corner meta. Never for body copy.
- Fluid scale per `typography.md`. Display tracking −0.045em, leading 0.86 to 0.95, optical negative indent. Body 16–18 px / 1.5, measure ≤ 38rem. UI mono 11–13 px with AA contrast.
- No serif, no script. The concept is a system; the type behaves like one.

### Grid, rhythm, shape, motion

- 12 columns desktop with fluid gutter; text hangs from columns 1, 5 and 9. 4 columns on phones.
- Section rhythm: tight (problems, tools), normal (services, results), airy (about, work), full viewport (hero, closing CTA).
- One radius rule: `--radius: 2px` for all boxes; status lights are circles by function.
- One easing family: `ease.out` entrances, `ease.inOut` curtains, `ease.soft` UI feedback. Big things slower than small ones. Stagger 20–80 ms.

### Composition plan (one layout family per section)

```
HERO        [ poster ]         headline cols 1–7 / live pipeline cols 8–12 / corner mono meta
PROBLEMS    [ index list ]     5 rows: node dot + plain sentence, hairline separators
SERVICES    [ asymmetric ]     6 nodes on a 3×2 grid, tools in mono beneath each
WORK        [ index list ]     5 rows: ID / title / status / stack, status light reacts to signal
RESULTS     [ data / facts ]   5 big tabular numerals on a hairline grid, labelled, footnote
HOW I WORK  [ connector row ]  5 steps on a wire, desktop horizontal / phone stacked
ABOUT PAGE  [ statement ]      bio 8 cols, process 5 nodes, tools tag wall, pricing table
CASE PAGE   [ sticky narrative ] title → diagram cover → context/idea/craft/outcome → next
404         [ poster ]         an unconnected node, "SIGNAL LOST", one route back
```

The wire is one SVG path drawn across hero, services and process sections. A single driver module maps scroll progress plus an idle pulse to the pulse position and every node's active state. Work rows and case pages reuse the node component.

### Genericness test

- "Dark portfolio with a green accent" — the generic model lands here visually, so the accent is restricted to a signal state and the wire is functional (it narrates real process steps and real work statuses), not a background effect.
- "Three equal feature cards" — services are a 3×2 node grid with uneven copy lengths and mono tool stacks, not a card kit.
- "Eyebrow label above every heading" — only the hero and section IDs use mono labels, and they carry real data (section number, status).
- Changed: dropped an initial gradient-hero idea; kept the hero as a poster plus a working diagram.

### No explainer figure

There is no product mechanism to explain; the wire is the concept's own object, not an anatomy figure. The `anatomy` skill is not needed here.

## Revision 2: master profile and previous site folded in

After the first build the owner supplied a full professional profile and the URL of the live previous site (xis-portfolio.pages.dev). Decisions made:

- **Brand:** the previous site already uses **XIS / XCEPTIONAL Intelligence System** live, so it is used as the studio wordmark with Emmanuel as the founder. Flagged for final confirmation.
- **Positioning:** AI Automation, AI Agents and Intelligent Business Systems are the centre. Voice AI is a major specialisation. CRM, API integrations and backend infrastructure demonstrate technical depth rather than being marketed as unrelated services.
- **Projects:** added Flowdit Support Agent, Lead Generation System and Automated Blog Publishing, all delivered, each with the real n8n workflow screenshot from the previous site. Existing projects keep procedural diagrams where no honest image exists.
- **Proof:** three Fiverr reviews are quoted exactly, with reviewer names and countries, because they are real client statements. No invented metrics are published; the unverified results figures from the first brief were removed.
- **Pages:** Home, About, Work index, one case page per project, Contact with a mailto-backed form, and a designed 404.
- **Imagery:** avatar, portrait and three workflow screenshots pulled from the owner's live site into `public/assets/`. The owner also supplied seven more workflow screenshots in `assets/`; six are used on the Work page in a clearly labelled Labs section with captions that describe only what is on screen, and no completion or result is claimed.
- **Identity:** XIS is confirmed as the brand; the owner's full name is Emmanuel Akinfesola. The brand is the wordmark, the full name is used in metadata, JSON-LD and the OG card.
- The workflow-signal concept and the dark emerald palette are unchanged: the new projects are workflows and agents, which the concept expresses directly.

## QA decisions

- **No loader in the final build.** The first loader attempt cost 5.0 s on desktop and 7.9 s on the throttled phone, made the loader text the LCP element, and held the hero behind a wait. It was the weakest accessory and was removed. The site now opens straight into the hero (LCP about 1.3 s on the throttled phone).
- **Idle motion is deliberately subtle.** The driver publishes `--drift` from the GSAP ticker and the pulse moves along the wire at rest, but the change is small enough that `shoot.mjs` reports `idleMotion: false`. It is a design decision to keep the wire quiet rather than add a decorative wobble; the hovers and the signal carry the life. `--drift` feeds only the pulse, never node state, so nothing flickers near a threshold.
- **Headless FPS is a floor.** The script's desktop and phone FPS run on a software GPU (roughly 47 and 31). No layout-property animation is used, so this is a measurement limit rather than a design target.
- **Final evidence:** 0 audit FAIL/WARN, 0 console errors, 0 failed requests, 0 overflow, 0 small targets, 0 axe violations, reduced-motion content complete, 0 `noHoverChange`, 0 `colorOnly`.

## Content rules applied

- No em/en dashes in visible copy, no banned filler verbs, sentence case, no repeated sentences.
- Status is honest, no fake client names, no invented metrics. Locations and years of experience omitted.
- All strings live in `src/data/site.ts` so the owner can swap them without touching markup.
