# Section Rebuild Workflow

This workflow documents how to rebuild future Figma Site section categories using the completed Banner category as the working example.

The goal is to turn published Figma Site sections into clean, responsive, source-faithful HTML/CSS sections that can later become an LLM-selectable wireframe library. The LLM selection layer is not part of this workflow.

## 1. Purpose

Rebuild each Figma Site section as semantic, maintainable local HTML/CSS while preserving the source design intent. The local library should keep stable section ids, source notes, responsive behavior, QA records, and enough pattern tracking to support later refactor decisions.

The Banner category example includes:

- `src/sections/banner/01` through `src/sections/banner/16`
- `source/figma-site/raw-json/banner.json`
- `docs/source-notes.md`
- `docs/qa-status.md`
- `docs/pattern-candidates.md`
- `docs/build-log.md`
- `catalog/index.html`
- `scripts/dev/ensure-preview-server.mjs`
- `scripts/dev/stop-preview-server.mjs`

## 2. Core Principles

- Source fidelity first.
- Responsive behavior second.
- Abstraction later.
- Build one section at a time.
- Do not bulk rebuild categories until the process is proven for that category.
- Treat desktop and mobile source layouts as anchor states, not hard breakpoint-only snapshots.
- Tablet should feel graceful, not like a squeezed desktop.
- Do not create shared primitives until patterns are proven across enough sections.
- Human visual review is required before refactor.

## 3. Source Workflow

Use saved Figma route JSON as the source of truth. For Banner, that source is `source/figma-site/raw-json/banner.json`.

For each section:

- Avoid rediscovering the Figma bundle unless the saved source is missing, stale, or inconsistent.
- Inspect only the current section before building.
- Identify the stable section id, such as `banner-1`.
- Identify the source variant name, such as `Banner / 1 /`.
- Record desktop source dimensions.
- Record mobile source dimensions when available.
- Identify desktop and mobile anchor layouts.
- Identify child structure, text content, padding, gaps, layout direction, and important `x/y/w/h` geometry.
- Identify visual framing and chrome: borders, dividers, fills, close controls, clipped rules, and edge artifacts.
- Identify source assets and vendor only the assets required by the current section.
- Distinguish intentional clipped overflow, such as ticker or marquee behavior, from accidental horizontal page overflow.

Do not use generated Figma HTML/CSS as implementation code. Use it only as reference if the JSON and screenshots need clarification.

## 4. Classification Workflow

Before building, classify the section. This keeps each implementation faithful instead of forcing it into a previous pattern.

For every section, identify:

- Shell family
- Action/content pattern
- Visual framing/chrome
- Responsive behavior
- Asset needs
- Section-specific exceptions

Banner shell examples:

- Contained / inset shell
- Bottom-divider strip
- Text-link strip
- Text-logo row
- Oversized marquee
- Media/logo ticker
- Multi-row media ticker

Banner action/content examples:

- Form action
- Single button
- Two-button group
- Social links
- Text link
- Repeated logos
- Oversized repeated text
- Media/logo mix

## 5. Build Workflow

Build only the current section.

For each new section:

- Add only the current section folder, such as `src/sections/banner/07`.
- Use clean semantic HTML.
- Use section-scoped class names.
- Keep CSS section-scoped until abstraction is approved.
- Do not modify other section HTML/CSS.
- Do not refactor primitives during section build work.
- Update the catalog entry.
- Update the section manifest.
- Update source notes, build log, QA status, and pattern candidates minimally.
- Keep implementation status as `draft` unless a reviewed status convention already exists.

Section folders follow the existing Banner convention:

- Folders are zero-padded for `01` through `09`.
- Folders are unpadded for `10` and above.
- Stable ids are unpadded, such as `banner-1` through `banner-16`.

## 6. Responsive Workflow

Use the source layouts as responsive anchors and let the component breathe between them.

Standard check widths:

- `1440`: desktop source anchor
- `1024`: compressed desktop / small desktop
- `768`: tablet behavior
- `390`: mobile source anchor
- `320`: narrow mobile stress check

Responsive rules:

- Keep the desktop structure at wide widths when the source supports it.
- Let content compress naturally before changing structure.
- Use fluid container widths, flexible gaps, `clamp()` values, and content-driven sizing where possible.
- Use media queries for meaningful structural changes.
- Do not lock desktop height across all widths.
- Do not lock mobile height across all widths.
- Stack only when the row no longer has comfortable space.
- For ticker or marquee sections, clipping may be intentional, but page overflow should still be prevented.

## 7. QA Workflow

Run checks at `1440`, `1024`, `768`, `390`, and `320`.

