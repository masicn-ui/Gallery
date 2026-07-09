import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Row, ThemeToggle, iconSizes } from '../../../masicn';
import { Popover } from '../../../shared/components/Popover';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function PopoverScreen() {
  const navigation = useNavigation();
  const [controlled, setControlled] = useState(false);

  return (
    <ScreenLayout
      title="Popover"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Placements">
        <Text variant="caption" color="textSecondary">
          Tap any button to open a popover anchored to that side of the trigger.
        </Text>
        <Row gap="sm" style={styles.centered}>
          <Popover
            content={<Text variant="caption">Above the trigger</Text>}
            placement="top"
          >
            <Button variant="outline" size="sm" onPress={() => {}}>
              Top
            </Button>
          </Popover>
          <Popover
            content={<Text variant="caption">Below the trigger</Text>}
            placement="bottom"
          >
            <Button variant="outline" size="sm" onPress={() => {}}>
              Bottom
            </Button>
          </Popover>
          <Popover
            content={<Text variant="caption">Left side</Text>}
            placement="left"
          >
            <Button variant="outline" size="sm" onPress={() => {}}>
              Left
            </Button>
          </Popover>
          <Popover
            content={<Text variant="caption">Right side</Text>}
            placement="right"
          >
            <Button variant="outline" size="sm" onPress={() => {}}>
              Right
            </Button>
          </Popover>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Rich Content">
        <Text variant="caption" color="textSecondary">
          Any React element can be passed as content — labels, icons, actions.
        </Text>
        <Row gap="sm">
          <Popover
            content={
              <Stack gap="xs">
                <Text variant="label">Keyboard shortcut</Text>
                <Text variant="caption" color="textSecondary">
                  ⌘ + S to save your work
                </Text>
              </Stack>
            }
            placement="bottom"
          >
            <Button variant="primary" onPress={() => {}}>
              Shortcut info
            </Button>
          </Popover>
          <Popover
            content={
              <Stack gap="xs">
                <Text variant="label">Pro tip</Text>
                <Text variant="caption" color="textSecondary">
                  Long press any item to access quick actions.
                </Text>
              </Stack>
            }
            placement="top"
          >
            <Button variant="outline" onPress={() => {}}>
              Help tip
            </Button>
          </Popover>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="No Arrow">
        <Text variant="caption" color="textSecondary">
          showArrow={false} removes the directional indicator for a cleaner
          look.
        </Text>
        <Row gap="sm">
          <Popover
            content={<Text variant="caption">No arrow variant</Text>}
            placement="bottom"
            showArrow={false}
          >
            <Button variant="secondary" onPress={() => {}}>
              No Arrow
            </Button>
          </Popover>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Long Press Trigger">
        <Text variant="caption" color="textSecondary">
          trigger="longPress" — hold the element to reveal the popover.
        </Text>
        <Row gap="sm" style={styles.centered}>
          <Popover
            content={<Text variant="caption">Long press triggered!</Text>}
            trigger="longPress"
            placement="top"
          >
            <Button variant="outline" onPress={() => {}}>
              Hold me
            </Button>
          </Popover>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Controlled" last>
        <Text variant="caption" color="textSecondary">
          Pass visible + onVisibilityChange to drive the popover externally.
        </Text>
        <Row gap="sm">
          <Button
            variant={controlled ? 'primary' : 'outline'}
            onPress={() => setControlled(v => !v)}
          >
            {controlled ? 'Close popover' : 'Open popover'}
          </Button>
          <Popover
            content={
              <Stack gap="xs">
                <Text variant="label">Controlled mode</Text>
                <Text variant="caption" color="textSecondary">
                  Parent manages visibility.
                </Text>
              </Stack>
            }
            placement="bottom"
            visible={controlled}
            onVisibilityChange={setControlled}
          >
            <Button variant="ghost" onPress={() => {}}>
              Anchor
            </Button>
          </Popover>
        </Row>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  centered: { justifyContent: 'center' },
});
