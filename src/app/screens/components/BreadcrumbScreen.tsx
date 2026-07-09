import React, { useState } from 'react';
import { Text, ThemeToggle, iconSizes } from '../../../masicn';
import { Breadcrumb } from '../../../shared/blocks/Breadcrumb';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function BreadcrumbScreen() {
  const navigation = useNavigation();
  const [lastPressed, setLastPressed] = useState<string | null>(null);

  return (
    <ScreenLayout
      title="Breadcrumb"
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
        <Breadcrumb
          items={[
            { label: 'Home', onPress: () => setLastPressed('Home') },
            { label: 'Settings', onPress: () => setLastPressed('Settings') },
            { label: 'Profile' },
          ]}
        />
        {lastPressed && (
          <Text variant="caption" color="textSecondary">
            Pressed: {lastPressed}
          </Text>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="Long Trail">
        <Breadcrumb
          items={[
            { label: 'Home', onPress: () => setLastPressed('Home') },
            { label: 'Products', onPress: () => setLastPressed('Products') },
            {
              label: 'Electronics',
              onPress: () => setLastPressed('Electronics'),
            },
            { label: 'Phones', onPress: () => setLastPressed('Phones') },
            { label: 'iPhone 15 Pro' },
          ]}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Separator (/)">
        <Breadcrumb
          items={[
            { label: 'Root', onPress: () => setLastPressed('Root') },
            { label: 'Documents', onPress: () => setLastPressed('Documents') },
            { label: 'Resume.pdf' },
          ]}
          separator={
            <Text variant="bodySmall" color="textTertiary">
              {' / '}
            </Text>
          }
        />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Separator (→)">
        <Breadcrumb
          items={[
            {
              label: 'Onboarding',
              onPress: () => setLastPressed('Onboarding'),
            },
            { label: 'Details', onPress: () => setLastPressed('Details') },
            { label: 'Confirm' },
          ]}
          separator={
            <Text variant="caption" color="textTertiary">
              {' → '}
            </Text>
          }
        />
      </ShowcaseSection>

      <ShowcaseSection title="Single Item (current page only)" last>
        <Breadcrumb items={[{ label: 'Dashboard' }]} />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
