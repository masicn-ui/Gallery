import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Row, spacing } from '../../masicn';

interface VariantRowProps {
  children: React.ReactNode;
  wrap?: boolean;
}

/**
 * VariantRow — a horizontal scroll row for showing multiple component
 * variants side-by-side without overflow.
 *
 * @example
 * <VariantRow>
 *   <Button variant="primary">Primary</Button>
 *   <Button variant="secondary">Secondary</Button>
 * </VariantRow>
 */
export function VariantRow({ children, wrap = false }: VariantRowProps) {
  if (wrap) {
    return (
      <Row gap="sm" style={styles.wrap}>
        {children}
      </Row>
    );
  }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { flexWrap: 'wrap' },
  scrollContent: { gap: spacing.sm, paddingRight: spacing.xl },
});
