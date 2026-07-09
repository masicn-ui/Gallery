import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Row, ThemeToggle, iconSizes } from '../../../masicn';
import { Modal } from '../../../shared/components/Modal';
import { Button } from '../../../shared/components/Button';
import { TextInput } from '../../../shared/components/TextInput';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ModalScreen() {
  const navigation = useNavigation();
  const [basic, setBasic] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [noClose, setNoClose] = useState(false);
  const [withForm, setWithForm] = useState(false);
  const [scrollable, setScrollable] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <ScreenLayout
      title="Modal"
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
          Centered overlay with a close button. Tap outside or the X to dismiss.
        </Text>
        <Button variant="primary" onPress={() => setBasic(true)}>
          Open Modal
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Narrow">
        <Text variant="caption" color="textSecondary">
          maxWidth="narrow" keeps the modal compact — ideal for short
          confirmations.
        </Text>
        <Button variant="outline" onPress={() => setNarrow(true)}>
          Open Narrow Modal
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="No Backdrop Dismiss">
        <Text variant="caption" color="textSecondary">
          closeOnOverlayPress={false} locks the modal — only the internal button
          closes it.
        </Text>
        <Button variant="outline" onPress={() => setNoClose(true)}>
          Non-Dismissable Modal
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="With Form">
        <Text variant="caption" color="textSecondary">
          Modals support keyboard-avoiding layout for forms with text inputs.
        </Text>
        <Button variant="secondary" onPress={() => setWithForm(true)}>
          Open Form Modal
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Scrollable Content" last>
        <Text variant="caption" color="textSecondary">
          Long content scrolls inside the modal while the action buttons stay
          fixed.
        </Text>
        <Button variant="ghost" onPress={() => setScrollable(true)}>
          Open Scrollable Modal
        </Button>
      </ShowcaseSection>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}

      <Modal visible={basic} onClose={() => setBasic(false)}>
        <Text variant="h3">Confirm action</Text>
        <Text variant="body" color="textSecondary">
          Are you sure you want to proceed? This will update your preferences
          immediately.
        </Text>
        <Row gap="sm">
          <Button
            variant="ghost"
            onPress={() => setBasic(false)}
            containerStyle={styles.flex1}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onPress={() => setBasic(false)}
            containerStyle={styles.flex1}
          >
            Confirm
          </Button>
        </Row>
      </Modal>

      <Modal
        visible={narrow}
        onClose={() => setNarrow(false)}
        maxWidth="narrow"
      >
        <Text variant="h3">Narrow Modal</Text>
        <Text variant="body" color="textSecondary">
          Uses maxWidth="narrow" — suitable for concise dialogs or alerts.
        </Text>
        <Button variant="primary" onPress={() => setNarrow(false)}>
          Got it
        </Button>
      </Modal>

      <Modal
        visible={noClose}
        onClose={() => setNoClose(false)}
        closeOnOverlayPress={false}
      >
        <Text variant="h3">Action required</Text>
        <Text variant="body" color="textSecondary">
          You must respond before continuing. Tapping outside this modal does
          nothing.
        </Text>
        <Row gap="sm">
          <Button
            variant="ghost"
            onPress={() => setNoClose(false)}
            containerStyle={styles.flex1}
          >
            Dismiss
          </Button>
          <Button
            variant="primary"
            onPress={() => setNoClose(false)}
            containerStyle={styles.flex1}
          >
            Accept
          </Button>
        </Row>
      </Modal>

      <Modal visible={withForm} onClose={() => setWithForm(false)}>
        <Text variant="h3">Subscribe</Text>
        <Text variant="caption" color="textSecondary">
          Enter your email address to receive updates.
        </Text>
        <TextInput
          label="Email address"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Button
          variant="primary"
          onPress={() => {
            setWithForm(false);
            setEmail('');
          }}
        >
          Subscribe
        </Button>
      </Modal>

      <Modal visible={scrollable} onClose={() => setScrollable(false)}>
        <Text variant="h3">Terms of Service</Text>
        <Stack gap="sm">
          {Array.from({ length: 10 }, (_, i) => (
            <Text key={i} variant="body" color="textSecondary">
              Section {i + 1}: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Text>
          ))}
        </Stack>
        <Button variant="primary" onPress={() => setScrollable(false)}>
          Accept & Continue
        </Button>
      </Modal>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
});
