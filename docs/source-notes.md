# Source Notes

## Figma Site Bundle

- Source URL: https://hem-vivid-26639759.figma.site/
- Discovered bundle id: `2f34a538-9a2c-4992-80d6-af21effa18c8`
- Assets version: `v11`
- Bundle creation date from live HTML: `2026-06-27 20:57:44 UTC`
- Route JSON saved: `source/figma-site/raw-json/banner.json`
- Route HTML snapshot saved: `source/figma-site/raw-json/banner.html`

## Banner / 1 / Source Report

- Stable section id: `banner-1`
- Source variant name: `Banner / 1 /`
- Component set node: `5:212386`
- Desktop component node: `5:212387`, instance node: `5:212858`
- Mobile component node: `5:212400`, instance node: `26:105302`
- Desktop size: `1440 x 69`
- Mobile size: `375 x 234`
- Background mode: white container with black 1px border; outer frame has no fill.
- Text content:
  - Heading: `Medium length banner heading goes here`
  - Body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  - Input placeholder: `Enter your email`
  - Button: `Sign Up`
- Assets used:
  - Desktop Relume mark: `9cf122f64ad5a3bc077989c0acec462e1de94ebc.svg`, `24 x 26.667`, rendered in a `32 x 32` slot.
  - Desktop close icon: `64f896b4c3690a302cef786da86b02c1d82c4846.svg`, `32 x 32`.
  - Mobile close icon: `37ab8e01284c0a28e8d2c33fee6db113c084e130.svg`, `32 x 32`.
  - Note: the mobile component tree references `e63419fd535b2e50a01d04e2f41524c63fa9f784.svg`, but the published mobile route screenshot for the first banner does not visibly render the Relume mark. The local build follows the published route screenshot.

### Desktop Geometry

- Outer frame: `1440 x 69`, vertical auto layout, horizontal padding `64`, child centered.
- Container: `x=80`, `w=1280`, `h=69`, horizontal layout, padding `12 16`, gap `32`, align center.
- Left content group: `w=768`, `h=45`, horizontal layout, gap `16`, align center.
- Relume mark slot: `32 x 32`.
- Text stack: `w=720`, `h=45`, vertical, no gap.
- Heading: `w=720`, `h=24`, Roboto Semibold `16/24`.
- Body: `w=720`, `h=21`, Roboto Regular `14/21`.
- Right controls group: `w=448`, `h=40`, horizontal layout, gap `16`, align center.
- Form: `w=400`, `h=40`, horizontal layout, gap `16`.
- Input: `w=289`, `h=40`, padding `8 12`, black 1px border.
- Button: `w=95`, `h=40`, padding `8 20`, black fill and border.
- Close icon slot: `32 x 32`.

### Mobile Geometry

- Outer frame: `375 x 234`, vertical auto layout, horizontal padding `20`.
- Container: `x=20`, `w=335`, `h=234`, vertical layout, padding `16`, gap `16`.
- Top content group: `w=303`, `h=90`, horizontal layout, right padding `28`.
- Relume mark slot: component tree references `32 x 32`, but the published mobile route does not visibly render it.
- Close icon: absolute, `32 x 32`, visually positioned at top right around `x=315`, `y=-8` relative to the source route instance.
- Text stack: `w=275`, `h=90`, vertical, no gap.
- Heading: `w=275`, `h=48`, Roboto Semibold `16/24`.
- Body: `w=275`, `h=42`, Roboto Regular `14/21`.
- Form group: `w=303`, `h=96`, vertical layout, gap `16`.
- Input: `w=303`, `h=40`, padding `8 12`, black 1px border.
- Button: `w=303`, `h=40`, padding `8 20`, black fill and border.

## Banner / 1 / Implementation Plan

1. Define minimal shared tokens for color, type, spacing, and section constraints.
2. Add small primitives for reset-like behavior, icon images, buttons, and text inputs.
3. Build `src/sections/banner/01/section.html` as semantic HTML with a section, content copy, email form, and close button.
4. Build `src/sections/banner/01/section.css` from the source geometry, using desktop dimensions first and a mobile media query that follows the source mobile component.
5. Reference only vendored source assets from `source/figma-site/assets`.
6. Add `catalog/index.html` that previews only `banner-1`.
7. Mark QA status as `draft` and require human review before any completion claim.

## Banner / 2 / Implementation Note

