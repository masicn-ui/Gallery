import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { Textarea } from '../../../shared/components/Textarea';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function TextareaScreen() {
  const navigation = useNavigation();
  const [bio, setBio] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <ScreenLayout
      title="Textarea"
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
          Three size presets control font and padding — the area auto-grows with
          content.
        </Text>
        <Stack gap="md">
          <Textarea
            placeholder="Small — compact sidebars"
            size="sm"
            value=""
            onChangeText={() => {}}
          />
          <Textarea
            placeholder="Medium — default forms"
            size="md"
            value=""
            onChangeText={() => {}}
          />
          <Textarea
            placeholder="Large — prominent editor"
            size="lg"
            value=""
            onChangeText={() => {}}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Label & Helper">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Labels and helper text guide the user on what to enter and why.
        </Text>
        <Textarea
          label="Bio"
          helperText="Appears on your public profile — max 160 characters."
          placeholder="Tell people a bit about yourself…"
          value={bio}
          onChangeText={setBio}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Min Rows">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Set a minimum row count to establish visual height for the field.
        </Text>
        <Stack gap="md">
          <Textarea
            label="Short note"
            minRows={2}
            placeholder="Two-line minimum…"
            value=""
            onChangeText={() => {}}
          />
          <Textarea
            label="Meeting agenda"
            minRows={5}
            placeholder="Bullet points for today's meeting…"
            value={notes}
            onChangeText={setNotes}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Error messages appear below the field when validation fails.
        </Text>
        <Textarea
          label="Project description"
          error="Description is required — please tell us what you're building."
          placeholder="Describe your project…"
          value=""
          onChangeText={() => {}}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled textarea is read-only and visually muted.
        </Text>
        <Textarea
          label="Terms & conditions"
          value="By using this service you agree to our terms. This content is provided as-is and cannot be modified."
          onChangeText={() => {}}
          disabled
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
