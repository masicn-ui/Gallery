import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  spacing,
  ThemeToggle,
  iconSizes,
  useTheme,
  Divider,
} from '../../../masicn';
import { Collapsible } from '../../../shared/components/Collapsible';
import { Switch } from '../../../shared/components/Switch';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

// ─── FAQ data ──────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: 'What is the refund policy?',
    a: 'We offer a full refund within 30 days of purchase. Items must be in their original condition and packaging. Digital products are non-refundable once downloaded.',
  },
  {
    q: 'How do I track my order?',
    a: "Once your order ships, you'll receive an email with a tracking number. You can also visit Orders → Track in the app at any time.",
  },
  {
    q: 'Can I change my delivery address?',
    a: 'Address changes are possible up to 1 hour after placing the order. Contact support immediately if you need to update your shipping details.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes — we ship to 40+ countries. International orders typically take 7–14 business days and may be subject to customs duties.',
  },
];

// ─── Order tracking steps ──────────────────────────────────────────────────

const ORDER_STEPS = [
  {
    label: 'Order placed',
    time: 'Dec 18 · 9:41 AM',
    detail:
      'Payment confirmed. Your order #4821 has been received and is being prepared.',
    done: true,
    open: false,
  },
  {
    label: 'Processing',
    time: 'Dec 18 · 2:15 PM',
    detail: 'Your items have been picked and packed at our warehouse.',
    done: true,
    open: true,
  },
  {
    label: 'Shipped',
    time: 'Expected Dec 19',
    detail: 'Your parcel will be handed to the carrier shortly.',
    done: false,
    open: false,
  },
  {
    label: 'Out for delivery',
    time: 'Expected Dec 20',
    detail: 'A delivery attempt will be made at your address.',
    done: false,
    open: false,
  },
  {
    label: 'Delivered',
    time: 'Expected Dec 20',
    detail: 'Parcel left at door or handed to resident.',
    done: false,
    open: false,
  },
];

// ─── Screen ────────────────────────────────────────────────────────────────

