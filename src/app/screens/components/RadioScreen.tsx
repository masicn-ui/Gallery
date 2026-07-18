import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { RadioGroup, Radio } from '../../../shared/components/Radio';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function RadioScreen() {
  const navigation = useNavigation();
  const [plan, setPlan] = useState('pro');
  const [frequency, setFrequency] = useState('weekly');
  const [locked, setLocked] = useState('viewer');

  return (
    <ScreenLayout
      title="Radio"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Subscription Plan">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Single-select from a set of mutually exclusive options.
        </Text>
        <RadioGroup value={plan} onValueChange={setPlan}>
          <Radio
            value="free"
            label="Free"
            description="Up to 3 projects, community support"
          />
          <Radio
            value="pro"
            label="Pro — $9/mo"
            description="Unlimited projects, priority support, custom domain"
          />
          <Radio
            value="enterprise"
            label="Enterprise"
            description="Custom pricing, SSO, dedicated SLA, audit logs"
          />
        </RadioGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Digest Frequency">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Concise options without descriptions for simple preference choices.
        </Text>
        <RadioGroup value={frequency} onValueChange={setFrequency}>
          <Radio value="realtime" label="Real-time" />
          <Radio value="daily" label="Daily digest" />
          <Radio value="weekly" label="Weekly digest" />
          <Radio value="never" label="Never" />
        </RadioGroup>
      </ShowcaseSection>

      <ShowcaseSection title="With Disabled Option">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Individual options can be disabled while the group remains
          interactive.
        </Text>
        <RadioGroup value="viewer" onValueChange={() => {}}>
          <Radio value="admin" label="Admin" description="Full access" />
          <Radio
            value="editor"
            label="Editor"
            description="Can create and edit"
          />
          <Radio value="viewer" label="Viewer" description="Read-only access" />
          <Radio
            value="billing"
            label="Billing only"
            description="Coming soon"
            disabled
          />
        </RadioGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Group Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Entire group locked — useful for read-only permission displays.
        </Text>
        <RadioGroup value={locked} onValueChange={setLocked} disabled>
          <Radio value="admin" label="Admin" />
          <Radio value="editor" label="Editor" />
          <Radio value="viewer" label="Viewer (current)" />
        </RadioGroup>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
