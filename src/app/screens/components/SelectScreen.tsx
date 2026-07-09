import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { Select } from '../../../shared/components/Select';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const TIMEZONES = [
  { label: 'Pacific Time (PT) UTC−8', value: 'pt' },
  { label: 'Mountain Time (MT) UTC−7', value: 'mt' },
  { label: 'Central Time (CT) UTC−6', value: 'ct' },
  { label: 'Eastern Time (ET) UTC−5', value: 'et' },
  { label: 'London (GMT) UTC+0', value: 'gmt' },
  { label: 'Paris (CET) UTC+1', value: 'cet' },
  { label: 'Dubai (GST) UTC+4', value: 'gst' },
  { label: 'India (IST) UTC+5:30', value: 'ist' },
  { label: 'Tokyo (JST) UTC+9', value: 'jst' },
  { label: 'Sydney (AEDT) UTC+11', value: 'aedt' },
];

const ROLES = [
  {
    label: 'Admin',
    value: 'admin',
    description: 'Full access — manage members and billing',
  },
  {
    label: 'Editor',
    value: 'editor',
    description: 'Create and edit all content',
  },
  {
    label: 'Viewer',
    value: 'viewer',
    description: 'Read-only access to content',
  },
  {
    label: 'Billing',
    value: 'billing',
    disabled: true,
    description: 'Coming soon',
  },
];

export function SelectScreen() {
  const navigation = useNavigation();
  const [timezone, setTimezone] = useState('');
  const [role, setRole] = useState('editor');
  const [searched, setSearched] = useState('');

  return (
    <ScreenLayout
      title="Select"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Default">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Tapping opens a bottom sheet with a scrollable option list.
        </Text>
        <Select
          label="Timezone"
          placeholder="Select your timezone"
          options={TIMEZONES}
          value={timezone}
          onValueChange={setTimezone}
        />
      </ShowcaseSection>

      <ShowcaseSection title="With Descriptions & Disabled Option">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Descriptions clarify each option; disabled options are visible but
          unselectable.
        </Text>
        <Select
          label="Team role"
          options={ROLES}
          value={role}
          onValueChange={setRole}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Searchable">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          A search field filters the list — great for long option sets like
          timezones or countries.
        </Text>
        <Select
          label="Timezone (searchable)"
          placeholder="Search and select…"
          options={TIMEZONES}
          value={searched}
          onValueChange={setSearched}
          searchable
        />
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Error border and message appear when the field is required but empty.
        </Text>
        <Select
          label="Country (required)"
          placeholder="Please select a country"
          options={TIMEZONES}
          value=""
          onValueChange={() => {}}
          error
          errorMessage="Please select a country to continue."
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled select shows the current value but cannot be changed.
        </Text>
        <Select
          label="Account region (locked)"
          options={TIMEZONES}
          value="et"
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
