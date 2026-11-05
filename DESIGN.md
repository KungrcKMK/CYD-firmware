---
name: KungRC Firmware Installer
description: Category-standard dark download page — six brand-color install buttons on a quiet GitHub-dark ground.
colors:
  page-bg: "#101318"
  card-surface: "#161b22"
  hairline: "#262c36"
  well: "#0d1117"
  ink: "#e6e9ee"
  dim: "#98a1ad"
  dim-2: "#6c7683"
  link: "#05c7f2"
  hover-border: "#39414d"
  signal-vario: "#07e86a"
  signal-lap: "#05c7f2"
  signal-boat: "#ffa02e"
  signal-cnc: "#f95867"
  signal-rotary: "#c77dff"
  signal-hud: "#e8f4ff"
typography:
  display:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    letterSpacing: "0.18em"
  headline:
    fontFamily: "'Segoe UI', 'Noto Sans Thai', Tahoma, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 1.95rem)"
    fontWeight: 700
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Segoe UI', 'Noto Sans Thai', Tahoma, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
  body:
    fontFamily: "'Segoe UI', 'Noto Sans Thai', Tahoma, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "6px"
  lg: "10px"
spacing:
  card-gap: "16px"
  card-pad: "18px 16px"
  section: "64px"
  gutter: "22px"
components:
  button-install:
    backgroundColor: "var(--pc)"
    textColor: "{colors.well}"
    rounded: "{rounded.md}"
    padding: "11px 10px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
  button-ghost-hover:
    backgroundColor: "{colors.card-surface}"
  card:
    backgroundColor: "{colors.card-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-pad}"
  chip-use:
    textColor: "var(--pc)"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
    typography: "{typography.label}"
---

# Design System: KungRC Firmware Installer

## Overview

**Creative North Star: "The Official Download Page"**

This is the third visual world (replacing the collider-event-display world) and it is deliberately ordinary: a formal, category-standard firmware download page in the register of the VS Code and Chrome download pages, per the user's standing "ทางการกว่านี้" decision (2026-11-05) and PRODUCT.md's brand commitment "แนวหน้าเว็บ = ทางการ/มาตรฐานหมวด". The ground is GitHub-dark neutrals — near-black page, slightly lifted card surface, 1px hairlines — and the page spends its entire color budget in one place: the row of six solid brand-color install buttons, one per firmware. Everything else (Thai prose, tables, dialogs, footer) stays in grayscale restraint.

No themed devices survive from the old world. The only inscription of brand character is the Orbitron wordmark in the navbar; the rest of the page uses the system Thai sans at one body size with a deliberately flat heading ramp (accepted advisory: flat-type-hierarchy, corporate restraint). There is no decorative motion of any kind — no @keyframes, no transitions beyond browser defaults.

**Key Characteristics:**
- Dark neutral ground, 1px hairline borders, wide soft shadows only on hover/open state (accepted canon grammar: thin border + wide shadow)
- Six per-project signal colors routed through a single `--pc` custom property per card
- Flat type hierarchy in system sans; Consolas tabular-nums reserved for machine data
- Static page: zero animation, hover states only

## Colors

A grayscale GitHub-dark ground carrying six saturated project signals.

