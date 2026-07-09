import React from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import {
  Stack,
  Row,
  Text,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
  PlusIcon,
  StarIcon,
  SearchIcon,
  InboxIcon,
  CheckIcon,
  SettingsIcon,
  PaletteIcon,
  MinusIcon,
  useTheme,
} from '../../../masicn';
import { FAB } from '../../../shared/components/FAB';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const fabStatic = {
  position: 'relative' as const,
  top: undefined,
  bottom: undefined,
  left: undefined,
  right: undefined,
};

const POSITIONS = [
  { key: 'bottom-right', label: 'bottom-right', icon: PlusIcon },
  { key: 'bottom-left', label: 'bottom-left', icon: StarIcon },
  { key: 'bottom-center', label: 'bottom-center', icon: SearchIcon },
  { key: 'top-right', label: 'top-right', icon: InboxIcon },
  { key: 'top-left', label: 'top-left', icon: CheckIcon },
] as const;

type FABPositionKey = (typeof POSITIONS)[number]['key'];

export function FABScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const [fabVisible, setFabVisible] = React.useState<
    Record<FABPositionKey, boolean>
  >({
    'bottom-right': false,
    'bottom-left': false,
    'bottom-center': false,
    'top-right': false,
    'top-left': false,
  });

  const togglePosition = (key: FABPositionKey) =>
    setFabVisible(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <ScreenLayout
      title="FAB"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Sizes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Small, medium (default), and large — scale to the visual weight of the
          action.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          {(
            [
              { size: 'small', label: 'small' },
              { size: 'medium', label: 'medium' },
              { size: 'large', label: 'large' },
            ] as const
          ).map(({ size, label }) => (
            <Stack key={label} gap="xs" style={styles.item}>
              <FAB size={size} onPress={() => {}} style={fabStatic} />
              <Text
                variant="captionSmall"
                color="textTertiary"
                style={styles.centered}
              >
                {label}
              </Text>
            </Stack>
          ))}
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Shape">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Circular is the classic FAB; square fits grid-heavy or card-based UIs.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          <Stack gap="xs" style={styles.item}>
            <FAB shape="circular" onPress={() => {}} style={fabStatic} />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              circular
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <FAB shape="square" onPress={() => {}} style={fabStatic} />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              square
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <FAB
              shape="square"
              size="large"
              icon={SettingsIcon}
              onPress={() => {}}
              style={fabStatic}
            />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              sq · large
            </Text>
          </Stack>
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="Positions">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Toggle each position to see how FABs sit inside their parent
          container. All positions are off by default.
        </Text>
        <View
          style={[
            styles.positionContainer,
            {
              backgroundColor: theme.colors.surfaceSecondary,
              borderRadius: radius.lg,
            },
          ]}
        >
          {POSITIONS.map(({ key, icon }) =>
            fabVisible[key] ? (
              <FAB key={key} position={key} icon={icon} onPress={() => {}} />
            ) : null,
          )}
        </View>
        <Stack gap="xs" style={styles.switchList}>
          {POSITIONS.map(({ key, label }) => (
            <Row
              key={key}
              style={[
                styles.switchRow,
                { borderBottomColor: theme.colors.borderSecondary },
              ]}
              align="center"
            >
              <Text
                variant="body"
                color="textPrimary"
                style={styles.switchLabel}
              >
                {label}
              </Text>
              <Switch
                value={fabVisible[key]}
                onValueChange={() => togglePosition(key)}
                trackColor={{
                  false: theme.colors.borderPrimary,
                  true: theme.colors.primary,
                }}
                thumbColor={theme.colors.surfacePrimary}
              />
            </Row>
          ))}
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Icons">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Any masicn icon can be passed via the icon prop.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          {(
            [
              { Icon: StarIcon, label: 'Star' },
              { Icon: SearchIcon, label: 'Search' },
              { Icon: SettingsIcon, label: 'Settings' },
              { Icon: PaletteIcon, label: 'Theme' },
              { Icon: MinusIcon, label: 'Remove' },
            ] as const
          ).map(({ Icon, label }) => (
            <Stack key={label} gap="xs" style={styles.item}>
              <FAB icon={Icon} onPress={() => {}} style={fabStatic} />
              <Text
                variant="captionSmall"
                color="textTertiary"
                style={styles.centered}
              >
                {label}
              </Text>
            </Stack>
          ))}
        </Row>
      </ShowcaseSection>

      <ShowcaseSection title="States" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Disabled state prevents interaction and mutes color.
        </Text>
        <Row gap="xl" style={styles.centeredRow}>
          <Stack gap="xs" style={styles.item}>
            <FAB onPress={() => {}} style={fabStatic} />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Normal
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <FAB disabled onPress={() => {}} style={fabStatic} />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Disabled
            </Text>
          </Stack>
          <Stack gap="xs" style={styles.item}>
            <FAB shape="square" disabled onPress={() => {}} style={fabStatic} />
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              Sq disabled
            </Text>
          </Stack>
        </Row>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  centered: { textAlign: 'center' },
  centeredRow: { justifyContent: 'center', flexWrap: 'wrap' },
  item: { alignItems: 'center' },
  positionContainer: {
    height: 280,
    overflow: 'hidden',
  },
  switchList: {
    marginTop: spacing.md,
  },
  switchRow: {
    paddingVertical: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  switchLabel: {
    flex: 1,
  },
});
