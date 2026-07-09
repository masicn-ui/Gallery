import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Row,
  Text,
  Surface,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
  useTheme,
  SettingsIcon,
  InfoIcon,
  PaletteIcon,
  StarIcon,
  CheckIcon,
  WarningIcon,
  ChevronRightIcon,
} from '../../../masicn';
import { Avatar } from '../../../shared/components/Avatar';
import { Dot } from '../../../shared/components/Dot';
import { ListItem } from '../../../shared/components/ListItem';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ListItemScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <ScreenLayout
      title="List Item"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Settings List">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Icon leading, default chevron trailing, pressable rows.
        </Text>
        <Surface level="sm" style={[styles.list, { borderRadius: radius.lg }]}>
          <ListItem
            title="Account"
            subtitle="Profile and security"
            leading={
              <SettingsIcon
                size={iconSizes.default}
                color={theme.colors.primary}
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
            separator
          />
          <ListItem
            title="Appearance"
            subtitle="Light · Dark · System"
            leading={
              <PaletteIcon
                size={iconSizes.default}
                color={theme.colors.accent}
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
            separator
          />
          <ListItem
            title="Rate the app"
            leading={
              <StarIcon
                size={iconSizes.default}
                color={theme.colors.warning}
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
            separator
          />
          <ListItem
            title="About"
            subtitle="Version 2.4.0"
            leading={
              <InfoIcon
                size={iconSizes.default}
                color={theme.colors.textSecondary}
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
          />
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Contacts">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Avatar leading with initials, custom trailing status.
        </Text>
        <Surface level="sm" style={[styles.list, { borderRadius: radius.lg }]}>
          {[
            {
              initials: 'AM',
              name: 'Alex Morgan',
              handle: '@alex',
              avatarColor: 'primary' as const,
              dotStatus: 'online' as const,
            },
            {
              initials: 'SC',
              name: 'Sam Chen',
              handle: '@sam',
              avatarColor: 'secondary' as const,
              dotStatus: 'away' as const,
            },
            {
              initials: 'MT',
              name: 'Mia Torres',
              handle: '@mia',
              avatarColor: 'accent' as const,
              dotStatus: 'offline' as const,
            },
          ].map(
            ({ initials, name, handle, avatarColor, dotStatus }, i, arr) => (
              <ListItem
                key={name}
                title={name}
                subtitle={handle}
                leading={
                  <Avatar
                    initials={initials}
                    color={avatarColor}
                    size="sm"
                    badge={<Dot status={dotStatus} />}
                  />
                }
                onPress={() => {}}
                separator={i < arr.length - 1}
              />
            ),
          )}
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Notification List">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Status icons, multi-line content, timestamp trailing.
        </Text>
        <Surface level="sm" style={[styles.list, { borderRadius: radius.lg }]}>
          {[
            {
              Icon: WarningIcon,
              color: theme.colors.error,
              title: 'Payment failed',
              sub: 'Retry your card',
              time: '2m ago',
            },
            {
              Icon: CheckIcon,
              color: theme.colors.success,
              title: 'Transfer complete',
              sub: '$50 sent to Alex',
              time: '1h ago',
            },
            {
              Icon: InfoIcon,
              color: theme.colors.info,
              title: 'New update',
              sub: 'Version 2.4 available',
              time: '3h ago',
            },
          ].map(({ Icon, color, title, sub, time }, i, arr) => (
            <ListItem
              key={title}
              title={title}
              subtitle={sub}
              leading={
                <Icon
                  size={iconSizes.default}
                  color={color}
                  strokeWidth={1.5}
                />
              }
              trailing={
                <Text variant="captionSmall" color="textTertiary">
                  {time}
                </Text>
              }
              onPress={() => {}}
              separator={i < arr.length - 1}
            />
          ))}
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="States" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled, static (no press), and custom trailing.
        </Text>
        <Surface level="sm" style={[styles.list, { borderRadius: radius.lg }]}>
          <ListItem
            title="Disabled item"
            subtitle="Cannot be pressed"
            leading={
              <SettingsIcon
                size={iconSizes.default}
                color={theme.colors.textDisabled}
                strokeWidth={1.5}
              />
            }
            disabled
            onPress={() => {}}
            separator
          />
          <ListItem
            title="Static item"
            subtitle="No chevron, no press handler"
            trailing={null}
            separator
          />
          <ListItem
            title="Notifications"
            trailing={
              <Row align="center" gap="xs">
                <Text variant="captionSmall" color="success">
                  On
                </Text>
                <ChevronRightIcon
                  size={iconSizes.decorative}
                  color={theme.colors.textTertiary}
                  strokeWidth={1.5}
                />
              </Row>
            }
            onPress={() => {}}
          />
        </Surface>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  list: { overflow: 'hidden' },
});
