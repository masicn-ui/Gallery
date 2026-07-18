import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Row, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { Tag } from '../../../shared/components/Tag';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { VariantRow } from '../../shared/VariantRow';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function TagScreen() {
  const navigation = useNavigation();
  const [tags, setTags] = useState([
    'React Native',
    'TypeScript',
    'Design System',
  ]);

  const removeTag = (label: string) => {
    setTags(prev => prev.filter(t => t !== label));
  };

  return (
    <ScreenLayout
      title="Tag"
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
        <VariantRow wrap>
          <Tag label="Default" variant="default" />
          <Tag label="Success" variant="success" />
          <Tag label="Warning" variant="warning" />
          <Tag label="Error" variant="error" />
          <Tag label="Info" variant="info" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <VariantRow>
          <Tag label="Small" size="sm" />
          <Tag label="Medium" size="md" />
          <Tag label="Large" size="lg" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Removable">
        <Row gap="sm" style={styles.row}>
          {tags.map(tag => (
            <Tag
              key={tag}
              label={tag}
              removable
              onRemove={() => removeTag(tag)}
            />
          ))}
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="All Sizes Removable" last>
        <VariantRow>
          <Tag
            label="Small"
            size="sm"
            variant="info"
            removable
            onRemove={() => {}}
          />
          <Tag
            label="Medium"
            size="md"
            variant="success"
            removable
            onRemove={() => {}}
          />
          <Tag
            label="Large"
            size="lg"
            variant="warning"
            removable
            onRemove={() => {}}
          />
        </VariantRow>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  row: { paddingHorizontal: spacing.xl, flexWrap: 'wrap' },
});
