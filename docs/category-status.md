# Category Status

This file is the docs-only source of truth for category progress. Section manifests remain `draft`; human review is tracked here and in `docs/qa-status.md`.

| Category | Built variant count | Expected variant count if known | Source snapshot file | Automated QA status | Human QA status | Shared CSS basics status | Manifest status | Notes |
| --- | ---: | ---: | --- | --- | --- | --- | --- | --- |
| Banner | 16 | 16 | `source/figma-site/raw-json/banner.json` | Five-width checks passed during section builds; Banner 1 has a historical rerun note in `docs/qa-status.md`. | Passed | Present: `src/sections/banner/banner.shared.css` | `draft` | Banner shared CSS is imported from section CSS files where used; Banner 13, 15, and 16 keep specialized marquee/ticker CSS section-specific. |
| Header | 27 | 27 | `source/figma-site/raw-json/header.json` | Five-width checks passed during section builds. | Passed | Present: `src/sections/header/header.shared.css` | `draft` | Header sections use semantic `<header>` roots and link category-local shared CSS before section CSS. |
| Stats | 60 | 60 | `source/figma-site/raw-json/stats.json` | Five-width checks passed during section builds. | Passed | Present: `src/sections/stats/stats.shared.css` | `draft` | Stats source borders, rules, cards, media, and tabs remain section-specific. |
| Logo | 6 | 6 | `source/figma-site/raw-json/logo.json` | Five-width checks passed during section builds. | Passed | Present: `src/sections/logo/logo.shared.css` | `draft` | Logo ticker and exact logo sizing remain section-specific. |
| FAQ | 14 | 14 | `source/figma-site/raw-json/faq.json` | Five-width checks passed during section builds. | Passed | Present: `src/sections/faq/faq.shared.css` | `draft` | FAQ accordion, card, divider, and icon layouts remain section-specific. |
| Footer | 17 | 17 | `source/figma-site/raw-json/footer.json` | Five-width checks passed during section build. | Pending | Not started | `draft` | Footer link columns, newsletter forms, social rows, legal rows, card borders, and image bands remain section-specific. |

Current total built previews: 140.
