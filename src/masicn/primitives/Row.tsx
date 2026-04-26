import React from 'react';
import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';
import { spacing, type Spacing } from '../tokens';

interface RowProps extends ViewProps {
  /** Gap between children using a `spacing` token. Defaults to `'sm'` (8pt). */
  gap?: keyof Spacing;
  /** Main-axis (horizontal) distribution of children — maps to `justifyContent`. */
  justify?: ViewStyle['justifyContent'];
  /** Cross-axis (vertical) alignment of children — maps to `alignItems`. Defaults to `'center'`. */
  align?: ViewStyle['alignItems'];
  /** When true, children wrap onto the next line when they overflow the container. */
  wrap?: boolean;
}

/**
 * Horizontal row layout with token-driven gap, alignment, and optional wrap.
 * Use for side-by-side content like icon + label, avatar + name, or toolbar buttons.
 *
 * @example
 * <Row gap="md" justify="space-between">
 *   <Text variant="label">Status</Text>
 *   <Badge label="Active" variant="success" />
 * </Row>
 */
export function Row({
  children,
  gap = 'sm',
  justify,
  align = 'center',
  wrap = false,
  style,
  ...rest
}: RowProps) {
  return (
    <View
      style={[
        styles.root,
        { gap: spacing[gap] },
        justify !== undefined && { justifyContent: justify },
        { alignItems: align },
        wrap && styles.wrap,
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
});
