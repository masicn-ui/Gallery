import React, { useState } from 'react';
import { Stack, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { Form } from '../../../shared/blocks/Form';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { TextInput } from '../../../shared/components/TextInput';
import { SecureInput } from '../../../shared/components/SecureInput';
import { Switch } from '../../../shared/components/Switch';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function FormScreen() {
  const navigation = useNavigation();
  const [loginResult, setLoginResult] = useState<string | null>(null);
  const [signupResult, setSignupResult] = useState<string | null>(null);
  const [profileResult, setProfileResult] = useState<string | null>(null);

  return (
    <ScreenLayout
      title="Form"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Login">
        <Text variant="caption" color="textSecondary">
          Inline validation on blur. Submit re-validates all fields before
          firing onSubmit.
        </Text>
        <Form
          initialValues={{ email: '', password: '' }}
          validations={[
            {
              name: 'email',
              validate: v => {
                if (!v) {
                  return 'Email is required';
                }
                if (typeof v === 'string' && !v.includes('@')) {
                  return 'Enter a valid email';
                }
                return undefined;
              },
            },
            {
              name: 'password',
              validate: v => {
                if (!v) {
                  return 'Password is required';
                }
                if (typeof v === 'string' && v.length < 6) {
                  return 'Minimum 6 characters';
                }
                return undefined;
              },
            },
          ]}
          onSubmit={() => setLoginResult('Signed in!')}
        >
          {({ handleSubmit }) => (
            <Stack gap="md">
              <Form.Field name="email">
                {({ value, error, onChange, onBlur }) => (
                  <TextInput
                    label="Email"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                    placeholder="you@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
              </Form.Field>
              <Form.Field name="password">
                {({ value, error, onChange, onBlur }) => (
                  <SecureInput
                    label="Password"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                    placeholder="Min. 6 characters"
                  />
                )}
              </Form.Field>
              <Button variant="primary" onPress={handleSubmit}>
                Sign In
              </Button>
              {loginResult && (
                <Text variant="caption" color="success">
                  {loginResult}
                </Text>
              )}
            </Stack>
          )}
        </Form>
      </ShowcaseSection>

      <ShowcaseSection title="Sign Up">
        <Text variant="caption" color="textSecondary">
          Cross-field validation — confirm password must match password.
        </Text>
        <Form
          initialValues={{ name: '', email: '', password: '', confirm: '' }}
          validations={[
            {
              name: 'name',
              validate: v => (!v ? 'Full name is required' : undefined),
            },
            {
              name: 'email',
              validate: v => {
                if (!v) {
                  return 'Email is required';
                }
                if (typeof v === 'string' && !v.includes('@')) {
                  return 'Enter a valid email';
                }
                return undefined;
              },
            },
            {
              name: 'password',
              validate: v => {
                if (!v) {
                  return 'Password is required';
                }
                if (typeof v === 'string' && v.length < 8) {
                  return 'Minimum 8 characters';
                }
                return undefined;
              },
            },
            {
              name: 'confirm',
              validate: (v: unknown, allValues: Record<string, unknown>) => {
                if (!v) {
                  return 'Please confirm your password';
                }
                if (v !== allValues.password) {
                  return 'Passwords do not match';
                }
                return undefined;
              },
            },
          ]}
          onSubmit={() => setSignupResult('Account created!')}
        >
          {({ handleSubmit }) => (
            <Stack gap="md">
              <Form.Field name="name">
                {({ value, error, onChange, onBlur }) => (
                  <TextInput
                    label="Full name"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                    placeholder="Jane Doe"
                  />
                )}
              </Form.Field>
              <Form.Field name="email">
                {({ value, error, onChange, onBlur }) => (
                  <TextInput
                    label="Email"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                    placeholder="you@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
              </Form.Field>
              <Form.Field name="password">
                {({ value, error, onChange, onBlur }) => (
                  <SecureInput
                    label="Password"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                    placeholder="Min. 8 characters"
                  />
                )}
              </Form.Field>
              <Form.Field name="confirm">
                {({ value, error, onChange, onBlur }) => (
                  <SecureInput
                    label="Confirm password"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                    placeholder="Re-enter password"
                  />
                )}
              </Form.Field>
              <Button variant="primary" onPress={handleSubmit}>
                Create Account
              </Button>
              {signupResult && (
                <Text variant="caption" color="success">
                  {signupResult}
                </Text>
              )}
            </Stack>
          )}
        </Form>
      </ShowcaseSection>

      <ShowcaseSection title="Profile Settings" last>
        <Text variant="caption" color="textSecondary">
          Mixed field types — text, multiline, and a boolean toggle — in a
          single form.
        </Text>
        <Form
          initialValues={{
            name: 'Jane Doe',
            bio: '',
            website: '',
            notifications: true,
            marketing: false,
          }}
          validations={[
            {
              name: 'name',
              validate: v => (!v ? 'Name is required' : undefined),
            },
            {
              name: 'website',
              validate: v => {
                if (!v) {
                  return undefined;
                }
                if (typeof v === 'string' && !v.startsWith('http')) {
                  return 'Must start with http';
                }
                return undefined;
              },
            },
          ]}
          onSubmit={() => setProfileResult('Profile saved!')}
        >
          {({ handleSubmit }) => (
            <Stack gap="md">
              <Form.Field name="name">
                {({ value, error, onChange, onBlur }) => (
                  <TextInput
                    label="Display name"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                  />
                )}
              </Form.Field>
              <Form.Field name="bio">
                {({ value, onChange }) => (
                  <TextInput
                    label="Bio"
                    value={value as string}
                    onChangeText={onChange}
                    placeholder="Tell us a bit about yourself"
                    multiline
                  />
                )}
              </Form.Field>
              <Form.Field name="website">
                {({ value, error, onChange, onBlur }) => (
                  <TextInput
                    label="Website"
                    value={value as string}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error}
                    placeholder="https://yoursite.com"
                    keyboardType="url"
                    autoCapitalize="none"
                  />
                )}
              </Form.Field>
              <Form.Field<boolean> name="notifications">
                {({ value, onChange }) => (
                  <Switch
                    label="Email notifications"
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              </Form.Field>
              <Form.Field<boolean> name="marketing">
                {({ value, onChange }) => (
                  <Switch
                    label="Marketing emails"
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              </Form.Field>
              <Button variant="primary" onPress={handleSubmit}>
                Save Profile
              </Button>
              {profileResult && (
                <Text variant="caption" color="success">
                  {profileResult}
                </Text>
              )}
            </Stack>
          )}
        </Form>
      </ShowcaseSection>
    </ScreenLayout>
  );
}
