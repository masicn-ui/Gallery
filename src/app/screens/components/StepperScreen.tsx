import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Row, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { Stepper } from '../../../shared/blocks/Stepper';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const STEPS = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Fill in your details' },
  { label: 'Review', description: 'Review your info' },
  { label: 'Done', description: 'All set!' },
];

export function StepperScreen() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <ScreenLayout
      title="Stepper"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      {/* Interactive horizontal stepper */}
      <ShowcaseSection title="Horizontal">
        <Stack gap="lg" style={styles.section}>
          <Stepper steps={STEPS} currentStep={currentStep} />
          <Row gap="sm">
            <Button
              variant="outline"
              size="sm"
              onPress={() => setCurrentStep(s => Math.max(0, s - 1))}
              disabled={currentStep === 0}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="sm"
              onPress={() =>
                setCurrentStep(s => Math.min(STEPS.length - 1, s + 1))
              }
              disabled={currentStep === STEPS.length - 1}
            >
              Next
            </Button>
          </Row>
        </Stack>
      </ShowcaseSection>

      {/* Vertical with descriptions */}
      <ShowcaseSection title="Vertical">
        <Stack gap="md" style={styles.section}>
          <Stepper steps={STEPS} currentStep={2} orientation="vertical" />
        </Stack>
      </ShowcaseSection>

      {/* All complete */}
      <ShowcaseSection title="All Complete">
        <Stack gap="md" style={styles.section}>
          <Stepper steps={STEPS} currentStep={STEPS.length} />
        </Stack>
      </ShowcaseSection>

      {/* Simple 3-step */}
      <ShowcaseSection title="Simple 3 Steps" last>
        <Stack gap="md" style={styles.section}>
          <Stepper
            steps={[
              { label: 'Start' },
              { label: 'Process' },
              { label: 'Complete' },
            ]}
            currentStep={1}
          />
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  section: { paddingHorizontal: spacing.md },
});
