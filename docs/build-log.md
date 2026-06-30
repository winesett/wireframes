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
