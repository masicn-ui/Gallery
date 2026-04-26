/**
 * Divider — a hairline separator between sections or list items.
 *
 * Uses `theme.colors.separator` automatically.
 * Supports horizontal (default) and vertical orientations,
 * plus an optional inset margin for list-style layouts.
 *
 * ```tsx
 * <Divider />                   // full-width horizontal line
 * <Divider inset />             // indented (matches list padding)
 * <Divider vertical />          // stretch-height vertical rule
 * ```
 */
import React from 'react';
import { View, StyleSheet, type ViewProps } from 'react-native';
import { useTheme } from '../theme';
import { spacing } from '../tokens';

interface DividerProps extends ViewProps {
  /** Adds horizontal margin on both sides — use inside list rows to match content padding. */
  inset?: boolean;
  /** Renders a vertical rule instead of a horizontal line. Stretches to parent height. */
  vertical?: boolean;
}

export function Divider({ inset = false, vertical = false, style, ...rest }: DividerProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        vertical ? styles.vertical : styles.horizontal,
        { backgroundColor: theme.colors.separator },
        inset && styles.inset,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    height: StyleSheet.hairlineWidth,
  },
  vertical: {
    width: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
  },
  inset: {
    marginHorizontal: spacing.lg,
  },
});
