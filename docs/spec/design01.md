# VOIDHAVEN V0 — Visual Design System

> Source: reference image `方案 A · 经典白 / Notion 式质感`  
> Purpose: extract the **visual design system only**.  
> This document does **not** infer product functionality, business logic, page information architecture, or implementation code.
> Status: **V0 已确认视觉基线**. Product rules remain governed by `VOIDHAVEN V0 前端开发说明.md`; page structure remains governed by `page-spec.md`.

## Reading convention

- **[Observed]**: can be judged directly from the reference image with relatively high confidence.
- **[Inferred]**: a design-system interpretation or implementation recommendation derived from the image; it is not directly measurable from the image and should be validated during implementation.
- Color values and dimensions below are visual approximations from the raster reference and are **not original source tokens**.

## Scope and implementation boundary

- This document resolves visual conflicts only. It must not introduce routes, product functions, business fields, or new user flows.
- The desktop two-column / mobile one-column composition is the visual baseline for the **Home main information region**. Other pages follow the page-specific information architecture in `page-spec.md` and are not required to use a two-column layout.
- The footer must retain all product-required Explore, Project, Community / Contact, and copyright entries. Apply this document's restraint through compact text grouping and responsive compression, not by removing required links.
- The desktop reference's far-right utility icon is non-functional visual reference only. Do not add it without a product-defined purpose.
- Hero display typography must preserve “weak brand, strong information”: on common desktop sizes, users should be able to see a real-information section heading or first item in the initial viewport.

---

## 1. Overall visual language

### [Observed]

- The overall style is **light, restrained, editorial, tool-like, and highly readable**.
- The interface avoids obvious decorative technology motifs:
  - no neon glow;
  - no blue-purple gradient;
  - no glassmorphism;
  - no complex illustration as the visual center;
  - no heavy texture.
- The page relies primarily on:
  - typography hierarchy;
  - whitespace;
  - light borders;
  - restrained contrast;
  - simple geometric containers.
- The brand expression is intentionally weak compared with the information body:
  - brand mark and slogan are visible;
  - the content area still dominates visual attention.
- The overall feel is closer to a **knowledge/productivity tool or high-quality editorial website** than a marketing landing page.

### [Inferred]

- The visual direction can be described as:

  **Calm Light Editorial / Quiet Productivity UI**

- The design should prioritize:
  1. legibility;
  2. scanability;
  3. visual calm;
  4. information hierarchy;
  5. consistency;
  6. brand restraint.
- Avoid adding visual elements merely to make the interface “look richer”. Empty space is part of the design language.

---

## 2. Color palette

### [Observed]

The reference is almost entirely neutral.

Approximate visible palette:

| Role | Approximate value | Notes |
|---|---:|---|
| Outer canvas background | `#FAFAFB` | Very light cool gray |
| Main app/page surface | `#FEFEFE` / `#FFFFFF` | Nearly pure white |
| Primary text | `#121923` to `#111827` | Near-black, slightly cool |
| Secondary text | around `#626975` | Medium neutral gray |
| Tertiary/meta text | around `#8A9099` | Lower-emphasis gray |
| Border/divider | around `#E8E9EC` | Very light gray |
| Primary button background | around `#121923` | Same family as primary text |
| Primary button text | `#FFFFFF` | White |
| Secondary button background | `#FFFFFF` | White |
| Secondary button border | around `#C9CDD3` | Mid-light gray |

- The palette uses **contrast through luminance**, not through hue.
- No saturated accent color is visibly dominant.
- The visual hierarchy comes from black/gray/white balance rather than color coding.

### [Inferred]

- V0 should keep accent use extremely limited.
- If a later accent color is introduced, it should:
  - be low saturation;
  - occupy a small percentage of the screen;
  - be reserved for semantic emphasis, selection, focus, or status;
  - never compete with content.
- Avoid pure `#000000` across large areas; the reference appears to prefer a softer near-black.

---

## 3. Typography hierarchy

### [Observed]

The reference clearly mixes two typographic personalities:

1. **English display / slogan**
   - serif;
   - high contrast;
   - editorial feel;
   - visually elegant rather than technical.

2. **Chinese UI / body**
   - clean sans-serif;
   - compact;
   - neutral;
   - optimized for scanning.

