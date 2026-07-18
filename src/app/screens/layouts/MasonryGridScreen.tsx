import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Row,
  Text,
  Box,
  spacing,
  radius,
  opacity,
  useTheme,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { MasonryGrid } from '../../../shared/blocks/MasonryGrid';
import { Button } from '../../../shared/components/Button';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

type MasonryItem = { id: string; height: number; label: string; color: string };

function generateItems(palette: string[], count: number): MasonryItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: String(i),
    height: 80 + Math.floor(Math.random() * 120),
    label: `Item ${i + 1}`,
    color: palette[i % palette.length],
  }));
}

export function MasonryGridScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const palette = [
    theme.colors.primary,
    theme.colors.secondary,
    theme.colors.success,
    theme.colors.warning,
    theme.colors.info,
  ];

  const [columns, setColumns] = useState(2);
  const [items, setItems] = useState(() => generateItems(palette, 16));

  const reshuffle = () => setItems(generateItems(palette, 16));

  return (
    <ScreenLayout
      title="Masonry Grid"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <Box
        style={[
          styles.controls,
          {
            backgroundColor: theme.colors.surfacePrimary,
            borderRadius: radius.lg,
          },
        ]}
      >
        <Text variant="label" color="textPrimary">
          MasonryGrid
        </Text>
        <Text variant="captionSmall" color="textSecondary" style={styles.desc}>
          Pinterest-style multi-column layout. Items are distributed greedily
          into the shortest column.
        </Text>
        <Row gap="sm" style={styles.controlRow}>
          <Text variant="caption" color="textSecondary">
            Columns:
          </Text>
          {[2, 3, 4].map(n => (
            <Button
              key={n}
              size="sm"
              variant={columns === n ? 'primary' : 'outline'}
              onPress={() => setColumns(n)}
            >
              {String(n)}
            </Button>
          ))}
          <Box style={styles.spacer} />
          <Button size="sm" variant="ghost" onPress={reshuffle}>
            Reshuffle
          </Button>
        </Row>
      </Box>

      <MasonryGrid
        data={items}
        columns={columns}
        gap="sm"
        keyExtractor={item => item.id}
        getItemHeight={item => item.height}
        renderItem={item => (
          <View
            style={[
              styles.card,
              {
                height: item.height,
                backgroundColor: item.color,
                borderRadius: radius.md,
              },
            ]}
          >
            <Text variant="captionSmall" color="onPrimary">
              {item.label}
            </Text>
            <Text
              variant="captionSmall"
              color="onPrimary"
              style={styles.heightLabel}
            >
              {item.height}px
            </Text>
          </View>
        )}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  controls: { padding: spacing.lg },
  desc: { marginTop: spacing.xs, marginBottom: spacing.md },
  controlRow: { alignItems: 'center', flexWrap: 'wrap' },
  spacer: { flex: 1 },
  card: { padding: spacing.sm, justifyContent: 'space-between' },
  heightLabel: { opacity: opacity.subtle },
});
