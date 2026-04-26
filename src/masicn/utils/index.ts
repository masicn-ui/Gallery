export { rgba } from './color';

/**
 * Clamps `value` to the inclusive range `[min, max]`.
 *
 * ```ts
 * clamp(150, 0, 100)  // → 100
 * clamp(-5,  0, 100)  // → 0
 * clamp(42,  0, 100)  // → 42
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
  if (__DEV__ && min > max) {
    console.warn(`[masicn] clamp(): min (${min}) > max (${max}). Result is undefined behavior.`);
  }
  return Math.min(Math.max(value, min), max);
}
