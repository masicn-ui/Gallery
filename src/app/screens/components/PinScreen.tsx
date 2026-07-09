import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  spacing,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Pin } from '../../../shared/components/Pin';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function PinScreen() {
  const navigation = useNavigation();
  const [filled, setFilled] = useState(0);
  const [sixFilled, setSixFilled] = useState(4);

  return (
    <ScreenLayout
      title="Pin"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Interactive">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Simulated PIN entry — tap Add/Remove to fill dots one at a time.
        </Text>
        <Stack gap="md">
          <Pin length={4} filled={filled} />
          <Row gap="sm" justify="center">
            <Button
              variant="outline"
              size="sm"
              onPress={() => setFilled(f => Math.max(0, f - 1))}
            >
              Remove
            </Button>
            <Button
              variant="primary"
              size="sm"
              onPress={() => setFilled(f => Math.min(4, f + 1))}
            >
              Add
            </Button>
          </Row>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Default, success, and error states — switch based on PIN validation
          result.
        </Text>
        <Stack gap="md">
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              Default — entering
            </Text>
            <Pin length={4} filled={2} variant="default" />
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              Success — correct PIN
            </Text>
            <Pin length={4} filled={4} variant="success" />
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              Error — wrong PIN
            </Text>
            <Pin length={4} filled={4} variant="error" />
          </Stack>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Three size presets — scale to match the surrounding UI density.
        </Text>
        <Stack gap="md">
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              sm
            </Text>
            <Pin length={4} filled={3} size="sm" />
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              md (default)
            </Text>
            <Pin length={4} filled={3} size="md" />
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              lg
            </Text>
            <Pin length={4} filled={3} size="lg" />
          </Stack>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="6-Digit Code" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Longer PIN length — common for OTP and verification codes.
        </Text>
        <Stack gap="md">
          <Pin length={6} filled={sixFilled} />
          <Row gap="sm" justify="center">
            <Button
              variant="outline"
              size="sm"
              onPress={() => setSixFilled(f => Math.max(0, f - 1))}
            >
              Remove
            </Button>
            <Button
              variant="primary"
              size="sm"
              onPress={() => setSixFilled(f => Math.min(6, f + 1))}
            >
              Add
            </Button>
          </Row>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
