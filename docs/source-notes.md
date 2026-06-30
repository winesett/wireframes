# Source Notes

## Figma Site Bundle

- Source URL: https://hem-vivid-26639759.figma.site/
- Discovered bundle id: `2f34a538-9a2c-4992-80d6-af21effa18c8`
- Assets version: `v11`
- Bundle creation date from live HTML: `2026-06-27 20:57:44 UTC`
- Route JSON saved: `source/figma-site/raw-json/banner.json`
- Route JSON saved: `source/figma-site/raw-json/header.json`
- Route HTML snapshot saved: `source/figma-site/raw-json/banner.html`

## Local Naming Convention

- Banner folders are zero-padded for `01` through `09` and unpadded for `10` through `16`.
- Stable section ids are unpadded: `banner-1` through `banner-16`.
- Stats folders are zero-padded for `01` through `24`; stable section ids are unpadded: `stats-1` through `stats-24`.

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

## Header / 46 / Implementation Note

- Stable section id: `header-46`
- Source variant name: `Header / 46 /`
- Component set node: `3:39766`
- Desktop component node: `3:39767`, instance node: `3:40312`, size `1440 x 369`
- Mobile component node: `3:39772`, instance node: `26:126436`, size `375 x 316`
- Shell family: light text-only header on a white background.
- Content/action pattern: heading plus body copy; no actions, controls, images, icons, dividers, or borders.
- Desktop geometry: root padding `112px 64px`; centered `1280 x 145` container; `768 x 145` content block; `24px` vertical gap; heading `56/67.2`; body `18/27`; text aligned left.
- Mobile geometry: root padding `64px 20px`; `335 x 188` content block inside the `375px` source frame; `20px` vertical gap; heading `40/48`; body `16/24`; text aligned left.
- Assets: none required.
- Plan: implement as a scoped semantic text header with desktop and mobile source anchors and fluid typography/padding between anchors; keep tablet as a natural interpolated text layout.

## Header / 44 / Implementation Note

- Stable section id: `header-44`
- Source variant name: `Header / 44 /`
- Component set node: `3:39712`
- Desktop component node: `3:39713`, instance node: `3:40310`, size `1440 x 489`
- Mobile component node: `3:39725`, instance node: `26:126434`, size `375 x 424`
- Shell family: light left-column CTA header on a white background.
- Content/action pattern: tagline, heading, body copy, and two-button action group.
- Visual chrome: no image, icon, border, divider, or background media; only black/white button chrome.
- Desktop geometry: root padding `112px 64px`; `1280 x 265` container; `768 x 265` content block; section title `185px` high; actions `208 x 48`; buttons `96 x 48` with `16px` gap.
- Mobile geometry: root padding `64px 20px`; `335 x 296` content block inside the `375px` source frame; section title `224px` high; actions `208 x 48`; buttons remain horizontal with `16px` gap.
- Assets: none required.
- Plan: implement as a scoped semantic CTA header with source-anchored desktop/mobile spacing, fluid tablet compression, and a fixed-width two-button row.

## Header / 45 / Implementation Note

- Stable section id: `header-45`
- Source variant name: `Header / 45 /`
- Component set node: `3:39737`
- Desktop component node: `3:39738`, instance node: `3:40311`, size `1440 x 523`
- Mobile component node: `3:39752`, instance node: `26:126435`, size `375 x 540`
- Shell family: light left-column email signup header.
- Content/action pattern: tagline, heading, body copy, email input, submit button, and terms text.
- Visual chrome: white background; black bordered input; black filled submit button; no image, icon, divider, or border.
- Desktop geometry: `768 x 299` content block; title `185px` high; actions `513 x 82`; form `513 x 48` with input `396 x 48`, button `101 x 48`, and `16px` gap.
- Mobile geometry: `335 x 412` content block; title `224px` high; actions `335 x 164`; form stacks input and button at `335 x 48`; terms text wraps to `36px`.
- Assets: none required.

## Header / 47 / Implementation Note

- Stable section id: `header-47`
- Source variant name: `Header / 47 /`
- Component set node: `3:39777`
- Desktop component node: `3:39778`, instance node: `3:40313`, size `1440 x 385`
- Mobile component node: `3:39790`, instance node: `26:126437`, size `375 x 472`
- Shell family: light two-column CTA header.
- Content/action pattern: left tagline and heading; right long body copy and two-button group.
- Visual chrome: white background; black/white buttons; no image, icon, divider, or border.
- Desktop geometry: `1280 x 161` row with two `600px` columns and `80px` gap; actions `208 x 48`.
- Mobile geometry: `335 x 344` stacked content; intro `132px` high; body/action column `192px` high.
- Assets: none required.

