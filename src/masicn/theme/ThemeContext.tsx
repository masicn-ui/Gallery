import { createContext, useContext } from 'react';
import type { Theme } from './theme';
import type { ThemePair } from './createTheme';

/** The three supported theme modes. `'system'` follows the OS preference. */
export type ThemeMode = 'light' | 'dark' | 'system';

/** A named palette entry — pass an array of these to `MasicnProvider`. */
export interface PaletteEntry {
  /** Unique identifier, e.g. `'ocean'`. */
  name: string;
  /** Human-readable label shown in palette pickers. */
  label: string;
  /** The light/dark theme pair for this palette. */
  pair: ThemePair;
}

export interface ThemeContextValue {
  /** The fully resolved Theme object for the current mode + active palette. */
  theme: Theme;
  /** The currently active mode setting (`'light'`, `'dark'`, or `'system'`). */
  mode: ThemeMode;
  /** Explicitly set the theme mode. */
  setMode: (mode: ThemeMode) => void;
  /** Toggle between `'light'` and `'dark'` modes. Ignores the current system preference. */
  toggleTheme: () => void;
  /** Switch to `'system'` mode — resumes following the OS light/dark preference. */
  resetToSystem: () => void;
  /** All available palettes passed to `MasicnProvider`. Empty array if none. */
  palettes: PaletteEntry[];
  /** Name of the currently active palette. Empty string when no palettes provided. */
  activePalette: string;
  /** Switch to a named palette. No-op if name not found in `palettes`. */
  setPalette: (name: string) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

/**
 * Access the current theme and controls.
 *
 * @example
 * const { theme, toggleTheme, setPalette } = useTheme();
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