Verify:

- No horizontal page overflow.
- No content/control overlap.
- No input/button overlap.
- No button/close overlap.
- Desktop anchor is respected.
- Mobile anchor is respected.
- Tablet layout is graceful.
- Assets load.
- Intentional clipping appears only when the source uses ticker or marquee behavior.
- Visual framing/chrome matches source.

Chrome details to check:

- Full-width dividers
- Inset borders
- Bottom borders
- Background fills
- Close icon placement
- Logo alignment
- Clipped or hidden lines
- Edge-only border artifacts
- Content covering a rule

Do not judge success by height and overflow alone. Visual detail matters.

## 8. Preview Server Workflow

Use the persistent preview server helpers.

- Run `node scripts/dev/ensure-preview-server.mjs`.
- Reuse `http://127.0.0.1:8765`.
- Do not start and stop temporary servers for each section.
- Do not stop the preview server unless explicitly asked.
- When stopping is explicitly needed, run `node scripts/dev/stop-preview-server.mjs`.

## 9. Git Workflow

Use git as rollback safety.

- Commit a completed draft category before cleanup or refactor.
- Keep cleanup commits separate from build commits.
- Do not refactor before the checkpoint.
- Keep docs-only review/QA commits separate from implementation commits.

Existing Banner examples:

- `Complete draft banner category`
- `Normalize banner metadata and catalog previews`
- `Mark banner category human reviewed`

## 10. Human Review Workflow

Automated QA does not complete a category.

- Sections remain `draft` after automated QA.
- Human review determines visual pass.
- After human review, document the category as reviewed in QA/build docs.
- Do not change implementation status unless the repo already supports that distinction.
- Only after human review should a refactor/readiness plan be created.

## 11. Refactor Workflow

Refactor comes after category completion and human review.

The first refactor step should be a plan only. It should identify:

- What is safe to abstract.
- What stays section-specific.
- Which files would be touched.
- How source fidelity will be protected.
- What checks must be rerun after any abstraction.

Do not create a design system layer during section rebuild work. Let repeated patterns become obvious first.

## 12. Anti-Patterns

Do not:

- Build an entire category blindly.
- Judge success by height/overflow only.
- Force a section into a previous pattern.
- Abstract after one or two examples.
- Create a design system layer too early.
- Rewrite source HTML/CSS from Figma directly.
- Skip human visual review.
- Let screenshots or QA artifacts become implementation requirements.
- Hand tune mobile without checking source structure.
- Mark categories complete without human signoff.

## 13. Repeatable Prompt Template

Use this template when building the next section in a category.

```text
Build CATEGORY / VARIANT_NUMBER / in fast mode.

Use the existing persistent preview server:
- Run scripts/dev/ensure-preview-server.mjs.
- Reuse http://127.0.0.1:8765.
- Do not start or stop a temporary server.

Section rules:
- Read saved source/figma-site/raw-json/CATEGORY.json.
- Extract only CATEGORY / VARIANT_NUMBER / geometry.
- No bundle rediscovery unless the saved source is missing or stale.
- No reinstall.
- No new assets unless CATEGORY / VARIANT_NUMBER / requires them.
- Add only src/sections/CATEGORY/VARIANT_NUMBER files.
- Update catalog/index.html.
- Update source notes, build log, QA status, and pattern candidates minimally.
- Keep status draft.
- Stop after CATEGORY / VARIANT_NUMBER /.

Important:
- Do not force CATEGORY / VARIANT_NUMBER / into a previous pattern unless the source geometry supports it.
- Identify shell family.
- Identify action/content pattern.
- Identify visual framing/chrome.
- Identify asset needs.
- Identify section-specific exceptions.

Responsive rule:
Use desktop and mobile source layouts as anchor states.
- 1440: desktop source anchor
- 1024: graceful compressed desktop or early stack if needed
- 768: tablet layout, not squeezed desktop
- 390: mobile source anchor
- 320: narrow mobile adapts without overflow

Run the five-width check:
- 1440
- 1024
- 768
- 390
- 320

Verify:
- no horizontal page overflow
- no relevant content/control overlap
- assets load if used
- desktop source anchor respected
- mobile source anchor respected
- tablet layout is graceful
- clipped ticker/marquee behavior is intentional if the source uses overflowing content
- visual framing/chrome matches source, including dividers, borders, backgrounds, logo/media alignment, clipped lines, and edge-only artifacts

Do not abstract shared primitives yet.
Do not create a design system layer.
Do not build CATEGORY / NEXT_VARIANT_NUMBER /.
```
