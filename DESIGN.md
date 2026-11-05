---
name: KungRC CYD Firmware Station
description: Particle-collider event display — one flash is one collision event; six firmware tracks spray from one CYD board.
colors:
  vacuum: "#070b12"
  vacuum-top: "#0b1220"
  detector-steel: "#223244"
  steel-bright: "#35506b"
  steel-accent: "#4e739c"
  panel-surface: "#0b1018"
  well-surface: "#0e1521"
  ink: "#e9eef5"
  text-steel: "#a7b3c2"
  text-faint: "#6d7a8c"
  track-vario: "#07e86a"
  track-lap: "#05c7f2"
  track-boat: "#ffa02e"
  track-cnc: "#f95867"
  track-rotary: "#c77dff"
  track-hud: "#e8f4ff"
typography:
  display:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.3em"
  headline:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    letterSpacing: "0.22em"
  title:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  body:
    fontFamily: "'Segoe UI', 'Noto Sans Thai', Tahoma, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.18em"
  mono:
    fontFamily: "Consolas, monospace"
    fontSize: "0.78rem"
    fontVariation: "tabular-nums"
rounded:
  chip: "2px"
  code: "3px"
  control: "4px"
  panel: "5px"
  frame: "6px"
spacing:
  panel-pad: "16px"
  grid-gap: "16px"
  frame-pad: "20px"
  wrap-pad: "22px"
  section-gap: "72px"
components:
  button-install:
    backgroundColor: "color-mix(in srgb, var(--pc) 9%, transparent)"
    textColor: "var(--pc)"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 10px"
    width: "100%"
  button-install-hover:
    backgroundColor: "var(--pc)"
    textColor: "{colors.vacuum}"
  panel-card:
    backgroundColor: "{colors.panel-surface}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-pad}"
  chip-use:
    textColor: "currentColor"
    rounded: "{rounded.chip}"
    padding: "2px 6px"
  nav-ghost:
    textColor: "{colors.text-steel}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
---

# Design System: KungRC CYD Firmware Station

## Overview

**Creative North Star: "The Collider Event Display"**

The whole page is the event display of a particle detector: the ESP32-2432S028R board is the collision point at the center of layered steel detector rings, and the six firmwares are six colored particle tracks spraying out of it, each terminating at its own instrument-readout panel. Flashing a firmware once is one collision event. Everything structural — rings, rules, borders, tables — is neutral blue steel; everything that carries a signal (a project name, its track, its INSTALL button, its live version number) wears that project's one committed color.

The atmosphere is a near-black blue vacuum with no grid, no texture, and no decoration at rest. This world explicitly replaced and rejects the old Kraftwerk neon-schematic world: no 40px modular grid, no neon right-angle frames, no lamp-like ambient glow. Light exists only as signal response — the one-time track draw on load and the isolation highlight on hover/focus. Thai prose does the explaining in a quiet humanist voice; short English labels are machine inscriptions in tracked-caps Orbitron; every live number is a tabular Consolas readout.

