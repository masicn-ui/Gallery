import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Surface,
  Text,
  spacing,
  radius,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { DetailRow } from '../../../shared/components/DetailRow';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function DetailRowScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Detail Row"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Profile">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Static label–value pairs — common for user profile or account info.
        </Text>
        <Surface level="sm" style={styles.card}>
          <DetailRow label="Name" value="Alex Morgan" separator />
          <DetailRow label="Email" value="alex@example.com" separator />
          <DetailRow label="Phone" value="+1 555 012 3456" separator />
          <DetailRow label="Plan" value="Pro" />
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Tap to Copy">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pressable rows show a brief "Copied!" confirmation after tap.
        </Text>
        <Surface level="sm" style={styles.card}>
          <DetailRow
            label="API Key"
            value="sk_live_Km9tZx…4aQ2"
            onPress={() => {}}
            feedbackLabel="Copied!"
            separator
          />
          <DetailRow
            label="Webhook Secret"
            value="whsec_7nRd…pLv8"
            onPress={() => {}}
            feedbackLabel="Copied!"
          />
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Order Summary" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Left-aligned values work well when both columns need equal visual
          weight.
        </Text>
        <Surface level="sm" style={styles.card}>
          <DetailRow label="Order" value="#4821" valueAlign="left" separator />
          <DetailRow
            label="Status"
            value="Shipped"
            valueAlign="left"
            separator
          />
          <DetailRow
            label="Placed"
            value="12 Apr 2026"
            valueAlign="left"
            separator
          />
          <DetailRow label="Total" value="$93.00" valueAlign="left" />
        </Surface>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  card: { borderRadius: radius.lg, overflow: 'hidden' },
});