### Primary
- **Signal Six** (#07e86a / #05c7f2 / #ffa02e / #f95867 / #c77dff / #e8f4ff): one color per firmware project (vario / lap / boat / cnc / rotary / hud), each routed into its card via the `--pc` custom property. It colors the card's icon stroke, the card title, the solid install button, and the project's `.use` chip in the parts table. These are the page's entire color identity.
- **Link Cyan** (#05c7f2): all hyperlinks, selection background, and `:focus-visible` outlines. Shares a hex with the lap signal but is a separate token (`--link`).

### Neutral
- **Page Night** (#101318): page background.
- **Card Surface** (#161b22): cards, section frames, dialogs, ghost-button hover fill.
- **Hairline** (#262c36): every border — nav rule, card borders, table cells, dialog heads. The CSS also keeps the alias `--rule` at the same value for inline-style back-compat; new code uses `--line`.
- **Well** (#0d1117): inset surfaces — `code` background, table heads — and the dark text on solid install buttons.
- **Ink** (#e6e9ee): primary text.
- **Dim** (#98a1ad) / **Dim-2** (#6c7683): secondary prose / faintest marks (chevron glyphs, shop-table head rule).
- **Hover Border** (#39414d): card border on hover/focus-within.

### Named Rules
**The Six-Button Rule.** The six solid brand-color install buttons in one row are the page's entire color identity on a neutral ground. Never mute them, gradient them, or unify them to one accent. New surfaces inherit the neutral ground; a project signal appears only via `--pc` on that project's own elements.

**The Amber Exception Rule.** Outside the cards, saturated color appears only as: link cyan, amber `code` text, and the amber masked-SVG warning triangle on `.warn` notes. Nothing else on the neutral ground gets a hue.

## Typography

**Display Font:** Orbitron (self-hosted TTF, weight range 400–900) — wordmark only
**Body Font:** Segoe UI / Noto Sans Thai (Tahoma, sans-serif fallback)
**Label/Mono Font:** Consolas (monospace fallback)

**Character:** Corporate and quiet. One system sans at 16px/1.6 does all the prose work in Thai; the ramp between heading levels is intentionally shallow (accepted advisory). Orbitron is a logo material, not a typesetting face.

### Hierarchy
- **Display** (700, 1.02rem, letter-spacing .18em, Orbitron): the KUNGRC navbar wordmark — the only place Orbitron appears.
- **Headline** (700, clamp(1.5rem, 3.4vw, 1.95rem), letter-spacing -.01em): the single page h1.
- **Title** (700, 1.2rem): section h2 (ผังพิน / อุปกรณ์ / เคส 3D). Card h2 is a smaller variant (700, 1rem, letter-spacing .02em, colored `--pc`); dialog h3 sits between (700, 1.15rem, ink).
- **Body** (400, 16px/1.6): all Thai prose; dialog body runs .92rem/1.75; prose inside frames capped at 70ch, hero sub at 72ch.
- **Label** (400, .72–.78rem, Consolas, tabular-nums): machine data only — live version/date meta, pin-table data columns, `.use` chips.

### Named Rules
**The One Wordmark Rule.** Orbitron appears on the `.logo` and nowhere else. Headings, buttons, and labels never borrow it.

**The Machine Data Rule.** Consolas with tabular-nums is reserved for values a machine produced: versions, dates, pin names, project chips. Thai prose never sets in it.

## Layout

A single centered column, max-width 1180px with 22px gutters. Navbar (hairline bottom rule) → hero with three numbered-circle steps in a wrapping flex row (24px circles, flex-basis 300px) → the six-card grid → three framed sections at 64px vertical rhythm → centered single-sentence footer.

The card grid uses `grid-template-rows: subgrid` with each card spanning 6 rows (name / desc / install / meta / note / links), so rows align across cards; a flex-column fallback covers non-subgrid browsers. Columns step 6 → 3 (≤1150px) → 2 (≤880px) → 1 (≤640px) with a 16px gap. Nav anchor links hide at ≤640px (logo + GitHub button remain). Wide tables live in `.tablewrap` with horizontal scroll; the page itself has no horizontal overflow down to 390px.

## Elevation & Depth

Flat at rest. Depth is tonal (well < bg < card) plus 1px hairlines; shadows exist only as state responses.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 8px 24px rgba(0,0,0,.35)`): on card `:hover` / `:focus-within`, paired with the #39414d border.
- **Dialog float** (`box-shadow: 0 16px 48px rgba(0,0,0,.5)`): on open `.docdlg`, over an rgba(8,10,14,.7) backdrop.

### Named Rules
**The Flat-By-Default Rule.** Surfaces carry no shadow at rest. A shadow means the user did something: hover, focus, or an open dialog. Both shadows are soft and offset-down; no hard offset shadows anywhere.

## Shapes

Rectangles with a three-step radius scale: 4px (code chips, `.use` chips, inline images), 6px (buttons, dialog close), 10px (cards, frames, dialogs). Every container is bounded by a 1px `--line` hairline — the thin-border-plus-wide-hover-shadow pairing is the canon card grammar, not a defect. Step numbers are the one circle (24px, hairline ring). Icons are inline stroke SVGs (project icons at 26px, square caps) or masked-SVG glyphs (chevron, close X, warning triangle); no icon fonts, no emoji.

## Components

### Buttons
- **Install (primary):** solid `--pc` fill, dark #0d1117 text, 700 weight .95rem, full card width, 11px 10px padding, 6px radius, borderless. Hover/focus: `filter: brightness(1.12)` only. Wraps an `esp-web-install-button` web component. Trailing inline chevron SVG in currentColor.
- **Ghost (GitHub):** transparent, 1px hairline, 6px radius, 8px 14px, ink text .88rem/600. Hover fills with card surface.
- **Doclink (tertiary):** full-width text button in link cyan .85rem/600, top hairline rule, masked-SVG chevron prefix in dim-2. Hover turns ink.
- **Dialog close (`.docx`):** small hairline-bordered button, dim text .8rem, masked-SVG X prefix; hover brightens border, glyph, and text to ink.

### Chips
- **`.use` chips:** Consolas .72rem, letter-spacing .03em, 1px border in currentColor, 4px radius, 2px 6px; color = the project's signal. Static labels, no states.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** card surface #161b22 on 1px hairline; section `.frame` uses the identical recipe at 20px padding.
- **Shadow Strategy:** flat at rest; hover lift + #39414d border (see Elevation).
- **Internal Padding:** 18px 16px; six subgrid rows keep siblings aligned.

### Tables
- **Pin tables:** full hairline cell borders, .82rem; heads on well background, dim 600; last column Consolas .8rem.
- **Shop table:** row rules only (head rule in dim-2), 11px 6px cells, nowrap cyan links.

### Navigation
- Single hairline-ruled row: Orbitron wordmark, dim .92rem anchor links (hover: ink, no underline), ghost GitHub button pushed right. Links hidden ≤640px.

### Dialogs (signature)
Seventeen native `<dialog>` manuals share one neutral recipe: card surface, hairline border, 10px radius, 22px 26px padding, `min(680px, 100vw - 32px)` wide, 82vh max with scroll, dialog-float shadow, dark backdrop. Head row: 1.15rem/700 ink h3 + `.docx` close over a hairline rule. Cautions use `.warn` — amber masked-SVG triangle prefix on dim text. Dialogs never take the project's signal color; the card behind them already said which project this is.

## Do's and Don'ts

### Do:
- **Do** route a project's color exclusively through `--pc` on its own card, chip, and icon; add a new project by adding one `--c-*` token and one panel class.
- **Do** keep all six install buttons solid, saturated, and side by side — The Six-Button Rule.
- **Do** use masked-SVG or inline-stroke SVG for every glyph, sized 8–26px, stroke-based.
- **Do** keep new containers on the recipe: #161b22 surface, 1px #262c36 border, 10px radius, shadow only on state.

### Don't:
- **Don't** reintroduce themed world devices (collider tracks, beamlines, side-tabs) or any @keyframes/decorative motion; this world is static by decision.
- **Don't** set anything but the wordmark in Orbitron, or any Thai prose in Consolas.
- **Don't** add rest-state shadows, hard offset shadows, or gradients anywhere.
- **Don't** inflate the heading ramp; the flat hierarchy (1rem card h2 → 1.95rem h1 max) is deliberate corporate restraint, not an omission.
