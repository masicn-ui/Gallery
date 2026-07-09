import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Stack,
  Text,
  spacing,
  useTheme,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Swipeable } from '../../../shared/blocks/Swipeable';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SwipeableScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [items, setItems] = useState([
    'Email from Alice',
    'Meeting at 3pm',
    'Deploy reminder',
  ]);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const removeItem = (label: string) => {
    setItems(prev => prev.filter(i => i !== label));
    setLastAction(`Deleted: ${label}`);
  };

  return (
    <ScreenLayout
      title="Swipeable"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Sizes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Three size presets control the minimum row height and action padding.
        </Text>
        <Stack gap="sm">
          <Swipeable
            size="sm"
            rightActions={[
              {
                label: 'Delete',
                icon: <Text variant="body">🗑</Text>,
                backgroundColor: 'error',
                onPress: () => setLastAction('Deleted (sm)'),
              },
            ]}
          >
            <View
              style={[
                styles.row,
                { backgroundColor: theme.colors.surfacePrimary },
              ]}
            >
              <Text variant="bodySmall" color="textPrimary">
                Small row
              </Text>
              <Text variant="captionSmall" color="textTertiary">
                ← swipe
              </Text>
            </View>
          </Swipeable>

          <Swipeable
            size="md"
            rightActions={[
              {
                label: 'Delete',
                icon: <Text variant="body">🗑</Text>,
                backgroundColor: 'error',
                onPress: () => setLastAction('Deleted (md)'),
              },
            ]}
          >
            <View
              style={[
                styles.row,
                { backgroundColor: theme.colors.surfacePrimary },
              ]}
            >
              <Text variant="body" color="textPrimary">
                Medium row (default)
              </Text>
              <Text variant="caption" color="textTertiary">
                ← swipe
              </Text>
            </View>
          </Swipeable>

          <Swipeable
            size="lg"
            rightActions={[
              {
                label: 'Delete',
                icon: <Text variant="body">🗑</Text>,
                backgroundColor: 'error',
                onPress: () => setLastAction('Deleted (lg)'),
              },
            ]}
          >
            <View
              style={[
                styles.row,
                { backgroundColor: theme.colors.surfacePrimary },
              ]}
            >
              <Text variant="bodyLarge" color="textPrimary">
                Large row
              </Text>
              <Text variant="caption" color="textTertiary">
                ← swipe
              </Text>
            </View>
          </Swipeable>

          {lastAction && (
            <Text variant="caption" color="textSecondary">
              {lastAction}
            </Text>
          )}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Swipe Left to Delete">
        <Stack gap="sm">
          {items.map(item => (
            <Swipeable
              key={item}
              rightActions={[
                {
                  label: 'Delete',
                  icon: <Text variant="body">🗑</Text>,
                  backgroundColor: 'error',
                  onPress: () => removeItem(item),
                },
              ]}
            >
              <View
                style={[
                  styles.row,
                  { backgroundColor: theme.colors.surfacePrimary },
                ]}
              >
                <Text variant="body" color="textPrimary">
                  {item}
                </Text>
                <Text variant="caption" color="textTertiary">
                  ← swipe
                </Text>
              </View>
            </Swipeable>
          ))}
          {items.length === 0 && (
            <Text variant="body" color="textSecondary" style={styles.empty}>
              All items deleted
            </Text>
          )}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Both Sides">
        <Stack gap="sm">
          <Swipeable
            leftActions={[
              {
                label: 'Archive',
                icon: <Text variant="body">📦</Text>,
                backgroundColor: 'success',
                onPress: () => setLastAction('Archived'),
              },
            ]}
            rightActions={[
              {
                label: 'Delete',
                icon: <Text variant="body">🗑</Text>,
                backgroundColor: 'error',
                onPress: () => setLastAction('Deleted'),
              },
            ]}
          >
            <View
              style={[
                styles.row,
                { backgroundColor: theme.colors.surfacePrimary },
              ]}
            >
              <Text variant="body" color="textPrimary">
                Swipe either direction
              </Text>
              <Text variant="caption" color="textTertiary">
                ← or →
              </Text>
            </View>
          </Swipeable>
          {lastAction && (
            <Text variant="caption" color="textSecondary">
              {lastAction}
            </Text>
          )}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Multiple Actions">
        <Swipeable
          rightActions={[
            {
              label: 'Flag',
              icon: <Text variant="body">🚩</Text>,
              backgroundColor: 'warning',
              onPress: () => setLastAction('Flagged'),
            },
            {
              label: 'Delete',
              icon: <Text variant="body">🗑</Text>,
              backgroundColor: 'error',
              onPress: () => setLastAction('Deleted'),
            },
          ]}
        >
          <View
            style={[
              styles.row,
              { backgroundColor: theme.colors.surfacePrimary },
            ]}
          >
            <Text variant="body" color="textPrimary">
              Two right actions
            </Text>
            <Text variant="caption" color="textTertiary">
              ← swipe
            </Text>
          </View>
        </Swipeable>
      </ShowcaseSection>

      <ShowcaseSection title="Custom Threshold" last>
        <Swipeable
          rightActions={[
            {
              label: 'Flag',
              icon: <Text variant="body">🚩</Text>,
              backgroundColor: 'warning',
              onPress: () => setLastAction('Flagged'),
            },
          ]}
          threshold={120}
        >
          <View
            style={[
              styles.row,
              { backgroundColor: theme.colors.surfacePrimary },
            ]}
          >
            <Text variant="body" color="textPrimary">
              Needs a bigger swipe (120px)
            </Text>
            <Text variant="caption" color="textTertiary">
              ← swipe far
            </Text>
          </View>
        </Swipeable>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  empty: { textAlign: 'center', paddingVertical: spacing.lg },
});
