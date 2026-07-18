import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Row, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { ActionSheet } from '../../../shared/blocks/ActionSheet';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ActionSheetScreen() {
  const navigation = useNavigation();
  const [basic, setBasic] = useState(false);
  const [withHeader, setWithHeader] = useState(false);
  const [withIcons, setWithIcons] = useState(false);
  const [withDisabled, setWithDisabled] = useState(false);
  const [noCancel, setNoCancel] = useState(false);
  const [manyItems, setManyItems] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const log = (label: string) => setLastAction(label);

  return (
    <ScreenLayout
      title="Action Sheet"
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
          Simple list of labeled actions. Selecting any row fires its callback
          and dismisses the sheet.
        </Text>
        <Button variant="primary" onPress={() => setBasic(true)}>
          Open Action Sheet
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="With Title & Message">
        <Text variant="caption" color="textSecondary">
          Optional title and message provide context above the options.
        </Text>
        <Button variant="outline" onPress={() => setWithHeader(true)}>
          With Header
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons">
        <Text variant="caption" color="textSecondary">
          Pass any React element as icon — emoji, icon component, etc.
        </Text>
        <Button variant="outline" onPress={() => setWithIcons(true)}>
          With Icons
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled Options">
        <Text variant="caption" color="textSecondary">
          disabled items are dimmed and unresponsive.
        </Text>
        <Button variant="outline" onPress={() => setWithDisabled(true)}>
          With Disabled Item
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="No Cancel Button">
        <Text variant="caption" color="textSecondary">
          showCancel={false} hides the cancel row — only a backdrop tap
          dismisses.
        </Text>
        <Button variant="ghost" onPress={() => setNoCancel(true)}>
          No Cancel
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Many Items" last>
        <Text variant="caption" color="textSecondary">
          Long option lists scroll inside the sheet.
        </Text>
        <Row gap="sm">
          <Button
            variant="outline"
            onPress={() => setManyItems(true)}
            style={styles.flex1}
          >
            Many Items
          </Button>
          {lastAction && (
            <Text variant="caption" color="textSecondary" style={styles.flex1}>
              Selected: {lastAction}
            </Text>
          )}
        </Row>
      </ShowcaseSection>

      {/* ── Sheets ─────────────────────────────────────────────────────────── */}

      <ActionSheet
        visible={basic}
        onClose={() => setBasic(false)}
        options={[
          { label: 'Edit', onPress: () => log('Edit') },
          { label: 'Share', onPress: () => log('Share') },
          { label: 'Delete', destructive: true, onPress: () => log('Delete') },
        ]}
      />

      <ActionSheet
        visible={withHeader}
        onClose={() => setWithHeader(false)}
        title="Choose an action"
        message="What would you like to do with this item?"
        options={[
          { label: 'Edit', onPress: () => log('Edit') },
          { label: 'Share', onPress: () => log('Share') },
          { label: 'Archive', onPress: () => log('Archive') },
          { label: 'Delete', destructive: true, onPress: () => log('Delete') },
        ]}
      />

      <ActionSheet
        visible={withIcons}
        onClose={() => setWithIcons(false)}
        title="Share via"
        options={[
          {
            label: 'Copy link',
            icon: <Text>🔗</Text>,
            onPress: () => log('Copy'),
          },
          {
            label: 'Messages',
            icon: <Text>💬</Text>,
            onPress: () => log('Messages'),
          },
          {
            label: 'Email',
            icon: <Text>✉️</Text>,
            onPress: () => log('Email'),
          },
          {
            label: 'AirDrop',
            icon: <Text>📡</Text>,
            onPress: () => log('AirDrop'),
          },
        ]}
      />

      <ActionSheet
        visible={withDisabled}
        onClose={() => setWithDisabled(false)}
        title="Export options"
        options={[
          { label: 'Export as PDF', onPress: () => log('PDF') },
          {
            label: 'Export as CSV (Pro only)',
            disabled: true,
            onPress: () => {},
          },
          { label: 'Export as JSON', onPress: () => log('JSON') },
          {
            label: 'Delete export',
            destructive: true,
            onPress: () => log('Delete'),
          },
        ]}
      />

      <ActionSheet
        visible={noCancel}
        onClose={() => setNoCancel(false)}
        showCancel={false}
        title="Select a theme"
        options={[
          { label: 'Light', onPress: () => log('Light') },
          { label: 'Dark', onPress: () => log('Dark') },
          { label: 'System default', onPress: () => log('System') },
        ]}
      />

      <ActionSheet
        visible={manyItems}
        onClose={() => setManyItems(false)}
        title="Move to folder"
        options={[
          'Inbox',
          'Drafts',
          'Sent',
          'Starred',
          'Archive',
          'Spam',
          'Trash',
          'Work',
          'Personal',
          'Travel',
        ].map(folder => ({ label: folder, onPress: () => log(folder) }))}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
});
