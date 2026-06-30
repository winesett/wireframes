# Refactor Audit: Banner, Header, and Stats

Date: 2026-06-30

Scope: plan-only audit for the completed Banner, Header, and Stats categories. This report is based on the built section files, catalog, docs, and existing token/primitives files. It does not propose a global design system pass.

Preflight:

- Current branch at audit time: `banner-shared-css-pass`
- Working tree was clean before this report was created.
- Built categories confirmed: 16 Banner sections, 27 Header sections, and 60 Stats sections.
- Stats 1-60 exist.
- Stats human QA review is recorded in `docs/qa-status.md`, `docs/build-log.md`, and `docs/pattern-candidates.md`.
- Catalog currently lists 103 previews.

## 1. Executive Summary

Safe to refactor now:

- Header category-local shared CSS basics. Header already has additive markup hooks such as `header-heading`, `header-text`, `header-button`, `header-form-row`, `header-input`, and `header-submit` across built variants. A small `src/sections/header/header.shared.css` pass can extract non-layout typography, button, form, and theme basics with lower risk than starting from Stats.
- Stats additive markup hooks. Stats has strong repeated roles, but the CSS carries many source-critical layout and chrome details. The safer first Stats pass is additive HTML hooks only, then a later CSS extraction.
- Banner incremental cleanup only. Banner already has `src/sections/banner/banner.shared.css` for shell, mobile frame, close controls, buttons, and bottom-divider mechanics. Further Banner work should be small and category-local.

Should stay section-specific:

- Banner 13 marquee offsets and clipping, Banner 15 media ticker, and Banner 16 staggered/two-row ticker geometry.
- Header section heights, split/centered/left layout widths, image crop, overlay positioning, and per-variant mobile anchors.
- Stats stat/card min-heights, media placement, tab/media order, left-rule spacing, bordered-card padding, compact-card spacing, and mobile source anchors.

Should not be touched yet:

- Global section container abstraction.
- Global button primitive across Banner, Header, and Stats.
- Global stat card, media split, hero/header layout, or responsive breakpoint rules.
- Aggressive tokenization of source-derived heights, exact paddings, or media crops.

The highest-confidence next implementation pass is a Header category-local shared CSS basics pass because the shared markup hooks already exist and the category has passed human review.

## 2. Repeating HTML Structures

| Pattern | Where it appears | Category or cross-category | Safe to normalize now | What could break |
| --- | --- | --- | --- | --- |
| Action groups | Banner 1-3 and 6-8; Header two-button variants; Stats CTA variants across 1-60 | Cross-category role, category-specific implementation | Category-local only | Button widths, row gaps, mobile wrapping, and source-specific CTA positions differ by category. |
| Primary/secondary buttons | Banner 1-3, 6-8 with `banner-button`; Header button variants with `header-button`; Stats uses section-specific buttons | Cross-category role | Header: yes. Stats: defer. Cross-category: no | Globalizing now would flatten dark/image treatments and Stats 96x48 CTA sizing. |
| Text groups | Banner message stacks; Header headings/body/taglines; Stats intro/title/copy groups | Cross-category role | Header: yes. Stats: additive hooks first. Banner: limited | Heading scales and gaps are source-specific and vary by compact, split, centered, and media layouts. |
| Email forms | Banner 1 and 6; Header email variants 45, 48, 52, 53, 58, 59, 63, 67, 68 | Cross-category role | Header category-local only | Banner form is a compact banner form; Header forms include terms and light/dark/image variants. |
| Terms text | Header email variants | Header-only | Yes, low risk | Terms spacing changes can alter mobile height anchors. |
| Media placeholders and image/video shells | Header image-background variants; Stats media/video panels; Banner media tickers | Cross-category role with different meaning | No | Media crop, overlay, placeholder icon, and source aspect behavior differ sharply. |
| Stat cards/items | Stats 1-60, with row, vertical, split, tabbed, bordered, divider, compact, and media-mixed families | Stats-only | Additive hooks: yes. CSS extraction: later | Card chrome and spacing have already required manual source fixes. |
| Rules/dividers/borders | Banner inset/bottom divider; Stats left rules, card borders, tab rules, divider-card lines; Header mostly background/chrome | Cross-category visual idea, not shared implementation | No global abstraction | Rules differ between full-width section chrome, item-left rules, card borders, and tab state. |
| Layout frames/containers | All categories use section frames and `--section-max-width`/page padding ideas | Cross-category | Defer | A global container would hide source-specific height, clipping, and mobile frame behavior. |
| Accessibility wrappers | `section` with `aria-labelledby`, `dl`/`dt`/`dd` for Stats, `aria-label` for actions/media | Cross-category practice | Keep as practice, not CSS primitive | Markup semantics must remain suited to each category. |

