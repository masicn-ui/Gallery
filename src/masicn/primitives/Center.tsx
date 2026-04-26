/**
 * Center — centers its children both horizontally and vertically.
 *
 * ```tsx
 * <Center flex={1}>
 *   <ActivityIndicator />
 * </Center>
 * ```
 */
import React from 'react';
import { View, StyleSheet, type ViewProps, type ViewStyle } from 'react-native';
import { spacing, type Spacing } from '../tokens';

export interface CenterProps extends ViewProps {
  /** Flex factor — pass `1` to fill available space. */
  flex?: ViewStyle['flex'];
  /** Uniform padding. Maps to a `spacing` token. */
  padding?: keyof Spacing;
}

export function Center({ children, style, flex, padding, ...rest }: CenterProps) {
  return (
    <View
      style={[
        styles.root,
        flex !== undefined && { flex },
        padding !== undefined && { padding: spacing[padding] },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
