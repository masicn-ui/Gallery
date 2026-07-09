import React, { type ReactNode } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Box,
  Row,
  Text,
  Pressable,
  layout,
  spacing,
  useResponsive,
  useTheme,
  ArrowLeftIcon,
  iconSizes,
} from '../../masicn';

/**
 * Props for the {@link ScreenLayout} component.
 */
interface ScreenLayoutProps {
  /**
   * Screen body content rendered inside the scroll view (or flex view when `scrollable=false`).
   */
  children: ReactNode;

  /**
   * Screen title displayed in the header.
   *
   * - When no back button is present, the title is left-aligned.
   * - When a back button is present, the title is centered absolutely over the header row.
   */
  title: string;

  /**
   * Optional descriptive text rendered below the header, inside the scroll area.
   *
   * Displayed in `bodySmall` / `textSecondary` style with a bottom margin before the main content.
   */
  subtitle?: string;

  /**
   * Callback fired when the back button is pressed.
   *
   * The back button is shown **if and only if** this prop is provided.
   * Omit it to hide the back button and render the title left-aligned instead.
   *
   * @example
   * onBack={() => navigation.goBack()}
   */
  onBack?: () => void;

  /**
   * One or more React nodes rendered on the right side of the header.
   *
   * Accepts any renderable content — icon buttons, animated toggles, text buttons, etc.
   * Nodes are wrapped in a `Row` with `gap="xs"` and rendered in order.
   * A maximum of 2 actions is recommended to avoid crowding the header.
   *
   * @example
   * rightActions={[
   *   <Pressable onPress={toggleTheme}><SunIcon size={20} /></Pressable>,
   *   <Pressable onPress={handleSave}><CheckIcon size={20} /></Pressable>,
   * ]}
   */
  rightActions?: ReactNode[];

  /**
   * Horizontal content padding applied to both the scroll area and (when needed) the header.
   *
   * Accepts a key from the spacing scale. On tablet and large-tablet breakpoints this value
   * is overridden by `useResponsive` with `spacing.xl` and `spacing.xxl` respectively.
   *
   * @default 'md'
   */
  paddingHorizontal?: keyof typeof spacing;

  /**
   * Top padding applied above the main content (below the header).
   *
   * Accepts a key from the spacing scale.
   *
   * @default 'lg'
   */
  paddingTop?: keyof typeof spacing;

  /**
   * Bottom padding applied below the main content, stacked on top of the safe-area bottom inset.
   *
   * Accepts a key from the spacing scale.
   *
   * @default 'xl'
   */
  paddingBottom?: keyof typeof spacing;

  /**
   * Controls whether the header is fixed above the scroll area or scrolls with the content.
   *
   * - `true`  — header is rendered outside the `ScrollView` and stays visible while scrolling.
   * - `false` — header is rendered inside the `ScrollView` and scrolls away with the content.
   *
   * @default false
   */
  stickyHeader?: boolean;

  /**
   * Controls whether the content area uses a `ScrollView` or a plain flex `View`.
   *
   * Set to `false` when children manage their own scrolling (e.g. `FlatList`, `SectionList`),
   * to avoid nesting scrollable views.
   *
   * @default true
   */
  scrollable?: boolean;
}

/**
 * `ScreenLayout` — a full-screen scaffold with a responsive header, optional back navigation,
 * right-side action slots, and a scrollable (or fixed) content area.
 *
 * ---
 *
 * ### Header layout
 *
 * The header adapts based on whether `onBack` is provided:
 *
 * ```
 * No back button:   [ Title ─────────────── RightAction? ]
 * With back button: [ ← ] [ ──── Title ──── ] [ RightAction? ]
 * ```
 *
 * The back button is a bare `Pressable` with no border or background — just the `ArrowLeftIcon`
 * at `iconSizes.large`. The centered title uses `position: absolute` so it never displaces the
 * left/right slots.
 *
 * ---
 *
 * ### Responsive padding
 *
 * Horizontal padding scales automatically via `useResponsive`:
 * - **Phone** — uses the `paddingHorizontal` prop (default `'md'`)
 * - **Tablet** — `spacing.xl`
 * - **Large tablet** — `spacing.xxl`
 *
 * ---
 *
 * ### Keyboard avoidance
 *
 * The entire layout is wrapped in a `KeyboardAvoidingView`. On iOS, `behavior="padding"` is
 * applied so inputs near the bottom are not obscured by the software keyboard.
 *
 * ---
 *
 * ### Sticky vs. scrolling header
 *
 * - **Sticky (`stickyHeader=true`)** — header rendered outside the `ScrollView`; receives its own
 *   horizontal padding (applied internally via `headerNeedsHorizontalPadding`).
 * - **Scrolling (`stickyHeader=false`, default)** — header rendered inside the `ScrollView`;
 *   inherits horizontal padding from `contentContainerStyle`.
 *
 * ---
 *
 * @param props - See {@link ScreenLayoutProps}.
 *
 * @example
 * // Basic usage with back button and a save action
 * <ScreenLayout
 *   title="Edit Profile"
 *   subtitle="Changes are saved automatically."
 *   onBack={() => navigation.goBack()}
 *   rightActions={[
 *     <Pressable onPress={handleSave}><CheckIcon size={iconSizes.action} /></Pressable>,
 *   ]}
 * >
 *   <ProfileForm />
 * </ScreenLayout>
 *
 * @example
 * // Non-scrollable layout wrapping a FlatList
 * <ScreenLayout title="Inbox" scrollable={false}>
 *   <MessageList />
 * </ScreenLayout>
 *
 * @example
 * // Sticky header with custom padding
 * <ScreenLayout title="Dashboard" stickyHeader paddingHorizontal="lg">
 *   <DashboardContent />
 * </ScreenLayout>
 */
