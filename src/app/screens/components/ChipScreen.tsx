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
  SearchIcon,
  CheckIcon,
  InboxIcon,
  SettingsIcon,
} from '../../../masicn';
import { Chip } from '../../../shared/components/Chip';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { VariantRow } from '../../shared/VariantRow';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const FILTERS = ['design', 'development', 'animation', 'testing', 'data'];

export function ChipScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'design',
    'animation',
  ]);
  const [tags, setTags] = useState([
    'TypeScript',
    'React Native',
    'Design',
    'Animation',
  ]);

  const toggleFilter = (key: string) =>
    setSelectedFilters(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key],
    );

  return (
    <ScreenLayout
      title="Chip"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Variants">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Filled uses a surface background; outline shows a bordered chip.
        </Text>
        <VariantRow>
          <Chip label="Filled" variant="filled" />
          <Chip label="Outline" variant="outline" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Selected State">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Selection highlights with the primary brand colour.
        </Text>
        <VariantRow>
          <Chip label="Filled" variant="filled" />
          <Chip label="Filled · on" variant="filled" selected />
          <Chip label="Outline" variant="outline" />
          <Chip label="Outline · on" variant="outline" selected />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="With Icon">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Leading icons reinforce the chip's meaning at a glance.
        </Text>
        <VariantRow wrap>
          <Chip
            label="Starred"
            icon={<StarIcon size={12} color={theme.colors.textSecondary} />}
            variant="outline"
          />
          <Chip
            label="Starred"
            icon={<StarIcon size={12} color={theme.colors.primary} />}
            variant="outline"
            selected
          />
          <Chip
            label="Search"
            icon={<SearchIcon size={12} color={theme.colors.textSecondary} />}
          />
          <Chip
            label="Done"
            icon={<CheckIcon size={12} color={theme.colors.onPrimary} />}
            selected
          />
          <Chip
            label="Inbox"
            icon={<InboxIcon size={12} color={theme.colors.textSecondary} />}
          />
          <Chip
            label="Settings"
            icon={<SettingsIcon size={12} color={theme.colors.textSecondary} />}
            variant="outline"
          />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Removable Tags">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Tap × to remove — common for skill or topic lists.
        </Text>
        <VariantRow wrap>
          {tags.map(tag => (
            <Chip
              key={tag}
              label={tag}
              onRemove={() => setTags(prev => prev.filter(t => t !== tag))}
            />
          ))}
          {tags.length === 0 && (
            <Text variant="captionSmall" color="textTertiary">
              All tags removed
            </Text>
          )}
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Multi-select Filter">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Tap to toggle — multiple filters can be active at once.
        </Text>
        <Stack gap="sm">
          <VariantRow wrap>
            {FILTERS.map(f => (
              <Chip
                key={f}
                label={f}
                variant="outline"
                selected={selectedFilters.includes(f)}
                onPress={() => toggleFilter(f)}
              />
            ))}
          </VariantRow>
          <Text variant="captionSmall" color="textTertiary">
            Active: {selectedFilters.join(', ') || 'none'}
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled chips are visually muted and non-interactive.
        </Text>
        <VariantRow>
          <Chip label="Disabled" variant="filled" disabled />
          <Chip label="Disabled outline" variant="outline" disabled />
          <Chip label="Disabled selected" variant="filled" selected disabled />
        </VariantRow>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
