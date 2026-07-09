import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  ThemeToggle,
  iconSizes,
  spacing,
  ArrowLeftIcon,
  CheckIcon,
  SearchIcon,
  StarIcon,
} from '../../../masicn';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { VariantRow } from '../../shared/VariantRow';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ButtonScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Button"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Variants">
        <VariantRow>
          <Button variant="primary" onPress={() => {}}>
            Primary
          </Button>
          <Button variant="secondary" onPress={() => {}}>
            Secondary
          </Button>
          <Button variant="tertiary" onPress={() => {}}>
            Tertiary
          </Button>
        </VariantRow>
        <VariantRow>
          <Button variant="outline" onPress={() => {}}>
            Outline
          </Button>
          <Button variant="ghost" onPress={() => {}}>
            Ghost
          </Button>
          <Button variant="destructive" onPress={() => {}}>
            Destructive
          </Button>
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <VariantRow>
          <Button variant="primary" size="sm" onPress={() => {}}>
            Small
          </Button>
          <Button variant="primary" size="md" onPress={() => {}}>
            Medium
          </Button>
          <Button variant="primary" size="lg" onPress={() => {}}>
            Large
          </Button>
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons">
        <VariantRow>
          <Button
            variant="primary"
            leftIcon={
              <ArrowLeftIcon
                size={iconSizes.action}
                color="#fff"
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
          >
            Back
          </Button>
          <Button
            variant="outline"
            leftIcon={
              <SearchIcon
                size={iconSizes.action}
                color="#000"
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
          >
            Search
          </Button>
          <Button
            variant="secondary"
            rightIcon={
              <CheckIcon
                size={iconSizes.action}
                color="#fff"
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
          >
            Done
          </Button>
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="States">
        <VariantRow>
          <Button variant="primary" disabled onPress={() => {}}>
            Disabled
          </Button>
          <Button variant="primary" loading onPress={() => {}}>
            Loading
          </Button>
          <Button variant="outline" disabled onPress={() => {}}>
            Disabled
          </Button>
        </VariantRow>
        <VariantRow>
          <Button
            variant="primary"
            loading
            leftIcon={
              <StarIcon
                size={iconSizes.action}
                color="#fff"
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
          >
            Saving…
          </Button>
          <Button
            variant="secondary"
            disabled
            rightIcon={
              <CheckIcon
                size={iconSizes.action}
                color="#fff"
                strokeWidth={1.5}
              />
            }
            onPress={() => {}}
          >
            Confirmed
          </Button>
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Full Width">
        <Stack gap="sm">
          <Button variant="primary" onPress={() => {}}>
            Continue
          </Button>
          <Button variant="outline" onPress={() => {}}>
            Save for later
          </Button>
          <Button variant="ghost" onPress={() => {}}>
            Cancel
          </Button>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Button Groups">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Common pairing patterns — confirm/cancel, save/discard.
        </Text>
        <Stack gap="md">
          <Row gap="sm">
            <Button variant="ghost" style={styles.flex1} onPress={() => {}}>
              Cancel
            </Button>
            <Button variant="primary" style={styles.flex1} onPress={() => {}}>
              Save changes
            </Button>
          </Row>
          <Row gap="sm">
            <Button
              variant="destructive"
              style={styles.flex1}
              onPress={() => {}}
            >
              Delete
            </Button>
            <Button variant="outline" style={styles.flex1} onPress={() => {}}>
              Keep
            </Button>
          </Row>
          <Row gap="sm">
            <Button variant="outline" style={styles.flex1} onPress={() => {}}>
              Share
            </Button>
            <Button variant="secondary" style={styles.flex1} onPress={() => {}}>
              Download
            </Button>
            <Button variant="primary" style={styles.flex1} onPress={() => {}}>
              Open
            </Button>
          </Row>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Real-World Actions" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          As they appear in common app flows — auth, payment, destructive
          confirm.
        </Text>
        <Stack gap="md">
          {/* Auth form */}
          <Stack gap="sm">
            <Text variant="label" color="textTertiary">
              Sign in flow
            </Text>
            <Button variant="primary" onPress={() => {}}>
              Sign in with email
            </Button>
            <Button variant="outline" onPress={() => {}}>
              Continue with Apple
            </Button>
            <Button variant="ghost" onPress={() => {}}>
              Create an account
            </Button>
          </Stack>
          {/* Payment */}
          <Stack gap="sm">
            <Text variant="label" color="textTertiary">
              Checkout
            </Text>
            <Button
              variant="primary"
              size="lg"
              leftIcon={
                <CheckIcon
                  size={iconSizes.action}
                  color="#fff"
                  strokeWidth={1.5}
                />
              }
              onPress={() => {}}
            >
              Pay $49.99
            </Button>
          </Stack>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
});
