import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { Link } from '../../../shared/components/Link';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { VariantRow } from '../../shared/VariantRow';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function LinkScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Link"
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
          Three size presets — match the surrounding text scale.
        </Text>
        <VariantRow>
          <Link size="sm" onPress={() => {}}>
            Small
          </Link>
          <Link size="md" onPress={() => {}}>
            Medium
          </Link>
          <Link size="lg" onPress={() => {}}>
            Large
          </Link>
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Underline Modes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Control when the underline appears — always is recommended on mobile.
        </Text>
        <Stack gap="md">
          <Link underline="always" onPress={() => {}}>
            Always underlined (default)
          </Link>
          <Link underline="hover" onPress={() => {}}>
            Press to see underline
          </Link>
          <Link underline="none" onPress={() => {}}>
            No underline
          </Link>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Trailing icons hint at where the link leads.
        </Text>
        <Stack gap="md">
          <Link icon="→" onPress={() => {}}>
            View full details
          </Link>
          <Link icon="↗" size="sm" onPress={() => {}}>
            Open in browser
          </Link>
          <Link icon="↓" bold onPress={() => {}}>
            Download receipt
          </Link>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="External Links">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Use `href` to open URLs automatically. The `external` prop adds ↗ and
          opens the browser.
        </Text>
        <Stack gap="md">
          <Link href="https://reactnative.dev" external>
            React Native docs
          </Link>
          <Link href="https://reactnative.dev" external size="sm">
            reactnative.dev
          </Link>
          <Link
            href="https://reactnative.dev"
            icon="↗"
            size="lg"
            onPress={() => {}}
          >
            Open in browser
          </Link>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="In Context">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Links embedded in body copy — a natural reading flow.
        </Text>
        <Stack gap="md">
          <Text variant="body" color="textSecondary">
            By signing up you agree to our{' '}
            <Link onPress={() => {}} size="md">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link onPress={() => {}} size="md">
              Privacy Policy
            </Link>
            .
          </Text>
          <Text variant="body" color="textSecondary">
            Need help?{' '}
            <Link onPress={() => {}} size="md" icon="→">
              Contact support
            </Link>
          </Text>
          <Text variant="caption" color="textSecondary">
            Already have an account?{' '}
            <Link onPress={() => {}} size="sm">
              Sign in
            </Link>
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="States" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Active, bold, and disabled states.
        </Text>
        <Stack gap="md">
          <Link onPress={() => {}}>Active link</Link>
          <Link bold onPress={() => {}}>
            Bold link
          </Link>
          <Link disabled onPress={() => {}}>
            Disabled link
          </Link>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