export function CollapsibleScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  // Notification preferences state
  const [notifPrefs, setNotifPrefs] = useState({
    offersEmail: true,
    offersPush: false,
    offersInApp: true,
    orderEmail: true,
    orderPush: true,
    orderInApp: true,
    accountEmail: false,
    accountPush: false,
    accountInApp: true,
  });

  const toggle = (key: keyof typeof notifPrefs) =>
    setNotifPrefs(p => ({ ...p, [key]: !p[key] }));

  return (
    <ScreenLayout
      title="Collapsible"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      {/* ── Existing: Developer Options ──────────────────────────── */}
      <ShowcaseSection title="Developer Options">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Collapsed by default — reveals settings on demand to keep the UI
          clean.
        </Text>
        <Collapsible title="Developer Options">
          <Stack gap="sm">
            <Row justify="space-between">
              <Text variant="body" color="textSecondary">
                Debug mode
              </Text>
              <Text variant="body" color="textPrimary">
                Off
              </Text>
            </Row>
            <Row justify="space-between">
              <Text variant="body" color="textSecondary">
                Log level
              </Text>
              <Text variant="body" color="textPrimary">
                Error
              </Text>
            </Row>
            <Row justify="space-between">
              <Text variant="body" color="textSecondary">
                Network inspector
              </Text>
              <Text variant="body" color="textPrimary">
                Disabled
              </Text>
            </Row>
          </Stack>
        </Collapsible>
      </ShowcaseSection>

      {/* ── Existing: Starts Open ─────────────────────────────────── */}
      <ShowcaseSection title="Starts Open">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pass defaultOpen when the content is relevant on arrival.
        </Text>
        <Collapsible title="Order #4821 — Summary" defaultOpen>
          <Stack gap="xs">
            <Row justify="space-between">
              <Text variant="body" color="textSecondary">
                2 × Wireless Earbuds
              </Text>
              <Text variant="body" color="textPrimary">
                $79.00
              </Text>
            </Row>
            <Row justify="space-between">
              <Text variant="body" color="textSecondary">
                1 × Phone Case
              </Text>
              <Text variant="body" color="textPrimary">
                $14.00
              </Text>
            </Row>
            <Row justify="space-between">
              <Text variant="label" color="textPrimary">
                Total
              </Text>
              <Text variant="label" color="textPrimary">
                $93.00
              </Text>
            </Row>
          </Stack>
        </Collapsible>
      </ShowcaseSection>

      {/* ── Existing: Settings Sections ──────────────────────────── */}
      <ShowcaseSection title="Settings Sections">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Multiple collapsibles stacked — a common pattern for settings pages.
        </Text>
        <Stack gap="none">
          <Collapsible title="Personal Information">
            <Text variant="body" color="textSecondary">
              Name, email address, and profile picture.
            </Text>
          </Collapsible>
          <Collapsible title="Security" defaultOpen>
            <Text variant="body" color="textSecondary">
              Password, 2-factor authentication, and active sessions.
            </Text>
          </Collapsible>
          <Collapsible title="Notifications">
            <Text variant="body" color="textSecondary">
              Push, email, and SMS notification preferences.
            </Text>
          </Collapsible>
        </Stack>
      </ShowcaseSection>

      {/* ── FAQ Accordion ─────────────────────────────────────────── */}
      <ShowcaseSection title="FAQ Accordion">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Each question is independent — open as many as you like.
        </Text>
        <Stack gap="none">
          {FAQ.map(({ q, a }) => (
            <Collapsible key={q} title={q}>
              <Text variant="body" color="textSecondary">
                {a}
              </Text>
            </Collapsible>
          ))}
        </Stack>
      </ShowcaseSection>

      {/* ── Order Tracking ────────────────────────────────────────── */}
      <ShowcaseSection title="Order Tracking">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Steps open to show detail. Processing is in progress and open by
          default.
        </Text>
        <Stack gap="none">
          {ORDER_STEPS.map(({ label, time, detail, done, open }) => (
            <Collapsible
              key={label}
              title={`${label}  ·  ${time}`}
              defaultOpen={open}
            >
              <Surface
                level="sm"
                style={[
                  styles.stepDetail,
                  {
                    borderLeftColor: done
                      ? theme.colors.primary
                      : theme.colors.borderSecondary,
                  },
                ]}
              >
                <Text
                  variant="bodySmall"
                  color={done ? 'textPrimary' : 'textSecondary'}
                >
                  {detail}
                </Text>
              </Surface>
            </Collapsible>
          ))}
        </Stack>
      </ShowcaseSection>

      {/* ── Notification Preferences ──────────────────────────────── */}
      <ShowcaseSection title="Notification Preferences" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Categorised toggles — each category expands to reveal per-channel
          controls.
        </Text>
        <Stack gap="none">
          <Collapsible title="Offers & Promotions" defaultOpen>
            <Stack gap="sm">
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  Email
                </Text>
                <Switch
                  value={notifPrefs.offersEmail}
                  onValueChange={() => toggle('offersEmail')}
                />
              </Row>
              <Divider />
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  Push notifications
                </Text>
                <Switch
                  value={notifPrefs.offersPush}
                  onValueChange={() => toggle('offersPush')}
                />
              </Row>
              <Divider />
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  In-app
                </Text>
                <Switch
                  value={notifPrefs.offersInApp}
                  onValueChange={() => toggle('offersInApp')}
                />
              </Row>
            </Stack>
          </Collapsible>

          <Collapsible title="Order Updates">
            <Stack gap="sm">
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  Email
                </Text>
                <Switch
                  value={notifPrefs.orderEmail}
                  onValueChange={() => toggle('orderEmail')}
                />
              </Row>
              <Divider />
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  Push notifications
                </Text>
                <Switch
                  value={notifPrefs.orderPush}
                  onValueChange={() => toggle('orderPush')}
                />
              </Row>
              <Divider />
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  In-app
                </Text>
                <Switch
                  value={notifPrefs.orderInApp}
                  onValueChange={() => toggle('orderInApp')}
                />
              </Row>
            </Stack>
          </Collapsible>

          <Collapsible title="Account Activity">
            <Stack gap="sm">
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  Email
                </Text>
                <Switch
                  value={notifPrefs.accountEmail}
                  onValueChange={() => toggle('accountEmail')}
                />
              </Row>
              <Divider />
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  Push notifications
                </Text>
                <Switch
                  value={notifPrefs.accountPush}
                  onValueChange={() => toggle('accountPush')}
                />
              </Row>
              <Divider />
              <Row justify="space-between" align="center">
                <Text variant="body" color="textSecondary">
                  In-app
                </Text>
                <Switch
                  value={notifPrefs.accountInApp}
                  onValueChange={() => toggle('accountInApp')}
                />
              </Row>
            </Stack>
          </Collapsible>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  stepDetail: {
    padding: spacing.sm,
    borderLeftWidth: 3,
    borderRadius: 0,
  },
});