## Header / 48 / Implementation Note

- Stable section id: `header-48`
- Source variant name: `Header / 48 /`
- Component set node: `3:39802`
- Desktop component node: `3:39803`, instance node: `3:40314`, size `1440 x 419`
- Mobile component node: `3:39817`, instance node: `26:126438`, size `375 x 588`
- Shell family: light two-column email signup header.
- Content/action pattern: left tagline and heading; right long body copy, email input, submit button, and terms text.
- Visual chrome: white background; black bordered input; black filled submit button; no image, icon, divider, or border.
- Desktop geometry: `1280 x 195` row with two `600px` columns and `80px` gap; actions `513 x 82`.
- Mobile geometry: `335 x 460` stacked content; intro `132px` high; body/form/terms column `308px` high.
- Assets: none required.

## Header / 49 / Implementation Note

- Stable section id: `header-49`
- Source variant name: `Header / 49 /`
- Component set node: `3:39831`
- Desktop component node: `3:39832`, instance node: `3:40315`, size `1440 x 305`
- Mobile component node: `3:39839`, instance node: `26:126439`, size `375 x 364`
- Shell family: light two-column text-only header.
- Content/action pattern: heading and long body copy; no action controls.
- Visual chrome: white background only; no image, icon, divider, border, form, or buttons.
- Desktop geometry: `1280 x 81` row with two `600px` columns and `80px` gap.
- Mobile geometry: `335 x 236` stacked content with `20px` gap; heading `96px`; body `120px`.
- Assets: none required.

## Header / 64 / Implementation Note

- Stable section id: `header-64`
- Source variant name: `Header / 64 /`
- Component set node: `3:40168`
- Desktop component node: `3:40169`, instance node: `3:40330`, size `1440 x 369`
- Mobile component node: `3:40174`, instance node: `26:126454`, size `375 x 316`
- Shell family: light centered text-only header.
- Content/action pattern: centered heading and body copy; no action controls.
- Visual chrome: white background only; no image, icon, divider, border, form, or buttons.
- Desktop geometry: root padding `112px 64px`; centered `1280 x 145` container; centered `768 x 145` content block; heading `56/67.2`; body `18/27`; text aligned center.
- Mobile geometry: root padding `64px 20px`; centered `335 x 188` content block inside the `375px` source frame; heading `40/48`; body `16/24`; text aligned center.
- Assets: none required.

## Header / 62 / Implementation Note

- Stable section id: `header-62`
- Source variant name: `Header / 62 /`
- Component set node: `3:40114`
- Desktop component node: `3:40115`, instance node: `3:40328`, size `1440 x 489`
- Mobile component node: `3:40127`, instance node: `26:126452`, size `375 x 424`
- Shell family: light centered CTA header.
- Content/action pattern: centered tagline, heading, body copy, and two-button action group.
- Visual chrome: white background; black/white buttons; no image, icon, divider, or border.
- Desktop geometry: centered `768 x 265` content block; section title `185px` high; centered actions `208 x 48`; buttons `96 x 48` with `16px` gap.
- Mobile geometry: centered `335 x 296` content block; section title `224px` high; centered actions `208 x 48`.
- Assets: none required.

## Header / 63 / Implementation Note

- Stable section id: `header-63`
- Source variant name: `Header / 63 /`
- Component set node: `3:40139`
- Desktop component node: `3:40140`, instance node: `3:40329`, size `1440 x 523`
- Mobile component node: `3:40154`, instance node: `26:126453`, size `375 x 540`
- Shell family: light centered email signup header.
- Content/action pattern: centered tagline, heading, body copy, email input, submit button, and centered terms text.
- Visual chrome: white background; black bordered input; black filled submit button; no image, icon, divider, or border.
- Desktop geometry: centered `768 x 299` content block; title `185px` high; centered actions `513 x 82`; form `513 x 48` with input `396 x 48`, button `101 x 48`, and `16px` gap.
- Mobile geometry: centered `335 x 412` content block; title `224px` high; actions `335 x 164`; form stacks input and button at `335 x 48`; terms text wraps to `36px`.
- Assets: none required.

## Header Dark Family / 51-70 / Implementation Notes