**Key Characteristics:**
- One dark vacuum ground (#070b12) with a single subtle top gradient from #0b1220; no grid, no pattern.
- Steel for structure, signal color for meaning — six project colors, one per firmware, never swapped.
- Instrument-readout panels: 1px steel border, 2px project-color left stripe, subgrid-aligned rows.
- A hand-built SVG event display is the hero signature; panels and tracks are wired together by hover/focus isolation.
- All icons are drawn inline SVG strokes; no glyph characters, no icon fonts, no raster icons.

## Colors

A neutral blue-steel structure palette carrying six saturated project signal colors against a blue-black vacuum.

### Primary (project signal colors — brand commitments, one per project)
- **Vario Green** (#07e86a): Variometer's track, panel stripe, icon, name, INSTALL button; also the Shopee link color in the parts table.
- **Lap Cyan** (#05c7f2): GPS Lap Timer's signal — and the system interaction color: links, text selection, focus-visible outline, doclink text all use it.
- **Boat Amber** (#ffa02e): Autopilot's signal — also inline `code` text and the drawn warning-triangle icon.
- **CNC Signal Red** (#f95867): CNC Pendant's signal.
- **Rotary Violet** (#c77dff): Rotary Indexer's signal.
- **HUD Ice White** (#e8f4ff): HUD Nav's signal — near-white, distinguished from ink by context (stripe, track, button border).

### Neutral (vacuum + detector steel)
- **Vacuum** (#070b12): page ground. **Vacuum Top** (#0b1220): start of the single 430px top linear-gradient.
- **Detector Steel** (#223244): every structural 1px border, rule, table border, ring segment.
- **Bright Steel** (#35506b): brighter structure — shop table head rule, leader lines, chevron masks, scrollbar. **Accent Steel** (#4e739c): the brightest steel, inner detector rings only.
- **Panel Surface** (#0b1018): panels, dialogs, frames, RUN strip. **Well Surface** (#0e1521): table heads, code background — the recessed layer.
- **Ink** (#e9eef5): primary text. **Text Steel** (#a7b3c2): secondary text, labels. **Faint Steel** (#6d7a8c): tertiary annotations.

### Named Rules
**The Signal Rule.** Steel carries structure; signal color carries meaning. Any element that belongs to a project — track, stripe, icon, name, button, chip, dialog border — wears that project's exact hex, inherited via the panel's `--pc` custom property. Signal colors are never swapped, tinted into new roles, or used decoratively.

**The Cyan System Rule.** Lap Cyan (#05c7f2) doubles as the whole-page interaction color: links, ::selection, :focus-visible, doclinks. No second interaction color exists.

**The Amber Code Rule.** Boat Amber (#ffa02e) doubles as the color of inline `code` and the warning icon. Warnings are amber, never red — red belongs to CNC.

## Typography

**Display Font:** Orbitron (self-hosted `orbitron.ttf`, weight range 400–900, swap)
**Body Font:** Segoe UI (with Noto Sans Thai, Tahoma fallback)
**Label/Mono Font:** Consolas (tabular-nums for live data)

**Character:** Three strictly separated voices — Orbitron tracked-caps for short English machine inscriptions only, a quiet humanist Thai body for all explanation, and tabular Consolas for every live number. Orbitron never sets Thai text and never sets a paragraph.

### Hierarchy
- **Display** (700, clamp(2.2rem, 5.5vw, 3.6rem), lh 1, ls .3em): the KUNGRC wordmark only.
- **Headline** (700, 1.05rem, ls .22em): section heads (BOARD PINOUT, PARTS, 3D CASE) in `.shead`.
- **Title** (700, .95rem, ls .14em): panel names, colored in the panel's `--pc`.
- **Body** (400, 16px, lh 1.55): all Thai prose; dialog body at .92rem / 1.75; prose capped at 70ch inside frames.
- **Label** (700, .8rem, ls .18em): INSTALL buttons; smaller Orbitron labels step down (.78 RUN numbers, .74 tagline, .72 GITHUB, .7 chips/shop links) with tracking .07–.26em.
- **Mono** (.78rem, tabular-nums): version + date readouts in `.meta`; Consolas also sets pin-table data columns (.8rem) and SVG sublabels (11px).

### Named Rules
**The Three Voices Rule.** English labels = Orbitron tracked caps; Thai content = Segoe/Noto body; live numbers = Consolas tabular. A string never borrows another voice.

**The Live Readout Rule.** Every number that comes from data (version, date) renders in Consolas with tabular-nums and is loaded live from the manifest `version`/`updated` fields — never hard-coded in markup.

## Layout

A single centered column (`.wrap`, max-width 1180px, 22px side padding). First viewport at 1440×900: masthead (wordmark + tagline + GITHUB ghost link), the RUN strip of 3 numbered steps in one 1px steel bar, the SVG event display (viewBox 1136×300), then the six-panel row — all six INSTALL buttons above the fold.

- **Panels grid:** 6 columns (gap 18px 16px) → 3 at ≤1150px (row-gap 40px) → 2 at ≤880px → 1 at ≤640px. Panels use `grid-template-rows: subgrid` spanning 6 rows (name / desc / install / meta / note / links) so rows align across the whole row; flex-column fallback under `@supports not`.
- **Event display:** hidden at ≤1150px. In its place each panel grows a 26px top margin with a centered 2px × 17px tick and a 9px dot marker in its own `--pc` — the track terminal reattaches to the panel.
- **Sections** sit 72px apart, each headed by `.shead` (Orbitron caps left, Thai descriptor right-aligned) over a 1px steel rule, content inside a `.frame` (1px steel, radius 6px, 20px padding). Wide tables live in `.tablewrap` with horizontal scroll; the page itself never overflows at 390px.
- **No section numbering.** Numbers appear only where sequence is real: the RUN strip's 01/02/03.

## Elevation & Depth

Flat by default. Depth at rest is tonal: vacuum → panel surface (#0b1018) → well surface (#0e1521), separated by 1px steel borders, plus the one fixed top gradient. Shadows exist only as state response.

### Shadow Vocabulary
- **Panel lift** (`box-shadow: 0 10px 28px rgba(2, 5, 11, .55)`): on panel hover/focus-within, paired with the border tinting toward the panel color via `color-mix(in srgb, var(--pc) 60%, var(--rule))`.
- **Track isolation glow** (`filter: drop-shadow(0 0 6px currentColor)`): only on the isolated SVG track while its panel is hovered/focused.
- **Dialog backdrop** (`rgba(4, 6, 10, .86)`): near-opaque vacuum behind open dialogs.

### Named Rules
**The Vacuum Rule.** Nothing glows at rest. Light — glow, lift, full-opacity color — is always a response to an event: page load (tracks draw once) or hover/focus (isolation). This is signal glow, not the banned Kraftwerk lamp glow.

## Shapes

Hard-edged instrument hardware with barely-softened corners: every container is a 1px Detector Steel border with a small radius that scales with the container — 2px chips, 3px code/close buttons, 4px buttons and the RUN strip, 5px panels, 6px frames and dialogs. Panels carry a 2px solid left stripe in the project color (the committed stand-in for the catalog's side-tab device — recorded in `.impeccable/config.json` ignoreRules). Detector geometry is circular and segmented: rings via `stroke-dasharray`, round-capped 2.5px tracks, dot-plus-leader-line label anchors. Drawn SVG strokes use round caps on tracks/chevrons and square caps on panel icons.

## Components

### Buttons (INSTALL, `.inst`)
- **Character:** an armed instrument control — outlined in the project's signal color, charged at 9%.
- **Shape:** full-width, 13px 10px padding, 4px radius, 1px solid `var(--pc)` border.
- **Fill:** `color-mix(in srgb, var(--pc) 9%, transparent)`; text in `var(--pc)`, Orbitron label voice, with an inline SVG chevron (stroke currentColor).
- **Hover / Focus-visible:** inverts — solid `var(--pc)` fill, Vacuum (#070b12) text.
- **Ghost (GITHUB `.gh`):** 1px steel border, 4px radius, 10px 16px, dim Orbitron .72rem; hover turns border and text Lap Cyan.
- **Close (`.docx`):** 1px steel border, 3px radius, dim text, masked SVG X icon; hover brightens to ink / panel color.

### Chips (`.use`)
- **Style:** Orbitron .7rem ls .07em, 1px `currentColor` border, 2px radius, 2px 6px padding; colored per project via `u-*` class. Used only in the parts table to mark which projects use a part.

### Cards / Containers (`.panel`, `.frame`, RUN strip)
- **Panel:** Panel Surface bg, 1px steel border + 2px `--pc` left stripe, 5px radius, 16px padding, subgrid rows. Hover/focus-within: border tinted 60% toward `--pc` + panel-lift shadow.
- **Frame:** 1px steel, 6px radius, 20px padding, Panel Surface.
- **RUN strip:** panels-surface bar, steps divided by 1px steel left borders, Orbitron step numbers.

### Inputs / Fields
None exist. If one is ever needed: well-surface bg, 1px steel border, 3–4px radius, focus per the system `:focus-visible` (2px Lap Cyan outline, 3px offset).

### Doclinks & Dialogs
- **Doclink:** borderless full-width text button above a 1px steel top rule; Lap Cyan bold text with an 8×9px masked chevron in Bright Steel; hover → ink.
- **Dialog (`.docdlg`):** Panel Surface, 1px border in the owning panel's `--pc` (inherited custom property), 6px radius, 22px 26px padding, min(680px, 100vw−32px), max-height 82vh; h3 1.25rem in `--pc`; closes via ปิด button, backdrop click, or ESC.
- **Tables (`.pin`, `.shop`):** 1px steel collapsed borders; heads on Well Surface in Text Steel; data columns in Consolas.

### Event Display (signature)
Inline SVG (viewBox 1136×300, `aria-hidden`): segmented steel detector rings around the collision core at (568,112); faint colored vertex spray + steel debris curls; dashed beam pipe; one leader line + dot anchoring the Orbitron label "ESP32-2432S028R CORE"; six 2.5px round-capped tracks curving from the core to 4.5px terminal nodes with 2px drop lines into the panel row. Tracks draw once on load via `pathLength="1"` + stroke-dashoffset animation (1.1s, cubic-bezier(.2,.7,.2,1), staggered .08s delays; nodes pop in after). `prefers-reduced-motion: reduce` disables all of it — fully drawn, static. Hovering/focusing a panel sets `.evd.iso`: other tracks and nodes dim to .16 opacity; the active track goes 4px wide with the isolation glow. Hidden ≤1150px (panel tick+dot markers take over).

## Do's and Don'ts

### Do:
- **Do** route every project-owned element through the panel's `--pc` custom property so dialogs, icons, buttons, and markers inherit the right signal color automatically.
- **Do** draw every icon as inline SVG strokes (stroke `currentColor` or `var(--pc)`; masked data-URI SVG for ::before icons) at icon sizes of 8–26px.
- **Do** set every live number in Consolas tabular-nums and load it from the manifest (`version`, `updated`) at runtime.
- **Do** keep hover economy: border tint via `color-mix` + one lift shadow on panels; full fill inversion on buttons; nothing else moves.
- **Do** honor `prefers-reduced-motion`: the only animations in the system (track draw, node pop) switch off to a static fully-drawn state.

### Don't:
- **Don't** reintroduce the dead Kraftwerk grammar: no visible modular/40px grid, no neon right-angle frames, no ambient lamp glow at rest. Glow is permitted only as the track-isolation response.
- **Don't** set Thai text in Orbitron, or any paragraph in Orbitron — it is for short tracked-caps English inscriptions only.
- **Don't** use unicode glyphs or icon fonts for icons (the sole glyph exception is the ↗ external-link arrow inside Orbitron link labels).
- **Don't** number section headings — numbers mark real sequence only (RUN 01–03).
- **Don't** add interest/visitor counters anywhere (permanent product decision, PRODUCT.md 2026-11-05), and don't hard-code version numbers in markup.
- **Don't** repurpose a project signal color for a new meaning, except the two committed double-duties: Lap Cyan as the system interaction color and Boat Amber as code/warning.
