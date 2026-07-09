import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Row,
  Stack,
  Text,
  spacing,
  useTheme,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Dock } from '../../../shared/components/Dock';
import {
  InboxIcon,
  SearchIcon,
  StarIcon,
  SettingsIcon,
  PlusIcon,
  PaletteIcon,
  MoonIcon,
} from '../../../masicn';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const THREE_ITEMS = [
  { key: 'home', icon: InboxIcon, label: 'Home' },
  { key: 'search', icon: SearchIcon, label: 'Search' },
  { key: 'profile', icon: PaletteIcon, label: 'Style' },
];

const FOUR_ITEMS = [
  { key: 'home', icon: InboxIcon, label: 'Home' },
  { key: 'search', icon: SearchIcon, label: 'Search' },
  { key: 'starred', icon: StarIcon, label: 'Starred' },
  { key: 'settings', icon: SettingsIcon, label: 'Settings' },
];

const FIVE_ITEMS = [
  { key: 'home', icon: InboxIcon, label: 'Home' },
  { key: 'search', icon: SearchIcon, label: 'Search' },
  { key: 'starred', icon: StarIcon, label: 'Starred' },
  { key: 'palette', icon: PaletteIcon, label: 'Style' },
  { key: 'settings', icon: SettingsIcon, label: 'Settings' },
];

export function DockScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [tab3, setTab3] = useState('home');
  const [tab4, setTab4] = useState('home');
  const [tab5, setTab5] = useState('home');
  const [tabMain, setTabMain] = useState('home');
  const [tabSingle, setTabSingle] = useState('');

  return (
    <ScreenLayout
      title="Dock"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="3 Items">
        <Text variant="caption" color="textTertiary" style={styles.hint}>
          Tap to switch active item
        </Text>
        <View style={styles.dockContainer}>
          <Dock
            items={THREE_ITEMS}
            activeKey={tab3}
            onChange={setTab3}
            testID="floating-dock-3"
          />
        </View>
      </ShowcaseSection>

      <ShowcaseSection title="4 Items">
        <View style={styles.dockContainer}>
          <Dock
            items={FOUR_ITEMS}
            activeKey={tab4}
            onChange={setTab4}
            testID="floating-dock-4"
          />
        </View>
      </ShowcaseSection>

      <ShowcaseSection title="5 Items">
        <View style={styles.dockContainer}>
          <Dock
            items={FIVE_ITEMS}
            activeKey={tab5}
            onChange={setTab5}
            testID="floating-dock-5"
          />
        </View>
      </ShowcaseSection>

      <ShowcaseSection title="Single Item">
        <Text variant="caption" color="textTertiary" style={styles.hint}>
          Great for a standalone floating action
        </Text>
        <View style={styles.dockContainer}>
          <Dock
            items={[{ key: 'add', icon: PlusIcon, label: 'Add' }]}
            activeKey={tabSingle}
            onChange={setTabSingle}
            testID="floating-dock-single"
          />
        </View>
      </ShowcaseSection>

      <ShowcaseSection title="Two Docks Together">
        <Text variant="caption" color="textTertiary" style={styles.hint}>
          Main nav + floating action side by side
        </Text>
        <View style={styles.dockContainer}>
          <Row gap="md" align="center">
            <Dock
              items={[
                { key: 'home', icon: InboxIcon, label: 'Home' },
                { key: 'search', icon: SearchIcon, label: 'Search' },
                { key: 'starred', icon: StarIcon, label: 'Starred' },
              ]}
              activeKey={tabMain}
              onChange={setTabMain}
              testID="floating-dock-main"
            />
            <Dock
              items={[{ key: 'night', icon: MoonIcon, label: 'Mode' }]}
              testID="floating-dock-action"
            />
          </Row>
        </View>
      </ShowcaseSection>

      <ShowcaseSection title="With Disabled Item" last>
        <View style={styles.dockContainer}>
          <Dock
            items={[
              { key: 'home', icon: InboxIcon, label: 'Home' },
              {
                key: 'search',
                icon: SearchIcon,
                label: 'Search',
                disabled: true,
              },
              { key: 'settings', icon: SettingsIcon, label: 'Settings' },
            ]}
            activeKey="home"
            testID="floating-dock-disabled"
          />
        </View>
      </ShowcaseSection>

      <Stack gap="sm" style={styles.usage}>
        <Text variant="sectionHeader" color="textTertiary">
          USAGE NOTE
        </Text>
        <Text variant="caption" color="textSecondary">
          In production, position the dock absolutely above the safe area:
        </Text>
        <View
          style={[
            styles.codeBlock,
            { backgroundColor: theme.colors.surfaceSecondary },
          ]}
        >
          <Text variant="captionSmall" color="textSecondary">
            {
              "style={{\n  position: 'absolute',\n  bottom: insets.bottom + spacing.xl,\n  alignSelf: 'center',\n}}"
            }
          </Text>
        </View>
      </Stack>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  dockContainer: {
    alignItems: 'flex-start',
    paddingVertical: spacing.sm,
  },
  hint: {
    marginBottom: spacing.sm,
  },
  usage: {
    marginTop: spacing.lg,
    paddingTop: spacing.lg,
  },
  codeBlock: {
    borderRadius: spacing.sm,
    padding: spacing.md,
  },
});
