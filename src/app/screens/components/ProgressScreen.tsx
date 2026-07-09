import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
} from '../../../masicn';
import { Progress } from '../../../shared/components/Progress';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ProgressScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState(40);

  return (
    <ScreenLayout
      title="Progress"
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
          Tap ±10 to adjust the value — clamped between 0 and 100.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Stack gap="md">
            <Progress value={value} label="Upload progress" showValue />
            <Row gap="sm">
              <Button
                variant="outline"
                size="sm"
                onPress={() => setValue(v => Math.max(0, v - 10))}
              >
                −10
              </Button>
              <Button
                variant="primary"
                size="sm"
                onPress={() => setValue(v => Math.min(100, v + 10))}
              >
                +10
              </Button>
              <Button variant="ghost" size="sm" onPress={() => setValue(0)}>
                Reset
              </Button>
            </Row>
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="In Context">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Progress bars in realistic dashboard and settings contexts.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Stack gap="lg">
            {[
              { label: 'Storage used', value: 73 },
              { label: 'Profile complete', value: 55 },
              { label: 'Monthly goal', value: 92 },
              { label: 'Bandwidth', value: 18 },
            ].map(({ label, value: v }) => (
              <Stack key={label} gap="xs">
                <Row align="center" justify="space-between">
                  <Text variant="captionSmall" color="textSecondary">
                    {label}
                  </Text>
                  <Text variant="captionSmall" color="textTertiary">
                    {v}%
                  </Text>
                </Row>
                <Progress value={v} />
              </Stack>
            ))}
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Heights">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Thin for subtle indicators, thick for prominent hero bars.
        </Text>
        <Stack gap="md">
          {[
            { height: spacing.xxs, label: '2 px — hairline' },
            { height: spacing.xs, label: '4 px — compact' },
            { height: spacing.sm, label: '8 px — default' },
            { height: spacing.md, label: '12 px — prominent' },
          ].map(({ height, label }) => (
            <Stack key={height} gap="xs">
              <Text variant="captionSmall" color="textTertiary">
                {label}
              </Text>
              <Progress value={60} height={height} />
            </Stack>
          ))}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Indeterminate" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Use when total duration is unknown — e.g. network requests or AI
          generation.
        </Text>
        <Stack gap="md">
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              Syncing…
            </Text>
            <Progress value={0} indeterminate />
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              Generating response
            </Text>
            <Progress value={0} indeterminate label="AI is thinking…" />
          </Stack>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  card: { padding: spacing.md },
});
