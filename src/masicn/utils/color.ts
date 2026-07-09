/**
 * Converts a hex color string to an rgba() string.
 *
 * Usage:
 * ```ts
 * rgba(palette.teal[500], 0.15)  // 'rgba(0,128,128,0.15)'
 * ```
 */
export function rgba(hex: string, alpha: number): string {
  if (!hex.startsWith('#')) {
    // Already a non-hex value (e.g. 'transparent') — return as-is
    return hex;
  }

  const clean = hex.replace('#', '');

  // Expand shorthand (#abc → #aabbcc)
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map(c => c + c)
          .join('')
      : clean;

  // 8-digit hex (#rrggbbaa) — strip the alpha channel, parse as 6-digit
  const hex6 = full.length === 8 ? full.substring(0, 6) : full;

  const r = parseInt(hex6.substring(0, 2), 16);
  const g = parseInt(hex6.substring(2, 4), 16);
  const b = parseInt(hex6.substring(4, 6), 16);
  const a = Math.min(Math.max(alpha, 0), 1);

  return `rgba(${r},${g},${b},${a})`;
}
