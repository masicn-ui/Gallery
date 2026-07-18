import React from 'react';
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
import { Spinner } from '../../../shared/components/Spinner';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SpinnerScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <ScreenLayout
      title="Spinner"
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
          Small and large sizes for inline vs full-screen contexts.
        </Text>
        <Row gap="xl" style={styles.row}>
          <Stack gap="xs" style={styles.item}>
            <Spinner size="small" />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              small
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <Spinner size="large" />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              large
            </Text>
          </Stack>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Loading Patterns">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Common placement patterns — centered, inline, and with a label.
        </Text>
        <Stack gap="md">
          {/* Center / full-screen placeholder */}
          <Surface
            level="sm"
            style={[styles.fullscreenCard, { borderRadius: radius.lg }]}
          >
            <Spinner size="large" />
            <Text
              variant="bodySmall"
              color="textTertiary"
              style={styles.loadingLabel}
            >
              Loading content…
            </Text>
          </Surface>

          {/* Inline row */}
          <Surface
            level="sm"
            style={[styles.inlineCard, { borderRadius: radius.lg }]}
          >
            <Row align="center" gap="sm">
              <Spinner size="small" color={theme.colors.primary} />
              <Text variant="bodySmall" color="textSecondary">
                Syncing your data…
              </Text>
            </Row>
          </Surface>

          {/* With label built-in */}
          <Surface
            level="sm"
            style={[styles.inlineCard, { borderRadius: radius.lg }]}
          >
            <Spinner
              size="large"
              label="Uploading photo"
              color={theme.colors.accent}
            />
          </Surface>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Color Variants" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pass any theme color token via the color prop.
        </Text>
        <Row gap="lg" style={styles.row}>
          {[
            { color: theme.colors.primary, label: 'primary' },
            { color: theme.colors.success, label: 'success' },
            { color: theme.colors.error, label: 'error' },
            { color: theme.colors.warning, label: 'warning' },
            { color: theme.colors.accent, label: 'accent' },
          ].map(({ color, label }) => (
            <Stack key={label} gap="xs" style={styles.item}>
              <Spinner size="large" color={color} />
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
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  centered: { textAlign: 'center' },
  row: { flexWrap: 'wrap' },
  item: { alignItems: 'center' },
  fullscreenCard: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  inlineCard: {
    padding: spacing.md,
    alignItems: 'center',
  },
  loadingLabel: { marginTop: spacing.xs },
});
