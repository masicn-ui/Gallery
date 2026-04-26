/**
 * Screen — full-screen root container with theme background and safe area support.
 *
 * Uses `useSafeAreaInsets` to inset content away from notches and home indicators.
 * Applies `theme.colors.background` automatically.
 *
 * ```tsx
 * <Screen padded safe>
 *   <Text>Content</Text>
 * </Screen>
 * ```
 */
import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme';
import { layout } from '../tokens';

interface ScreenProps extends ViewProps {
  /** Adds `layout.screenPadding` (16pt) horizontal padding. Defaults to `true`. */
  padded?: boolean;
  /** Insets content for device notch / home indicator. Defaults to `true`. */
  safe?: boolean;
}

export function Screen({
  children,
  style,
  padded = true,
  safe = true,
  ...rest
}: ScreenProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        { backgroundColor: theme.colors.background },
        safe && {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        padded && styles.padded,
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: layout.screenPadding,
  },
});
