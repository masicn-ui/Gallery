import React from 'react';
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
import { Tooltip } from '../../../shared/components/Tooltip';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function TooltipScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <ScreenLayout
      title="Tooltip"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Toolbar Actions">
        <Text variant="caption" color="textSecondary">
          Press and hold any button to reveal its tooltip.
        </Text>
        <Row gap="sm" style={styles.centered}>
          <Tooltip content="Save changes (⌘S)">
            <Button variant="primary" onPress={() => {}}>
              Save
            </Button>
          </Tooltip>
          <Tooltip content="Discard all unsaved edits">
            <Button variant="outline" onPress={() => {}}>
              Cancel
            </Button>
          </Tooltip>
          <Tooltip content="Preview the current document">
            <Button variant="ghost" onPress={() => {}}>
              Preview
            </Button>
          </Tooltip>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Icon Buttons">
        <Text variant="caption" color="textSecondary">
          Tooltips are especially useful on icon-only controls without visible
          labels.
        </Text>
        <Row gap="sm" style={styles.centered}>
          <Tooltip content="Add item">
            <Button variant="outline" size="sm" onPress={() => {}}>
              ＋
            </Button>
          </Tooltip>
          <Tooltip content="Edit item">
            <Button variant="outline" size="sm" onPress={() => {}}>
              ✏
            </Button>
          </Tooltip>
          <Tooltip content="Copy to clipboard">
            <Button variant="outline" size="sm" onPress={() => {}}>
              📋
            </Button>
          </Tooltip>
          <Tooltip content="Delete permanently">
            <Button variant="destructive" size="sm" onPress={() => {}}>
              🗑
            </Button>
          </Tooltip>
          <Tooltip content="Share with others">
            <Button variant="outline" size="sm" onPress={() => {}}>
              ↗
            </Button>
          </Tooltip>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Long Description">
        <Text variant="caption" color="textSecondary">
          Tooltips wrap naturally for longer explanatory content.
        </Text>
        <Row gap="sm" style={styles.centered}>
          <Tooltip content="This action will permanently delete your account and all associated data. It cannot be undone.">
            <Button variant="destructive" onPress={() => {}}>
              Delete Account
            </Button>
          </Tooltip>
          <Tooltip content="Enable two-factor authentication to add an extra layer of security to your account.">
            <Button variant="outline" onPress={() => {}}>
              Enable 2FA
            </Button>
          </Tooltip>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="On Custom Elements" last>
        <Text variant="caption" color="textSecondary">
          Tooltips wrap any pressable — not just buttons.
        </Text>
        <Row gap="md" style={styles.centered}>
          <Tooltip content="Profile photo">
            <View
              style={[
                styles.avatar,
                { backgroundColor: theme.colors.primaryContainer },
              ]}
            >
              <Text variant="h3" color="primary">
                JD
              </Text>
            </View>
          </Tooltip>
          <Stack gap="xxs">
            <Tooltip content="Click to change your display name">
              <View
                style={[
                  styles.tag,
                  { backgroundColor: theme.colors.surfaceSecondary },
                ]}
              >
                <Text variant="label">Jane Doe</Text>
              </View>
            </Tooltip>
          </Stack>
          <Tooltip content="Account status: verified">
            <View
              style={[styles.badge, { backgroundColor: theme.colors.success }]}
            >
              <Text
                variant="caption"
                style={{ color: theme.colors.textInverse }}
              >
                ✓
              </Text>
            </View>
          </Tooltip>
        </Row>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  centered: { justifyContent: 'center' },
  avatar: {
    width: spacing.xxxl,
    height: spacing.xxxl,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.sm,
  },
  badge: {
    width: spacing.xl,
    height: spacing.xl,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
