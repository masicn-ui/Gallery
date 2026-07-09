import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Surface,
  Text,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
} from '../../../masicn';
import { Expandable } from '../../../shared/components/Expandable';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const PRODUCT_DESC =
  'These premium noise-cancelling headphones deliver exceptional audio quality with 30-hour battery life, ' +
  'industry-leading active noise cancellation, and multipoint Bluetooth connection. ' +
  'Adaptive Sound Control automatically adjusts ambient sound settings to your activity. ' +
  'Comfortable ear cushions and a sleek foldable design make them ideal for travel, work, and everyday listening.';

const BIO =
  'Designer & developer based in San Francisco. Building masicn-ui, a copy-paste component system for React Native. ' +
  'Previously at Stripe, Figma, and Apple. Open source enthusiast, coffee aficionado, amateur trail runner.';

const REVIEW =
  "Absolutely love these headphones. The noise cancellation is the best I've tried — completely blocks out " +
  'airplane cabin noise on long flights. Sound quality is warm and detailed with excellent bass response. ' +
  'Battery easily lasts two full days of use. The touch controls take a few days to learn but become second nature. ' +
  'Build quality feels premium and they fold compact enough for a backpack. Worth every penny.';

const SHORT_TEXT =
  'Seamless pairing. Great sound. Would recommend to anyone looking for quality wireless headphones.';

export function ExpandableScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Expandable"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Product Description">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Default 3-line truncation. Tap "Read more" to expand.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Expandable>{PRODUCT_DESC}</Expandable>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="User Bio">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          2-line truncation — compact profile cards.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Expandable numberOfLines={2}>{BIO}</Expandable>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Custom Labels">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Custom expand/collapse labels — "Read full review" / "Collapse".
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Expandable
            numberOfLines={3}
            expandLabel="Read full review"
            collapseLabel="Collapse"
          >
            {REVIEW}
          </Expandable>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Short Text (no toggle)" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          When text fits within the line limit, the toggle never appears.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Expandable>{SHORT_TEXT}</Expandable>
        </Surface>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  card: { padding: spacing.md },
});
