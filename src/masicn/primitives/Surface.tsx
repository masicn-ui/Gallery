import React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { elevation, radius, spacing, type Elevation, type Radius, type Spacing } from '../tokens';

type SurfaceBackground = keyof Theme['colors'];

export interface SurfaceProps extends ViewProps {
  /** Shadow depth — maps to elevation tokens. Defaults to `'sm'`. */
  level?: keyof Elevation;
  /** Theme color key for the background. Defaults to `'surfacePrimary'`. */
  background?: SurfaceBackground;
  /** Corner rounding via a radius token. */
  borderRadius?: keyof Radius;
  /** Uniform inner padding via a spacing token. */
  padding?: keyof Spacing;
  /** Horizontal (left + right) inner padding via a spacing token. */
  paddingHorizontal?: keyof Spacing;
  /** Vertical (top + bottom) inner padding via a spacing token. */
  paddingVertical?: keyof Spacing;
  /** Flex grow/shrink factor. Pass `1` to fill available space. */
  flex?: ViewStyle['flex'];
}

/**
 * Elevated container that automatically applies shadow, theme background,
 * and shadowColor from the active theme. Use instead of raw Box for cards,
 * sheets, modals, and any raised surface.
 */
export function Surface({
  children,
  style,
  level = 'sm',
  background = 'surfacePrimary',
  borderRadius: borderRadiusProp,
  padding,
  paddingHorizontal,
  paddingVertical,
  flex,
  ...rest
}: SurfaceProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        elevation[level],
        { backgroundColor: theme.colors[background], shadowColor: theme.colors.shadow },
        borderRadiusProp !== undefined && { borderRadius: radius[borderRadiusProp] },
        padding !== undefined && { padding: spacing[padding] },
        paddingHorizontal !== undefined && { paddingHorizontal: spacing[paddingHorizontal] },
        paddingVertical !== undefined && { paddingVertical: spacing[paddingVertical] },
        flex !== undefined && { flex },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
