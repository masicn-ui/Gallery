import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { spacing, type Spacing } from '../tokens';

interface StackProps extends ViewProps {
  /** Gap between children using a `spacing` token. Defaults to `'md'` (12pt). */
  gap?: keyof Spacing;
}

/**
 * Vertical column layout with token-driven gap between every direct child.
 * The fundamental building block for stacking content vertically.
 *
 * @example
 * <Stack gap="lg">
 *   <Text variant="h3">Title</Text>
 *   <Text variant="body" color="textSecondary">Description goes here.</Text>
 *   <Button>Continue</Button>
 * </Stack>
 */
export function Stack({ children, gap = 'md', style, ...rest }: StackProps) {
  return (
    <View style={[styles.root, { gap: spacing[gap] }, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
});
