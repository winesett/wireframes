# Pattern Candidates

Observed only. Do not abstract yet.

## Banner Shell

- Banners 1-14 share a centered desktop shell capped at `1280px`, white background, and a mobile source cap around `375px`; Banners 15-16 use full-width clipped ticker shells instead.
- Banners 1-5 use a black inset `1px` container border; Banners 6-12 and 14 use a bottom border on the outer strip; Banner 13 has no border or divider.
- Banners 1-4 use `12px 16px` desktop container padding; Banner 5 uses a compact `8px 16px` desktop container.
- Banner 6 uses `12px 0` desktop container padding because the source strip owns the horizontal page padding and border.
- Banner 7 returns to `12px 16px` desktop container padding while keeping the outer-strip bottom divider.
- Banner 8 uses no horizontal desktop container padding because its `1040px` message and `240px` actions exactly fill the `1280px` shell.
- Banner 9 uses no horizontal desktop container padding because its `1068px` message, `32px` gap, and `180px` actions exactly fill the `1280px` shell.
- Banner 10 is compact like Banner 5, but it uses the outer-strip bottom divider instead of an inset container border.
- Banners 11-12 form a logo-row family: no message/action split, only a clipped repeated text-logo row inside the same outer bottom-divider shell.
- Banner 13 starts a marquee / oversized heading family: no message/action split, no bottom divider, and two clipped oversized text rows inside a taller white shell.
- Banner 14 returns to the logo-row family with seven repeated text-logo wrappers instead of the five-item row used by Banners 11-12.
- Banner 15 starts a logo/media ticker family: alternating oversized text-logo wrappers and image rectangles, clipped by a borderless white shell.
- Banner 16 continues the logo/media ticker family as a two-row staggered ticker with smaller text and media blocks.

## Message Block

- Banners 1-4 and 6-9 share the same heading/body copy stack and desktop Relume mark behavior.
- The narrow mobile source renders hide the mark in the published route, even when the component tree references it.
- Banners 5 and 10 are different: they use one regular-weight text line with an inline underlined link and no Relume mark.

## Dismiss Control

- Banners 1-10 use a `32px` dismiss control.
- Banners 1-4 and 6-9 swap to a mobile close asset after stacking; Banner 5 reuses the desktop close asset at all checked widths.
- Banner 10 reuses the desktop close asset at all checked widths.
- Banner 7 introduces a separate close/action asset pair from the earlier dismiss icon pair.

## Responsive Rhythm

- Banners 1-4 and 6-9 use a desktop row at wide widths, fluid compression where comfortable, a stacked tablet state, and a source-anchored narrow mobile state.
- Banners 5 and 10 remain compact rows from desktop through mobile because the source structure does not require stacking.
- Banners 11-12 remain horizontal repeated-logo rows across widths; mobile clips the oversized row instead of stacking.
- Banner 13 remains a two-line oversized heading marquee across widths; tablet interpolates text scale and offsets instead of stacking.
- Banner 14 remains a horizontal repeated-logo row across widths; desktop distributes seven wrappers across the shell, while mobile clips the ticker row.
- Banner 15 remains a horizontal logo/media ticker across widths; desktop and mobile both intentionally clip the overflowing track.
- Banner 16 remains a two-row horizontal logo/media ticker across widths; row two keeps a source-specific staggered offset.

## Action Variants

- Banner 1: email input and submit button.
- Banner 2: single primary button.
- Banner 3: primary and secondary button group.
- Banner 4: social icon link group.
- Banner 5: inline text link only.
- Banner 6: email input and submit button in a bottom-border strip.
- Banner 7: centered single primary button in a bottom-border strip.
- Banner 8: primary and secondary button group in a bottom-border strip.
- Banner 9: social icon link group in a bottom-border strip.
- Banner 10: inline text link in a compact bottom-border strip.
- Banner 11: repeated text-logo row in a bottom-border strip.
- Banner 12: repeated text-logo row in a bottom-border strip.
- Banner 13: oversized repeated heading text in a borderless marquee shell.
- Banner 14: seven repeated text-logo wrappers in a bottom-border strip.
- Banner 15: alternating oversized text-logo wrappers and image rectangles in a borderless logo/media ticker.
- Banner 16: two rows of alternating text-logo wrappers and image rectangles in a borderless logo/media ticker.

## Completed Category Summary: Banners 1-16

- Shell families observed: inset/contained bordered banners, full-width bottom-divider strips, compact text-link strips, text-logo rows, oversized heading marquees, one-row logo/media tickers, and two-row staggered logo/media tickers.
- Action/content patterns observed: email form, single button, two-button group, social links, inline text link, repeated text logos, oversized repeated heading text, and repeated image/media logo mixes.
- Likely shared primitive candidates: section shell sizing, `375px` mobile frame behavior, bottom-divider strip rule, dismiss control placement, Relume mark/message stack, button groups, social icon group, repeated text-logo item, and clipped ticker row mechanics.
- Patterns that should stay section-specific for now: Banner 13 oversized heading offsets and scale, Banner 15 one-row media ticker sizing, Banner 16 two-row stagger offsets, and per-variant desktop/mobile breakpoints where source geometry changes meaningfully.

## Header Category

- Header 44 and Header 46 both use a light white shell, centered max-width page frame, left-aligned `768px` copy block, no media, no border, and no divider.
- Header 44 adds a tagline and fixed `208 x 48` two-button action row; Header 46 is text-only.
- Header 45 extends the left-column shell with an email form and terms text.
- Headers 47-49 start a two-column light header family: `600px` desktop columns, `80px` desktop gap, stacked mobile layout, no media, border, or divider.
- Header action/content patterns now observed: text-only, two-button CTA, email form with terms, two-column CTA, two-column email form with terms, and two-column text-only.
- Do not abstract header primitives yet; the repeated shell and action patterns are becoming clearer, but this pass intentionally remains section-scoped.
