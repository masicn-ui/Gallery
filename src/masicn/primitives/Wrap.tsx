import React from 'react';
import { View, StyleSheet, type ViewProps, type ViewStyle } from 'react-native';
import { spacing, type Spacing } from '../tokens';

export interface WrapProps extends ViewProps {
  /** Gap between wrapped items */
  gap?: keyof Spacing;
  /** Cross-axis alignment */
  align?: ViewStyle['alignItems'];
  /** Main-axis alignment */
  justify?: ViewStyle['justifyContent'];
}

/**
 * Flex-wrap row — ideal for tags, chips, and badges that overflow onto
 * multiple lines. Children wrap naturally at the container's edge.
 */
export function Wrap({
  children,
  gap = 'sm',
  align = 'center',
  justify,
  style,
  ...rest
}: WrapProps) {
  return (
    <View
      style={[
        styles.root,
        { gap: spacing[gap] },
        { alignItems: align },
        justify !== undefined && { justifyContent: justify },
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
