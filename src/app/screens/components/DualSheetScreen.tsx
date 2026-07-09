import React, { useRef, useState } from 'react';
import { Stack, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { DualSheet, type DualSheetRef } from '../../../shared/blocks/DualSheet';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const NAV_ITEMS = [
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Profile',
  'Settings',
];

export function DualSheetScreen() {
  const navigation = useNavigation();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const imperativeRef = useRef<DualSheetRef>(null);

  return (
    <ScreenLayout
      title="Dual Sheet"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Navigation + Detail (1/3 + 2/3)">
        <Text variant="bodySmall" color="textSecondary">
          Left panel is a narrow nav menu; right panel is the detail area. Swipe
          either panel or tap the backdrop to dismiss.
        </Text>
        <Button variant="primary" onPress={() => setVisible1(true)}>
          Open Split Sheet
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Independent Dismiss (onCloseLeft / onCloseRight)">
        <Text variant="bodySmall" color="textSecondary">
          Each panel can be independently swiped to dismiss. Both panels share
          the same backdrop tap.
        </Text>
        <Button variant="outline" onPress={() => setVisible2(true)}>
          Open with Independent Dismiss
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Imperative Ref API" last>
        <Text variant="bodySmall" color="textSecondary">
          Open and close programmatically via a ref — no visible prop needed.
        </Text>
        <Stack gap="sm">
          <Button
            variant="secondary"
            onPress={() => imperativeRef.current?.open()}
          >
            Open via Ref
          </Button>
          <Button
            variant="ghost"
            onPress={() => imperativeRef.current?.close()}
          >
            Close via Ref
          </Button>
        </Stack>
      </ShowcaseSection>

      {/* Sheet 1 — basic */}
      <DualSheet
        visible={visible1}
        onClose={() => setVisible1(false)}
        leftContent={
          <Stack gap="sm">
            <Text variant="h4">Navigation</Text>
            {NAV_ITEMS.map(item => (
              <Text key={item} variant="body" color="textSecondary">
                {item}
              </Text>
            ))}
          </Stack>
        }
        rightContent={
          <Stack gap="md">
            <Text variant="h4">Main Content</Text>
            <Text variant="body" color="textSecondary">
              The wider right panel is ideal for detail views, forms, or primary
              content.
            </Text>
            <Button variant="primary" onPress={() => setVisible1(false)}>
              Close
            </Button>
          </Stack>
        }
      />

      {/* Sheet 2 — independent dismiss */}
      <DualSheet
        visible={visible2}
        onClose={() => setVisible2(false)}
        onCloseLeft={() => setVisible2(false)}
        onCloseRight={() => setVisible2(false)}
        leftContent={
          <Stack gap="sm">
            <Text variant="label" color="textSecondary">
              FILTERS
            </Text>
            {['All', 'Active', 'Archived', 'Deleted'].map(item => (
              <Text key={item} variant="body" color="textSecondary">
                {item}
              </Text>
            ))}
          </Stack>
        }
        rightContent={
          <Stack gap="md">
            <Text variant="h4">Results</Text>
            <Text variant="body" color="textSecondary">
              Swipe the left panel to dismiss it alone, or swipe this panel to
              dismiss it alone.
            </Text>
            <Button variant="primary" onPress={() => setVisible2(false)}>
              Close Both
            </Button>
          </Stack>
        }
      />

      {/* Sheet 3 — imperative */}
      <DualSheet
        ref={imperativeRef}
        onClose={() => {}}
        leftContent={
          <Stack gap="sm">
            <Text variant="h4">Ref API</Text>
            <Text variant="bodySmall" color="textSecondary">
              Opened imperatively.
            </Text>
          </Stack>
        }
        rightContent={
          <Stack gap="md">
            <Text variant="h4">Imperative Control</Text>
            <Text variant="body" color="textSecondary">
              Call ref.current.close() to dismiss.
            </Text>
            <Button
              variant="primary"
              onPress={() => imperativeRef.current?.close()}
            >
              Close via Ref
            </Button>
          </Stack>
        }
      />
    </ScreenLayout>
  );
}
