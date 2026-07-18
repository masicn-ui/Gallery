import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  useTheme,
  spacing,
  iconSizes,
  Row,
  Text,
  Box,
  ThemeToggle,
} from '../../masicn';
import { ComponentListItem } from '../shared/ComponentListItem';
import { ScreenLayout } from '../shared/ScreenLayout';
import type { RootStackParamList } from '../navigation/types';

// ── Section data — every registry component + block/layout (73 total) ─────────

const ALL_SECTIONS: Array<{ title: string; data: string[] }> = [
  {
    title: 'Display',
    data: [
      'Badge',
      'Tag',
      'Dot',
      'Avatar',
      'AvatarGroup',
      'Image',
      'Card',
      'ListItem',
      'Alert',
      'Ticker',
      'Expandable',
    ],
  },
  {
    title: 'Feedback',
    data: [
      'Spinner',
      'Skeleton',
      'Shimmer',
      'Progress',
      'ProgressRing',
      'Snackbar',
      'Toast',
      'Loader',
    ],
  },
  {
    title: 'Actions',
    data: ['Button', 'FAB', 'Rating', 'SwipeButton'],
  },
  {
    title: 'Forms',
    data: [
      'TextInput',
      'Textarea',
      'SecureInput',
      'SearchBar',
      'Checkbox',
      'CheckboxGroup',
      'Radio',
      'Switch',
      'Select',
      'Slider',
      'RangeSlider',
      'Segment',
      'ToggleGroup',
      'Chip',
    ],
  },
  {
    title: 'Navigation',
    data: [
      'Tabs',
      'Dock',
      'Accordion',
      'Collapsible',
      'DetailRow',
      'Pin',
      'Link',
    ],
  },
  {
    title: 'Overlays',
    data: [
      'BottomSheet',
      'TopSheet',
      'LeftSheet',
      'RightSheet',
      'Drawer',
      'Modal',
      'Popover',
      'ContextMenu',
      'Menu',
      'Tooltip',
    ],
  },
  {
    title: 'Blocks',
    data: [
      'Carousel',
      'ActionSheet',
      'Confirm',
      'EmptyState',
      'Form',
      'Numeric',
      'CodeInput',
      'Pagination',
      'Phone',
      'DualSheet',
      'Stepper',
      'Swipeable',
      'ChipInput',
      'Timeline',
      'JsonTree',
      'Breadcrumb',
    ],
  },
  {
    title: 'Layouts',
    data: ['RefreshableList', 'RefreshableScrollView', 'MasonryGrid'],
  },
];

// ── Section header ────────────────────────────────────────────────────────────

function SectionHeader({ title, count }: { title: string; count: number }) {
  const { theme } = useTheme();
  return (
    <Box
      style={[
        styles.sectionHeader,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Row align="center" gap="sm">
        <Text variant="sectionHeader" color="textTertiary">
          {title.toUpperCase()}
        </Text>
        <Text variant="captionSmall" color="textTertiary">
          · {count}
        </Text>
      </Row>
    </Box>
  );
}

function SectionSeparator() {
  return <Box style={styles.sectionSeparator} />;
}

// ── Main screen ───────────────────────────────────────────────────────────────

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigate = (name: string) => {
    navigation.navigate('ComponentDetail', { name });
  };

  return (
    <ScreenLayout
      title="Gallery"
      scrollable={false}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <SectionList
        sections={ALL_SECTIONS}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ComponentListItem name={item} onPress={() => navigate(item)} />
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} count={section.data.length} />
        )}
        SectionSeparatorComponent={SectionSeparator}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing.md,
          paddingBottom: insets.bottom + spacing.xxxl,
        }}
        stickySectionHeadersEnabled
      />
    </ScreenLayout>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  sectionSeparator: { height: spacing.xs },
});
