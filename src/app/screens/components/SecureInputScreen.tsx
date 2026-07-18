import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { SecureInput } from '../../../shared/components/SecureInput';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SecureInputScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <ScreenLayout
      title="Secure Input"
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
          Eye icon toggles between hidden and visible text.
        </Text>
        <SecureInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          helperText="At least 8 characters, one uppercase, one number"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Matches TextInput sizes for use in mixed forms.
        </Text>
        <Stack gap="md">
          <SecureInput
            size="sm"
            placeholder="Small"
            value=""
            onChangeText={() => {}}
          />
          <SecureInput
            size="md"
            placeholder="Medium (default)"
            value=""
            onChangeText={() => {}}
          />
          <SecureInput
            size="lg"
            placeholder="Large"
            value=""
            onChangeText={() => {}}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Confirm Password">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Side-by-side usage for account creation and password change flows.
        </Text>
        <Stack gap="md">
          <SecureInput
            label="New password"
            value={password}
            onChangeText={setPassword}
            placeholder="Choose a strong password"
          />
          <SecureInput
            label="Confirm password"
            value={confirm}
            onChangeText={setConfirm}
            placeholder="Re-enter your password"
            error={
              confirm.length > 0 && confirm !== password
                ? "Passwords don't match"
                : undefined
            }
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Inline error surfaced after failed validation.
        </Text>
        <SecureInput
          label="Current password"
          value="wrongpassword"
          onChangeText={() => {}}
          error="Incorrect password. Please try again."
        />
      </ShowcaseSection>

      <ShowcaseSection title="Without Toggle">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Hide the visibility toggle for stricter security forms.
        </Text>
        <SecureInput
          label="PIN"
          showToggle={false}
          value=""
          onChangeText={() => {}}
          placeholder="Enter 6-digit PIN"
          keyboardType="numeric"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled state for locked or pre-filled credential fields.
        </Text>
        <SecureInput
          label="SSO password (managed)"
          value="••••••••••••"
          onChangeText={() => {}}
          disabled
          helperText="Managed by your organisation — contact IT to change"
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
