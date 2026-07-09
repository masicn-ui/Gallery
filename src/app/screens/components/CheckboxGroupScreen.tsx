import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { CheckboxGroup } from '../../../shared/components/CheckboxGroup';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const NOTIFICATION_OPTIONS = [
  {
    label: 'New messages',
    value: 'messages',
    description: 'Someone sends you a direct message',
  },
  {
    label: 'Mentions',
    value: 'mentions',
    description: 'You are @mentioned in a conversation',
  },
  {
    label: 'Comments',
    value: 'comments',
    description: 'A comment is added to your post',
  },
  {
    label: 'Weekly digest',
    value: 'digest',
    description: 'Summary of your activity each Monday',
  },
];

const PLATFORM_OPTIONS = [
  { label: 'iOS', value: 'ios' },
  { label: 'Android', value: 'android' },
  { label: 'Web', value: 'web' },
  { label: 'Desktop', value: 'desktop', disabled: true },
];

export function CheckboxGroupScreen() {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState<string[]>([
    'messages',
    'mentions',
  ]);
  const [platforms, setPlatforms] = useState<string[]>(['ios']);

  return (
    <ScreenLayout
      title="Checkbox Group"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Notification Preferences">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Multi-select group with descriptions — select all that apply.
        </Text>
        <CheckboxGroup
          label="Notify me when"
          options={NOTIFICATION_OPTIONS}
          value={notifications}
          onValueChange={setNotifications}
          helperText={`${notifications.length} of ${NOTIFICATION_OPTIONS.length} selected`}
        />
      </ShowcaseSection>

      <ShowcaseSection title="With Disabled Option">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Individual options can be disabled while keeping others interactive.
        </Text>
        <CheckboxGroup
          label="Target platforms"
          options={PLATFORM_OPTIONS}
          value={platforms}
          onValueChange={setPlatforms}
          helperText="Desktop support coming soon"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Error message when a required selection is missing.
        </Text>
        <CheckboxGroup
          label="Preferred contact methods"
          options={[
            { label: 'Email', value: 'email' },
            { label: 'SMS', value: 'sms' },
            { label: 'Push notification', value: 'push' },
          ]}
          value={[]}
          onValueChange={() => {}}
          error="Please select at least one contact method."
        />
      </ShowcaseSection>

      <ShowcaseSection title="Fully Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Entire group disabled — used for read-only permission displays.
        </Text>
        <CheckboxGroup
          label="Permissions (read-only)"
          options={[
            { label: 'View content', value: 'view' },
            { label: 'Edit content', value: 'edit' },
            { label: 'Delete content', value: 'delete' },
          ]}
          value={['view', 'edit']}
          onValueChange={() => {}}
          disabled
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
