import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Row, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { Confirm } from '../../../shared/blocks/Confirm';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function ConfirmScreen() {
  const navigation = useNavigation();
  const [standard, setStandard] = useState(false);
  const [destructive, setDestructive] = useState(false);
  const [customLabels, setCustomLabels] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingActive, setLoadingActive] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleConfirmLoading = () => {
    setLoadingActive(true);
    setTimeout(() => {
      setLoadingActive(false);
      setLoading(false);
      setResult('Saved!');
    }, 2000);
  };

  return (
    <ScreenLayout
      title="Confirm"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Standard">
        <Text variant="caption" color="textSecondary">
          Primary confirm, ghost cancel. Use for safe reversible actions.
        </Text>
        <Button variant="primary" onPress={() => setStandard(true)}>
          Save changes?
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Destructive">
        <Text variant="caption" color="textSecondary">
          Red warning banner, destructive confirm, outlined cancel — for
          irreversible actions.
        </Text>
        <Button variant="destructive" onPress={() => setDestructive(true)}>
          Delete account
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Custom Labels">
        <Text variant="caption" color="textSecondary">
          confirmLabel and cancelLabel accept any string for context-appropriate
          wording.
        </Text>
        <Button variant="outline" onPress={() => setCustomLabels(true)}>
          Discard changes?
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Loading State" last>
        <Text variant="caption" color="textSecondary">
          loading=true disables the confirm button and shows a spinner while the
          action is in-flight.
        </Text>
        <Row gap="sm">
          <Button
            variant="outline"
            onPress={() => setLoading(true)}
            style={styles.flex1}
          >
            With Loading
          </Button>
          {result && (
            <Text variant="caption" color="success" style={styles.flex1}>
              {result}
            </Text>
          )}
        </Row>
      </ShowcaseSection>

      {/* ── Dialogs ────────────────────────────────────────────────────────── */}

      <Confirm
        visible={standard}
        onClose={() => setStandard(false)}
        title="Save changes?"
        message="Your edits will be saved and synced across all your devices."
        onConfirm={() => {
          setResult('Confirmed');
          setStandard(false);
        }}
        onCancel={() => {
          setResult('Cancelled');
          setStandard(false);
        }}
      />

      <Confirm
        visible={destructive}
        onClose={() => setDestructive(false)}
        title="Delete account"
        message="This is permanent and cannot be undone. All your data, projects, and settings will be erased immediately."
        confirmLabel="Delete forever"
        onConfirm={() => {
          setResult('Deleted!');
          setDestructive(false);
        }}
        destructive
      />

      <Confirm
        visible={customLabels}
        onClose={() => setCustomLabels(false)}
        title="Discard changes?"
        message="You have unsaved edits. Leaving now will discard them permanently."
        confirmLabel="Discard"
        cancelLabel="Keep editing"
        onConfirm={() => {
          setResult('Discarded');
          setCustomLabels(false);
        }}
        onCancel={() => setCustomLabels(false)}
      />

      <Confirm
        visible={loading}
        onClose={() => setLoading(false)}
        title="Save to cloud?"
        message="Your document will be uploaded and shared with your team."
        confirmLabel="Save & upload"
        onConfirm={handleConfirmLoading}
        loading={loadingActive}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
});
