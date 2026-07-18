import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Row, ThemeToggle, iconSizes } from '../../../masicn';
import {
  BottomSheet,
  type BottomSheetRef,
} from '../../../shared/components/BottomSheet';
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

export function BottomSheetScreen() {
  const navigation = useNavigation();
  const [basic, setBasic] = useState(false);
  const [noHandle, setNoHandle] = useState(false);
  const [short, setShort] = useState(false);
  const [tall, setTall] = useState(false);
  const imperativeRef = useRef<BottomSheetRef>(null);

  return (
    <ScreenLayout
      title="Bottom Sheet"
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
          Slides up from the bottom. Drag handle visible. Swipe down or tap
          backdrop to dismiss.
        </Text>
        <Button variant="primary" onPress={() => setBasic(true)}>
          Open Bottom Sheet
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="No Handle">
        <Text variant="caption" color="textSecondary">
          Handle pill hidden — sheet is dismissed by swiping down or tapping the
          backdrop.
        </Text>
        <Button variant="outline" onPress={() => setNoHandle(true)}>
          Open Without Handle
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Height Variants">
        <Text variant="caption" color="textSecondary">
          maxHeight controls the cap as a fraction of screen height (0–1).
          Content scrolls inside.
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
            60% Height
          </Button>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Imperative API" last>
        <Text variant="caption" color="textSecondary">
          Open and close programmatically via a ref — no visible prop needed.
        </Text>
        <Button variant="ghost" onPress={() => imperativeRef.current?.open()}>
          Open via Ref
        </Button>
      </ShowcaseSection>

      <BottomSheet visible={basic} onClose={() => setBasic(false)}>
        <SheetContent
          title="Bottom Sheet"
          description="Swipe down or tap outside to dismiss. This sheet slides up from the bottom of the screen."
          onClose={() => setBasic(false)}
        />
      </BottomSheet>

      <BottomSheet
        visible={noHandle}
        onClose={() => setNoHandle(false)}
        showHandle={false}
      >
        <SheetContent
          title="No Handle"
          description="No drag handle pill — the gesture still works, just no visual indicator."
          onClose={() => setNoHandle(false)}
        />
      </BottomSheet>

      <BottomSheet
        visible={short}
        onClose={() => setShort(false)}
        maxHeight={0.4}
      >
        <TallSheetContent
          title="40% Height Cap"
          onClose={() => setShort(false)}
        />
      </BottomSheet>

      <BottomSheet
        visible={tall}
        onClose={() => setTall(false)}
        maxHeight={0.6}
      >
        <TallSheetContent
          title="60% Height Cap"
          onClose={() => setTall(false)}
        />
      </BottomSheet>

      <BottomSheet ref={imperativeRef} onClose={() => {}}>
        <SheetContent
          title="Imperative Ref"
          description="Opened via sheetRef.current?.open() — no visible prop needed on the consumer side."
          onClose={() => imperativeRef.current?.close()}
        />
      </BottomSheet>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
});
