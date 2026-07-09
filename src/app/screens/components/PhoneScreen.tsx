import React, { useState } from 'react';
import { Stack, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { Phone } from '../../../shared/blocks/Phone';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const COUNTRIES = [
  { dialCode: '+91', name: 'India' },
  { dialCode: '+1', name: 'United States' },
  { dialCode: '+44', name: 'United Kingdom' },
  { dialCode: '+61', name: 'Australia' },
  { dialCode: '+81', name: 'Japan' },
  { dialCode: '+49', name: 'Germany' },
  { dialCode: '+33', name: 'France' },
];

export function PhoneScreen() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [dialCode, setDialCode] = useState('+91');
  const [singlePhone, setSinglePhone] = useState('');
  const [limitedPhone, setLimitedPhone] = useState('');

  return (
    <ScreenLayout
      title="Phone"
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
        <Stack gap="md">
          <Phone
            size="sm"
            label="Small"
            value=""
            onValueChange={() => {}}
            countryCodes={['+91']}
          />
          <Phone
            size="md"
            label="Medium (default)"
            value=""
            onValueChange={() => {}}
            countryCodes={['+91']}
          />
          <Phone
            size="lg"
            label="Large"
            value=""
            onValueChange={() => {}}
            countryCodes={['+91']}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Country Picker">
        <Phone
          label="Mobile number"
          value={phone}
          onValueChange={setPhone}
          dialCode={dialCode}
          onDialCodeChange={setDialCode}
          countries={COUNTRIES}
          helperText="Tap the dial code to change country"
        />
        {phone.length > 0 && (
          <Text variant="caption" color="textSecondary">
            Full number: {dialCode}
            {phone}
          </Text>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="Single Country (no picker)">
        <Phone
          label="Phone number"
          value={singlePhone}
          onValueChange={setSinglePhone}
          countryCodes={['+1']}
          placeholder="(555) 000-0000"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Max Digits (8)">
        <Phone
          label="Short number"
          value={limitedPhone}
          onValueChange={setLimitedPhone}
          countries={COUNTRIES}
          maxDigits={8}
          helperText="Limited to 8 digits"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <Phone
          label="Mobile number"
          value="123"
          onValueChange={() => {}}
          countries={COUNTRIES}
          error="Please enter a valid phone number"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Phone
          label="Verified number"
          value="9876543210"
          onValueChange={() => {}}
          dialCode="+91"
          countries={COUNTRIES}
          disabled
          helperText="This number has been verified"
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
