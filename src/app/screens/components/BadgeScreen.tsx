import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeToggle, iconSizes } from '../../../masicn';
import { Badge } from '../../../shared/components/Badge';
import { Avatar } from '../../../shared/components/Avatar';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { VariantRow } from '../../shared/VariantRow';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function BadgeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenLayout
      title="Badge"
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
        <VariantRow>
          <Badge variant="error" label="Error" />
          <Badge variant="success" label="Success" />
          <Badge variant="warning" label="Warning" />
          <Badge variant="info" label="Info" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <VariantRow>
          <Badge variant="error" label="sm" size="sm" />
          <Badge variant="error" label="md" size="md" />
          <Badge variant="error" label="lg" size="lg" />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="Circular">
        <VariantRow>
          <Badge variant="error" label="3" circular />
          <Badge variant="success" label="12" circular />
          <Badge variant="warning" label="99" circular />
          <Badge variant="info" label="100" circular />
        </VariantRow>
      </ShowcaseSection>

      <ShowcaseSection title="With Avatar" last>
        <VariantRow>
          <Avatar
            initials="AB"
            size="lg"
            badge={<Badge variant="success" circular label="" size="sm" />}
          />
          <Avatar
            initials="CD"
            color="secondary"
            size="lg"
            badge={<Badge variant="error" circular label="3" size="sm" />}
          />
          <Avatar
            initials="EF"
            color="tertiary"
            size="lg"
            badge={<Badge variant="warning" circular label="" size="sm" />}
          />
        </VariantRow>
      </ShowcaseSection>
    </ScreenLayout>
  );
}
