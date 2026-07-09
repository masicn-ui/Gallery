import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  ThemeToggle,
  iconSizes,
  layout,
  spacing,
  radius,
  useTheme,
} from '../../../masicn';
import { Shimmer, ShimmerGroup } from '../../../shared/components/Shimmer';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ShimmerScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const sk = { backgroundColor: theme.colors.skeleton };

  return (
    <ScreenLayout
      title="Shimmer"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Standalone">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          A single Shimmer runs its own animation loop independently.
        </Text>
        <Stack gap="sm">
          <Shimmer borderRadius={spacing.xs} style={[styles.textFull, sk]} />
          <Shimmer borderRadius={spacing.xs} style={[styles.textMed, sk]} />
          <Shimmer borderRadius={spacing.xs} style={[styles.textShort, sk]} />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Synchronized Group">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Wrap in ShimmerGroup so every placeholder sweeps in perfect unison.
        </Text>
        <ShimmerGroup>
          <Stack gap="sm">
            <Shimmer borderRadius={spacing.xs} style={[styles.textFull, sk]} />
            <Shimmer borderRadius={spacing.xs} style={[styles.textMed, sk]} />
            <Shimmer borderRadius={spacing.xs} style={[styles.textShort, sk]} />
          </Stack>
        </ShimmerGroup>
      </ShowcaseSection>

      <ShowcaseSection title="List Row">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Avatar + two text lines — drop this in place of a real list item while
          data is fetching.
        </Text>
        <Surface
          level="sm"
          style={[styles.listCard, { borderRadius: radius.lg }]}
        >
          <ShimmerGroup>
            <Stack gap="md">
              {[0, 1, 2].map(i => (
                <Row key={i} align="center" gap="md">
                  <Shimmer
                    borderRadius={radius.full}
                    style={[styles.avatar, sk]}
                  />
                  <Stack gap="xs" style={styles.flex1}>
                    <Shimmer
                      borderRadius={spacing.xs}
                      style={[styles.titleLine, sk]}
                    />
                    <Shimmer
                      borderRadius={spacing.xs}
                      style={[styles.subtitleLine, sk]}
                    />
                  </Stack>
                </Row>
              ))}
            </Stack>
          </ShimmerGroup>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Feed Card" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Full card skeleton — image + header + body in a synchronized group.
        </Text>
        <Surface
          level="sm"
          style={[
            styles.feedCard,
            {
              borderRadius: radius.lg,
              borderColor: theme.colors.borderSecondary,
            },
          ]}
        >
          <ShimmerGroup>
            <Shimmer borderRadius={0} style={[styles.cardImage, sk]} />
            <Stack gap="md" style={styles.cardBody}>
              <Row align="center" gap="md">
                <Shimmer
                  borderRadius={radius.full}
                  style={[styles.avatar, sk]}
                />
                <Stack gap="xs" style={styles.flex1}>
                  <Shimmer
                    borderRadius={spacing.xs}
                    style={[styles.titleLine, sk]}
                  />
                  <Shimmer
                    borderRadius={spacing.xs}
                    style={[styles.subtitleLine, sk]}
                  />
                </Stack>
              </Row>
              <Stack gap="sm">
                <Shimmer
                  borderRadius={spacing.xs}
                  style={[styles.textFull, sk]}
                />
                <Shimmer
                  borderRadius={spacing.xs}
                  style={[styles.textMed, sk]}
                />
                <Shimmer
                  borderRadius={spacing.xs}
                  style={[styles.textShort, sk]}
                />
              </Stack>
              <Row gap="sm">
                <Shimmer
                  borderRadius={radius.full}
                  style={[styles.actionBtn, sk]}
                />
                <Shimmer
                  borderRadius={radius.full}
                  style={[styles.actionBtn, sk]}
                />
              </Row>
            </Stack>
          </ShimmerGroup>
        </Surface>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
  // Text placeholders
  textFull: { height: spacing.md, width: '100%' },
  textMed: { height: spacing.md, width: '70%' },
  textShort: { height: spacing.md, width: '45%' },
  // Row placeholders
  avatar: { width: layout.minTouchTarget, height: layout.minTouchTarget },
  titleLine: { height: spacing.md, width: '60%' },
  subtitleLine: { height: spacing.sm, width: '40%' },
  // Card
  listCard: { padding: spacing.md, overflow: 'hidden' },
  feedCard: { borderWidth: StyleSheet.hairlineWidth, overflow: 'hidden' },
  cardImage: { height: 160, width: '100%' },
  cardBody: { padding: spacing.md },
  actionBtn: { height: spacing.xxl, width: 80 },
});
