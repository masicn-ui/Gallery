import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  ThemeToggle,
  iconSizes,
  spacing,
} from '../../../masicn';
import {
  SnackbarProvider,
  useSnackbar,
} from '../../../shared/components/Snackbar';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

function SnackbarScreenInner() {
  const navigation = useNavigation();
  const snackbar = useSnackbar();

  return (
    <ScreenLayout
      title="Snackbar"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Types">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Five semantic types — each with a distinct icon and color.
        </Text>
        <Stack gap="sm">
          <Button
            variant="primary"
            onPress={() => snackbar.success('Profile updated successfully.')}
          >
            Success
          </Button>
          <Button
            variant="destructive"
            onPress={() =>
              snackbar.error('Upload failed. Check your connection.')
            }
          >
            Error
          </Button>
          <Button
            variant="outline"
            onPress={() =>
              snackbar.warning('Storage almost full — 4.7 GB of 5 GB used.')
            }
          >
            Warning
          </Button>
          <Button
            variant="secondary"
            onPress={() =>
              snackbar.info('New follower: @alex started following you.')
            }
          >
            Info
          </Button>
          <Button
            variant="ghost"
            onPress={() => snackbar.show('Message sent.', 'default')}
          >
            Default
          </Button>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Action">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Snackbars can include an action button for quick follow-up.
        </Text>
        <Stack gap="sm">
          <Button
            variant="outline"
            onPress={() =>
              snackbar.show('File deleted', 'default', 5000, {
                label: 'Undo',
                onPress: () => snackbar.success('File restored!'),
              })
            }
          >
            File deleted + Undo
          </Button>
          <Button
            variant="outline"
            onPress={() =>
              snackbar.show('Message sent', 'success', 5000, {
                label: 'View',
                onPress: () => {},
              })
            }
          >
            Message sent + View
          </Button>
          <Button
            variant="outline"
            onPress={() =>
              snackbar.info('Update ready to install', 5000, {
                label: 'Install',
                onPress: () => snackbar.success('Installing…'),
              })
            }
          >
            Update + Install
          </Button>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Position">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Snackbars can appear at the top or bottom of the screen.
        </Text>
        <Row gap="sm">
          <Button
            variant="outline"
            style={styles.flex1}
            onPress={() =>
              snackbar.success('Shown at top!', 3000, undefined, 'top')
            }
          >
            Show at top
          </Button>
          <Button
            variant="outline"
            style={styles.flex1}
            onPress={() =>
              snackbar.success('Shown at bottom!', 3000, undefined, 'bottom')
            }
          >
            Show at bottom
          </Button>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Duration" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Control how long the snackbar stays visible. Default is 4 seconds.
        </Text>
        <Stack gap="sm">
          <Button
            variant="ghost"
            onPress={() =>
              snackbar.show('Quick toast — gone in 1.5 s', 'default', 1500)
            }
          >
            Short (1.5 s)
          </Button>
          <Button
            variant="ghost"
            onPress={() =>
              snackbar.show('Standard auto-dismiss after 4 s', 'info', 4000)
            }
          >
            Default (4 s)
          </Button>
          <Button
            variant="ghost"
            onPress={() =>
              snackbar.show('Long notification — 8 seconds', 'warning', 8000, {
                label: 'Dismiss',
                onPress: () => {},
              })
            }
          >
            Long (8 s) with dismiss action
          </Button>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

export function SnackbarScreen() {
  return (
    <SnackbarProvider>
      <SnackbarScreenInner />
    </SnackbarProvider>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
});
