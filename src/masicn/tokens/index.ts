import { spacing } from './spacing';
import { radius } from './radius';
import { borders } from './borders';
import { sizes } from './sizes';
import { elevation } from './elevation';
import { opacity } from './opacity';
import { iconSizes } from './iconSizes';
import { layout } from './layout';
import { motion } from './motion';

/**
 * All non-color design tokens in a single object.
 * Useful when you want to pass the full token set to a theming utility or logger.
 *
 * For individual tokens, prefer named imports:
 * ```ts
 * import { spacing, radius } from '@masicn/ui';
 * ```
 */
export const MasiTokens = {
    spacing,
    radius,
    borders,
    sizes,
    elevation,
    opacity,
    iconSizes,
    layout,
    motion,
};

/**
 * Hook that returns all non-color design tokens.
 * Useful for components that need multiple token groups at once.
 *
 * ```ts
 * const { spacing, radius, elevation } = useTokens();
 * ```
 */
export function useTokens() {
    return MasiTokens;
}

// ─── Individual token exports ─────────────────────────────────────────────────

export { spacing } from './spacing';
export type { Spacing } from './spacing';

export { sizes } from './sizes';
export type { Sizes } from './sizes';

export { borders } from './borders';
export type { Borders } from './borders';

export { radius } from './radius';
export type { Radius } from './radius';

export { typography, fonts, fontFamilies } from './typography';
export type {
    Typography,
    TypographyVariant,
    FontRole,
    FontWeightKey,
    FontFamilyKey,
} from './typography';

export { elevation } from './elevation';
export type { Elevation } from './elevation';

export { motion } from './motion';
export type { Motion } from './motion';

export { motionEasing } from './motionEasing';
export type { MotionEasing } from './motionEasing';

export { rgba } from '../utils/color';

export { layout } from './layout';
export type { Layout } from './layout';

export { opacity } from './opacity';
export type { Opacity } from './opacity';

export { iconSizes } from './iconSizes';
export type { IconSizes } from './iconSizes';

export { gradients, gradientDirections } from './gradients';
export type { GradientPreset, GradientDirection } from './gradients';

export { lineHeightRatios, lh, letterSpacing } from './lineHeight';
export type { LineHeightRatio, LetterSpacing } from './lineHeight';
