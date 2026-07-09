import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Stack,
  Row,
  Text,
  spacing,
  radius,
  useTheme,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { RefreshableList } from '../../../shared/blocks/RefreshableList';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

type Item = { id: string; title: string; subtitle: string };

const INITIAL_ITEMS: Item[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i),
  title: `List item ${i + 1}`,
  subtitle: 'Pull down to refresh and reload the list',
}));

function ItemRow({ item }: { item: Item }) {
  const { theme } = useTheme();
  return (
    <Row
      align="center"
      gap="md"
      style={[styles.item, { backgroundColor: theme.colors.surfacePrimary }]}
    >
      <View
        style={[
          styles.avatar,
          { backgroundColor: theme.colors.primary, borderRadius: radius.full },
        ]}
      />
      <Stack gap="xxs" style={styles.itemText}>
        <Text variant="label" color="textPrimary">
          {item.title}
        </Text>
        <Text variant="captionSmall" color="textSecondary">
          {item.subtitle}
        </Text>
      </Stack>
    </Row>
  );
}

export function RefreshableListScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [refreshCount, setRefreshCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshCount(c => c + 1);
      setItems(
        Array.from({ length: 12 + refreshCount + 1 }, (_, i) => ({
          id: String(i),
          title: `List item ${i + 1} (refresh #${refreshCount + 1})`,
          subtitle: 'Pull down to refresh again',
        })),
      );
      setRefreshing(false);
    }, 1200);
  }, [refreshCount]);

  return (
    <ScreenLayout
      title="Refreshable List"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
      subtitle="FlatList with pull-to-refresh. Pull the list down to trigger a refresh."
      scrollable={false}
    >
      <RefreshableList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemRow item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        showSeparator
        contentPadding="md"
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  item: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  avatar: { width: 36, height: 36 },
  itemText: { flex: 1 },
});
