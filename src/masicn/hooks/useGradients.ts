import { useTheme } from '../theme';
import { rgba } from '../utils';

/**
 * useGradients — returns theme-aware fade gradient presets.
 *
 * `fadeBottom` and `fadeTop` must use the current theme background color so
 * they work correctly in both light and dark mode. Use this hook instead of
 * the static `gradients.fadeBottom` / `gradients.fadeTop` exports.
 *
 * @example
 * const { fadeBottom } = useGradients();
 *
 * <LinearGradient {...fadeBottom} style={StyleSheet.absoluteFill} />
 */
export function useGradients() {
  const { theme } = useTheme();
  const bg = theme.colors.background;

  return {
    /** Transparent → background — fades content out at the bottom of a scroll area. */
    fadeBottom: {
      colors: [rgba(bg, 0), bg] as [string, string],
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
    },
    /** Background → transparent — fades content out at the top of a scroll area. */
    fadeTop: {
      colors: [bg, rgba(bg, 0)] as [string, string],
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
    },
  };
}
