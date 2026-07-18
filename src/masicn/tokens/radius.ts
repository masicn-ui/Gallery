/**
 * Border radius scale.
 * Use these tokens on `borderRadius` to keep corner rounding consistent.
 */

export const radius = {
  /** `0` — Sharp corners. Input fields, table cells, dividers. */
  none: 0,
  /** `4` — Subtle rounding. Tags, badges, small chips. */
  xs: 4,
  /** `8` — Gentle rounding. List items, secondary cards. */
  sm: 8,
  /** `12` — Default rounding. Modals, popovers, bottom sheets. */
  md: 12,
  /** `16` — Pronounced rounding. Primary cards, buttons. */
  lg: 16,
  /** `20` — Strong rounding. FABs, large surface cards. */
  xl: 20,
  /** `28` — Very strong rounding. Large bottom sheets, hero cards. */
  xxl: 28,
  /** `9999` — Fully circular / pill shape. Avatars, toggles, pills. */
  full: 9999,
} as const;

export type Radius = typeof radius;
