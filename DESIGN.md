---
name: Issued For Construction
description: A drawing-sheet design system for a junior full-stack developer's portfolio — flat plotter ink on cool bond, no gradients, no shadows.
colors:
  sheet: "#e8eae6"
  sheet-2: "#dfe2dd"
  ink: "#14161a"
  ink-2: "#4a5057"
  ink-3: "#5a616a"
  rule: "#c3c7c1"
  rule-strong: "#a5aba4"
  redline: "#c93a18"
  redline-ink: "#b32f13"
  construction: "#2e6c8c"
  on-redline: "#f4f5f2"
  plot-sheet: "#101316"
  plot-sheet-2: "#171b1f"
  plot-ink: "#e4e7e3"
  plot-ink-2: "#b4bac0"
  plot-ink-3: "#9aa0a6"
  plot-rule: "#2a2f34"
  plot-rule-strong: "#3b4248"
  plot-redline: "#ff5b33"
  plot-construction: "#6fa8c4"
  plot-on-redline: "#14161a"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 10.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  section:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 5.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.038em"
  subhead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  row-title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  small:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.18em"
  annotation:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.16em"
  micro:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.5625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.2em"
  revision-mark:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
rounded:
  none: "0px"
spacing:
  hair: "1px"
  tight: "0.625rem"
  row: "1.75rem"
  block: "3rem"
  sheet: "5rem"
components:
  control-redline:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.on-redline}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1.5rem"
  control-redline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  control-sheet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1.5rem"
  control-sheet-hover:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.on-redline}"
  pager-sheet:
    backgroundColor: "transparent"
    textColor: "{colors.ink-3}"
    typography: "{typography.annotation}"
    rounded: "{rounded.none}"
    size: "2.5rem"
  pager-sheet-active:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.on-redline}"
  title-block-action:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.on-redline}"
    typography: "{typography.annotation}"
    rounded: "{rounded.none}"
    height: "3rem"
---

# Issued For Construction

## Overview

The page is a drawing sheet, not a document about one. A junior full-stack developer is presented as a set of drawings that were issued, stamped, and built: a bordered sheet with zone references on all four edges, a title block locked to the bottom, a contents index, revision letters, dimension lines, and schedule tables. Everything is drawn — line weight and ink density carry hierarchy and depth, so the system has no shadows and no gradients at all.

Two grounds ship the same drawing. **Sheet** is the default: cool plotter bond, deliberately not warm cream, chosen for a hiring reviewer scanning in daylight. **Plot** is the same sheet with the lights out. The viewer's OS preference picks one on first load; an explicit choice is stored in `localStorage` under `plot`.

Redline is the only accent. It marks what is active, what is current, and what the visitor should do — never decoration.

## Colors

Flat fills only. No gradient is permitted anywhere in this system, including as a texture, a glow, or a "subtle" overlay.

| Token | Sheet | Plot | Use |
|---|---|---|---|
| `sheet` | `#e8eae6` | `#101316` | Page ground |
| `sheet-2` | `#dfe2dd` | `#171b1f` | Title block, inset panels, image wells |
| `ink` | `#14161a` | `#e4e7e3` | Primary text, heavy line work, hover fills |
| `ink-2` | `#4a5057` | `#b4bac0` | Body copy, the surname in the masthead |
| `ink-3` | `#5a616a` | `#9aa0a6` | Annotation labels, table metadata |
| `rule` | `#c3c7c1` | `#2a2f34` | Hairlines, row dividers, inner frame |
| `rule-strong` | `#a5aba4` | `#3b4248` | Section rules, outer frame, control borders |
| `redline` | `#c93a18` | `#ff5b33` | Fills and marks: active sheet, primary action, revision letters |
| `redline-ink` | `#b32f13` | `#ff5b33` | Redline used as small text, where the fill value would miss 4.5:1 |
| `construction` | `#2e6c8c` | `#6fa8c4` | Secondary state: work issued for review |
| `on-redline` | `#f4f5f2` | `#14161a` | Text on a redline fill |

Every pairing in use clears WCAG AA in both grounds. `redline` is a graphical and large-text value; anything under 24px that must read as redline uses `redline-ink`.

## Typography

Two faces, both self-hosted through `next/font`.

**Archivo** carries the voice across its width axis. Display and section headings run at `wdth 125` (`.sheet-wide`) and are uppercase; controls run at `wdth 84` (`.sheet-narrow`); body copy runs at normal width. Display tops out at 6rem, the tracking floor is -0.04em, and body measure is capped at 68ch (`.measure`).