Visible hierarchy:

- Brand name: small, bold, uppercase Latin text.
- Brand Chinese subtitle: very small secondary text.
- Hero English slogan: largest type on the page, serif.
- Hero Chinese headline: large sans-serif, bold/semibold.
- Hero supporting copy: smaller neutral gray text.
- Section headings: medium-large, bold/semibold.
- Card/list title: medium, stronger than metadata.
- Metadata: small gray text.
- Footer: smallest text tier.

### [Inferred]

Recommended hierarchy relationship, not exact sizes:

| Tier | Suggested visual role |
|---|---|
| Display | English serif slogan |
| H1 | Primary Chinese statement |
| H2 | Section heading |
| H3 / Item title | Competition/team row title |
| Body | Supporting paragraph |
| Meta | Category, deadline, skill, count |
| Caption | Footer / auxiliary labels |

- A practical size relationship could follow roughly:
  - Display: 2.0–2.4× body size;
  - H1: 1.5–1.8× body;
  - H2: 1.2–1.35× body;
  - item title: 1.0–1.1× body;
  - meta: 0.78–0.88× body.
- Line-height should remain generous for paragraphs, tighter for headings and compact list rows.
- The serif/sans contrast should remain a deliberate brand device; do not replace everything with one sans-serif family.

---

## 4. Grid / container system

### [Observed]

Desktop:

- The page sits inside a large centered rounded container.
- The container has generous outer margins.
- Header, content, CTA region, and footer all align to the same horizontal content frame.
- Main information content uses a **two-column split**.
- The two columns appear close to equal width.
- The column gap is clearly larger than the spacing between rows inside a column.
- Hero content is left aligned.
- The page does not use full-bleed sections.

Mobile:

- The app becomes a single narrow column.
- Main modules stack vertically.
- Horizontal padding remains present on both sides.
- The mobile layout maintains the same visual order and hierarchy rather than attempting to preserve the desktop two-column layout.

### [Inferred]

Recommended layout model:

- Desktop outer viewport:
  - centered max-width shell;
  - generous viewport margin;
  - one primary content grid.
- Desktop main content:
  - two equal or near-equal columns;
  - shared baseline and section rhythm.
- Mobile:
  - one-column flow;
  - preserve section order;
  - avoid horizontally scrollable primary content.
- Tablet:
  - may keep two columns if width permits;
  - otherwise collapse earlier rather than squeeze content.

Approximate container behavior:

- Desktop max content width: visually around 900–1100 px.
- Page inner horizontal padding: approximately 48–64 px desktop.
- Mobile horizontal padding: approximately 20–28 px.

These are implementation starting points, not measurements from source files.

---

## 5. Spacing rhythm

### [Observed]

- Spacing is consistent and calm.
- The interface uses larger gaps between **semantic sections** than between **elements inside a section**.
- The hero has noticeably more vertical breathing room than list rows.
- Card/list content is compact but not cramped.
- Navigation and footer are vertically shallow compared with the hero.
- CTA block has its own clear vertical separation from the two-column content area.

### [Inferred]

Use a small spacing scale rather than arbitrary values.

A likely rhythm:

- micro: 4
- small: 8
- compact: 12
- normal: 16
- medium: 24
- large: 32
- section: 48
- major section: 64

Design principle:

- metadata spacing < row padding < card gap < section gap < hero spacing.

Avoid:
- random one-off margins;
- overly large gaps inside cards;
- excessive vertical expansion on mobile.

---

## 6. Header

### [Observed]

Desktop header:

- Horizontal single-row header.
- Left: brand identity.
- Middle/right: primary navigation.
- Far right: utility control/icon.
- Bottom border separates header from content.
- Header background is the same or nearly the same as the page surface.
- No heavy shadow.
- Navigation typography is compact and neutral.
- The brand block has two lines:
  - `VOIDHAVEN`;
  - smaller Chinese subtitle.

Mobile header:

- Left: compact brand block.
- Right: hamburger/menu icon.
- Navigation links disappear from the visible row.
- Header remains visually shallow.
- Bottom divider remains.

### [Inferred]

