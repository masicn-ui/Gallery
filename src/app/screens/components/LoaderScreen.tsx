import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, ThemeToggle, iconSizes, spacing } from '../../../masicn';
import { Loader } from '../../../shared/components/Loader';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function LoaderScreen() {
  const navigation = useNavigation();
  const [basic, setBasic] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [noBackdrop, setNoBackdrop] = useState(false);

  const show = (setter: (v: boolean) => void, ms = 2500) => {
    setter(true);
    setTimeout(() => setter(false), ms);
  };

  return (
    <ScreenLayout
      title="Loader"
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
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Full-screen overlay with a spinner — blocks all interaction while
          visible.
        </Text>
        <Button variant="primary" onPress={() => show(setBasic)}>
          Show Loading Overlay
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="With Message">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          The message prop adds context below the spinner — use it to tell users
          what the app is doing.
        </Text>
        <Stack gap="sm">
          <Button variant="outline" onPress={() => show(setSaving)}>
            Saving changes…
          </Button>
          <Button variant="outline" onPress={() => show(setUploading, 3500)}>
            Uploading file…
          </Button>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Without Backdrop" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          backdrop=false renders the spinner card without dimming the screen —
          useful for inline loading states that shouldn't block navigation.
        </Text>
        <Button variant="ghost" onPress={() => show(setNoBackdrop)}>
          Show without backdrop
        </Button>
      </ShowcaseSection>

      <Loader visible={basic} />
      <Loader visible={saving} message="Saving your changes…" />
      <Loader visible={uploading} message="Uploading file — please wait…" />
      <Loader visible={noBackdrop} backdrop={false} />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
