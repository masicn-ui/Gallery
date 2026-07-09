import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Text,
  Box,
  spacing,
  radius,
  borders,
  useTheme,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { RefreshableScrollView } from '../../../shared/blocks/RefreshableScrollView';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function RefreshableScrollViewScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [refreshCount, setRefreshCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshCount(c => c + 1);
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScreenLayout
      title="Refreshable Scroll View"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
      subtitle="ScrollView with pull-to-refresh. Pull down anywhere to trigger a refresh."
      scrollable={false}
    >
      <RefreshableScrollView
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentPadding="md"
        contentContainerStyle={styles.content}
      >
        <Box
          style={[
            styles.infoCard,
            {
              backgroundColor: theme.colors.surfacePrimary,
              borderRadius: radius.lg,
            },
          ]}
        >
          <Text variant="label" color="textPrimary">
            RefreshableScrollView
          </Text>
          <Text
            variant="captionSmall"
            color="textSecondary"
            style={styles.infoText}
          >
            A ScrollView wrapped with a themed RefreshControl. Pull down
            anywhere in this area to trigger a refresh.
          </Text>
        </Box>

        <Box
          style={[
            styles.statCard,
            { backgroundColor: theme.colors.primary, borderRadius: radius.lg },
          ]}
        >
          <Text variant="h2" color="onPrimary">
            {refreshCount}
          </Text>
          <Text variant="caption" color="onPrimary">
            times refreshed
          </Text>
        </Box>

        <Stack gap="sm">
          {Array.from({ length: 8 }, (_, i) => (
            <Box
              key={i}
              style={[
                styles.card,
                {
                  backgroundColor: theme.colors.surfacePrimary,
                  borderRadius: radius.md,
                  borderColor: theme.colors.borderSecondary,
                },
              ]}
            >
              <Text variant="label" color="textPrimary">
                Content block {i + 1}
              </Text>
              <Text variant="captionSmall" color="textSecondary">
                Scroll down for more. Pull up from the top to refresh.
              </Text>
            </Box>
          ))}
        </Stack>
      </RefreshableScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: { gap: spacing.md },
  infoCard: { padding: spacing.md },
  infoText: { marginTop: spacing.xs },
  statCard: { padding: spacing.xl, alignItems: 'center' },
  card: { padding: spacing.md, borderWidth: borders.thin },
});