- Shared dark source treatment: dark neutral background `#444`, white text, no image assets, no dividers, and no section border.
- Dark button treatment: primary buttons are white filled with black text; secondary buttons are transparent with a white border and white text.
- Dark form treatment: email inputs are transparent with a white border and white placeholder/text; submit buttons are white filled with black text; terms text is white.
- `header-55`: dark left text-only header, source `1440 x 369` desktop and `375 x 316` mobile; heading/body content only.
- `header-51`: dark left two-button header, source `1440 x 489` desktop and `360 x 424` mobile; mobile source is the one dark exception capped at `360px`.
- `header-53`: dark left email form header, source `1440 x 523` desktop and `375 x 540` mobile; desktop form row is `513 x 48`, mobile form stacks in a `335px` column.
- `header-61`: dark split text-only header, source `1440 x 305` desktop and `375 x 364` mobile; desktop uses two `600px` columns and mobile stacks.
- `header-57`: dark split two-button header, source `1440 x 385` desktop and `375 x 472` mobile; desktop uses two `600px` columns and mobile stacks.
- `header-59`: dark split email form header, source `1440 x 419` desktop and `375 x 588` mobile; desktop columns are `616px` and `584px`, mobile stacks the form.
- `header-70`: dark centered text-only header, source `1440 x 369` desktop and `375 x 316` mobile.
- `header-66`: dark centered two-button header, source `1440 x 489` desktop and `375 x 424` mobile.
- `header-68`: dark centered email form header, source `1440 x 523` desktop and `375 x 540` mobile.

## Header Image Background Family / 50-69 / Implementation Notes

- Shared image source treatment: background paint asset `d50ffb0afa333613e155822dc6b3dfe63f150a74.png`, source image `1260 x 709`, `FILL` scale mode, and a black overlay at `40%` opacity.
- Shared visual chrome: white text over the image overlay, no divider, no section border, and no icons.
- Image button treatment: primary buttons are white filled with black text; secondary buttons are transparent with a white border and white text.
- Image form treatment: email inputs are transparent with a white border and white placeholder/text; submit buttons are white filled with black text; terms text is white.
- `header-54`: image left text-only header, source `1440 x 369` desktop and `375 x 316` mobile.
- `header-50`: image left two-button header, source `1440 x 489` desktop and `375 x 424` mobile.
- `header-52`: image left email form header, source `1440 x 523` desktop and `375 x 540` mobile.
- `header-60`: image split text-only header, source `1440 x 305` desktop and `375 x 364` mobile.
- `header-56`: image split two-button header, source `1440 x 385` desktop and `375 x 472` mobile.
- `header-58`: image split email form header, source `1440 x 419` desktop and `375 x 588` mobile.
- `header-69`: image centered text-only header, source `1440 x 369` desktop and `375 x 316` mobile.
- `header-65`: image centered two-button header, source `1440 x 489` desktop and `375 x 424` mobile.
- `header-67`: image centered email form header, source `1440 x 523` desktop and `375 x 540` mobile.

## Stats / 1-6 / Implementation Notes

- Route JSON saved: `source/figma-site/raw-json/stats.json`
- Shared family: simple horizontal stat-row sections with three repeated stats, desktop `1280px` container, `80px` content/stat gap, mobile `375px` source frame, and vertical mobile stat stack.
- Shared stat content: number `30%`; label `Short heading goes here`; repeated three times.
- Shared body copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.`
- Shared stat chrome: each stat item has a source `1px` left stroke and `32px` left padding; light variants use black rules, image/dark variants use white rules.
- Shared mobile stat geometry: `335px` stat stack, `32px` gap, number `56/72.8`, label `18/25.2`.
- CTA variants use a `96 x 48` outline button plus an `80 x 24` text link with trailing arrow asset `0ce0c7b03fa6f5b2eefce37be2272f6f4f5e3627.svg`.
- Image-overlay variants reuse the existing source background image `d50ffb0afa333613e155822dc6b3dfe63f150a74.png` with a `40%` black overlay.
- `stats-1`: light two-column intro with tagline, `48/57.6` desktop heading, body copy, CTA row, and three-stat row; source `1440 x 659` desktop and `375 x 1007` mobile.
- `stats-2`: light two-column heading/body intro with no CTA; source `1440 x 579` desktop and `375 x 884` mobile; desktop heading `40/48`.
- `stats-3`: image-overlay version of `stats-1`; source `1440 x 659` desktop and `375 x 1007` mobile.
- `stats-4`: image-overlay version of `stats-2`; source `1440 x 579` desktop and `375 x 884` mobile.
- `stats-5`: dark `#444` version of `stats-1`; source `1440 x 659` desktop and `375 x 1007` mobile.
- `stats-6`: dark `#444` version of `stats-2`; source `1440 x 579` desktop and `375 x 884` mobile.

