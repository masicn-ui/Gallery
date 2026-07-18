import React, { useState } from 'react';
import { Stack, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { ChipInput } from '../../../shared/blocks/ChipInput';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ChipInputScreen() {
  const navigation = useNavigation();
  const [tags, setTags] = useState<string[]>(['React Native', 'TypeScript']);
  const [skills, setSkills] = useState<string[]>([]);
  const [limited, setLimited] = useState<string[]>(['Tag 1', 'Tag 2']);

  return (
    <ScreenLayout
      title="Chip Input"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Sizes">
        <Stack gap="md">
          <ChipInput
            size="sm"
            label="Small"
            value={['Tag']}
            onValueChange={() => {}}
          />
          <ChipInput
            size="md"
            label="Medium (default)"
            value={['Tag']}
            onValueChange={() => {}}
          />
          <ChipInput
            size="lg"
            label="Large"
            value={['Tag']}
            onValueChange={() => {}}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Basic">
        <ChipInput
          label="Tags"
          value={tags}
          onValueChange={setTags}
          placeholder="Add a tag…"
          helperText="Type and press Enter or comma to add"
        />
        <Text variant="caption" color="textSecondary">
          Tags: {tags.join(', ') || 'none'}
        </Text>
      </ShowcaseSection>

      <ShowcaseSection title="Empty Start">
        <ChipInput
          label="Skills"
          value={skills}
          onValueChange={setSkills}
          placeholder="Add skills…"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Max Tags (3)">
        <ChipInput
          label="Select up to 3 categories"
          value={limited}
          onValueChange={setLimited}
          maxTags={3}
          helperText="Maximum 3 tags allowed"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <ChipInput
          label="Required tags"
          value={[]}
          onValueChange={() => {}}
          error="At least one tag is required"
          placeholder="Add a tag…"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <ChipInput
          label="Read-only tags"
          value={['Design', 'Engineering', 'Product']}
          onValueChange={() => {}}
          disabled
          helperText="Tags cannot be modified"
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
