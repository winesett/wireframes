# Wireframe Section Library

Clean, responsive HTML/CSS rebuilds of sections from the published Figma Site source. The library is source-first: saved Figma route JSON and screenshots are reference data, while local sections are rebuilt as semantic HTML and maintainable CSS.

This repo does not include the future LLM site-generation layer yet.

## Current Progress

Catalog preview: `http://127.0.0.1:8765/catalog/index.html`

| Category | Variants built | Human visual QA | Shared CSS basics |
| --- | ---: | --- | --- |
| Banner | 16 | Passed | `src/sections/banner/banner.shared.css` |
| Header | 27 | Passed | `src/sections/header/header.shared.css` |
| Stats | 60 | Passed | `src/sections/stats/stats.shared.css` |
| Logo | 6 | Passed | `src/sections/logo/logo.shared.css` |
| FAQ | 14 | Passed | `src/sections/faq/faq.shared.css` |

Total catalog previews: 123.

All built section manifests currently remain `draft`; human review is tracked in docs instead of changing manifest status.

## Directory Map

```text
source/
  figma-site/
    raw-json/      Saved Figma Site route JSON snapshots.
    screenshots/   Source and local screenshots used during QA.
    assets/        Vendored source assets used by rebuilt sections.

src/
  tokens.css       Global tokens used by section previews.
  primitives.css   Minimal global primitives.
  sections/
    banner/        Banner sections 01-16 plus banner.shared.css.
    header/        Header sections 44-70 plus header.shared.css.
    stats/         Stats sections 01-60 plus stats.shared.css.
    logo/          Logo sections 01-06 plus logo.shared.css.
    faq/           FAQ sections 01-14 plus faq.shared.css.

catalog/
  index.html       Local preview catalog for all built sections.

docs/
  section-rebuild-workflow.md          Source-first rebuild workflow.
  source-notes.md                      Source geometry and implementation notes.
  build-log.md                         Chronological build/checkpoint log.
  qa-status.md                         Automated and human QA status.
  pattern-candidates.md                Observed repeated patterns.
  refactor-audit-banner-header-stats.md Plan-only refactor audit.

scripts/
  dev/
    ensure-preview-server.mjs          Starts/reuses the persistent preview server.
    stop-preview-server.mjs            Stops the managed preview server.
    review-section-nav.js              Keyboard navigation helper for section review.
```

## Local Preview

Use the persistent preview server:

```sh
node scripts/dev/ensure-preview-server.mjs
```

Then open:

```text
http://127.0.0.1:8765/catalog/index.html
```

The root URL may return `Not found`; use the catalog path above.

## Working Rules

- Build from saved Figma route JSON, not generated Figma HTML/CSS.
- Build one category or mini-family at a time with explicit safety gates.
- Preserve stable ids such as `banner-1`, `header-44`, and `faq-14`.
- Use desktop and mobile source layouts as anchor states.
- Run checks at `1440`, `1024`, `768`, `390`, and `320`.
- Keep implementation status as `draft` until a separate promotion convention exists.
- Keep shared CSS category-local; do not create a global design system layer.