## 3. Repeating CSS Patterns

| CSS pattern | Files or ranges | Confidence | Recommended action | Notes |
| --- | --- | --- | --- | --- |
| Banner shared shell/mobile frame/white background | `src/sections/banner/banner.shared.css`; imports from Banner 1-12 and 14 | High | Leave in place, refine only when needed | Already category-local and proven. Do not pull into global primitives. |
| Banner bottom-divider pseudo-element mechanics | Banner 6-12 and 14 via `banner.shared.css` | High | Leave in place | Full-width divider behavior is source chrome. Keep section list explicit. |
| Banner button base | Banner 1-3 and 6-8 via `banner-button` classes | High | Leave in place | Good example of category-local abstraction. |
| Header typography hooks | Header 44-70 section HTML uses `header-heading` and `header-text` hooks | High | Extract now into `header.shared.css` with local imports | Keep actual layout widths and section heights local. |
| Header button styles | Header two-button and form-submit variants use `header-button` hooks | High | Extract now, category-local | Preserve light/dark/image modifiers and local sizing where needed. |
| Header form rows/input/submit | Header email variants, 9 files | High | Extract now, category-local base plus theme overrides | Do not change mobile stack rules or section-specific widths. |
| Header image overlay treatment | Header image variants CSS uses dark overlay/background image behavior | Medium | Defer or extract only overlay color later | Crop and source height are high-risk. |
| Header responsive breakpoints | Header CSS uses 900px/480px style breakpoints depending on family | Medium | Defer | Breakpoints are structural, not simple cleanup. |
| Stats typography reset and number/label styles | Stats 1-60, especially repeated `__number`, `__label`, `__heading`, `__text` rules | High | Add markup hooks first, extract later | Large repetition, but mobile anchors and family differences make CSS extraction risky as a first pass. |
| Stats CTA button/link and arrow mask | Many Stats CTA variants; arrow asset `0ce0c7b03fa6f5b2eefce37be2272f6f4f5e3627.svg` | High | Stats-local candidate after hooks | Similar to Banner/Header actions but not a global button yet. |
| Stats media/video placeholder shell | Stats 19-24, 33-36, and many 49-60 variants | Medium | Defer | Media panel size and order are source-specific. |
| Stats card borders and inset chrome | Stats 25-60 families | High | Defer CSS extraction until hooks and source families are mapped | Borders/rules/card spacing have been a recurring visual QA issue. |
| Stats compact-card spacing | Stats 37-60 | Medium | Defer | Compact-card spacing is promising but fragile because source heights vary. |
| Global `tokens.css` values | `--section-max-width`, `--desktop-page-padding`, `--mobile-page-padding`, colors, font | High | Leave as-is | Existing tokens are enough for now. Avoid expanding tokens from exact Figma geometry. |
| Global `primitives.css` utilities | `.sr-only`, `.primitive-button`, `.primitive-input` | Medium | Leave as-is | Do not expand into a design system until more categories prove the need. |

## 4. Category-Local Refactor Candidates

### Banner

First low-risk pass:

- Keep `banner.shared.css` category-local and make only tiny additions if future Banner maintenance needs them.
- Possible additions: message text hooks, form-row hooks, social-list hooks, or close-control naming cleanup if a future indexing task needs them.

