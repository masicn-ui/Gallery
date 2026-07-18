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
} from '../../../masicn';
import { Avatar } from '../../../shared/components/Avatar';
import { AvatarGroup } from '../../../shared/components/AvatarGroup';
import { Button } from '../../../shared/components/Button';
import { Card } from '../../../shared/components/Card';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const REMOTE_AVATAR = { uri: 'https://i.pravatar.cc/150?img=3' };
const REMOTE_AVATAR_2 = { uri: 'https://i.pravatar.cc/150?img=12' };
const REMOTE_AVATAR_3 = { uri: 'https://i.pravatar.cc/150?img=25' };

const TEAM_AVATARS = [
  { initials: 'AB', color: 'primary' as const },
  { initials: 'SC', color: 'secondary' as const },
  { initials: 'MJ', color: 'tertiary' as const },
  { initials: 'LR', color: 'accent' as const },
  { initials: 'KT', color: 'primary' as const },
  { initials: 'PW', color: 'secondary' as const },
  { initials: 'DK', color: 'tertiary' as const },
];

const IMAGE_AVATARS = [
  { source: REMOTE_AVATAR, initials: 'A' },
  { source: REMOTE_AVATAR_2, initials: 'B' },
  { source: REMOTE_AVATAR_3, initials: 'C' },
  { initials: 'DK', color: 'accent' as const },
  { initials: 'EW', color: 'primary' as const },
];

export function AvatarGroupScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Avatar Group"
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
          All three size presets — sm is great for compact rows, lg for hero
          stats.
        </Text>
        <Stack gap="md">
          {[
            { size: 'sm' as const, label: 'sm' },
            { size: 'md' as const, label: 'md (default)' },
            { size: 'lg' as const, label: 'lg' },
          ].map(({ size, label }) => (
            <Row key={size} align="center" gap="md">
              <AvatarGroup avatars={TEAM_AVATARS.slice(0, 4)} size={size} />
              <Text variant="captionSmall" color="textTertiary">
                {label}
              </Text>
            </Row>
          ))}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Overflow Count">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          The max prop controls how many avatars show before the +N bubble
          appears.
        </Text>
        <Stack gap="md">
          {[
            { max: 2, label: 'max=2' },
            { max: 4, label: 'max=4' },
            { max: 6, label: 'max=6 (no overflow)' },
          ].map(({ max, label }) => (
            <Row key={max} align="center" gap="md">
              <AvatarGroup
                avatars={TEAM_AVATARS.slice(0, 6)}
                max={max}
                size="md"
              />
              <Text variant="captionSmall" color="textTertiary">
                {label}
              </Text>
            </Row>
          ))}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Images">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Mixed image + initials fallback — image avatars sit alongside colour
          ones seamlessly.
        </Text>
        <Stack gap="md">
          <Row align="center" gap="md">
            <AvatarGroup avatars={IMAGE_AVATARS} max={4} size="md" />
            <Text variant="captionSmall" color="textTertiary">
              4 shown + overflow
            </Text>
          </Row>
          <Row align="center" gap="md">
            <AvatarGroup avatars={IMAGE_AVATARS} size="lg" />
            <Text variant="captionSmall" color="textTertiary">
              all 5 shown
            </Text>
          </Row>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Overlap Variants">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Adjust overlap to control how tightly avatars stack together.
        </Text>
        <Stack gap="md">
          {[
            { overlap: 4, label: 'overlap=4 (loose)' },
            { overlap: 8, label: 'overlap=8 (default)' },
            { overlap: 14, label: 'overlap=14 (tight)' },
          ].map(({ overlap, label }) => (
            <Row key={overlap} align="center" gap="md">
              <AvatarGroup
                avatars={TEAM_AVATARS.slice(0, 5)}
                overlap={overlap}
                size="md"
              />
              <Text variant="captionSmall" color="textTertiary">
                {label}
              </Text>
            </Row>
          ))}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="In Context — Post Reactions">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Common pattern — who liked a post. Group + count text side by side.
        </Text>
        <Surface
          level="sm"
          style={[styles.contextCard, { borderRadius: radius.lg }]}
        >
          <Stack gap="md">
            <Text variant="body" color="textPrimary">
              Just shipped the new design system — 15 components in one week 🎉
            </Text>
            <Row align="center" justify="space-between">
              <Row align="center" gap="sm">
                <AvatarGroup avatars={IMAGE_AVATARS} max={3} size="sm" />
                <Text variant="captionSmall" color="textTertiary">
                  Alex, Sam +12 others liked
                </Text>
              </Row>
              <Text variant="captionSmall" color="textTertiary">
                8 comments
              </Text>
            </Row>
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="In Context — Team Card" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Project team overview card combining AvatarGroup with Avatar and
          Button.
        </Text>
        <Card variant="elevated" padding="md" onPress={() => {}}>
          <Stack gap="md">
            <Row align="center" justify="space-between">
              <Stack gap="none" style={styles.flex1}>
                <Text variant="label" color="textPrimary">
                  Design System
                </Text>
                <Text variant="captionSmall" color="textTertiary">
                  7 members · Active
                </Text>
              </Stack>
              <Button variant="outline" size="sm" onPress={() => {}}>
                View
              </Button>
            </Row>
            <Row align="center" justify="space-between">
              <AvatarGroup avatars={TEAM_AVATARS} max={5} size="sm" />
              <Row align="center" gap="sm">
                <Avatar initials="YO" size="sm" color="secondary" />
                <Text variant="captionSmall" color="primary">
                  You're in this team
                </Text>
              </Row>
            </Row>
            <Row gap="lg" style={styles.stats}>
              {[
                { value: '24', label: 'Components' },
                { value: '12', label: 'Open tasks' },
                { value: '98%', label: 'Coverage' },
              ].map(({ value, label }) => (
                <Stack key={label} gap="none">
                  <Text variant="titleSmall" color="textPrimary">
                    {value}
                  </Text>
                  <Text variant="captionSmall" color="textTertiary">
                    {label}
                  </Text>
                </Stack>
              ))}
            </Row>
          </Stack>
        </Card>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
  contextCard: { padding: spacing.md },
  stats: {
    paddingTop: spacing.sm,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'transparent',
  },
});