- Stable section id: `banner-2`
- Source variant name: `Banner / 2 /`
- Component set node: `5:212413`
- Desktop instance node: `5:212859`, size `1440 x 69`
- Mobile instance node: `26:105303`, size `375 x 178`
- Desktop geometry: centered `1280 x 69` container, padding `12 16`, gap `32`; message group `1080 x 45`; actions group `136 x 40`; button `88 x 40`; close icon `32 x 32`.
- Mobile geometry: `335 x 178` container inside `375px` frame, padding `16`, gap `16`; message `303 x 90`; actions `303 x 40`; button `88 x 40`; close icon absolute at top right. The mobile component references a mark asset, but the published mobile route screenshot does not visibly render the mark, matching Banner / 1 /.
- Assets: reuses existing vendored desktop mark `9cf122f64ad5a3bc077989c0acec462e1de94ebc.svg`, desktop close `64f896b4c3690a302cef786da86b02c1d82c4846.svg`, and mobile close `37ab8e01284c0a28e8d2c33fee6db113c084e130.svg`; no new assets needed.
- Plan: implement as a clean scoped section with a fluid desktop row, tablet stacked state, and narrow mobile target anchored to `375 x 178`.

## Banner / 3 / Implementation Note

- Stable section id: `banner-3`
- Source variant name: `Banner / 3 /`
- Component set node: `5:212436`
- Desktop instance node: `5:212860`, size `1440 x 69`
- Mobile instance node: `26:105304`, size `375 x 178`
- Desktop geometry: centered `1280 x 69` container, padding `12 16`, gap `32`; message group `976 x 45`; actions group `240 x 40`; two-button group `192 x 40`; close icon `32 x 32`.
- Mobile geometry: `335 x 178` container inside `375px` frame, padding `16`, gap `16`; message `303 x 90`; actions `303 x 40`; two-button group `192 x 40`; close icon absolute at top right. As with Banner / 1 / and / 2 /, the mobile component references a mark asset but the published mobile route screenshot does not visibly render it.
- Assets: reuses existing vendored desktop mark `9cf122f64ad5a3bc077989c0acec462e1de94ebc.svg`, desktop close `64f896b4c3690a302cef786da86b02c1d82c4846.svg`, and mobile close `37ab8e01284c0a28e8d2c33fee6db113c084e130.svg`; no new assets needed.
- Plan: implement as a scoped two-action banner with a fluid desktop row, tablet stacked state, and narrow mobile target anchored to `375 x 178`.

## Banner / 4 / Implementation Note

- Stable section id: `banner-4`
- Source variant name: `Banner / 4 /`
- Component set node: `5:212463`
- Desktop instance node: `5:212861`, size `1440 x 69`
- Mobile instance node: `26:105305`, size `375 x 162`
- Desktop geometry: centered `1280 x 69` container, padding `12 16`, gap `32`; message group `1036 x 45`; actions group `180 x 32`; social links `132 x 24`; close icon `32 x 32`.
- Mobile geometry: `335 x 162` container inside `375px` frame, padding `16`, gap `16`; message `303 x 90`; social links `132 x 24`; close icon absolute at top right. As with the earlier banners, the mobile component references a mark asset but the published mobile route does not visibly render it.
- Assets: reuses the existing desktop mark, desktop close, and mobile close assets; added four social SVG assets for Facebook, Instagram, X, and LinkedIn.
- Plan: implement as a scoped social-link banner with a fluid desktop row, tablet stacked state, and narrow mobile target anchored to `375 x 162`.

## Banner / 5 / Implementation Note

- Stable section id: `banner-5`
- Source variant name: `Banner / 5 /`
- Component set node: `5:212496`
- Desktop instance node: `5:212862`, size `1440 x 48`
- Mobile instance node: `26:105306`, size `375 x 64`
- Pattern: compact text-only banner with an inline underlined link and dismiss control; no form, button group, social links, or Relume mark.
- Desktop geometry: centered `1280 x 48` container, padding `8 16`, gap `16`; content group `1200 x 24` with left padding `48` and centered text; close icon `32 x 32`.
- Mobile geometry: `335 x 64` container inside `375px` frame, padding `8 8 8 16`, gap `16`; content `263 x 48`, left-aligned text; close icon `32 x 32`.
- Assets: reuses existing desktop close `64f896b4c3690a302cef786da86b02c1d82c4846.svg`; no new assets needed.
- Plan: implement as a scoped compact announcement banner with a fluid row across desktop/tablet and a narrow mobile target anchored to `375 x 64`.

## Banner / 6 / Implementation Note