## Stats / 7-12 / Implementation Notes

- Shared family: vertical intro/stat sections with a left-aligned `768px` desktop title block, `1280px` stats row, `80px` desktop section gaps, and `375px` mobile source frame.
- Shared stat chrome: each stat item has a source `1px` left stroke and `32px` left padding; light variants use black rules, image/dark variants use white rules.
- Shared stat content: number `30%`; label `Short heading goes here`; repeated three times.
- CTA variants use the existing `0ce0c7b03fa6f5b2eefce37be2272f6f4f5e3627.svg` trailing arrow asset.
- Image-overlay variants reuse `d50ffb0afa333613e155822dc6b3dfe63f150a74.png` with a `40%` black overlay.
- `stats-7`: light vertical tagline, heading, body copy, three-stat row, and CTA row; source `1440 x 833` desktop and `375 x 959` mobile.
- `stats-8`: light heading-only plus three-stat row; source `1440 x 540` desktop and `375 x 672` mobile.
- `stats-9`: image-overlay version of `stats-7`; source `1440 x 833` desktop and `375 x 959` mobile.
- `stats-10`: image-overlay version of `stats-8`; source `1440 x 540` desktop and `375 x 672` mobile.
- `stats-11`: dark `#444` version of `stats-7`; source `1440 x 833` desktop and `375 x 959` mobile.
- `stats-12`: dark `#444` version of `stats-8`; source `1440 x 540` desktop and `375 x 672` mobile.

## Stats / 13-24 / Implementation Notes

- `stats-13` through `stats-18` continue the split-content stats family: left content/CTA column, right stat cluster, light/image/dark theme progression, and source `1px` left stat rules.
- `stats-13`, `stats-15`, and `stats-17` use four `50%` stats in a two-by-two cluster; desktop source `1440 x 565`, mobile source `375 x 1073`.
- `stats-14`, `stats-16`, and `stats-18` use two larger stat rows with supporting description text; desktop source `1440 x 616`, mobile source `375 x 909`.
- `stats-15` and `stats-16` reuse the existing image background asset `d50ffb0afa333613e155822dc6b3dfe63f150a74.png` with a `40%` black overlay.
- `stats-19` and `stats-20` use a centered title block, an image panel, and a three-stat column; desktop source `1440 x 1021`, mobile source `375 x 922`.
- `stats-21` and `stats-22` use a centered title block, video-lightbox media, and a three-stat column; desktop source `1440 x 1021`, mobile source `375 x 930` for `stats-21` and `375 x 922` for `stats-22`.
- `stats-23` and `stats-24` use a left-aligned title block plus a tabbed media/stat text layout; desktop source `1440 x 1165`, mobile source `375 x 1355`.
- New vendored media assets: `b4d0118543bc011744949ebbf871f95430182503.png`, `cfe4ab08e161479b0e2b3e9e722b2e44aa563e96.png`, `848e1738f30774439ba51df3f21500340f1edc98.png`, and `d568b164c26b35eebe6a407c03f478bc8049c84b.png`.
- Source chrome: Stats 13-22 preserve `1px` stat left rules; Stats 23-24 preserve the active `1px` tab left rule and inactive `2px` tab left rules.

## Stats / 25-36 / Implementation Notes

- Stats 25-28 establish bordered stat-card grid variants with white card fills, black 1px card borders, 32px card padding, and three repeated stat cards.
- Stats 25 and 27 include tagline/body/CTA variants; Stats 26 and 28 are simpler heading/body or heading-only card-grid variants.
- Stats 29-30 extend the card-grid family with source image panels inside each stat card, reusing `d568b164c26b35eebe6a407c03f478bc8049c84b.png`.
- Stats 31-32 use left intro/action content beside two-by-two or two-row bordered stat-card grids with `50%` stat values.
- Stats 33-36 use centered title blocks with media/stat-card split layouts; Stats 33-34 use image panels, while Stats 35-36 use video-lightbox panels with the existing play treatment.
- Existing media assets reused: `b4d0118543bc011744949ebbf871f95430182503.png`, `cfe4ab08e161479b0e2b3e9e722b2e44aa563e96.png`, `848e1738f30774439ba51df3f21500340f1edc98.png`, and `d568b164c26b35eebe6a407c03f478bc8049c84b.png`; no new assets were required.
- Source chrome: Stats 25-36 preserve the card borders, 32px card padding, stat text spacing inside each card, media order, and mobile stack order from the source.
