import React from 'react';
import { StyleSheet } from 'react-native';
import { Pressable, Row, Text, spacing, useTheme } from '../../masicn';

interface ComponentListItemProps {
  name: string;
  onPress: () => void;
}

export function ComponentListItem({ name, onPress }: ComponentListItemProps) {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      feedback="opacity"
      testID={`list-item-${name}`}
    >
      <Row
        align="center"
        style={[styles.row, { borderBottomColor: theme.colors.separator }]}
      >
        <Text variant="body" color="textPrimary" style={styles.name}>
          {name}
        </Text>
        <Text variant="body" color="textTertiary">
          ›
        </Text>
      </Row>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  name: {
    flex: 1,
  },
});
