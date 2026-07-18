import React from 'react';
import { ThemeToggle, iconSizes } from '../../../masicn';
import { Timeline } from '../../../shared/blocks/Timeline';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const ORDER_EVENTS = [
  {
    title: 'Order placed',
    description: 'Your order #ORD-8821 has been received.',
    timestamp: '9:00 AM',
    status: 'success' as const,
    icon: '✓',
  },
  {
    title: 'Payment confirmed',
    description: 'Payment of $49.99 was successful.',
    timestamp: '9:05 AM',
    status: 'success' as const,
    icon: '✓',
  },
  {
    title: 'Processing',
    description: 'Your order is being prepared.',
    timestamp: '10:30 AM',
    status: 'info' as const,
  },
  {
    title: 'Shipped',
    description: 'Tracking: TRK123456789',
    timestamp: 'Pending',
    status: 'default' as const,
  },
  {
    title: 'Delivered',
    description: 'Estimated: 2–3 business days',
    timestamp: 'Pending',
    status: 'default' as const,
  },
];

const ACTIVITY_EVENTS = [
  {
    title: 'Bug fixed',
    description: 'Fixed login crash on iOS 17.',
    timestamp: '2h ago',
    status: 'success' as const,
    icon: '✓',
  },
  {
    title: 'Warning detected',
    description: 'Deprecated API in use.',
    timestamp: '4h ago',
    status: 'warning' as const,
    icon: '!',
  },
  {
    title: 'Deploy failed',
    description: 'Build error in production pipeline.',
    timestamp: '6h ago',
    status: 'error' as const,
    icon: '✕',
  },
  {
    title: 'PR merged',
    description: 'Feature branch merged to main.',
    timestamp: '8h ago',
    status: 'info' as const,
  },
  {
    title: 'Repo created',
    description: 'Initial commit by @alice',
    timestamp: 'Yesterday',
    status: 'default' as const,
  },
];

const MINIMAL_EVENTS = [
  { title: 'Step 1', status: 'success' as const },
  { title: 'Step 2', status: 'success' as const },
  { title: 'Step 3 — In Progress', status: 'info' as const },
  { title: 'Step 4', status: 'default' as const },
];

export function TimelineScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Timeline"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Order Tracking">
        <Timeline items={ORDER_EVENTS} />
      </ShowcaseSection>

      <ShowcaseSection title="Activity Log">
        <Timeline items={ACTIVITY_EVENTS} />
      </ShowcaseSection>

      <ShowcaseSection title="Minimal (no descriptions, no timestamps)">
        <Timeline items={MINIMAL_EVENTS} />
      </ShowcaseSection>

      <ShowcaseSection title="Without Connecting Line" last>
        <Timeline items={ORDER_EVENTS.slice(0, 3)} showLine={false} />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