- Stable section id: `banner-6`
- Source variant name: `Banner / 6 /`
- Component set node: `5:212509`
- Desktop instance node: `5:212863`, size `1440 x 69`
- Mobile instance node: `26:105307`, size `375 x 210`
- Pattern: form banner with email input and submit button, using a filled outer strip with bottom border rather than the bordered inner container used by Banner / 1 /.
- Desktop geometry: centered `1280 x 69` container, padding `12 0`, gap `32`; message group `800 x 45`; actions group `448 x 40`; form `400 x 40`; close icon `32 x 32`.
- Mobile geometry: `335 x 210` container inside `375px` frame, padding `16 0`, gap `16`; message `335 x 66`; form `335 x 96`; close icon visually offset at the top right.
- Assets: reuses existing desktop mark `9cf122f64ad5a3bc077989c0acec462e1de94ebc.svg`, desktop close `64f896b4c3690a302cef786da86b02c1d82c4846.svg`, and mobile close `37ab8e01284c0a28e8d2c33fee6db113c084e130.svg`; no new assets needed.
- Plan: implement as a scoped bottom-border form banner with a fluid desktop row, tablet stacked state, and narrow mobile target anchored to `375 x 210`.

## Banner / 7 / Implementation Note

- Stable section id: `banner-7`
- Source variant name: `Banner / 7 /`
- Component set node: `5:212536`
- Desktop instance node: `5:212864`, size `1440 x 69`
- Mobile instance node: `26:105308`, size `375 x 154`
- Pattern: single-button banner using a filled outer strip with a bottom divider; desktop content is centered inside the row, so it is not the same geometry as Banner / 2 /.
- Desktop geometry: centered `1280 x 69` container, padding `12 16`, gap `16`; centered content group `1200 x 45` with `48px` left padding and `24px` gap; message group `393 x 45`; button `88 x 40`; close icon `32 x 32`.
- Mobile geometry: `335 x 154` container inside `375px` frame, padding `16 0`, gap `16`; content group `335 x 122`; message `335 x 66` with `28px` right reserve for the close icon; button `88 x 40`; close icon visually offset at the top right.
- Assets: reuses existing desktop mark `9cf122f64ad5a3bc077989c0acec462e1de94ebc.svg`; added desktop close/action `184b310912d3a1a4fadb78d26bee3f4591c43e60.svg` and mobile close/action `e04979546ea656f41f2c2bdd86c2e5b1875f87e7.svg`.
- Plan: implement as a scoped bottom-divider single-button banner with a fluid desktop row, stacked tablet state, and narrow mobile target anchored to `375 x 154`.

## Banner / 8 / Implementation Note

- Stable section id: `banner-8`
- Source variant name: `Banner / 8 /`
- Component set node: `5:212562`
- Desktop instance node: `5:212865`, size `1440 x 69`
- Mobile instance node: `26:105309`, size `375 x 146`
- Pattern: two-button group using a filled outer strip with a bottom divider; desktop content and actions exactly fill the `1280px` shell, so this is not the same inset-border structure as Banner / 3 /.
- Desktop geometry: centered `1280 x 69` container with no horizontal inner padding; message group `1040 x 45`; actions group `240 x 40`; buttons group `192 x 40`; close icon `32 x 32`.
- Mobile geometry: `335 x 146` container inside `375px` frame, `8px` top/bottom inset and `16px` vertical gap; message `335 x 66` with `28px` right reserve for the close icon; actions `216 x 48`; buttons group `192 x 40`.
- Assets: reuses existing desktop mark `9cf122f64ad5a3bc077989c0acec462e1de94ebc.svg`, desktop close `64f896b4c3690a302cef786da86b02c1d82c4846.svg`, and mobile close `37ab8e01284c0a28e8d2c33fee6db113c084e130.svg`; no new assets needed.
- Plan: implement as a scoped bottom-divider two-button banner with a fluid desktop row, stacked tablet state, and narrow mobile target anchored to `375 x 146`.

## Banner / 9 / Implementation Note

