# QA Status

Banner category human visual QA passed for Banners 1-16 on 2026-06-29. Implementation status remains `draft` until a separate promotion/status convention exists.

| Section | Status | Notes |
| --- | --- | --- |
| `banner-1` | `draft` | Built and locally checked at `1440px` and `390px`; no horizontal overflow. Human visual QA review passed. |
| `banner-2` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-3` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-4` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-5` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-6` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-7` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-8` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-9` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-10` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-11` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-12` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-13` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-14` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-15` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |
| `banner-16` | `draft` | Built from saved source snapshot. Checked at `1440`, `1024`, `768`, `390`, and `320`; no horizontal overflow. Human visual QA review passed. |

## Check Artifacts

- Source desktop screenshot: `source/figma-site/screenshots/banner-source-1440.png`
- Source mobile screenshot: `source/figma-site/screenshots/banner-source-390.png`
- Local desktop screenshot: `output/playwright/banner-1-local-1440.png`
- Local mobile screenshot: `output/playwright/banner-1-local-390.png`

## Check Results

- Desktop local metrics: section `1440 x 69`, container `1280 x 69`, no horizontal overflow.
- Mobile local metrics: section `390 x 234`, container `335 x 234`, no horizontal overflow.
- Banner 1 passed category-level human visual QA; its automated five-width record remains historical at `1440px` and `390px` and should be rerun before any future status promotion.
- Banner 2 local metrics: `1440` and `1024` row layout; `768`, `390`, and `320` column layout; mobile anchor at `390` renders section `390 x 178` and container `335 x 178`; no horizontal overflow.
- Banner 3 local metrics: `1440` and `1024` row layout with two-button actions; `768`, `390`, and `320` column layout; mobile anchor at `390` renders section `390 x 178` and container `335 x 178`; no horizontal overflow.
- Banner 4 local metrics: `1440` and `1024` row layout with social links; `768`, `390`, and `320` column layout; mobile anchor at `390` renders section `390 x 162`, frame `375 x 162`, and container `335 x 162`; no horizontal overflow.
- Banner 5 local metrics: `1440`, `1024`, and `768` compact row layout; `390` and `320` compact mobile row layout; mobile anchor at `390` renders section `390 x 64`, frame `375 x 64`, and container `335 x 64`; no horizontal overflow.
- Banner 6 local metrics: `1440` row layout; `1024`, `768`, `390`, and `320` column layout; mobile anchor at `390` renders section `390 x 210`, frame `375 x 210`, and container `335 x 210`; `320` naturally expands to `234px` height to avoid cramped wrapping; no horizontal overflow and no form-control overlap.
- Banner 7 local metrics: `1440` and `1024` centered row layout; `768`, `390`, and `320` stacked layout; mobile anchor at `390` renders section `390 x 154`, frame `375 x 154`, and container `335 x 154`; `320` naturally expands to `178px` height to avoid cramped wrapping; no horizontal overflow, no button/close overlap, and the bottom divider renders full-width at desktop, tablet, and mobile.
- Banner 8 local metrics: `1440` and `1024` row layout; `768`, `390`, and `320` stacked layout; mobile anchor at `390` renders section `390 x 146`, frame `375 x 146`, and container `335 x 146`; `320` naturally expands to `170px` height to avoid cramped wrapping; no horizontal overflow, no button/close overlap, no button/button overlap, and the bottom divider renders full-width at desktop, tablet, and mobile.
- Banner 9 local metrics: `1440` and `1024` row layout; `768`, `390`, and `320` stacked layout; mobile anchor at `390` renders section `390 x 138`, frame `375 x 138`, and container `335 x 138`; `320` naturally expands to `162px` height to avoid cramped wrapping; no horizontal overflow, no social/close overlap, no social icon overlap, and the bottom divider renders full-width at desktop, tablet, and mobile.
- Banner 10 local metrics: `1440`, `1024`, and `768` compact centered row layout; `390` and `320` compact mobile row layout; mobile anchor at `390` renders section `390 x 64`, frame `375 x 64`, and container `335 x 64`; `320` remains `64px` high with safe two-line wrapping; no horizontal overflow, no text/close overlap, and the bottom divider renders full-width at desktop, tablet, and mobile.
- Banner 11 local metrics: `1440`, `1024`, and `768` repeated text-logo row layout; `390` and `320` clipped mobile ticker layout; mobile anchor at `390` renders section `390 x 57`, frame `375 x 57`, and visible clipped row; no horizontal overflow, no item overlap, and the bottom divider renders full-width at desktop, tablet, and mobile.
- Banner 12 local metrics: `1440`, `1024`, and `768` repeated text-logo row layout; `390` and `320` clipped mobile ticker layout; mobile anchor at `390` renders section `390 x 57`, frame `375 x 57`, and visible clipped row; no horizontal overflow, no item overlap, and the bottom divider renders full-width at desktop, tablet, and mobile.
- Banner 13 local metrics: `1440` oversized heading marquee anchor renders section `1440 x 454`, frame `1280 x 230`, and two `1792px` clipped heading rows; `1024` and `768` fluidly interpolate the same clipped marquee structure; mobile anchor at `390` renders section `390 x 244`, centered frame `375 x 116`, and two `896px` clipped heading rows; `320` keeps the mobile scale and clips safely; no horizontal overflow, no controls/assets, no line overlap, and no divider or border.
- Banner 14 local metrics: `1440` repeated text-logo row anchor renders section `1440 x 60`, frame `1280 x 60`, and seven distributed `168px` wrappers; `1024` and `768` keep the horizontal logo-row structure with clipped overflow inside the frame as needed; mobile anchor at `390` renders section about `390 x 57`, centered frame `375 x 57`, seven `155px` wrappers, and a clipped ticker row; `320` keeps the mobile ticker scale safely; no horizontal overflow, no item overlap, no controls/assets, and the bottom divider renders full-width at desktop, tablet, and mobile.
- Banner 15 local metrics: `1440` logo/media ticker anchor renders section `1440 x 128`, track `2340 x 96`, four text wrappers and four loaded media rectangles; `1024` and `768` fluidly interpolate the same clipped ticker structure; mobile anchor at `390` renders centered section `375 x 96`, track about `1721 x 64`, `304px` text wrappers, and `96 x 64` media; `320` keeps the mobile scale and clips safely; no horizontal overflow, no item overlap, images loaded, and no divider or border.
- Banner 16 local metrics: `1440` two-row logo/media ticker anchor renders section `1440 x 160`, rows `2200 x 64`, first row x `0`, second row x `-380`, with 16 text wrappers and 16 loaded media rectangles; `1024` and `768` fluidly interpolate the text size and row offset; mobile anchor at `390` renders centered section `375 x 160`, rows `1976 x 64`, first row x `7.5`, second row x `-793`; `320` keeps the mobile scale and second-row offset; no horizontal overflow, no item overlap, images loaded, and no divider or border.
- Production build: not applicable; this repo currently has no build step.
