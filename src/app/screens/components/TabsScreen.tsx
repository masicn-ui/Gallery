import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  spacing,
  radius,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Tabs } from '../../../shared/components/Tabs';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const STATUS_TABS = [
  {
    key: 'all',
    label: 'All',
    body: 'You have 12 tasks across all projects. 5 are due this week and 2 are overdue.',
  },
  {
    key: 'active',
    label: 'Active',
    body: 'You have 7 active tasks in progress. The oldest was created 6 days ago.',
  },
  {
    key: 'done',
    label: 'Done',
    body: "5 tasks completed this week. Great work — you're ahead of your weekly goal.",
  },
];

const CATEGORY_TABS = [
  { key: 'overview', label: 'Overview' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'reports', label: 'Reports' },
  { key: 'team', label: 'Team' },
  { key: 'billing', label: 'Billing' },
  { key: 'settings', label: 'Settings' },
  { key: 'support', label: 'Support' },
];

const PROFILE_TABS = [
  {
    key: 'about',
    label: 'About',
    content: (
      <Stack gap="xs">
        <Row justify="space-between">
          <Text variant="caption" color="textSecondary">
            Member since
          </Text>
          <Text variant="body" color="textPrimary">
            Jan 2024
          </Text>
        </Row>
        <Row justify="space-between">
          <Text variant="caption" color="textSecondary">
            Location
          </Text>
          <Text variant="body" color="textPrimary">
            San Francisco, CA
          </Text>
        </Row>
        <Row justify="space-between">
          <Text variant="caption" color="textSecondary">
            Plan
          </Text>
          <Text variant="body" color="textPrimary">
            Pro
          </Text>
        </Row>
      </Stack>
    ),
  },
  {
    key: 'activity',
    label: 'Activity',
    content: (
      <Stack gap="xs">
        <Text variant="body" color="textSecondary">
          32 commits this month
        </Text>
        <Text variant="body" color="textSecondary">
          Last active 2 hours ago
        </Text>
        <Text variant="body" color="textSecondary">
          14 pull requests merged
        </Text>
      </Stack>
    ),
  },
  {
    key: 'projects',
    label: 'Projects',
    content: (
      <Stack gap="xs">
        <Text variant="body" color="textSecondary">
          masicn-ui · owner
        </Text>
        <Text variant="body" color="textSecondary">
          design-system-docs · contributor
        </Text>
        <Text variant="body" color="textSecondary">
          react-native-starter · contributor
        </Text>
      </Stack>
    ),
  },
];

export function TabsScreen() {
  const navigation = useNavigation();
  const [statusTab, setStatusTab] = useState('all');
  const [filledTab, setFilledTab] = useState('overview');
  const [pillTab, setPillTab] = useState('about');
  const [scrollTab, setScrollTab] = useState('overview');

  return (
    <ScreenLayout
      title="Tabs"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Underline — With Content">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Each tab renders a content panel below the bar — tap to switch.
        </Text>
        <Tabs
          tabs={STATUS_TABS}
          activeTab={statusTab}
          onTabChange={setStatusTab}
          variant="underline"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Filled — Navigation">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Filled variant works well for primary navigation inside a page.
        </Text>
        <Stack gap="sm">
          <Tabs
            tabs={[
              { key: 'overview', label: 'Overview' },
              { key: 'analytics', label: 'Analytics' },
              { key: 'settings', label: 'Settings' },
            ]}
            activeTab={filledTab}
            onTabChange={setFilledTab}
            variant="filled"
          />
          <Text variant="captionSmall" color="textTertiary">
            Active: {filledTab}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Pill — Profile Panel">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pill tabs with React content panels — swap any content per tab.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Tabs
            tabs={PROFILE_TABS}
            activeTab={pillTab}
            onTabChange={setPillTab}
            variant="pill"
            panelStyle={styles.panel}
          />
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Scrollable" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Scrollable tab bar for long lists — swipe horizontally to reveal more
          tabs.
        </Text>
        <Stack gap="sm">
          <Tabs
            tabs={CATEGORY_TABS}
            activeTab={scrollTab}
            onTabChange={setScrollTab}
            variant="underline"
            scrollable
          />
          <Text variant="captionSmall" color="textTertiary">
            Active: {scrollTab}
          </Text>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  card: { overflow: 'hidden' },
  panel: { paddingHorizontal: spacing.md, paddingBottom: spacing.md },
});