- Stable section id: `banner-9`
- Source variant name: `Banner / 9 /`
- Component set node: `5:212589`
- Desktop instance node: `5:212866`, size `1440 x 69`
- Mobile instance node: `26:105310`, size `375 x 138`
- Shell family: bottom-divider strip.
- Action pattern: social links.
- Pattern: social-link banner using a filled outer strip with a bottom divider; it shares Banner / 4 / action content but not Banner / 4 /'s inset-border shell.
- Desktop geometry: centered `1280 x 69` container with `32px` gap and no inner padding; message group `1068 x 45`; actions group `180 x 32`; social links `132 x 24`; close icon `32 x 32`.
- Mobile geometry: `335 x 138` container inside `375px` frame, `16px` top/bottom inset and `16px` vertical gap; message `335 x 66` with `28px` right reserve for the close icon; social links `132 x 24`.
- Assets: reuses existing desktop mark `9cf122f64ad5a3bc077989c0acec462e1de94ebc.svg`, desktop close `64f896b4c3690a302cef786da86b02c1d82c4846.svg`, mobile close `37ab8e01284c0a28e8d2c33fee6db113c084e130.svg`, and the four social SVG assets from Banner / 4 /; no new assets needed.
- Plan: implement as a scoped bottom-divider social-links banner with a fluid desktop row, stacked tablet state, and narrow mobile target anchored to `375 x 138`.

## Banner / 10 / Implementation Note

- Stable section id: `banner-10`
- Source variant name: `Banner / 10 /`
- Component set node: `5:212620`
- Desktop instance node: `5:212867`, size `1440 x 48`
- Mobile instance node: `26:105311`, size `375 x 64`
- Shell family: text/link-only strip with bottom divider.
- Action/content pattern: text link.
- Pattern: compact one-line desktop announcement with an underlined `with link` phrase and close control; mobile keeps the source row and lets the sentence wrap to two lines.
- Desktop geometry: centered `1280 x 48` container with `16px` gap; content group `1232 x 24` with `48px` left padding and centered text; close icon `32 x 32`.
- Mobile geometry: `335 x 64` container inside `375px` frame; content `287 x 48`; close icon `32 x 32`.
- Assets: reuses existing close icon `64f896b4c3690a302cef786da86b02c1d82c4846.svg`; no new assets needed.
- Plan: implement as a scoped compact text-link strip with a full-width bottom divider, fluid row behavior through tablet, and narrow mobile target anchored to `375 x 64`.

## Banner / 11 / Implementation Note

- Stable section id: `banner-11`
- Source variant name: `Banner / 11 /`
- Component set node: `5:212633`
- Desktop instance node: `5:212868`, size `1440 x 60`
- Mobile instance node: `26:105312`, size `375 x 57`
- Shell family: logo row with bottom divider.
- Action/content pattern: repeated logos.
- Pattern: repeated `Relume Library` text-logo ticker row with no dismiss control, form, button, or social links.
- Desktop geometry: centered `1280 x 60` content row; five repeated text wrappers, each source wrapper `168 x 28`; `20px` bold text with `28px` line height; distributed across the full desktop shell.
- Mobile geometry: `335 x 57` clipped ticker row inside `375px` frame; content row has `16px` top/bottom padding and `12px` left padding; repeated wrappers are `155 x 25` with `16px` gaps and overflow clipped by the mobile frame.
- Assets: none; source uses text-only repeated logo labels.
- Plan: implement as a scoped repeated-text logo row with a full-width bottom divider, clipped horizontal overflow, desktop distributed row, and narrow mobile target anchored to `375 x 57`.

## Banner / 12 / Implementation Note

- Stable section id: `banner-12`
- Source variant name: `Banner / 12 /`
- Component set node: `5:212658`
- Desktop instance node: `5:212869`, size `1440 x 60`
- Mobile instance node: `26:105313`, size `375 x 57`
- Shell family: logo row with bottom divider.
- Action/content pattern: repeated text logos.
- Pattern: repeats the Banner / 11 / text-logo ticker structure with five `Relume Library` labels and no dismiss control, form, button, social links, or media assets.
- Desktop geometry: centered `1280 x 60` content row; five repeated text wrappers, each source wrapper `168 x 28`; `20px` bold text with `28px` line height; distributed across the full desktop shell.
- Mobile geometry: `335 x 57` clipped ticker row inside `375px` frame; content row has `16px` top/bottom padding and `12px` left padding; repeated wrappers are `155 x 25` with `16px` gaps and overflow clipped by the mobile frame.
- Assets: none; source uses text-only repeated logo labels.
- Plan: implement as a scoped repeated-text logo row with a full-width bottom divider, clipped horizontal overflow, desktop distributed row, and narrow mobile target anchored to `375 x 57`.

## Banner / 13 / Implementation Note

