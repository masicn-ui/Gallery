import React, { useState } from 'react';
import { Text, ThemeToggle, iconSizes } from '../../../masicn';
import { CodeInput } from '../../../shared/blocks/CodeInput';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function CodeInputScreen() {
  const navigation = useNavigation();
  const [otp6, setOtp6] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otpSm, setOtpSm] = useState('');
  const [otpLg, setOtpLg] = useState('');
  const [otpUnderline, setOtpUnderline] = useState('');
  const [otpUnderline4, setOtpUnderline4] = useState('');
  const [otpSuccess, setOtpSuccess] = useState('123456');
  const [otpError, setOtpError] = useState('12');
  const [completed, setCompleted] = useState<string | null>(null);

  return (
    <ScreenLayout
      title="Code Input"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="6-Digit Box (default)">
        <CodeInput
          length={6}
          value={otp6}
          onChangeText={setOtp6}
          onComplete={code => setCompleted(code)}
        />
        {completed && (
          <Text variant="caption" color="success">
            Completed: {completed}
          </Text>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="4-Digit Box">
        <CodeInput length={4} value={otp4} onChangeText={setOtp4} />
      </ShowcaseSection>

      <ShowcaseSection title="Size — Small">
        <CodeInput length={6} value={otpSm} onChangeText={setOtpSm} size="sm" />
      </ShowcaseSection>

      <ShowcaseSection title="Size — Large">
        <CodeInput length={6} value={otpLg} onChangeText={setOtpLg} size="lg" />
      </ShowcaseSection>

      <ShowcaseSection title="Underline Variant (6-digit)">
        <CodeInput
          length={6}
          value={otpUnderline}
          onChangeText={setOtpUnderline}
          variant="underline"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Underline Variant (4-digit)">
        <CodeInput
          length={4}
          value={otpUnderline4}
          onChangeText={setOtpUnderline4}
          variant="underline"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Success State">
        <CodeInput
          length={6}
          value={otpSuccess}
          onChangeText={setOtpSuccess}
          success
        />
        <Text variant="caption" color="success">
          Code verified successfully
        </Text>
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <CodeInput
          length={4}
          value={otpError}
          onChangeText={setOtpError}
          error="Incorrect PIN. Please try again."
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <CodeInput length={6} value="1234" onChangeText={() => {}} disabled />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