The ramp is six text steps and three display steps, and nothing sits between them: `micro` 0.5625rem, `annotation`/`label` 0.6875rem, `small` 0.8125rem, `body` 0.9375rem, `lead` 1.125rem, `row-title` 1.25rem, then `revision-mark` 2rem and the two clamped display sizes. A new size is a change to this ramp, not a local override.

**Martian Mono** at `wdth 87.5` (`.mono-tight`) is reserved for measurement: sheet numbers, zone references, dates, dimensions, quantities, status stamps, and table metadata. It is never used to make prose look technical. Technology and skill lists are set in Archivo at label size, not in mono.

Tabular figures are on wherever numbers sit in a column (`.tnum`, plus `tnum` in the mono feature set).

## Layout

`.plate` is the single content container: `max-width: 96rem`, auto margins, `padding-inline: clamp(1.25rem, 4vw, 4.5rem)`. Every section is a direct child of it, so the left edge of every heading, rule and row aligns down the whole page.

Sections are separated by a full-width hairline and roughly 5rem of space above the heading, against 1.5rem below it — more air above a heading than below, always. Rows inside a section are separated by `rule` hairlines, never by cards.

Content sits on a 12-column grid at `md` and above: a 2-column gutter for identifiers, 6 columns for prose, 4 for the schedule. Below `md` everything stacks in source order.

The sheet frame is `lg`-and-up only: `bottom-[4.25rem] left-4 right-4 top-4`, a `rule-strong` outer border, a `rule` inner border inset 7px, and zone references A–H on both horizontal edges and 1–5 on both vertical edges. The title block is fixed, 3rem tall, full-bleed under `lg` and inset to match the frame above it.

## Elevation & Depth

**There are no shadows in this system.** Depth is drawn: a heavier stroke, a darker ink, or a filled block reads as nearer. Anything that needs to separate from the ground gets a `rule-strong` border or a `sheet-2` fill, never a drop shadow, glow, or blur. Backdrop-filter is not used.

Overlap order is flat and explicit: content `z-0`, sheet frame `z-40` (pointer-events none), title block `z-50`, skip link `z-60`.

## Shapes

Every corner is square. `border-radius` is `0` everywhere, with no exceptions — a rounded corner reads as a different system.

Icons are authored inline SVG at 1.2–1.4px stroke, square line caps, `currentColor` fill. No icon font, no emoji, no third-party glyph set. The "image not supplied" state is a drawing convention: a thin diagonal cross in the well with a mono caption naming what belongs there.

## Components

**Control** (`src/components/control.tsx`) — the button. Two variants, both rectangular, both with drawn corner ticks and a travelling arrow. `redline` ships filled and inverts to `ink` on hover; `sheet` ships as a hairline outline and fills with `redline`. The fill arrives as a `clip-path` sweep from the left over 500ms, not a colour fade. On a mouse pointer the control is magnetic: it translates up to 10px horizontally and 6px vertically toward the cursor on a spring, and releases on leave, blur, and any non-mouse pointer.

**Title block** (`src/components/title-block.tsx`) — fixed footer carrying drawn-by, the current sheet number and name, the sheet index, scale, revision, issue date, the persistent redline email action, and the ground toggle. The current sheet is tracked with an `IntersectionObserver` at `-45%` root margin and marked with a 2px redline rule that slides between cells via a shared `layoutId`.

**Pager** (`src/sections/work.tsx`) — sheet numbers are addresses, not widgets. The active sheet and the active discipline filter are written to the URL (`?sheet=`, `?d=`) with `history.replaceState`, and the URL is the source of truth, read back through `useSyncExternalStore`. Paging wipes the outgoing set and re-plots the incoming one with a staggered rise.

**Drawing row** — hovering or focusing one row drops every sibling to 40% opacity through `.isolate-list`, using `:has()`, so the field dims around what you are reading.

**Browser surfaces** are themed, not left to the browser: selection is redline on `on-redline`, the caret is redline, the scrollbar is `rule-strong` on `sheet-2` and turns redline on hover, and focus-visible is a 2px dashed redline outline at 3px offset.

## Do's and Don'ts

- **Do** let line weight and ink density carry hierarchy. **Don't** add a shadow, glow, blur, or gradient to make something look raised.
- **Do** keep redline for state and action. **Don't** spend it on decoration, and don't introduce a second accent.
- **Do** use Martian Mono for numbers, codes, dates and dimensions. **Don't** use it to make prose look technical.
- **Do** build sections from ruled rows and real tables. **Don't** introduce a grid of equal cards; this system has none and does not want any.
- **Do** keep every corner square.
- **Do** keep section identifiers functional — they are anchors, contents entries and title-block targets. **Don't** add a kicker or eyebrow above a heading; the heading carries its own weight.
- **Do** state a project's issue status. **Don't** invent metrics, employers, or credentials to fill a row.
