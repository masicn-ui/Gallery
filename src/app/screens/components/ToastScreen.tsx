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
import { ToastProvider, useToast } from '../../../shared/components/Toast';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

function ToastScreenInner() {
  const navigation = useNavigation();
  const toast = useToast();

  return (
    <ScreenLayout
      title="Toast"
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
          Four semantic types — each with a distinct icon and color.
        </Text>
        <Stack gap="sm">
          <Button
            variant="primary"
            onPress={() => toast.success('Profile updated successfully.')}
          >
            Success
          </Button>
          <Button
            variant="destructive"
            onPress={() => toast.error('Upload failed. Check your connection.')}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onPress={() =>
              toast.warning('Storage almost full — 4.7 GB of 5 GB used.')
            }
          >
            Warning
          </Button>
          <Button
            variant="secondary"
            onPress={() =>
              toast.info('New follower: @alex started following you.')
            }
          >
            Info
          </Button>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Position">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Toasts can appear at the top or bottom of the screen.
        </Text>
        <Row gap="sm">
          <Button
            variant="outline"
            style={styles.flex1}
            onPress={() => toast.success('Shown at top!', 3000, 'top')}
          >
            Show at top
          </Button>
          <Button
            variant="outline"
            style={styles.flex1}
            onPress={() => toast.success('Shown at bottom!', 3000, 'bottom')}
          >
            Show at bottom
          </Button>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Duration" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Control how long the toast stays visible. Default is 3 seconds.
        </Text>
        <Stack gap="sm">
          <Button
            variant="ghost"
            onPress={() => toast.show('Quick — gone in 1.5 s', 'info', 1500)}
          >
            Short (1.5 s)
          </Button>
          <Button
            variant="ghost"
            onPress={() =>
              toast.show('Standard auto-dismiss after 3 s', 'success', 3000)
            }
          >
            Default (3 s)
          </Button>
          <Button
            variant="ghost"
            onPress={() =>
              toast.show('Long notification — stays for 6 s', 'warning', 6000)
            }
          >
            Long (6 s)
          </Button>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

export function ToastScreen() {
  return (
    <ToastProvider>
      <ToastScreenInner />
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
});