- Header should remain visually static and quiet.
- If sticky behavior is used later, it should not introduce a heavy blur or strong drop shadow.
- Navigation active state should be subtle:
  - weight change;
  - small underline;
  - text color shift;
  - not a large filled pill.
- Utility controls should use icon-only treatment where meaning remains clear.

---

## 7. Footer

### [Observed]

- Footer is extremely restrained.
- Separated from content by a thin divider or whitespace.
- Left side: copyright / brand text.
- Right side: a few concise text links.
- No large multi-column sitemap.
- No dark footer block.
- Typography is small and low emphasis.
- Mobile footer compresses content into a narrow horizontal or compact layout.

### [Inferred]

- Footer should remain secondary to the page content.
- Keep it text-first; avoid icon overload.
- Preserve the same neutral background as the main surface.
- If more links are added later, do not let the footer become visually heavier than the content above.

---

## 8. Buttons

### [Observed]

Two visible button tiers:

### Primary

- dark near-black fill;
- white text;
- rectangular;
- small-to-medium corner radius;
- medium height;
- clear but not oversized.

### Secondary

- white/transparent fill;
- gray border;
- dark text;
- same general height and shape as primary.

Other observations:

- Buttons do not use gradients.
- No glow.
- No large pill shape.
- No visible icon in the primary hero buttons.
- Button styling is functional and minimal.

### [Inferred]

Recommended behavior:

- Primary hover:
  - slightly lighter or darker near-black;
  - no large scale animation.
- Secondary hover:
  - very light gray background;
  - slightly darker border.
- Focus:
  - visible 2 px-style focus ring or equivalent accessible treatment;
  - keep ring low-saturation and clearly distinguishable.
- Pressed:
  - slight tonal shift;
  - avoid exaggerated transform.

---

## 9. Cards / list rows

### [Observed]

- Content items sit inside lightly bordered white containers.
- Card/list rows have:
  - subtle border;
  - modest radius;
  - no strong shadow;
  - compact vertical padding.
- Information hierarchy inside a row:
  1. title;
  2. category/type metadata;
  3. time/status/count metadata.
- A right-facing chevron/arrow is used as a subtle affordance.
- Multiple items can share one larger container with internal separators, especially on mobile.
- Labels such as recruitment type appear as small, low-contrast badges.

### [Inferred]

- Prefer **list-row semantics** over visually heavy cards.
- Do not turn every item into a floating tile.
- Hover on desktop should be subtle:
  - background shift to a very light gray;
  - border slightly darkens;
  - chevron may move by 1–2 px;
  - title can increase contrast.
- Maintain the row’s compactness; do not enlarge on hover.
- Mobile rows should remain easy to tap, so visual compactness must not reduce touch target size.

---

## 10. Borders / radius / shadows

### [Observed]

Borders:

- Very light gray.
- Used frequently to define structure.
- Header/footer separators are thin.
- Cards use light outlines.

Radius:

- Main outer desktop shell: relatively large radius.
- Mobile shell: relatively large radius.
- Content cards/buttons: smaller, restrained radius.
- The interface is not heavily “pill-shaped”.

Shadows:

- Main shell uses a soft diffuse shadow against the outer canvas.
- Internal cards appear nearly shadowless or completely shadowless.
- Shadow is used to establish the **page shell**, not every component.

### [Inferred]

Approximate radius hierarchy:

- app shell: 18–24 px;
- content cards: 6–10 px;
- buttons: 4–8 px;
- small badges: 4–6 px or mild pill depending on label length.

Shadow principle:

- one primary ambient shadow for the overall shell;
- little or no elevation inside the product surface.

Avoid:
- multiple stacked box shadows;
- heavy dark shadow;
- blurred neon edge;
- exaggerated glass effects.

---

## 11. Desktop responsive behavior

### [Observed]

- Desktop composition has:
  - centered outer shell;
  - full header;
  - wide hero;
  - two-column information region;
  - horizontal CTA;
  - horizontal footer.
- Desktop space is used to compare two information groups side-by-side.
- Content does not stretch to the full viewport width.

### [Inferred]

Recommended desktop behavior:

- Keep a max-width container.
- Increase outer margin rather than continuously stretching line length.
- Two-column information blocks should remain balanced.
- CTA should span the available content width.
- Hero text width should be constrained; do not let long copy run across the whole page.
- On very large monitors, preserve readable content width instead of scaling everything up.

