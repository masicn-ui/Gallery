import { StyleSheet } from 'react-native';

/**
 * Border width tokens.
 * Consistent border widths for components.
 */

export const borders = {
  /** `0` — No border. Use to reset or opt out of borders. */
  none: 0,
  /** Platform hairline — 0.5px on retina screens, 1px elsewhere. The subtlest possible divider. */
  hairline: StyleSheet.hairlineWidth,
  /** `1` — Standard divider and input border. Default for most bordered elements. */
  thin: 1,
  /** `2` — Emphasis border. Focused inputs, selected / active states. */
  medium: 2,
  /** `4` — Heavy border. Progress tracks, slider rails, strong outlines. */
  thick: 4,
} as const;

export type Borders = typeof borders;
