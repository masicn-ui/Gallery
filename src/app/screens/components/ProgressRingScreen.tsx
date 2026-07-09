import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
  useTheme,
} from '../../../masicn';
import { ProgressRing } from '../../../shared/components/ProgressRing';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ProgressRingScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [value, setValue] = useState(65);

  return (
    <ScreenLayout
      title="Progress Ring"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Determinate">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Interactive progress — tap ±10 to change value, clamped 0–100.
        </Text>
        <Surface
          level="sm"
          style={[styles.interactiveCard, { borderRadius: radius.lg }]}
        >
          <ProgressRing value={value} />
          <Row gap="sm" style={styles.controls}>
            <Button
              variant="outline"
              size="sm"
              onPress={() => setValue(v => Math.max(0, v - 10))}
            >
              −10
            </Button>
            <Button
              variant="primary"
              size="sm"
              onPress={() => setValue(v => Math.min(100, v + 10))}
            >
              +10
            </Button>
            <Button variant="ghost" size="sm" onPress={() => setValue(0)}>
              Reset
            </Button>
          </Row>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Three sizes — 56px for compact cards, 80px default, 120px for hero
          stats.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          {[
            { size: 56, label: 'compact' },
            { size: 80, label: 'default' },
            { size: 120, label: 'hero' },
          ].map(({ size, label }) => (
            <Stack key={label} gap="xs" style={styles.item}>
              <ProgressRing value={75} size={size} />
              <Text
                variant="captionSmall"
                color="textTertiary"
                style={styles.centered}
              >
                {label}
              </Text>
            </Stack>
          ))}
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="With Label">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Contextual labels rendered at the center of the circle.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing value={68} label="Upload" />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              File upload
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing value={84} label="Storage" />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Disk usage
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing value={42} label="Profile" />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Completion
            </Text>
          </Stack>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Status Colors">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Semantic color tokens signal health at a glance.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing value={92} color={theme.colors.success} label="92%" />
            <Text
              variant="captionSmall"
              color="success"
              style={styles.centered}
            >
              Healthy
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing value={67} color={theme.colors.warning} label="67%" />
            <Text
              variant="captionSmall"
              color="warning"
              style={styles.centered}
            >
              At limit
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing value={18} color={theme.colors.error} label="18%" />
            <Text variant="captionSmall" color="error" style={styles.centered}>
              Critical
            </Text>
          </Stack>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Indeterminate" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Use when total duration is unknown — e.g. network requests.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing indeterminate />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Fetching data…
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <ProgressRing indeterminate label="Sync" />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              With label
            </Text>
          </Stack>
        </Row>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  centered: { textAlign: 'center' },
  centeredRow: { justifyContent: 'center' },
  item: { alignItems: 'center' },
  interactiveCard: {
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.md,
  },
  controls: { justifyContent: 'center' },
});
