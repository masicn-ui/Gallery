import type { Theme } from './theme';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import { THEME_VERSION } from './version';

/**
 * Override shape — every key is optional so you only provide what you want to change.
 */
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown>
    ? DeepPartial<T[K]>
    : T[K];
};

type ThemeOverride = DeepPartial<Theme>;

function mergeTheme(base: Theme, override: ThemeOverride): Theme {
  return {
    ...base,
    ...override,
    colors: {
      ...base.colors,
      ...(override.colors ?? {}),
    },
  };
}

/** Returns color token keys present in base but absent from the override object. */
function findMissingTokens(base: Theme, override: ThemeOverride): string[] {
  const overrideColors = override.colors ?? {};
  return (Object.keys(base.colors) as (keyof typeof base.colors)[]).filter(
    k => !(k in overrideColors),
  );
}

export interface ThemePair {
  light: Theme;
  dark: Theme;
}

/**
 * createTheme — merge overrides onto the default light/dark themes.
 *
 * Returns a typed `{ light, dark }` pair ready to pass to ThemeProvider.
 *
 * ```ts
 * // swap brand + surface colors, keep everything else
 * const { light, dark } = createTheme({
 *   light: {
 *     colors: {
 *       primary: '#6200ee',
 *       onPrimary: '#ffffff',
 *       background: '#f5f5f5',
 *     },
 *   },
 *   dark: {
 *     colors: {
 *       primary: '#bb86fc',
 *       onPrimary: '#000000',
 *       background: '#121212',
 *     },
 *   },
 * });
 * ```
 */
export function createTheme(
  overrides: { light?: ThemeOverride; dark?: ThemeOverride } = {},
): ThemePair {
  const light = mergeTheme(lightTheme, overrides.light ?? {});
  const dark = mergeTheme(darkTheme, overrides.dark ?? {});

  if (__DEV__) {
    const lightOverride = overrides.light ?? {};
    const darkOverride = overrides.dark ?? {};
    const hasLightColors = Object.keys(lightOverride.colors ?? {}).length > 0;
    const hasDarkColors = Object.keys(darkOverride.colors ?? {}).length > 0;

    // Only warn when the caller has actually provided color overrides — not on a bare createTheme() call.
    if (hasLightColors || hasDarkColors) {
      const missingLight = hasLightColors
        ? findMissingTokens(lightTheme, lightOverride)
        : [];
      const missingDark = hasDarkColors
        ? findMissingTokens(darkTheme, darkOverride)
        : [];
      const allMissing = [...new Set([...missingLight, ...missingDark])];
      if (allMissing.length > 0) {
        console.warn(
          `[masicn v${THEME_VERSION}] createTheme: the following tokens are not covered by your override ` +
            `and will fall back to the 'masi' palette defaults:\n  ${allMissing.join(
              ', ',
            )}\n` +
            `This may cause unexpected colors if you've customised background or surface tokens.`,
        );
      }
    }
  }

  return { light, dark };
}
