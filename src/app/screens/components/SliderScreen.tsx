import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  spacing,
  radius,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Slider } from '../../../shared/components/Slider';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SliderScreen() {
  const navigation = useNavigation();
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(50);
  const [budget, setBudget] = useState(400);
  const [temp, setTemp] = useState(22);
  const [progress, setProgress] = useState(1);

  return (
    <ScreenLayout
      title="Slider"
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
          Drag the thumb to change the value.
        </Text>
        <Slider value={volume} onValueChange={setVolume} showValue />
      </ShowcaseSection>

      <ShowcaseSection title="With Label">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Label + live value — ideal for audio and display settings.
        </Text>
        <Stack gap="md">
          <Slider
            label="Volume"
            value={volume}
            onValueChange={setVolume}
            showValue
          />
          <Slider
            label="Brightness"
            value={brightness}
            onValueChange={setBrightness}
            showValue
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Custom Range & Step">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Override min, max, and step for domain-specific controls.
        </Text>
        <Stack gap="md">
          <Slider
            label="Budget"
            value={budget}
            onValueChange={setBudget}
            minimumValue={0}
            maximumValue={1000}
            step={50}
            showValue
          />
          <Slider
            label="Temperature"
            value={temp}
            onValueChange={setTemp}
            minimumValue={16}
            maximumValue={30}
            step={1}
            showValue
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="In Context — Media Player">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Slider embedded in a playback card — a common real-world pattern.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Stack gap="md">
            <Stack gap="xs">
              <Text variant="label" color="textPrimary">
                Lost in the Moment
              </Text>
              <Text variant="captionSmall" color="textTertiary">
                Neon Pulse · 3:42
              </Text>
            </Stack>
            <Slider
              value={progress}
              onValueChange={setProgress}
              minimumValue={0}
              maximumValue={222}
              step={1}
            />
            <Row align="center" justify="space-between">
              <Text variant="captionSmall" color="textTertiary">
                {String(Math.floor(progress / 60)).padStart(2, '0')}:
                {String(progress % 60).padStart(2, '0')}
              </Text>
              <Text variant="captionSmall" color="textTertiary">
                3:42
              </Text>
            </Row>
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="In Context — Display Settings">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Two related sliders grouped in a settings card.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Stack gap="lg">
            <Stack gap="xs">
              <Text variant="label" color="textPrimary">
                Display
              </Text>
              <Text variant="captionSmall" color="textTertiary">
                Adjust brightness and text size
              </Text>
            </Stack>
            <Stack gap="md">
              <Slider
                label="Brightness"
                value={brightness}
                onValueChange={setBrightness}
                showValue
              />
              <Slider
                label="Text size"
                value={temp}
                onValueChange={setTemp}
                minimumValue={12}
                maximumValue={24}
                step={1}
                showValue
              />
            </Stack>
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled slider is visually muted and ignores all drag gestures.
        </Text>
        <Slider
          label="System volume (managed)"
          value={60}
          onValueChange={() => {}}
          disabled
          showValue
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  card: { padding: spacing.md },
});
