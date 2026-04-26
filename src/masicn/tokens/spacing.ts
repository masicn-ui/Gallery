/**
 * Spacing scale — 4pt base grid.
 * Use these tokens for padding, margin, and gap values.
 */

export const spacing = {
  /** `0` — Explicit zero. Use to reset default platform padding/margin. */
  none: 0,
  /** `2` — Hairline nudge. Icon inner padding, tiny offsets. */
  xxs: 2,
  /** `4` — Tight gap. Between icon and label, inline chips. */
  xs: 4,
  /** `8` — Compact gap. Stack spacing between tightly related elements. */
  sm: 8,
  /** `12` — Default gap. The workhorse — inner card padding, form row gaps. */
  md: 12,
  /** `16` — Comfortable gap. Section separation, screen edge padding. */
  lg: 16,
  /** `24` — Open spacing. Card padding, section headers. */
  xl: 24,
  /** `32` — Wide spacing. Hero sections, empty state padding. */
  xxl: 32,
  /** `48` — Extra-wide. Page headers, splash/onboarding spacing. */
  xxxl: 48,

  // Negative counterparts — for breakout effects and overlap layouts.
  /** `-2` — Negative counterpart of `xxs`. Hairline inward nudge. */
  negXxs: -2,
  /** `-4` — Negative counterpart of `xs`. Tight pull-in. */
  negXs: -4,
  /** `-8` — Negative counterpart of `sm`. Compact overlap. */
  negSm: -8,
  /** `-12` — Negative counterpart of `md`. Standard overlap / bleed. */
  negMd: -12,
  /** `-16` — Negative counterpart of `lg`. Full bleed breakout. */
  negLg: -16,
  /** `-24` — Negative counterpart of `xl`. Wide bleed. */
  negXl: -24,
  /** `-32` — Negative counterpart of `xxl`. Hero breakout. */
  negXxl: -32,
  /** `-48` — Negative counterpart of `xxxl`. Max bleed / full breakout. */
  negXxxl: -48,
} as const;

export type Spacing = typeof spacing;
