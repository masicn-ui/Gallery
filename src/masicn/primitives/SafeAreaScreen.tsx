/**
 * SafeAreaScreen — full-screen `SafeAreaView` with theme background.
 *
 * A simpler alternative to `Screen` when you want the OS-native safe area
 * handling via `react-native-safe-area-context` instead of manual inset math.
 *
 * ```tsx
 * <SafeAreaScreen edges={['top', 'bottom']}>
 *   <YourContent />
 * </SafeAreaScreen>
 * ```
 */
import React from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { useTheme } from '../theme';

interface SafeAreaScreenProps {
  children: React.ReactNode;
  /** Safe area edges to inset — defaults to `['top', 'bottom']`. */
  edges?: Edge[];
  style?: ViewStyle;
}

export function SafeAreaScreen({
  children,
  edges = ['top', 'bottom'],
  style,
}: SafeAreaScreenProps) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.root,
        { backgroundColor: theme.colors.background },
        style,
      ]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
