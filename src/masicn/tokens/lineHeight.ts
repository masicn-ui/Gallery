/**
 * Standalone Line Height & Letter Spacing Tokens
 *
 * Use these when building custom text styles outside the `typography` scale,
 * or when composing text via the `style` prop on RN's `<Text>`.
 *
 * Note: React Native `lineHeight` is an absolute pixel value, not a CSS ratio.
 * Use the `lh()` helper to compute from a fontSize + ratio preset.
 *
 * @example
 * // Compute a line height from a custom font size
 * const style = { fontSize: 20, lineHeight: lh(20, 'normal') };
 *
 * @example
 * // Use a letter spacing preset directly
 * const style = { letterSpacing: letterSpacing.wide };
 */

// ─── Line Height Ratios ───────────────────────────────────────────────────────

/**
 * Named line-height ratio presets.
 *
 * | Preset   | Ratio  | Best for                              |
 * |----------|--------|---------------------------------------|
 * | none     | 1.0    | Single-line UI labels (no descenders) |
 * | tight    | 1.2    | Display headings                      |
 * | snug     | 1.35   | Sub-headings, compact lists           |
 * | normal   | 1.5    | Body text — the default               |
 * | relaxed  | 1.625  | Long-form reading                     |
 * | loose    | 2.0    | Very spacious layouts                 |
 */
export const lineHeightRatios = {
  none: 1,
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export type LineHeightRatio = keyof typeof lineHeightRatios;

/**
 * Compute an absolute pixel line height from a font size and a ratio preset.
 *
 * Always rounds to the nearest integer to avoid sub-pixel hairlines.
 *
 * @example
 * const h = lh(16, 'normal'); // → 24
 * const h = lh(32, 'tight');  // → 38
 */
export function lh(fontSize: number, preset: LineHeightRatio): number {
  return Math.round(fontSize * lineHeightRatios[preset]);
}

// ─── Letter Spacing ───────────────────────────────────────────────────────────

/**
 * Letter spacing scale (in points).
 *
 * Positive values spread glyphs apart; negative values tighten them.
 *
 * | Name     | Value | Best for                              |
 * |----------|-------|---------------------------------------|
 * | tightest | -1.0  | Large display headings (tighten)      |
 * | tighter  | -0.5  | Sub-headings                          |
 * | tight    | -0.25 | Body with large fonts                 |
 * | normal   |  0    | Default — no adjustment               |
 * | wide     |  0.4  | Small body text for readability       |
 * | wider    |  0.8  | Labels and UI text                    |
 * | widest   |  1.2  | Section headers (uppercase)           |
 * | tracking |  1.5  | Overline / CAPS labels                |
 */
export const letterSpacing = {
  tightest: -1,
  tighter: -0.5,
  tight: -0.25,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.2,
  tracking: 1.5,
} as const;

export type LetterSpacing = keyof typeof letterSpacing;
