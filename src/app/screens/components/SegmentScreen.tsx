import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  spacing,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Segment } from '../../../shared/components/Segment';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SegmentScreen() {
  const navigation = useNavigation();
  const [period, setPeriod] = useState('weekly');
  const [view, setView] = useState('list');
  const [chartType, setChartType] = useState('bar');
  const [tab, setTab] = useState('overview');

  return (
    <ScreenLayout
      title="Segment"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Stats Period">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Exactly one option is always selected — switching slides the pill to
          the new choice.
        </Text>
        <Stack gap="md">
          <Segment
            options={[
              { label: 'Daily', value: 'daily' },
              { label: 'Weekly', value: 'weekly' },
              { label: 'Monthly', value: 'monthly' },
            ]}
            value={period}
            onChange={setPeriod}
          />
          <Row justify="space-between">
            <Text variant="body" color="textSecondary">
              Revenue
            </Text>
            <Text variant="label" color="textPrimary">
              {period === 'daily'
                ? '$1,240'
                : period === 'weekly'
                ? '$8,530'
                : '$34,200'}
            </Text>
          </Row>
          <Row justify="space-between">
            <Text variant="body" color="textSecondary">
              Orders
            </Text>
            <Text variant="label" color="textPrimary">
              {period === 'daily' ? '14' : period === 'weekly' ? '98' : '402'}
            </Text>
          </Row>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="View Mode">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Two-option controls work like a toggle — use for mutually exclusive
          display modes.
        </Text>
        <Stack gap="sm">
          <Segment
            options={[
              { label: 'List', value: 'list' },
              { label: 'Grid', value: 'grid' },
            ]}
            value={view}
            onChange={setView}
          />
          <Text variant="captionSmall" color="textTertiary">
            Showing{' '}
            {view === 'list'
              ? 'items in a scrollable list'
              : 'items as a 2-column grid'}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Chart Type">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Four options fit comfortably — labels stay readable at the default
          size.
        </Text>
        <Stack gap="sm">
          <Segment
            options={[
              { label: 'Bar', value: 'bar' },
              { label: 'Line', value: 'line' },
              { label: 'Area', value: 'area' },
              { label: 'Pie', value: 'pie' },
            ]}
            value={chartType}
            onChange={setChartType}
          />
          <Text variant="captionSmall" color="textTertiary">
            Chart type: {chartType}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Profile Tabs">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Common in profile and detail screens — a clean alternative to a full
          tab bar.
        </Text>
        <Segment
          options={[
            { label: 'Overview', value: 'overview' },
            { label: 'Activity', value: 'activity' },
            { label: 'Settings', value: 'settings' },
          ]}
          value={tab}
          onChange={setTab}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pass disabled to make the entire control non-interactive.
        </Text>
        <Segment
          options={[
            { label: 'Free', value: 'free' },
            { label: 'Pro', value: 'pro' },
            { label: 'Enterprise', value: 'enterprise' },
          ]}
          value="pro"
          onChange={() => {}}
          disabled
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
