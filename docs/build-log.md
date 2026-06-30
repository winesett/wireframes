# Build Log

## 2026-06-28

- Created the initial repo structure for source snapshots, section source, catalog, and docs.
- Discovered the current Figma Site bundle from live HTML.
- Saved the home/index and banner route source snapshots under `source/figma-site/raw-json/`.
- Extracted `Banner / 1 /` source geometry from the Figma JSON component nodes and route instances.
- Vendored only the source assets used by `Banner / 1 /`.
- Wrote the source report and implementation plan before starting the section build.
- Built only `banner-1` in clean semantic HTML/CSS.
- Added a catalog page that previews only `banner-1`.
- Captured source screenshots at `1440px` and `390px`.
- Captured local catalog screenshots at `1440px` and `390px`.
- Checked horizontal overflow at `1440px` and `390px`; no overflow found.
- No production build step exists in this fresh static repo.
- Added `banner-2` from saved source snapshots; it reuses existing vendored assets and was checked at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow.
- Added `banner-3` from saved source snapshots; it reuses existing vendored assets and was checked at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow.
- Added isolated preview-server helpers. Future local checks should run `node scripts/dev/ensure-preview-server.mjs` and reuse the persistent server at `http://127.0.0.1:8765/catalog/index.html`; stop it only with `node scripts/dev/stop-preview-server.mjs` when explicitly needed.
- Added `banner-4` from saved source snapshots; it adds four social SVG assets and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow.
- Added `banner-5` from saved source snapshots; it is a compact text-link banner, reuses the existing close SVG, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow.
- Added `banner-6` from saved source snapshots; it is a bottom-border form banner, reuses existing mark and close assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow.
- Fixed `banner-6` form control overlap around tablet widths by preserving enough action-group width and stacking before the desktop row becomes cramped.
- Fixed `banner-6` bottom rule rendering so the line spans under the content instead of appearing only in the side gutters.
- Added `banner-7` from saved source snapshots; it is a bottom-divider single-button banner, adds two close/action SVG assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no button/close overlap, and a full-width bottom divider.
- Added `banner-8` from saved source snapshots; it is a bottom-divider two-button banner, reuses existing mark and close assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no button/close overlap, no button/button overlap, and a full-width bottom divider.
- Added `banner-9` from saved source snapshots; it is a bottom-divider social-links banner, reuses existing mark, close, and social assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no social/close overlap, no social icon overlap, and a full-width bottom divider.
- Added `banner-10` from saved source snapshots; it is a compact text-link strip with a bottom divider, reuses the existing close asset, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no text/close overlap, and a full-width bottom divider.
- Added `banner-11` from saved source snapshots; it is a repeated text-logo row with a bottom divider, uses no assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no item overlap, clipped ticker overflow, and a full-width bottom divider.
- Added `banner-12` from saved source snapshots; it continues the repeated text-logo row with a bottom divider, uses no assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no item overlap, intentional clipped ticker overflow, and a full-width bottom divider.
- Added `banner-13` from saved source snapshots; it starts an oversized heading marquee family, uses no assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no controls/assets, intentional clipped heading overflow, and no divider or border.
- Added `banner-14` from saved source snapshots; it returns to the repeated text-logo row family with seven labels and a bottom divider, uses no assets, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no item overlap, intentional clipped mobile ticker overflow, and a full-width bottom divider.
- Added `banner-15` from saved source snapshots; it starts a logo/media ticker variant, vendors one source PNG asset, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no item overlap, loaded media assets, intentional clipped ticker overflow, and no divider or border.
- Added `banner-16` from saved source snapshots; it completes the initial banner set with a two-row logo/media ticker variant, reuses the Banner 15 PNG asset, and was checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320` with no horizontal overflow, no item overlap, loaded media assets, intentional clipped ticker overflow, and no divider or border.
- Created initial Git checkpoint `12a17bc` (`Complete draft banner category`), then performed metadata/catalog cleanup only: manifest wording, naming convention docs, QA note, and data-driven catalog preview heights.
- Recorded human visual QA pass for Banners 1-16. Implementation status remains `draft`; no section HTML/CSS was changed.
- Started a tiny banner-only shared CSS cleanup on `banner-shared-css-pass`: added category-local shared shell, mobile-frame, divider, container-background, and close-control rules while preserving section-specific layout geometry.
- Added banner-local reusable button classes for Banners 1, 2, 3, 6, 7, and 8 while preserving existing section-specific classes, sizing, and action layout rules.

## 2026-06-30

- Added `header-46` from the saved header source snapshot; it is a light text-only header with no assets, controls, dividers, or borders. Checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow or hidden text.
- Added `header-44` from the saved header source snapshot; it is a light left-column CTA header with a tagline and two-button group, no assets, and no dividers or borders. Checked through the persistent preview server at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow, button overlap, or hidden text.
- Added `header-45`, `header-47`, `header-48`, and `header-49` from the saved header source snapshot. Each remains section-scoped, uses no assets, keeps status `draft`, and passed the five-width preview-server check at `1440`, `1024`, `768`, `390`, and `320`.
- Added the light centered mini-family `header-64`, `header-62`, and `header-63` from the saved header source snapshot. Each remains section-scoped, uses no assets, keeps status `draft`, and passed the five-width preview-server check at `1440`, `1024`, `768`, `390`, and `320`.
- Added the dark header family `header-55`, `header-51`, `header-53`, `header-61`, `header-57`, `header-59`, `header-70`, `header-66`, and `header-68` from the saved header source snapshot. Each remains section-scoped, uses no assets, keeps status `draft`, and passed the five-width preview-server check at `1440`, `1024`, `768`, `390`, and `320`.
- Added the image-background header family `header-54`, `header-50`, `header-52`, `header-60`, `header-56`, `header-58`, `header-69`, `header-65`, and `header-67` from the saved header source snapshot. Vendored the shared background asset `d50ffb0afa333613e155822dc6b3dfe63f150a74.png`; each section remains section-scoped, keeps status `draft`, and passed the five-width preview-server check at `1440`, `1024`, `768`, `390`, and `320`.
- Added low-risk shared Header role classes and obvious `data-slot` / `data-pattern` metadata across built Header variants without changing CSS or removing section-specific classes. All Header variants passed the five-width preview-server check after the markup-only pass.
- Recorded human visual QA pass for Headers 44-70. Implementation status remains `draft`; no section HTML/CSS was changed.
- Added the first Stats mini-family `stats-1` through `stats-6` from the saved stats source snapshot. Vendored the shared CTA arrow SVG, reused the existing image background asset for image-overlay variants, restored the source `1px` left stat rules, kept each section section-scoped with status `draft`, and checked each at `1440`, `1024`, `768`, `390`, and `320`.
- Added the second Stats mini-family `stats-7` through `stats-12` from the saved stats source snapshot. It reuses the existing CTA arrow SVG and image background asset, preserves the source `1px` left stat rules, keeps each section section-scoped with status `draft`, and passed checks at `1440`, `1024`, `768`, `390`, and `320`.
- Added `stats-13` through `stats-24` from the saved stats source snapshot. Vendored four required media PNG assets for image, video-lightbox, and tabbed-media variants; preserved source stat/tab left rules; kept each section section-scoped with status `draft`; and checked each at `1440`, `1024`, `768`, `390`, and `320`.

- Added `stats-25` through `stats-36` from the saved stats source snapshot. Reused existing Stats media assets, preserved source bordered stat-card chrome and spacing, kept each section section-scoped with status `draft`, and checked each at `1440`, `1024`, `768`, `390`, and `320`.
- Added `stats-37` through `stats-60` from the saved stats source snapshot. Reused existing Stats CTA/media assets, preserved bordered card chrome, internal divider rules, media/video ordering, and compact-card spacing, kept each section section-scoped with status `draft`, and checked each at `1440`, `1024`, `768`, `390`, and `320`.
- Recorded human visual QA pass for Stats 1-60. Implementation status remains `draft`; no section HTML/CSS was changed.
- Saved the Logo route source snapshot and added `logo-1` through `logo-6`. Vendored the required Webflow and Relume SVG logo assets, reused the existing CTA arrow for `logo-4`, kept each section section-scoped with status `draft`, and checked each at `1440`, `1024`, `768`, `390`, and `320`.
- Fixed Logo review issues in `logo-2`, `logo-3`, `logo-4`, and `logo-6`; reran Logo 1-6 five-width checks with no overflow, missing SVGs, or hidden text.
- Recorded human visual QA pass for Logo 1-6. Implementation status remains `draft`.
- Saved the FAQ route source snapshot and added `faq-1` through `faq-14` in gated batches `1-4`, `5-8`, and `9-14`. Vendored the required accordion-toggle and icon-grid SVG assets, preserved divider/card/icon source chrome, kept each section section-scoped with status `draft`, and checked each at `1440`, `1024`, `768`, `390`, and `320`.
- Fixed FAQ accordion toggle asset mapping for `faq-1`, `faq-2`, `faq-3`, and `faq-10` so divider accordion variants use the source chevron assets instead of the X toggle asset.
