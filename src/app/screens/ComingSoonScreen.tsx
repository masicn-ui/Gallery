import React from 'react';
import { StyleSheet } from 'react-native';
import { Center, Stack, Text } from '../../masicn';
import { ScreenLayout } from '../shared/ScreenLayout';

export function ComingSoonScreen() {
  return (
    <ScreenLayout title="Coming Soon">
      <Center flex={1}>
        <Stack gap="sm" style={styles.centered}>
          <Text variant="h2">🚧</Text>
          <Text variant="titleMedium" color="textPrimary">
            Coming soon
          </Text>
          <Text variant="body" color="textSecondary">
            This screen is being built.
          </Text>
        </Stack>
      </Center>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: 'center' },
});
