import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Row, ThemeToggle, iconSizes } from '../../../masicn';
import {
  TopSheet,
  type TopSheetRef,
} from '../../../shared/components/TopSheet';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

function SheetContent({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) {
  return (
    <Stack gap="md">
      <Text variant="h3">{title}</Text>
      <Text variant="body" color="textSecondary">
        {description}
      </Text>
      <Button variant="primary" onPress={onClose}>
        Close
      </Button>
    </Stack>
  );
}

function TallSheetContent({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  return (
    <Stack gap="md">
      <Text variant="h3">{title}</Text>
      <Text variant="caption" color="textSecondary">
        Content exceeds the height cap — scroll to see the rest.
      </Text>
      <Stack gap="xs">
        {Array.from({ length: 18 }, (_, i) => (
          <Text key={i} variant="body" color="textSecondary">
            Row {i + 1}
          </Text>
        ))}
      </Stack>
      <Button variant="primary" onPress={onClose}>
        Close
      </Button>
    </Stack>
  );
}

export function TopSheetScreen() {
  const navigation = useNavigation();
  const [basic, setBasic] = useState(false);
  const [noHandle, setNoHandle] = useState(false);
  const [short, setShort] = useState(false);
  const [tall, setTall] = useState(false);
  const imperativeRef = useRef<TopSheetRef>(null);

  return (
    <ScreenLayout
      title="Top Sheet"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Default">
        <Text variant="caption" color="textSecondary">
          Slides down from the top. Drag handle visible at the bottom. Swipe up
          or tap backdrop to dismiss.
        </Text>
        <Button variant="primary" onPress={() => setBasic(true)}>
          Open Top Sheet
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="No Handle">
        <Text variant="caption" color="textSecondary">
          Handle pill hidden — sheet still dismisses by swipe-up or backdrop
          tap.
        </Text>
        <Button variant="outline" onPress={() => setNoHandle(true)}>
          Open Without Handle
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Height Variants">
        <Text variant="caption" color="textSecondary">
          maxHeight caps the sheet as a fraction of screen height (0–1). Content
          scrolls inside.
        </Text>
        <Row gap="sm">
          <Button
            variant="outline"
            onPress={() => setShort(true)}
            style={styles.flex1}
          >
            40% Height
          </Button>
          <Button
            variant="outline"
            onPress={() => setTall(true)}
            style={styles.flex1}
          >
            70% Height
          </Button>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Imperative API" last>
        <Text variant="caption" color="textSecondary">
          Open and close programmatically via a ref.
        </Text>
        <Button variant="ghost" onPress={() => imperativeRef.current?.open()}>
          Open via Ref
        </Button>
      </ShowcaseSection>

      <TopSheet visible={basic} onClose={() => setBasic(false)}>
        <SheetContent
          title="Top Sheet"
          description="Swipe up or tap outside to dismiss. This sheet slides down from the top of the screen."
          onClose={() => setBasic(false)}
        />
      </TopSheet>

      <TopSheet
        visible={noHandle}
        onClose={() => setNoHandle(false)}
        showHandle={false}
      >
        <SheetContent
          title="No Handle"
          description="No drag handle pill — but you can still swipe up or tap the backdrop to close."
          onClose={() => setNoHandle(false)}
        />
      </TopSheet>

      <TopSheet visible={short} onClose={() => setShort(false)} maxHeight={0.4}>
        <TallSheetContent
          title="40% Height Cap"
          onClose={() => setShort(false)}
        />
      </TopSheet>

      <TopSheet visible={tall} onClose={() => setTall(false)} maxHeight={0.7}>
        <TallSheetContent
          title="70% Height Cap"
          onClose={() => setTall(false)}
        />
      </TopSheet>

      <TopSheet ref={imperativeRef} onClose={() => {}}>
        <SheetContent
          title="Imperative Ref"
          description="Opened via sheetRef.current?.open() — no visible prop required."
          onClose={() => imperativeRef.current?.close()}
        />
      </TopSheet>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
});