---

## 12. Mobile responsive behavior

### [Observed]

- Desktop navigation collapses to a menu icon.
- Hero buttons become full-width stacked buttons.
- Main two-column content stacks vertically.
- Content rows become denser but retain title → metadata → action hierarchy.
- CTA becomes a compact card-like block.
- Footer is simplified.
- Desktop and mobile use the same visual language rather than separate themes.
- No sideways scrolling is implied.

### [Inferred]

Recommended mobile rules:

- Single-column layout.
- Full-width primary and secondary CTA buttons.
- Minimum comfortable touch area for interactive rows.
- Keep body text readable without zoom.
- Truncate excessively long titles only where necessary; prefer 2-line wrapping over aggressive single-line ellipsis.
- Preserve important metadata such as date/status before optional secondary metadata.
- Avoid placing more than two short metadata groups on one cramped horizontal line.

---

## 13. Information density

### [Observed]

- Density is **moderate**, not sparse.
- The page shows several real content items above the fold while still maintaining whitespace.
- Hero occupies a meaningful but not dominant portion of the page.
- Rows contain multiple metadata points but are visually simplified.
- No large decorative media consumes the primary content area.
- The design is optimized for scanning rather than immersive storytelling.

### [Inferred]

Target density:

- High enough to communicate “this site has useful information”.
- Low enough that a new user can scan the page in seconds.
- Prioritize:
  1. title;
  2. deadline/status;
  3. one or two supporting metadata items;
  4. next-step affordance.
- Secondary explanatory copy should be intentionally short.
- Avoid adding icons to every metadata field; typography and spacing should do most of the work.

---

## 14. Hover / focus recommendations

> The reference is static, so interaction states cannot be directly observed. Everything in this section is **[Inferred]**.

### Navigation

- Hover:
  - increase text contrast slightly;
  - optional subtle underline.
- Active:
  - slightly stronger weight or persistent underline.
- Focus:
  - visible keyboard outline that does not alter layout.

### Buttons

- Primary hover:
  - small luminance change only.
- Secondary hover:
  - light neutral background.
- Focus:
  - accessible focus ring outside the border.
- Active:
  - subtle tonal shift.

### Content rows / cards

- Hover:
  - background changes from white to a barely visible gray;
  - border becomes slightly more visible;
  - arrow shifts 1–2 px horizontally.
- Focus-within:
  - visible outline or border emphasis.
- Avoid:
  - scale-up effects;
  - strong shadow;
  - bounce;
  - glow.

### Links

- Text links should not rely on color alone.
- Consider:
  - underline on hover;
  - arrow movement for “view all” style links;
  - clear focus state.

### Motion

- Keep transitions short and unobtrusive.
- Motion should confirm interaction, not become visual decoration.
- Prefer simple opacity/color/position transitions over complex entrance animations.

---

# Visual guardrails

These rules summarize the visual system and should remain stable unless the design direction is intentionally revised.

## Preserve

- light neutral canvas;
- near-white main surface;
- near-black typography;
- restrained grayscale palette;
- serif English display typography;
- clean sans-serif Chinese UI typography;
- generous whitespace;
- compact information rows;
- subtle borders;
- low-shadow internal components;
- two-column desktop / one-column mobile structure;
- quiet, editorial, productivity-tool feel.

## Avoid

- blue-purple SaaS gradients;
- neon;
- glassmorphism;
- large decorative illustrations;
- full-page dark sections;
- oversized pill controls;
- excessive badges;
- strong card shadows;
- excessive rounded containers;
- unnecessary icons;
- aggressive animations;
- visual elements that reduce reading efficiency.

---

# Uncertain items requiring implementation validation

The raster reference does not provide exact source tokens for the following. They should be treated as adjustable during frontend implementation:

- exact font family names;
- exact font sizes and line heights;
- exact color hex values;
- exact content max-width;
- exact spacing token values;
- exact radius values;
- exact breakpoint widths;
- exact hover/focus behavior;
- exact shadow blur/spread values.

The implementation should preserve the **visual relationships** shown in the reference rather than overfitting to guessed pixel values.
