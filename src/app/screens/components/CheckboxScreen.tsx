import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { Checkbox } from '../../../shared/components/Checkbox';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function CheckboxScreen() {
  const navigation = useNavigation();
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <ScreenLayout
      title="Checkbox"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="States">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Tap to toggle — unchecked, checked, and indeterminate.
        </Text>
        <Stack gap="md">
          <Checkbox
            checked={false}
            onValueChange={() => {}}
            label="Unchecked"
          />
          <Checkbox checked={true} onValueChange={() => {}} label="Checked" />
          <Checkbox
            checked={false}
            onValueChange={() => {}}
            label="Select all"
            indeterminate
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Description">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          A description line adds context below the label — useful for
          preferences.
        </Text>
        <Stack gap="md">
          <Checkbox
            checked={marketing}
            onValueChange={setMarketing}
            label="Marketing emails"
            description="Occasional product updates, tips, and offers."
          />
          <Checkbox
            checked={updates}
            onValueChange={setUpdates}
            label="In-app notifications"
            description="Alerts for new comments, mentions, and activity."
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Agreement">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Common pattern — gate an action behind an explicit agreement.
        </Text>
        <Checkbox
          checked={terms}
          onValueChange={setTerms}
          label="I agree to the Terms of Service"
          description="By continuing you accept our privacy policy and terms."
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled checkboxes are visually muted and reject interaction.
        </Text>
        <Stack gap="md">
          <Checkbox
            checked={false}
            onValueChange={() => {}}
            label="Required (not available)"
            disabled
          />
          <Checkbox
            checked={true}
            onValueChange={() => {}}
            label="Included in your plan"
            disabled
          />
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