Files likely affected:

- `src/sections/banner/banner.shared.css`
- Selected `src/sections/banner/*/section.css`
- Possibly selected Banner HTML only for additive hooks, but not required for the next pass.

Classes or patterns to introduce:

- Only if needed: `banner-message`, `banner-message-title`, `banner-message-text`, `banner-form-row`, `banner-social-list`.

Must remain unchanged:

- Banner 13 marquee offsets, scaling, and clipping.
- Banner 15 and 16 media/ticker sizing and stagger math.
- Per-section mobile height and breakpoint rules.
- Existing `banner-button` class behavior.

QA needed:

- All 16 Banners at 1440, 1024, 768, 390, and 320.
- Confirm inset borders and bottom dividers remain full width.
- Confirm ticker/marquee clipping remains intentional and does not cause page overflow.

### Header

First low-risk pass:

- Create `src/sections/header/header.shared.css`.
- Import it from Header section CSS files where the existing additive hooks are present.
- Extract only non-layout basics for text roles, buttons, form rows, inputs, submit buttons, terms text, and theme color basics.

Files likely affected:

- `src/sections/header/header.shared.css`
- `src/sections/header/*/section.css`
- `docs/build-log.md`
- `docs/pattern-candidates.md` if the extraction changes the documented candidate status.

Classes or patterns to introduce:

- No new HTML classes are needed for this pass.
- Use existing hooks: `header-heading`, `header-text`, `header-tagline`, `header-terms`, `header-button`, `header-button--primary`, `header-button--secondary`, `header-form-row`, `header-input`, `header-submit`.

Must remain unchanged:

- Section root min-heights and padding anchors.
- Left/split/centered layout widths.
- Image background crop and overlay geometry.
- Mobile form stacking and exact mobile source heights.
- All section-specific classes must remain.

QA needed:

- All 27 Headers at 1440, 1024, 768, 390, and 320.
- Confirm dark/image contrast, button treatment, form widths, mobile stacking, and image crop.
- Confirm no Banner or Stats files changed.

### Stats

First low-risk pass:

- Add Stats category markup hooks only. Do not extract CSS in the first pass.
- This gives later tooling stable roles without changing visuals.

Files likely affected:

- `src/sections/stats/*/section.html`
- `docs/build-log.md`
- `docs/pattern-candidates.md`

Classes or patterns to introduce:

- `stats-heading`
- `stats-text`
- `stats-tagline`
- `stats-actions`
- `stats-button`
- `stats-link`
- `stats-stat`
- `stats-number`
- `stats-label`
- `stats-description`
- `stats-media`
- `stats-card` only where the source is clearly card-based

Must remain unchanged:

- All Stats section CSS in the additive hook pass.
- Left-rule spacing, inactive tab rules, card borders, compact-card padding, media order, and mobile heights.
- `dl`/`dt`/`dd` semantics unless a real accessibility issue is found and reviewed.

QA needed:

- All 60 Stats at 1440, 1024, 768, 390, and 320.
- Confirm no DOM hook addition changes default styling.
- Confirm stat card borders, left rules, tab rules, media panels, and compact spacing remain unchanged.

## 5. Cross-Category Candidates

Only a few cross-category patterns are strong enough to name, and none should become global implementation primitives yet.

- Tokens: current color, font, section max-width, and page padding tokens are useful and should remain shared.
- Accessibility naming: `section`, `aria-labelledby`, `aria-label`, and `sr-only` patterns should remain shared practice.
- Action semantics: Banner, Header, and Stats all have action groups and buttons, but their visual treatments differ enough to keep category-local classes.
- Arrow-link behavior: Stats and some Banner/Header action styles overlap in concept, but the safest path is category-local implementation until more non-section categories prove the same asset and geometry.

Recommended cross-category action now: document role names consistently, but do not add global CSS.

## 6. Dangerous Abstractions

Do not do these yet:

