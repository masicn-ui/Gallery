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
import { Avatar } from '../../../shared/components/Avatar';
import { Badge } from '../../../shared/components/Badge';
import { Button } from '../../../shared/components/Button';
import { Dot } from '../../../shared/components/Dot';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { VariantRow } from '../../shared/VariantRow';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const REMOTE_AVATAR = { uri: 'https://i.pravatar.cc/150?img=3' };

export function AvatarScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <ScreenLayout
      title="Avatar"
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
          Three size presets — sm for dense lists, md for standard use, lg for
          profile headers.
        </Text>
        <VariantRow>
          <Avatar initials="SM" size="sm" />
          <Avatar initials="MD" size="md" />
          <Avatar initials="LG" size="lg" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Color Variants">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Four semantic color tokens for initials fallback backgrounds.
        </Text>
        <VariantRow>
          <Avatar initials="PR" color="primary" size="lg" />
          <Avatar initials="SC" color="secondary" size="lg" />
          <Avatar initials="TR" color="tertiary" size="lg" />
          <Avatar initials="AC" color="accent" size="lg" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="With Image">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Image loads over initials fallback — falls back gracefully on error.
        </Text>
        <VariantRow>
          <Avatar source={REMOTE_AVATAR} initials="JD" size="sm" />
          <Avatar source={REMOTE_AVATAR} initials="JD" size="md" />
          <Avatar source={REMOTE_AVATAR} initials="JD" size="lg" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Status Badge">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pass a StatusDot as the badge prop to show presence at a glance.
        </Text>
        <VariantRow>
          <Avatar initials="ON" size="lg" badge={<Dot status="online" />} />
          <Avatar
            initials="BZ"
            color="secondary"
            size="lg"
            badge={<Dot status="busy" />}
          />
          <Avatar
            initials="AW"
            color="tertiary"
            size="lg"
            badge={<Dot status="away" />}
          />
          <Avatar
            initials="OF"
            color="accent"
            size="lg"
            badge={<Dot status="offline" />}
          />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Count Badge">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Use a circular Badge to indicate unread counts on top of an avatar.
        </Text>
        <VariantRow>
          <Avatar
            initials="AB"
            size="lg"
            badge={<Badge variant="error" label="3" circular size="sm" />}
          />
          <Avatar
            initials="CD"
            color="secondary"
            size="lg"
            badge={<Badge variant="success" label="12" circular size="sm" />}
          />
          <Avatar
            source={REMOTE_AVATAR}
            initials="JD"
            size="lg"
            badge={<Badge variant="warning" label="!" circular size="sm" />}
          />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="In Context — Contact Row" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Avatar combined with text, status, and actions in a realistic list
          card.
        </Text>
        <Surface level="sm" style={[styles.list, { borderRadius: radius.lg }]}>
          {[
            {
              initials: 'AM',
              name: 'Alex Morgan',
              role: 'Product Designer',
              color: 'primary' as const,
              status: 'online' as const,
            },
            {
              initials: 'SC',
              name: 'Sam Chen',
              role: 'iOS Engineer',
              color: 'secondary' as const,
              status: 'busy' as const,
            },
            {
              initials: 'LR',
              name: 'Luna Reyes',
              role: 'Team Lead',
              color: 'tertiary' as const,
              status: 'away' as const,
            },
          ].map(({ initials, name, role, color, status }, i, arr) => (
            <Row
              key={name}
              align="center"
              gap="md"
              style={[
                styles.contactRow,
                i < arr.length - 1 && {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: theme.colors.borderSecondary,
                },
              ]}
            >
              <Avatar
                initials={initials}
                color={color}
                size="md"
                badge={<Dot status={status} />}
              />
              <Stack gap="none" style={styles.flex1}>
                <Text variant="label" color="textPrimary">
                  {name}
                </Text>
                <Text variant="captionSmall" color="textTertiary">
                  {role}
                </Text>
              </Stack>
              <Button variant="outline" size="sm" onPress={() => {}}>
                Message
              </Button>
            </Row>
          ))}
        </Surface>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
  list: { overflow: 'hidden' },
  contactRow: { padding: spacing.md },
});
