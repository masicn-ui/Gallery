import React, { useState } from 'react';
import { Text, Row, ThemeToggle, iconSizes } from '../../../masicn';
import { Menu } from '../../../shared/components/Menu';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function MenuScreen() {
  const navigation = useNavigation();
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <ScreenLayout
      title="Menu"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Basic">
        <Text variant="caption" color="textSecondary">
          Tap the button to open an anchored dropdown. Selecting an item closes
          the menu.
        </Text>
        <Row gap="sm">
          <Menu
            items={[
              { label: 'Edit', value: 'edit', icon: '✏️' },
              { label: 'Share', value: 'share', icon: '↗️' },
              {
                label: 'Delete',
                value: 'delete',
                icon: '🗑',
                destructive: true,
              },
            ]}
            onSelect={setLastAction}
          >
            <Button variant="outline" onPress={() => {}}>
              Open Menu ⋯
            </Button>
          </Menu>
        </Row>
        {lastAction && (
          <Text variant="caption" color="textSecondary">
            Selected: {lastAction}
          </Text>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="With Title">
        <Text variant="caption" color="textSecondary">
          A title prop adds a non-interactive header above the options.
        </Text>
        <Row gap="sm">
          <Menu
            items={[
              { label: 'Edit', value: 'edit', icon: '✏️' },
              { label: 'Share', value: 'share', icon: '↗️' },
              { label: 'Archive', value: 'archive', icon: '📦' },
              {
                label: 'Delete',
                value: 'delete',
                icon: '🗑',
                destructive: true,
              },
            ]}
            onSelect={setLastAction}
            title="Post actions"
          >
            <Button variant="primary" onPress={() => {}}>
              Actions ⋯
            </Button>
          </Menu>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Rich Items with Descriptions">
        <Text variant="caption" color="textSecondary">
          Add a description to each item for extra context.
        </Text>
        <Row gap="sm">
          <Menu
            items={[
              {
                label: 'Edit profile',
                value: 'edit',
                icon: '👤',
                description: 'Change your name and photo',
              },
              {
                label: 'Privacy',
                value: 'privacy',
                icon: '🔒',
                description: 'Control who sees your content',
              },
              {
                label: 'Notifications',
                value: 'notif',
                icon: '🔔',
                description: 'Manage push & email alerts',
              },
              {
                label: 'Log out',
                value: 'logout',
                icon: '👋',
                destructive: true,
              },
            ]}
            onSelect={setLastAction}
            title="Account"
          >
            <Button variant="secondary" onPress={() => {}}>
              Account ⋯
            </Button>
          </Menu>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="With Disabled Item" last>
        <Text variant="caption" color="textSecondary">
          Disabled items are dimmed and cannot be selected.
        </Text>
        <Row gap="sm">
          <Menu
            items={[
              { label: 'Copy', value: 'copy', icon: '📋' },
              { label: 'Paste', value: 'paste', icon: '📌', disabled: true },
              { label: 'Cut', value: 'cut', icon: '✂️' },
              {
                label: 'Delete',
                value: 'delete',
                icon: '🗑',
                destructive: true,
              },
            ]}
            onSelect={setLastAction}
            title="Edit"
          >
            <Button variant="ghost" onPress={() => {}}>
              Edit menu ⋯
            </Button>
          </Menu>
        </Row>
      </ShowcaseSection>
    </ScreenLayout>
  );
}
