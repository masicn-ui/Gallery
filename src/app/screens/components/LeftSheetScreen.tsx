import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Row, ThemeToggle, iconSizes } from '../../../masicn';
import {
  LeftSheet,
  type LeftSheetRef,
} from '../../../shared/components/LeftSheet';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

function NavContent({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  return (
    <Stack gap="md">
      <Text variant="h3">{title}</Text>
      <Stack gap="xs">
        {[
          'Home',
          'Explore',
          'Notifications',
          'Messages',
          'Profile',
          'Settings',
        ].map(item => (
          <Text key={item} variant="body" color="textSecondary">
            {item}
          </Text>
        ))}
      </Stack>
      <Button variant="primary" onPress={onClose}>
        Close
      </Button>
    </Stack>
  );
}

export function LeftSheetScreen() {
  const navigation = useNavigation();
  const [basic, setBasic] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [wide, setWide] = useState(false);
  const [noBackdrop, setNoBackdrop] = useState(false);
  const imperativeRef = useRef<LeftSheetRef>(null);

  return (
    <ScreenLayout
      title="Left Sheet"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Default (75%)">
        <Text variant="caption" color="textSecondary">
          Slides in from the left at 75% screen width. Swipe left or tap
          backdrop to dismiss.
        </Text>
        <Button variant="primary" onPress={() => setBasic(true)}>
          Open Left Sheet
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Width Variants">
        <Text variant="caption" color="textSecondary">
          width prop as a fraction of screen width (0–1).
        </Text>
        <Row gap="sm">
          <Button
            variant="outline"
            onPress={() => setNarrow(true)}
            style={styles.flex1}
          >
            50% Width
          </Button>
          <Button
            variant="outline"
            onPress={() => setWide(true)}
            style={styles.flex1}
          >
            90% Width
          </Button>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="No Backdrop">
        <Text variant="caption" color="textSecondary">
          hideBackdrop removes the semi-transparent overlay behind the sheet.
        </Text>
        <Button variant="outline" onPress={() => setNoBackdrop(true)}>
          Open Without Backdrop
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Imperative API" last>
        <Text variant="caption" color="textSecondary">
          Open and close programmatically via a ref.
        </Text>
        <Button variant="ghost" onPress={() => imperativeRef.current?.open()}>
          Open via Ref
        </Button>
      </ShowcaseSection>

      <LeftSheet visible={basic} onClose={() => setBasic(false)}>
        <NavContent title="Navigation" onClose={() => setBasic(false)} />
      </LeftSheet>

      <LeftSheet visible={narrow} onClose={() => setNarrow(false)} width={0.5}>
        <NavContent title="Narrow (50%)" onClose={() => setNarrow(false)} />
      </LeftSheet>

      <LeftSheet visible={wide} onClose={() => setWide(false)} width={0.9}>
        <NavContent title="Wide (90%)" onClose={() => setWide(false)} />
      </LeftSheet>

      <LeftSheet
        visible={noBackdrop}
        onClose={() => setNoBackdrop(false)}
        hideBackdrop
      >
        <NavContent title="No Backdrop" onClose={() => setNoBackdrop(false)} />
      </LeftSheet>

      <LeftSheet ref={imperativeRef} onClose={() => {}}>
        <NavContent
          title="Imperative Ref"
          onClose={() => imperativeRef.current?.close()}
        />
      </LeftSheet>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
});
