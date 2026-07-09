import React from 'react';
import { Stack, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { Image } from '../../../shared/components/Image';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const SAMPLE_IMAGE = { uri: 'https://picsum.photos/400/300' };
const SAMPLE_PORTRAIT = { uri: 'https://picsum.photos/300/400' };

export function ImageScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Image"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Aspect Ratios">
        <Stack gap="md">
          <Text variant="caption" color="textSecondary">
            16:9
          </Text>
          <Image source={SAMPLE_IMAGE} aspectRatio="16:9" borderRadius="lg" />
          <Text variant="caption" color="textSecondary">
            4:3
          </Text>
          <Image source={SAMPLE_IMAGE} aspectRatio="4:3" borderRadius="md" />
          <Text variant="caption" color="textSecondary">
            square
          </Text>
          <Image source={SAMPLE_IMAGE} aspectRatio="square" borderRadius="md" />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Fit Modes">
        <Stack gap="md">
          <Text variant="caption" color="textSecondary">
            cover (default)
          </Text>
          <Image
            source={SAMPLE_PORTRAIT}
            aspectRatio="16:9"
            fit="cover"
            borderRadius="md"
          />
          <Text variant="caption" color="textSecondary">
            contain
          </Text>
          <Image
            source={SAMPLE_PORTRAIT}
            aspectRatio="16:9"
            fit="contain"
            borderRadius="md"
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Overlay">
        <Image
          source={SAMPLE_IMAGE}
          aspectRatio="16:9"
          borderRadius="lg"
          overlay
        />
      </ShowcaseSection>

      <ShowcaseSection title="Error State" last>
        <Image
          source={{ uri: 'https://invalid-url.example.com/image.jpg' }}
          aspectRatio="16:9"
          borderRadius="md"
          errorMessage="Failed to load image"
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