export function ScreenLayout({
  children,
  title,
  onBack,
  subtitle,
  paddingTop,
  paddingBottom,
  rightActions = [],
  paddingHorizontal = 'md',
  stickyHeader = false,
  scrollable = true,
}: ScreenLayoutProps) {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const { select } = useResponsive();

  const { contentPaddingHorizontal, contentPaddingTop, contentPaddingBottom } =
    React.useMemo(
      () => ({
        contentPaddingHorizontal: select({
          phone: spacing[paddingHorizontal],
          tablet: spacing.xl,
          largeTablet: spacing.xxl,
        }),
        contentPaddingTop: paddingTop ? spacing[paddingTop] : spacing.lg,
        contentPaddingBottom: paddingBottom
          ? spacing[paddingBottom]
          : spacing.xl,
      }),
      [paddingHorizontal, paddingTop, paddingBottom, select],
    );
  // No extra top padding inside the scroll area — the header's own paddingBottom
  // provides the visual gap, and ShowcaseSection / content adds its own top spacing.
  const scrollPaddingTop = 0;

  const canGoBack = onBack !== undefined;

  // Non-sticky header inside ScrollView inherits horizontal padding from contentContainerStyle.
  // Sticky header and non-scrollable layouts have no parent padding, so they need their own.
  const headerNeedsHorizontalPadding = stickyHeader || !scrollable;
  const headerPaddingStyle = {
    paddingTop: insets.top - spacing.sm,
    paddingBottom: spacing.md,
    paddingLeft: headerNeedsHorizontalPadding
      ? insets.left + contentPaddingHorizontal
      : undefined,
    paddingRight: headerNeedsHorizontalPadding
      ? insets.right + contentPaddingHorizontal
      : undefined,
    backgroundColor: theme.colors.background,
  };

  const headerRow = (
    <Row justify="space-between" align="center">
      {/* Left: Back Button or Title */}
      {canGoBack ? (
        <Pressable
          onPress={onBack}
          feedback="opacity"
          testID="back-button"
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <ArrowLeftIcon
            size={iconSizes.large}
            color={theme.colors.textPrimary}
            strokeWidth={1.5}
          />
        </Pressable>
      ) : (
        <Box style={styles.flex1}>
          <Text variant="h1">{title}</Text>
        </Box>
      )}

      {/* Center: Title (only when back button is shown) */}
      {canGoBack && (
        <Box style={styles.centerTitle} pointerEvents="none">
          <Text variant="h1" style={styles.centerTitleText}>
            {title}
          </Text>
        </Box>
      )}

      {/* Right: custom ReactNodes */}
      {rightActions.length > 0 && (
        <Row gap="xs" align="center">
          {rightActions.map((node, i) => (
            <React.Fragment key={i}>{node}</React.Fragment>
          ))}
        </Row>
      )}
    </Row>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.flex1, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Fixed header — only rendered outside ScrollView when stickyHeader=true */}
      {stickyHeader && <View style={headerPaddingStyle}>{headerRow}</View>}

      {scrollable ? (
        <ScrollView
          style={styles.flex1}
          contentContainerStyle={{
            paddingTop: scrollPaddingTop,
            paddingBottom: insets.bottom + contentPaddingBottom,
            paddingLeft: insets.left + contentPaddingHorizontal,
            paddingRight: insets.right + contentPaddingHorizontal,
          }}
          bounces={true}
          alwaysBounceVertical={true}
          keyboardShouldPersistTaps="handled"
        >
          {/* Scrolling header — only inside ScrollView when stickyHeader=false */}
          {!stickyHeader && <View style={headerPaddingStyle}>{headerRow}</View>}

          {subtitle && (
            <Box marginBottom="xl">
              <Text variant="bodySmall" color="textSecondary">
                {subtitle}
              </Text>
            </Box>
          )}

          {children}
        </ScrollView>
      ) : (
        <View style={styles.flex1}>
          {!stickyHeader && <View style={headerPaddingStyle}>{headerRow}</View>}
          {subtitle && (
            <Box
              style={{
                paddingHorizontal: contentPaddingHorizontal,
                paddingTop: contentPaddingTop,
                paddingBottom: spacing.xl,
              }}
            >
              <Text variant="bodySmall" color="textSecondary">
                {subtitle}
              </Text>
            </Box>
          )}
          {children}
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  centerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: layout.zIndex.base,
  },
  centerTitleText: {
    textAlign: 'center',
  },
});
