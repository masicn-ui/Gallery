import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Stack,
  Text,
  Row,
  radius,
  spacing,
  useTheme,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { ContextMenu } from '../../../shared/components/ContextMenu';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ContextMenuScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <ScreenLayout
      title="Context Menu"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Card with Actions">
        <Text variant="caption" color="textSecondary">
          Long press the card to reveal contextual actions. The selection
          highlight is clipped cleanly per item.
        </Text>
        <ContextMenu
          items={[
            { label: 'Edit', value: 'edit', icon: '✏️' },
            { label: 'Share', value: 'share', icon: '↗️' },
            { label: 'Duplicate', value: 'duplicate', icon: '📋' },
            { label: 'Delete', value: 'delete', icon: '🗑', destructive: true },
          ]}
          onSelect={setLastAction}
          accessibilityLabel="Project proposal.pdf"
        >
          <View
            style={[
              styles.card,
              { backgroundColor: theme.colors.surfaceSecondary },
            ]}
          >
            <Text variant="body">Project proposal.pdf</Text>
            <Text variant="caption" color="textTertiary">
              Hold for actions
            </Text>
          </View>
        </ContextMenu>
        {lastAction && (
          <Text variant="caption" color="textSecondary">
            Last action: {lastAction}
          </Text>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="Message Bubble">
        <Text variant="caption" color="textSecondary">
          Context menus work on any element — here on a chat-style bubble.
        </Text>
        <ContextMenu
          items={[
            { label: 'Reply', value: 'reply', icon: '↩️' },
            { label: 'Copy text', value: 'copy', icon: '📄' },
            { label: 'Forward', value: 'forward', icon: '↪️' },
            {
              label: 'Delete message',
              value: 'delete',
              icon: '🗑',
              destructive: true,
            },
          ]}
          onSelect={setLastAction}
          accessibilityLabel="Chat message"
        >
          <View
            style={[styles.bubble, { backgroundColor: theme.colors.primary }]}
          >
            <Text variant="body" style={{ color: theme.colors.textInverse }}>
              Hey, did you review the design?
            </Text>
          </View>
        </ContextMenu>
      </ShowcaseSection>

      <ShowcaseSection title="With Disabled Item">
        <Text variant="caption" color="textSecondary">
          Disabled items are dimmed and cannot be tapped.
        </Text>
        <ContextMenu
          items={[
            { label: 'Allowed', value: 'ok', icon: '✓' },
            { label: 'Pro only', value: 'pro', icon: '⭐', disabled: true },
            { label: 'Delete', value: 'del', icon: '🗑', destructive: true },
          ]}
          onSelect={setLastAction}
          accessibilityLabel="Free plan item"
        >
          <View
            style={[
              styles.card,
              { backgroundColor: theme.colors.surfaceSecondary },
            ]}
          >
            <Text variant="body">Free plan item</Text>
            <Text variant="caption" color="textTertiary">
              One option is disabled
            </Text>
          </View>
        </ContextMenu>
      </ShowcaseSection>

      <ShowcaseSection title="List Item" last>
        <Text variant="caption" color="textSecondary">
          Long pressing a list row is a natural interaction for managing items.
        </Text>
        <Stack gap="xxs">
          {['Alice Johnson', 'Bob Smith', 'Carol White'].map(name => (
            <ContextMenu
              key={name}
              items={[
                { label: 'View profile', value: 'view', icon: '👤' },
                { label: 'Send message', value: 'message', icon: '💬' },
                {
                  label: 'Remove contact',
                  value: 'remove',
                  icon: '🗑',
                  destructive: true,
                },
              ]}
              onSelect={setLastAction}
              accessibilityLabel={name}
            >
              <Row
                gap="md"
                style={[
                  styles.listRow,
                  { borderBottomColor: theme.colors.borderSecondary },
                ]}
              >
                <View
                  style={[
                    styles.avatar,
                    { backgroundColor: theme.colors.primaryContainer },
                  ]}
                >
                  <Text variant="label" color="primary">
                    {name[0]}
                  </Text>
                </View>
                <Text variant="body">{name}</Text>
              </Row>
            </ContextMenu>
          ))}
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
    borderRadius: radius.md,
    alignItems: 'center',
    gap: spacing.xs,
  },
  bubble: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    maxWidth: '80%',
  },
  listRow: {
    paddingVertical: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  avatar: {
    width: spacing.xxl,
    height: spacing.xxl,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
