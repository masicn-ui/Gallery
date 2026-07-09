import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Text,
  spacing,
  useTheme,
  ThemeToggle,
  iconSizes,
  SearchIcon,
} from '../../../masicn';
import { TextInput } from '../../../shared/components/TextInput';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function TextInputScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [clearable, setClearable] = useState('jane.doe@example.com');

  return (
    <ScreenLayout
      title="Text Input"
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
          Three size presets — sm for compact forms, lg for prominent inputs.
        </Text>
        <Stack gap="md">
          <TextInput
            size="sm"
            placeholder="Small — compact forms"
            value=""
            onChangeText={() => {}}
          />
          <TextInput
            size="md"
            placeholder="Medium — default"
            value=""
            onChangeText={() => {}}
          />
          <TextInput
            size="lg"
            placeholder="Large — prominent"
            value=""
            onChangeText={() => {}}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Label & Helper">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Labels above and helper text below guide the user before they type.
        </Text>
        <Stack gap="md">
          <TextInput
            label="Full name"
            placeholder="Jane Doe"
            value={name}
            onChangeText={setName}
            helperText="As it appears on your government ID"
          />
          <TextInput
            label="Email address"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            helperText="We'll send a confirmation link here"
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Inline error messages surface validation issues immediately.
        </Text>
        <Stack gap="md">
          <TextInput
            label="Username"
            value="@taken_name"
            onChangeText={() => {}}
            error="This username is already taken"
          />
          <TextInput
            label="Email"
            value="not-an-email"
            onChangeText={() => {}}
            error="Please enter a valid email address"
            keyboardType="email-address"
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Adornments">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Leading and trailing adornments add context — icons, currency, units.
        </Text>
        <Stack gap="md">
          <TextInput
            placeholder="Search contacts…"
            value=""
            onChangeText={() => {}}
            startAdornment={
              <SearchIcon
                size={iconSizes.action}
                color={theme.colors.textSecondary}
              />
            }
          />
          <TextInput
            label="Amount"
            placeholder="0.00"
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
            endAdornment={
              <Text variant="captionSmall" color="textSecondary">
                USD
              </Text>
            }
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Clear Button">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          An × button appears when the field has content — lets users clear in
          one tap.
        </Text>
        <TextInput
          label="Email"
          placeholder="Type to see clear button…"
          value={clearable}
          onChangeText={setClearable}
          clearButton
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled inputs are visually muted and reject all interaction.
        </Text>
        <Stack gap="md">
          <TextInput
            label="Read only"
            placeholder="Not editable"
            value=""
            onChangeText={() => {}}
            editable={false}
          />
          <TextInput
            label="Account ID"
            value="USR-00142857"
            onChangeText={() => {}}
            editable={false}
            helperText="Contact support to change your account ID"
          />
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
