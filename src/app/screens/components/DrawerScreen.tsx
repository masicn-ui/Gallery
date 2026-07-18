import React, { useRef, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Stack, Text, Row, ThemeToggle, iconSizes } from '../../../masicn';
import { Drawer, type DrawerRef } from '../../../shared/components/Drawer';
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

function FilterContent({
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
        {['Category', 'Price Range', 'Rating', 'Brand', 'Sort By'].map(item => (
          <Text key={item} variant="body" color="textSecondary">
            {item}
          </Text>
        ))}
      </Stack>
      <Button variant="primary" onPress={onClose}>
        Apply
      </Button>
    </Stack>
  );
}

export function DrawerScreen() {
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [narrowLeft, setNarrowLeft] = useState(false);
  const [wideLeft, setWideLeft] = useState(false);
  const [noBackdrop, setNoBackdrop] = useState(false);
  const imperativeRef = useRef<DrawerRef>(null);

  return (
    <ScreenLayout
      title="Drawer"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Temporary — Left & Right">
        <Text variant="caption" color="textSecondary">
          The default variant. Slides in as a dismissible overlay from either
          edge.
        </Text>
        <Row gap="sm">
          <Button
            variant="primary"
            onPress={() => setLeft(true)}
            style={styles.flex1}
          >
            Left Drawer
          </Button>
          <Button
            variant="outline"
            onPress={() => setRight(true)}
            style={styles.flex1}
          >
            Right Drawer
          </Button>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Width Variants">
        <Text variant="caption" color="textSecondary">
          width prop controls how much of the screen the drawer covers (fraction
          0–1).
        </Text>
        <Row gap="sm">
          <Button
            variant="outline"
            onPress={() => setNarrowLeft(true)}
            style={styles.flex1}
          >
            Narrow (50%)
          </Button>
          <Button
            variant="outline"
            onPress={() => setWideLeft(true)}
            style={styles.flex1}
          >
            Wide (90%)
          </Button>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="No Backdrop">
        <Text variant="caption" color="textSecondary">
          hideBackdrop lets the content behind the drawer remain fully visible
          and interactive.
        </Text>
        <Button variant="outline" onPress={() => setNoBackdrop(true)}>
          Open Without Backdrop
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Imperative API" last>
        <Text variant="caption" color="textSecondary">
          Open and close the drawer programmatically via a ref — no visible prop
          needed.
        </Text>
        <Button variant="ghost" onPress={() => imperativeRef.current?.open()}>
          Open via Ref
        </Button>
      </ShowcaseSection>

      <Drawer visible={left} onClose={() => setLeft(false)} side="left">
        <NavContent title="Navigation" onClose={() => setLeft(false)} />
      </Drawer>

      <Drawer visible={right} onClose={() => setRight(false)} side="right">
        <FilterContent title="Filters" onClose={() => setRight(false)} />
      </Drawer>

      <Drawer
        visible={narrowLeft}
        onClose={() => setNarrowLeft(false)}
        side="left"
        width={SCREEN_WIDTH * 0.5}
      >
        <NavContent title="Narrow (50%)" onClose={() => setNarrowLeft(false)} />
      </Drawer>

      <Drawer
        visible={wideLeft}
        onClose={() => setWideLeft(false)}
        side="left"
        width={SCREEN_WIDTH * 0.9}
      >
        <NavContent title="Wide (90%)" onClose={() => setWideLeft(false)} />
      </Drawer>

      <Drawer
        visible={noBackdrop}
        onClose={() => setNoBackdrop(false)}
        side="left"
        hideBackdrop
      >
        <NavContent title="No Backdrop" onClose={() => setNoBackdrop(false)} />
      </Drawer>

      <Drawer ref={imperativeRef} onClose={() => {}} side="left">
        <NavContent
          title="Imperative Ref"
          onClose={() => imperativeRef.current?.close()}
        />
      </Drawer>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
});