- Global section container: source heights, mobile frames, clipping, and padding differ by family.
- Global hero/header layout: Header and Stats intro layouts look similar in places but carry different source geometry.
- Global stat card: Stats has multiple card families, and card chrome has been a recurring QA hotspot.
- Global media split: Header background images and Stats media panels are not the same pattern.
- Global responsive rules: 900px, 1100px, and 480px breakpoints are family-specific structural decisions.
- Global button primitive: Banner, Header, and Stats buttons share a role, but not a single visual contract.
- Aggressive tokenization: exact heights, left-rule offsets, media crops, and card min-heights should remain source-specific.
- Bulk formatting of generated section CSS: many Stats files are compact because they were built in later batches; formatting cleanup is tempting but high churn and low value right now.

## 7. Recommended Next Implementation Pass

Name: Header category-local shared CSS basics

Scope:

- Add `src/sections/header/header.shared.css`.
- Import it from Header section CSS files where current hooks are present.
- Extract only safe shared rules for typography roles, button base styles, form row/input/submit basics, and terms text.
- Keep all layout, height, breakpoint, image crop, and theme-specific overrides section-local.

Files affected:

- `src/sections/header/header.shared.css`
- `src/sections/header/44/section.css` through `src/sections/header/70/section.css` for imports and removal of exact duplicate non-layout rules only.
- `docs/build-log.md`
- `docs/pattern-candidates.md` only if the candidate status needs updating.

Expected risk: low to medium.

Why this pass first:

- Header has already received additive shared markup hooks.
- Header has human visual review recorded.
- The repeated roles are clearer than Stats, and the dangerous Header geometry can remain untouched.

Exact QA checklist:

- Run `scripts/dev/ensure-preview-server.mjs`.
- Check every Header section at 1440, 1024, 768, 390, and 320.
- Verify no horizontal overflow.
- Verify heading/body/tagline text scale and line-height are unchanged.
- Verify primary/secondary button styling is unchanged in light, dark, and image variants.
- Verify form input/submit/terms layout is unchanged.
- Verify image overlay and crop are unchanged.
- Verify catalog still lists 103 previews.
- Verify all Header manifests remain draft.
- Verify no Banner or Stats implementation files changed.
- Run `git diff --check`.

Commit strategy:

- Start from a clean working tree.
- Make the Header shared CSS pass on its own branch or checkpointed branch state.
- Commit only Header CSS/shared file plus minimal docs after human review.
- Suggested commit message after review: `Extract header shared CSS basics`.

## 8. Anti-Regression Checklist

Use this before and after any future refactor:

- Confirm current branch.
- Run `git status --short`.
- Confirm the working tree starts clean.
- Confirm no unrelated category files are touched.
- Confirm no global primitives or `src/shared/` are created accidentally.
- Confirm all affected manifests remain draft.
- Confirm visual source chrome is preserved:
  - full-width dividers
  - inset borders
  - stat left rules
  - inactive tab rule behavior
  - card borders
  - media placeholders
  - image overlays
  - clipped ticker/marquee behavior
- Check 1440, 1024, 768, 390, and 320 for every affected section.
- Check no horizontal overflow.
- Check no hidden/clipped text unless source intentionally clips.
- Check no button/input/stat/card overlap.
- Check catalog preview heights do not create false crop artifacts.
- Run `git diff --check`.
- Review `git diff --name-only` before staging.
- Keep docs/review-state updates separate from implementation refactors when practical.

## Files To Touch Later

Likely for the next pass:

- `src/sections/header/header.shared.css`
- `src/sections/header/*/section.css`
- `docs/build-log.md`
- `docs/pattern-candidates.md`

Possible later passes:

- `src/sections/stats/*/section.html` for additive Stats hooks.
- `src/sections/stats/stats.shared.css` only after markup hooks are reviewed and source families are mapped.
- `src/sections/banner/banner.shared.css` only for small Banner-only additions.

Files not recommended for near-term refactor:

- `src/tokens.css`, except for truly proven stable tokens.
- `src/primitives.css`, unless a cross-category primitive is proven by at least one more category.
- `catalog/index.html`, except for preview metadata maintenance.
