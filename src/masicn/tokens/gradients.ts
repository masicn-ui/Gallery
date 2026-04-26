/**
 * Gradient Presets
 *
 * Framework-agnostic gradient configs compatible with both
 * `expo-linear-gradient` and `react-native-linear-gradient`.
 *
 * Usage with expo-linear-gradient:
 * ```tsx
 * import { LinearGradient } from 'expo-linear-gradient';
 * import { gradients } from '../masicn';
 *
 * <LinearGradient {...gradients.overlays.scrimBottom} style={StyleSheet.absoluteFill} />
 * ```
 */

/**
 * Direction vectors for gradient start/end points.
 * Uses the {x, y} format accepted by expo-linear-gradient and react-native-linear-gradient.
 */
export const gradientDirections = {
  /** Top to bottom */
  toBottom: { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } },
  /** Bottom to top */
  toTop: { start: { x: 0, y: 1 }, end: { x: 0, y: 0 } },
  /** Left to right */
  toRight: { start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } },
  /** Right to left */
  toLeft: { start: { x: 1, y: 0.5 }, end: { x: 0, y: 0.5 } },
  /** Top-left to bottom-right */
  toBottomRight: { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
  /** Top-right to bottom-left */
  toBottomLeft: { start: { x: 1, y: 0 }, end: { x: 0, y: 1 } },
} as const;

/**
 * Semantic overlay gradient presets — fade an image or surface into a color.
 *
 * These are complete LinearGradient prop objects. Spread directly onto the component:
 * ```tsx
 * <LinearGradient {...gradients.scrimBottom} style={styles.overlay} />
 * ```
 */
export const gradients = {
  /**
   * Transparent → dark — for text legibility over images (bottom caption area).
   */
  scrimBottom: {
    colors: ['transparent', 'rgba(0,0,0,0.72)'] as [string, string],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  /**
   * Dark → transparent — for header area over images.
   */
  scrimTop: {
    colors: ['rgba(0,0,0,0.72)', 'transparent'] as [string, string],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  /**
   * Three-stop scrim — subtle fade at top, heavy fade at bottom.
   * Good for hero images with both a top bar and bottom caption.
   */
  scrimFull: {
    colors: ['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.8)'] as [string, string, string],
    locations: [0, 0.4, 1] as [number, number, number],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  /**
   * Shimmer sweep — used for skeleton loading animations.
   * Animate `start`/`end` X values with Reanimated to sweep across the surface.
   */
  shimmer: {
    colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.45)', 'rgba(255,255,255,0)'] as [string, string, string],
    locations: [0, 0.5, 1] as [number, number, number],
    start: { x: -1, y: 0.5 },
    end: { x: 2, y: 0.5 },
  },

  /**
   * Dark shimmer — for skeleton over dark surfaces.
   */
  shimmerDark: {
    colors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.08)', 'rgba(0,0,0,0)'] as [string, string, string],
    locations: [0, 0.5, 1] as [number, number, number],
    start: { x: -1, y: 0.5 },
    end: { x: 2, y: 0.5 },
  },
} as const;

export type GradientPreset = keyof typeof gradients;
export type GradientDirection = keyof typeof gradientDirections;