- Stable section id: `banner-13`
- Source variant name: `Banner / 13 /`
- Component set node: `5:212683`
- Desktop instance node: `5:212870`, size `1440 x 454`
- Mobile instance node: `26:105314`, size `375 x 244`
- Shell family: marquee / oversized heading.
- Action/content pattern: oversized text.
- Pattern: two repeated oversized heading rows clipped by the viewport; no controls, logos, media, assets, border, or divider.
- Desktop geometry: white `1440 x 454` outer section, vertical padding `112`, centered `1280px` frame, content area `230px` tall; two `1792 x 115` bold Roboto heading rows at viewport x positions about `155` and `-494`.
- Mobile geometry: white `375 x 244` source frame with vertical padding `64`, content area `116px` tall; two `896 x 58` bold heading rows at source-relative x positions about `1` and `-525`.
- Assets: none.
- Plan: implement as a scoped clipped marquee-style banner, interpolating scale, vertical padding, row offsets, and height between the desktop and mobile anchor states.

## Banner / 14 / Implementation Note

- Stable section id: `banner-14`
- Source variant name: `Banner / 14 /`
- Component set node: `5:212692`
- Desktop instance node: `5:212871`, size `1440 x 60`
- Mobile instance node: `26:105315`, size `375 x 57`
- Shell family: logo row with bottom divider.
- Action/content pattern: repeated text logos.
- Pattern: seven repeated `Relume Library` text-logo wrappers; no dismiss control, form, button, social links, media assets, or oversized heading.
- Desktop geometry: white `1440 x 60` outer strip with `64px` horizontal padding and full-width bottom divider; centered `1280 x 60` content row; seven source wrappers at `168 x 28`, distributed across the full shell with roughly `17.33px` between wrappers.
- Mobile geometry: white `375 x 57` outer strip with `20px` horizontal padding and full-width bottom divider; `335 x 57` clipped content row with `16px` top/bottom padding, `12px` left inset, `16px` gaps, and seven `155 x 25` wrappers.
- Assets: none; source uses text-only repeated logo labels.
- Plan: implement as a scoped repeated-text logo row with a full-width bottom divider, distributed seven-item desktop row, clipped mobile ticker target, and no shared primitive extraction.

## Banner / 15 / Implementation Note

- Stable section id: `banner-15`
- Source variant name: `Banner / 15 /`
- Component set node: `5:212828`
- Desktop instance node: `5:212873`, size `1440 x 128`
- Mobile instance node: `26:105316`, size `375 x 96`
- Shell family: logo/media ticker.
- Action/content pattern: media/logo mix.
- Pattern: alternating `Relume Library` text wrappers and placeholder-image rectangles in one overflowing clipped row; no controls, border, divider, or message/action split.
- Desktop geometry: white `1440 x 128` outer shell with `16px` top/bottom padding; content row `1440 x 96`, `16px` gaps, text wrappers `413 x 67` with `56px` bold text and `67.2px` line height, image rectangles `144 x 96`.
- Mobile geometry: white `375 x 96` outer shell with `16px` top/bottom padding; content row `375 x 64`, `16px` gaps, text wrappers `304 x 48` with `40px` bold text and `48px` line height, image rectangles `96 x 64`.
- Assets: added `source/figma-site/assets/6cb201291e4ea983199a3a89a94ca74dbc837c13.png`.
- Plan: implement as a scoped clipped logo/media ticker, interpolating text/media sizes and row height between desktop and mobile anchors.

## Banner / 16 / Implementation Note

- Stable section id: `banner-16`
- Source variant name: `Banner / 16 /`
- Component set node: `5:212725`
- Desktop instance node: `5:212872`, size `1440 x 160`
- Mobile instance node: `26:105317`, size `375 x 160`
- Shell family: multi-row banner / logo-media ticker.
- Action/content pattern: media/logo mix.
- Pattern: two staggered rows of alternating `Relume Library` text wrappers and placeholder-image rectangles, clipped by a borderless white shell; no controls, border, divider, or message/action split.
- Desktop geometry: white `1440 x 160` outer shell with `8px` top/bottom padding and `16px` row gap; two `1440 x 64` content rows; first row starts at x `0`, second row starts at x `-380`; text wrappers are mostly `196 x 34` with `24px` bold text and `33.6px` line height; image rectangles are `64 x 64`; row item gap is `8px`.
- Mobile geometry: white `375 x 160` outer shell with `8px` top/bottom padding and `16px` row gap; two `375 x 64` content rows; first row starts at x `0`, second row starts at x `-800.5`; text wrappers are `168 x 28` with `20px` bold text and `28px` line height; image rectangles are `64 x 64`; row item gap is `8px`.
- Assets: reuses `source/figma-site/assets/6cb201291e4ea983199a3a89a94ca74dbc837c13.png`.
- Plan: implement as a scoped two-row clipped logo/media ticker, interpolating text sizing and second-row offset between desktop and mobile anchors.
