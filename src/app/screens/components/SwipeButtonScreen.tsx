import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Text,
  Surface,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
} from '../../../masicn';
import { SwipeButton } from '../../../shared/components/SwipeButton';
import { Button } from '../../../shared/components/Button';
import { Alert } from '../../../shared/components/Alert';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SwipeButtonScreen() {
  const navigation = useNavigation();

  const [defaultDone, setDefaultDone] = useState(false);
  const [payDone, setPayDone] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [deleteDone, setDeleteDone] = useState(false);
  const [clearDone, setClearDone] = useState(false);

  return (
    <ScreenLayout
      title="Swipe Button"
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
          Drag the thumb all the way to confirm the action.
        </Text>
        {!defaultDone ? (
          <SwipeButton
            onComplete={() => setDefaultDone(true)}
            testID="swipe-default"
          />
        ) : (
          <Surface
            level="sm"
            style={[styles.doneCard, { borderRadius: radius.lg }]}
          >
            <Text variant="label" color="success">
              Confirmed!
            </Text>
            <Button
              variant="ghost"
              size="sm"
              onPress={() => setDefaultDone(false)}
            >
              Reset
            </Button>
          </Surface>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="Payment & Checkout">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          High-friction confirmation for irreversible money actions.
        </Text>
        <Stack gap="lg">
          <Stack gap="xs">
            {!payDone ? (
              <SwipeButton
                label="Slide to pay $49.99"
                onComplete={() => setPayDone(true)}
                testID="swipe-pay"
              />
            ) : (
              <Surface
                level="sm"
                style={[styles.doneCard, { borderRadius: radius.lg }]}
              >
                <Text variant="label" color="success">
                  Payment sent!
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => setPayDone(false)}
                >
                  Reset
                </Button>
              </Surface>
            )}
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Drag all the way right to confirm payment
            </Text>
          </Stack>

          <Stack gap="xs">
            {!orderDone ? (
              <SwipeButton
                label="Slide to complete order"
                onComplete={() => setOrderDone(true)}
                testID="swipe-order"
              />
            ) : (
              <Surface
                level="sm"
                style={[styles.doneCard, { borderRadius: radius.lg }]}
              >
                <Text variant="label" color="success">
                  Order placed!
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => setOrderDone(false)}
                >
                  Reset
                </Button>
              </Surface>
            )}
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Replaces "Confirm" button in checkout flows
            </Text>
          </Stack>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Destructive Actions">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Adds friction before irreversible destructive operations.
        </Text>
        <Stack gap="lg">
          <Stack gap="sm">
            <Alert
              variant="warning"
              title="This will permanently delete your account"
              description="All data, settings, and history will be removed immediately."
            />
            {!deleteDone ? (
              <SwipeButton
                label="Slide to delete account"
                onComplete={() => setDeleteDone(true)}
                testID="swipe-delete"
              />
            ) : (
              <Surface
                level="sm"
                style={[styles.doneCard, { borderRadius: radius.lg }]}
              >
                <Text variant="label" color="error">
                  Account deleted
                </Text>
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={() => setDeleteDone(false)}
                >
                  Reset
                </Button>
              </Surface>
            )}
          </Stack>

          {!clearDone ? (
            <SwipeButton
              label="Slide to clear all data"
              onComplete={() => setClearDone(true)}
              testID="swipe-clear"
            />
          ) : (
            <Surface
              level="sm"
              style={[styles.doneCard, { borderRadius: radius.lg }]}
            >
              <Text variant="label" color="error">
                All data cleared
              </Text>
              <Button
                variant="ghost"
                size="sm"
                onPress={() => setClearDone(false)}
              >
                Reset
              </Button>
            </Surface>
          )}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="States" last>
        <Stack gap="md">
          <Stack gap="xs">
            <SwipeButton
              label="Slide to confirm"
              onComplete={() => {}}
              disabled
              testID="swipe-disabled"
            />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Disabled — complete the form first
            </Text>
          </Stack>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  centered: { textAlign: 'center' },
  doneCard: {
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
