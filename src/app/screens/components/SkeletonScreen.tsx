import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
  useTheme,
} from '../../../masicn';
import { Skeleton } from '../../../shared/components/Skeleton';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function SkeletonScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <ScreenLayout
      title="Skeleton"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Shapes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          All built-in variants — each maps to a common content shape.
        </Text>
        <Stack gap="md">
          <Stack gap="sm">
            <Text variant="captionSmall" color="textTertiary">
              text lines
            </Text>
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" />
          </Stack>
          <Row align="center" gap="md">
            <Stack gap="xs" style={styles.centeredItem}>
              <Skeleton variant="circular" />
              <Text variant="captionSmall" color="textTertiary">
                circular
              </Text>
            </Stack>
            <Stack gap="xs" style={styles.centeredItem}>
              <Skeleton variant="avatar" />
              <Text variant="captionSmall" color="textTertiary">
                avatar
              </Text>
            </Stack>
            <Stack gap="xs" style={styles.centeredItem}>
              <Skeleton variant="button" />
              <Text variant="captionSmall" color="textTertiary">
                button
              </Text>
            </Stack>
          </Row>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              image
            </Text>
            <Skeleton variant="image" />
          </Stack>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="List Items">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          listItem variant mirrors a real list row — avatar + two text lines.
        </Text>
        <Surface
          level="sm"
          style={[styles.listCard, { borderRadius: radius.lg }]}
        >
          <Stack gap="md">
            <Skeleton variant="listItem" />
            <Skeleton variant="listItem" />
            <Skeleton variant="listItem" />
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Profile Card">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Compose skeletons to match the shape of a real profile card.
        </Text>
        <Surface
          level="sm"
          style={[
            styles.profileCard,
            {
              borderRadius: radius.lg,
              borderColor: theme.colors.borderSecondary,
            },
          ]}
        >
          <Row align="center" gap="md" style={styles.profileHeader}>
            <Skeleton variant="avatar" width={48} />
            <Stack gap="xs" style={styles.flex1}>
              <Skeleton variant="text" width="55%" />
              <Skeleton variant="text" width="35%" />
            </Stack>
            <Skeleton variant="button" width={72} />
          </Row>
          <Stack gap="sm" style={styles.profileBody}>
            <Skeleton variant="text" width="95%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </Stack>
          <View
            style={[
              styles.statsRow,
              { borderTopColor: theme.colors.borderSecondary },
            ]}
          >
            {[0, 1, 2].map(i => (
              <Stack key={i} gap="xs" style={styles.statItem}>
                <Skeleton variant="text" width={32} height={18} />
                <Skeleton variant="text" width={48} />
              </Stack>
            ))}
          </View>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Feed Post" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Full post skeleton — image banner, avatar header, and body text.
        </Text>
        <Surface
          level="sm"
          style={[
            styles.postCard,
            {
              borderRadius: radius.lg,
              borderColor: theme.colors.borderSecondary,
            },
          ]}
        >
          <Skeleton variant="image" style={styles.postImage} />
          <Stack gap="md" style={styles.postBody}>
            <Row align="center" gap="md">
              <Skeleton variant="avatar" />
              <Stack gap="xs" style={styles.flex1}>
                <Skeleton variant="text" width="45%" />
                <Skeleton variant="text" width="30%" />
              </Stack>
            </Row>
            <Stack gap="sm">
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="85%" />
              <Skeleton variant="text" width="65%" />
            </Stack>
            <Row gap="md">
              <Skeleton variant="button" width={80} />
              <Skeleton variant="button" width={80} />
            </Row>
          </Stack>
        </Surface>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  flex1: { flex: 1 },
  centeredItem: { alignItems: 'center' },
  listCard: { padding: spacing.md, overflow: 'hidden' },
  profileCard: { borderWidth: StyleSheet.hairlineWidth, overflow: 'hidden' },
  profileHeader: { padding: spacing.md },
  profileBody: { paddingHorizontal: spacing.md, paddingBottom: spacing.md },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.md,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  statItem: { alignItems: 'center' },
  postCard: { borderWidth: StyleSheet.hairlineWidth, overflow: 'hidden' },
  postImage: { borderRadius: radius.none },
  postBody: { padding: spacing.md },
});
