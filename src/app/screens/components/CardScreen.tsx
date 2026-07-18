import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  AspectRatio,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
  opacity,
  useTheme,
} from '../../../masicn';
import { Avatar } from '../../../shared/components/Avatar';
import { Card } from '../../../shared/components/Card';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function CardScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <ScreenLayout
      title="Card"
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
        <Stack gap="sm">
          {(
            [
              {
                variant: 'elevated',
                label: 'Elevated',
                desc: 'Shadow — default card style',
              },
              {
                variant: 'filled',
                label: 'Filled',
                desc: 'Subtle background tint',
              },
              {
                variant: 'outlined',
                label: 'Outlined',
                desc: 'Border only, no shadow',
              },
            ] as const
          ).map(({ variant, label, desc }) => (
            <Card
              key={variant}
              variant={variant}
              padding="md"
              onPress={() => {}}
            >
              <Text variant="label" color="textPrimary">
                {label}
              </Text>
              <Text variant="captionSmall" color="textTertiary">
                {desc}
              </Text>
            </Card>
          ))}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Product Card">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Uses media, title, subtitle, body content + footer actions.
        </Text>
        <Card variant="elevated" padding="none" onPress={() => {}}>
          <AspectRatio
            ratio={16 / 9}
            style={[
              styles.overflowHidden,
              {
                borderTopLeftRadius: radius.lg,
                borderTopRightRadius: radius.lg,
              },
            ]}
          >
            <View
              style={[
                StyleSheet.absoluteFill,
                styles.mediaCover,
                { backgroundColor: theme.colors.primary },
              ]}
            />
            <View style={styles.mediaBadge}>
              <Surface
                level="sm"
                style={[styles.badge, { borderRadius: radius.full }]}
              >
                <Text variant="captionSmall" color="textTertiary">
                  Electronics
                </Text>
              </Surface>
            </View>
          </AspectRatio>
          <Stack gap="xxs" style={styles.cardBody}>
            <Text variant="titleSmall" color="textPrimary">
              Wireless Headphones
            </Text>
            <Text variant="captionSmall" color="textTertiary">
              Sony · WH-1000XM5
            </Text>
            <Text
              variant="bodySmall"
              color="textSecondary"
              style={styles.bodyText}
            >
              30-hour battery, industry-leading ANC, Hi-Res Audio
            </Text>
          </Stack>
          <Row align="center" justify="space-between" style={styles.cardFooter}>
            <Text variant="h3" color="textPrimary">
              $299
            </Text>
            <Button variant="primary" size="sm" onPress={() => {}}>
              Add to cart
            </Button>
          </Row>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Profile Card">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Composing primitives inside a card with surface="secondary".
        </Text>
        <Card
          variant="filled"
          surface="secondary"
          padding="md"
          onPress={() => {}}
        >
          <Row align="center" gap="md">
            <Avatar initials="AJ" size="md" color="primary" />
            <Stack gap="none" style={styles.flex1}>
              <Text variant="label" color="textPrimary">
                Alex Johnson
              </Text>
              <Text variant="captionSmall" color="textTertiary">
                @alex · Product Designer
              </Text>
            </Stack>
            <Button variant="outline" size="sm" onPress={() => {}}>
              Follow
            </Button>
          </Row>
          <Row gap="lg" style={styles.statsRow}>
            {[
              { value: '1.2K', label: 'Followers' },
              { value: '348', label: 'Following' },
              { value: '4.9★', label: 'Rating' },
            ].map(({ value, label }) => (
              <Stack key={label} gap="none" style={styles.statItem}>
                <Text variant="titleSmall" color="textPrimary">
                  {value}
                </Text>
                <Text variant="captionSmall" color="textTertiary">
                  {label}
                </Text>
              </Stack>
            ))}
          </Row>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Stat Cards">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Compact outlined cards in a row — analytics, dashboards.
        </Text>
        <Row gap="sm">
          {[
            { value: '98.4%', label: 'Uptime', color: theme.colors.success },
            { value: '1.2 ms', label: 'Latency', color: theme.colors.primary },
            { value: '4.2K', label: 'Requests', color: theme.colors.accent },
          ].map(({ value, label, color }) => (
            <Card
              key={label}
              variant="outlined"
              padding="md"
              style={styles.flex1}
            >
              <Text variant="h3" style={{ color }}>
                {value}
              </Text>
              <Text variant="captionSmall" color="textTertiary">
                {label}
              </Text>
            </Card>
          ))}
        </Row>
      </ShowcaseSection>

      {/* ── Article / Blog Post card ──────────────────────────────── */}
      <ShowcaseSection title="Article Card">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          16:9 image placeholder, category badge, author and read-time in
          footer.
        </Text>
        <Card
          variant="elevated"
          padding="none"
          animation="lift"
          onPress={() => {}}
        >
          <AspectRatio
            ratio={16 / 9}
            style={[
              styles.overflowHidden,
              {
                borderTopLeftRadius: radius.lg,
                borderTopRightRadius: radius.lg,
              },
            ]}
          >
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: theme.colors.accent },
              ]}
            />
            <View style={styles.mediaBadge}>
              <Surface
                level="sm"
                style={[styles.badge, { borderRadius: radius.full }]}
              >
                <Text variant="captionSmall" color="textTertiary">
                  Design
                </Text>
              </Surface>
            </View>
          </AspectRatio>
          <Stack gap="xxs" style={styles.cardBody}>
            <Text variant="titleSmall" color="textPrimary">
              The Future of Mobile Design Systems
            </Text>
            <Text
              variant="bodySmall"
              color="textSecondary"
              style={styles.bodyText}
            >
              How token-based design is changing the way teams build apps at
              scale.
            </Text>
          </Stack>
          <Row align="center" justify="space-between" style={styles.cardFooter}>
            <Row align="center" gap="xs">
              <Avatar initials="SK" size="sm" color="accent" />
              <Text variant="captionSmall" color="textTertiary">
                Sara Kim
              </Text>
            </Row>
            <Text variant="captionSmall" color="textTertiary">
              5 min read
            </Text>
          </Row>
        </Card>
      </ShowcaseSection>

      {/* ── Notification card ─────────────────────────────────────── */}
      <ShowcaseSection title="Notification Card">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Compact card with an icon dot, action title, body, and timestamp.
        </Text>
        <Stack gap="sm">
          {[
            {
              color: theme.colors.primary,
              title: 'Order shipped!',
              body: 'Your order #4821 has been dispatched.',
              time: '2 min ago',
            },
            {
              color: theme.colors.success,
              title: 'Payment confirmed',
              body: 'We received your payment of $93.00.',
              time: '1 hr ago',
            },
            {
              color: theme.colors.error,
              title: 'Login from new device',
              body: 'A sign-in was detected from iPhone 15 Pro.',
              time: 'Yesterday',
            },
          ].map(({ color, title, body, time }) => (
            <Card
              key={title}
              variant="outlined"
              padding="md"
              animation="lift"
              onPress={() => {}}
            >
              <Row gap="md" align="flex-start">
                <View style={[styles.notifDot, { backgroundColor: color }]} />
                <Stack gap="xxs" style={styles.flex1}>
                  <Row justify="space-between" align="flex-start">
                    <Text
                      variant="label"
                      color="textPrimary"
                      style={styles.flex1}
                    >
                      {title}
                    </Text>
                    <Text
                      variant="captionSmall"
                      color="textTertiary"
                      style={styles.notifTime}
                    >
                      {time}
                    </Text>
                  </Row>
                  <Text variant="bodySmall" color="textSecondary">
                    {body}
                  </Text>
                </Stack>
              </Row>
            </Card>
          ))}
        </Stack>
      </ShowcaseSection>

      {/* ── Event card ────────────────────────────────────────────── */}
      <ShowcaseSection title="Event Card">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Horizontal layout with a date column, divider, and event details.
        </Text>
        <Stack gap="sm">
          {[
            {
              day: '24',
              month: 'JAN',
              title: 'Design System Workshop',
              location: 'San Francisco, CA',
              time: '10:00 AM – 4:00 PM',
              color: theme.colors.primary,
            },
            {
              day: '01',
              month: 'FEB',
              title: 'Product Strategy Summit',
              location: 'Virtual · Zoom',
              time: '2:00 PM – 3:30 PM',
              color: theme.colors.accent,
            },
          ].map(({ day, month, title, location, time, color }) => (
            <Card
              key={title}
              variant="elevated"
              padding="md"
              animation="scale"
              onPress={() => {}}
            >
              <Row gap="md" align="center">
                <Stack
                  gap="none"
                  style={[styles.eventDate, { borderColor: color }]}
                >
                  <Text variant="h2" style={{ color }}>
                    {day}
                  </Text>
                  <Text variant="captionSmall" style={{ color }}>
                    {month}
                  </Text>
                </Stack>
                <View
                  style={[
                    styles.eventDivider,
                    { backgroundColor: theme.colors.borderSecondary },
                  ]}
                />
                <Stack gap="xxs" style={styles.flex1}>
                  <Text variant="label" color="textPrimary">
                    {title}
                  </Text>
                  <Text variant="captionSmall" color="textTertiary">
                    {location}
                  </Text>
                  <Text variant="captionSmall" color="textTertiary">
                    {time}
                  </Text>
                </Stack>
              </Row>
            </Card>
          ))}
        </Stack>
      </ShowcaseSection>

      {/* ── Metric / Analytics card ───────────────────────────────── */}
      <ShowcaseSection title="Metric Cards">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Large KPI number centred, label below, trend indicator.
        </Text>
        <Row gap="sm">
          {[
            {
              value: '$12,480',
              label: 'Revenue',
              trend: '+18%',
              up: true,
              color: theme.colors.success,
            },
            {
              value: '3,241',
              label: 'Orders',
              trend: '+5%',
              up: true,
              color: theme.colors.primary,
            },
            {
              value: '1.8%',
              label: 'Returns',
              trend: '+0.3%',
              up: false,
              color: theme.colors.error,
            },
          ].map(({ value, label, trend, up, color }) => (
            <Card
              key={label}
              variant="filled"
              padding="md"
              style={styles.flex1}
            >
              <Stack gap="xxs" style={styles.metricCard}>
                <Text variant="h2" color="textPrimary" style={styles.centered}>
                  {value}
                </Text>
                <Text
                  variant="captionSmall"
                  color="textTertiary"
                  style={styles.centered}
                >
                  {label}
                </Text>
                <Text
                  variant="captionSmall"
                  style={[styles.centered, { color }]}
                >
                  {up ? '↑' : '↓'} {trend}
                </Text>
              </Stack>
            </Card>
          ))}
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Animations" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Tap each card to see its press animation.
        </Text>
        <Row gap="sm" style={styles.animRow}>
          {(['scale', 'lift', 'rotate', 'none'] as const).map(a => (
            <Card
              key={a}
              animation={a}
              padding="md"
              onPress={() => {}}
              style={styles.animCard}
            >
              <Text
                variant="captionSmall"
                color="textPrimary"
                style={styles.centered}
              >
                {a}
              </Text>
            </Card>
          ))}
        </Row>
        <Card
          variant="elevated"
          padding="md"
          disabled
          style={styles.disabledCard}
        >
          <Text variant="label" color="textTertiary">
            Disabled card
          </Text>
          <Text variant="captionSmall" color="textTertiary">
            Cannot be pressed
          </Text>
        </Card>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
  centered: { textAlign: 'center' },
  overflowHidden: { overflow: 'hidden' },
  mediaCover: { opacity: opacity.hover },
  // Product card
  mediaBadge: { position: 'absolute', top: spacing.sm, left: spacing.sm },
  badge: { paddingHorizontal: spacing.sm, paddingVertical: spacing.xxs },
  cardBody: { padding: spacing.md },
  bodyText: { marginTop: spacing.xxs },
  cardFooter: { paddingHorizontal: spacing.md, paddingBottom: spacing.md },
  // Profile card
  statsRow: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  statItem: { alignItems: 'center' },
  // Animations
  animRow: { flexWrap: 'wrap' },
  animCard: { flex: 1, minWidth: 70 },
  disabledCard: { marginTop: spacing.sm },
  // Notification card
  notifDot: { width: 10, height: 10, borderRadius: 5, marginTop: 4 },
  notifTime: { marginLeft: spacing.sm, flexShrink: 0 },
  // Event card
  eventDate: {
    alignItems: 'center',
    paddingRight: spacing.md,
    borderRightWidth: 2,
    minWidth: 48,
  },
  eventDivider: { width: 1, alignSelf: 'stretch' },
  // Metric card
  metricCard: { alignItems: 'center' },
});
