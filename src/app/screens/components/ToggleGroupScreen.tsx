import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Text,
  spacing,
  ThemeToggle,
  iconSizes,
  useTheme,
  StarIcon,
  InboxIcon,
  CheckIcon,
  SettingsIcon,
} from '../../../masicn';
import { ToggleGroup } from '../../../shared/components/ToggleGroup';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ToggleGroupScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const [align, setAlign] = useState('center');
  const [formats, setFormats] = useState<string[]>(['bold']);
  const [view, setView] = useState('inbox');
  const [sort, setSort] = useState('newest');
  const [days, setDays] = useState<string[]>(['mon', 'wed', 'fri']);

  const c = theme.colors;

  return (
    <ScreenLayout
      title="Toggle Group"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Single Select">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Exactly one button is active at a time — selecting another deselects
          the current.
        </Text>
        <Stack gap="sm">
          <ToggleGroup
            buttons={[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
            ]}
            value={align}
            onValueChange={setAlign}
          />
          <Text variant="captionSmall" color="textTertiary">
            Alignment: {align}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Multi Select">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Any number of buttons can be active — tap to toggle each one
          independently.
        </Text>
        <Stack gap="sm">
          <ToggleGroup
            multi
            buttons={[
              { label: 'Bold', value: 'bold' },
              { label: 'Italic', value: 'italic' },
              { label: 'Underline', value: 'underline' },
              { label: 'Strike', value: 'strike' },
            ]}
            value={formats}
            onValueChange={setFormats}
          />
          <Text variant="captionSmall" color="textTertiary">
            Active: {formats.length > 0 ? formats.join(', ') : 'none'}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons — Single">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Icons sit beside labels — pass color based on selection state for best
          results.
        </Text>
        <Stack gap="sm">
          <ToggleGroup
            buttons={[
              {
                label: 'Inbox',
                value: 'inbox',
                icon: (
                  <InboxIcon
                    size={14}
                    color={view === 'inbox' ? c.primary : c.textSecondary}
                  />
                ),
              },
              {
                label: 'Starred',
                value: 'starred',
                icon: (
                  <StarIcon
                    size={14}
                    color={view === 'starred' ? c.primary : c.textSecondary}
                  />
                ),
              },
              {
                label: 'Done',
                value: 'done',
                icon: (
                  <CheckIcon
                    size={14}
                    color={view === 'done' ? c.primary : c.textSecondary}
                  />
                ),
              },
              {
                label: 'Settings',
                value: 'settings',
                icon: (
                  <SettingsIcon
                    size={14}
                    color={view === 'settings' ? c.primary : c.textSecondary}
                  />
                ),
              },
            ]}
            value={view}
            onValueChange={setView}
          />
          <Text variant="captionSmall" color="textTertiary">
            View: {view}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Multi Select — Days of Week">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Multi-select with full width — buttons stretch to fill the row evenly.
        </Text>
        <Stack gap="sm">
          <ToggleGroup
            multi
            fullWidth
            buttons={[
              { label: 'M', value: 'mon' },
              { label: 'T', value: 'tue' },
              { label: 'W', value: 'wed' },
              { label: 'T', value: 'thu' },
              { label: 'F', value: 'fri' },
              { label: 'S', value: 'sat' },
              { label: 'S', value: 'sun' },
            ]}
            value={days}
            onValueChange={setDays}
          />
          <Text variant="captionSmall" color="textTertiary">
            Repeat on: {days.length > 0 ? days.join(', ') : 'none'}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Full Width — Single">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          fullWidth distributes buttons equally across the available space.
        </Text>
        <ToggleGroup
          fullWidth
          buttons={[
            { label: 'Newest', value: 'newest' },
            { label: 'Popular', value: 'popular' },
            { label: 'Trending', value: 'trending' },
          ]}
          value={sort}
          onValueChange={setSort}
        />
      </ShowcaseSection>

      <ShowcaseSection title="With Disabled Option" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Individual buttons can be disabled while the rest remain interactive.
        </Text>
        <ToggleGroup
          buttons={[
            { label: 'Available', value: 'a' },
            { label: 'Coming soon', value: 'b', disabled: true },
            { label: 'Available', value: 'c' },
          ]}
          value="a"
          onValueChange={() => {}}
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
