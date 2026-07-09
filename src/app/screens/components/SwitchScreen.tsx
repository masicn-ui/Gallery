import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Divider,
  Text,
  spacing,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Switch } from '../../../shared/components/Switch';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SwitchScreen() {
  const navigation = useNavigation();
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [compact, setCompact] = useState(false);

  return (
    <ScreenLayout
      title="Switch"
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
          Tap to toggle — off and on states.
        </Text>
        <Stack gap="md">
          <Switch value={false} onValueChange={() => {}} label="Off" />
          <Switch value={true} onValueChange={() => {}} label="On" />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Notification Settings">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Switches with descriptions — common for app preferences and
          notification toggles.
        </Text>
        <Stack gap="md">
          <Switch
            value={push}
            onValueChange={setPush}
            label="Push notifications"
            description="Receive alerts for new messages and activity"
          />
          <Divider />
          <Switch
            value={email}
            onValueChange={setEmail}
            label="Email digest"
            description="Get a weekly summary sent to your inbox"
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Appearance">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          In-context settings panel — real-world placement for display
          preferences.
        </Text>
        <Stack gap="md">
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            label="Dark mode"
            description="Use dark theme across the app"
          />
          <Divider />
          <Switch
            value={compact}
            onValueChange={setCompact}
            label="Compact layout"
            description="Show more content with reduced spacing"
          />
          <Divider />
          <Switch
            value={autoSave}
            onValueChange={setAutoSave}
            label="Auto-save drafts"
            description="Drafts are saved every 30 seconds"
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Label Position">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Label can appear on the left or right of the toggle.
        </Text>
        <Stack gap="md">
          <Switch
            value={push}
            onValueChange={setPush}
            label="Label on right (default)"
            labelPosition="right"
          />
          <Switch
            value={push}
            onValueChange={setPush}
            label="Label on left"
            labelPosition="left"
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled switches cannot be toggled and are visually muted.
        </Text>
        <Stack gap="md">
          <Switch
            value={false}
            onValueChange={() => {}}
            label="Location services (requires permission)"
            disabled
          />
          <Switch
            value={true}
            onValueChange={() => {}}
            label="Two-factor auth (managed by org)"
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
