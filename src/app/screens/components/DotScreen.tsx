import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Row,
  Stack,
  Text,
  spacing,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Dot } from '../../../shared/components/Dot';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { VariantRow } from '../../shared/VariantRow';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function DotScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Dot"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Statuses">
        <VariantRow>
          <Stack gap="xs" style={styles.item}>
            <Dot status="online" />
            <Text variant="caption" color="textSecondary">
              Online
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <Dot status="away" />
            <Text variant="caption" color="textSecondary">
              Away
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <Dot status="busy" />
            <Text variant="caption" color="textSecondary">
              Busy
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <Dot status="offline" />
            <Text variant="caption" color="textSecondary">
              Offline
            </Text>
          </Stack>
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <VariantRow>
          <Stack gap="xs" style={styles.item}>
            <Dot status="online" size="sm" />
            <Text variant="caption" color="textSecondary">
              Small
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <Dot status="online" size="md" />
            <Text variant="caption" color="textSecondary">
              Medium
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <Dot status="online" size="lg" />
            <Text variant="caption" color="textSecondary">
              Large
            </Text>
          </Stack>
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="With Pulse" last>
        <Row gap="xl" style={styles.row}>
          <Stack gap="xs" style={styles.item}>
            <Dot status="online" pulse />
            <Text variant="caption" color="textSecondary">
              Online + Pulse
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <Dot status="online" size="lg" pulse />
            <Text variant="caption" color="textSecondary">
              Large + Pulse
            </Text>
          </Stack>
        </Row>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  item: { alignItems: 'center' },
  row: { paddingHorizontal: spacing.xl },
});
