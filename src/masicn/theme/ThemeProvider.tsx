/**
 * ThemeProvider — dynamic light/dark/system theme with multi-palette support.
 *
 * Pass a `palettes` array to enable runtime palette switching. The first
 * palette in the array is the default. If no palettes are given, falls back
 * to the built-in masicn light/dark themes.
 *
 * ```tsx
 * <ThemeProvider theme="system" palettes={myPalettes}>
 *   <App />
 * </ThemeProvider>
 * ```
 */
import React, { useMemo, useState, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import {
  ThemeContext,
  type ThemeContextValue,
  type ThemeMode,
  type PaletteEntry,
} from './ThemeContext';
import { lightTheme } from './light';
import { darkTheme } from './dark';

interface ThemeProviderProps {
  children: React.ReactNode;
  /** Starting theme mode. Defaults to `'system'`. */
  theme?: ThemeMode;
  /** Available palettes. The first entry is the initial active palette. */
  palettes?: PaletteEntry[];
}

export function ThemeProvider({
  children,
  theme: initialTheme = 'system',
  palettes = [],
}: ThemeProviderProps) {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(initialTheme);
  const [activePalette, setActivePalette] = useState<string>(
    palettes[0]?.name ?? '',
  );

  const toggleTheme = useCallback(() => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const resetToSystem = useCallback(() => {
    setMode('system');
  }, []);

  const setPalette = useCallback(
    (name: string) => {
      if (palettes.some(p => p.name === name)) {
        setActivePalette(name);
      }
    },
    [palettes],
  );

  const resolvedDark =
    mode === 'system' ? systemScheme === 'dark' : mode === 'dark';

  const theme = useMemo(() => {
    const activePair = palettes.find(p => p.name === activePalette)?.pair;
    if (activePair) {
      return resolvedDark ? activePair.dark : activePair.light;
    }
    return resolvedDark ? darkTheme : lightTheme;
  }, [palettes, activePalette, resolvedDark]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      mode,
      setMode,
      toggleTheme,
      resetToSystem,
      palettes,
      activePalette,
      setPalette,
    }),
    [
      theme,
      mode,
      toggleTheme,
      resetToSystem,
      palettes,
      activePalette,
      setPalette,
    ],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
