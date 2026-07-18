import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import {
  motion,
  motionEasing,
  opacity,
  spacing,
  typography,
  useReducedMotion,
} from '../../masicn';
import { MasicnLogo } from '../../brand/logo';
import {
  BOOTSPLASH_DARK_BACKGROUND,
  BOOTSPLASH_DARK_TEXT,
  BOOTSPLASH_EXIT_SLIDE_DISTANCE,
  BOOTSPLASH_LIGHT_BACKGROUND,
  BOOTSPLASH_LIGHT_TEXT,
  BOOTSPLASH_LOGO_WIDTH,
} from './constants';

export interface BootSplashOverlayProps {
  /**
   * Whether the overlay should be showing. Set to `false` to trigger the
   * exit animation (background fade + logo slide/fade); the component
   * unmounts itself once that animation finishes.
   */
  visible: boolean;
}

/**
 * BootSplashOverlay — JS-layer splash screen shown between the native boot
 * splash handoff and full app readiness.
 *
 * Must mount unconditionally at frame 0 (before `RNBootSplash.hide()`
 * resolves) so there's no gap between the native splash disappearing and
 * this overlay covering the screen. Reads the OS-level color scheme (not
 * the in-app `useTheme()` mode) so it matches what the native splash just
 * showed, regardless of any in-app palette the user has selected.
 *
 * Renders a "masicn" / "Gallery" footer beneath the logo. This overlay
 * mounts as a sibling outside both `SafeAreaProvider` and `MasicnProvider`
 * (see `App.tsx`), so the footer uses a plain RN `Text` with hardcoded
 * colors and static token objects (`typography`, `spacing`, `opacity`) —
 * never the masicn `Text` primitive (it calls `useTheme()`, which throws
 * with no provider above it) and never `useSafeAreaInsets()` (same reason).
 *
 * When `visible` becomes `false`, the background fades out gradually while
 * the logo and footer simultaneously slide right and fade away, then the
 * component unmounts itself.
 *
 * @example
 * const [splashVisible, setSplashVisible] = useState(true);
 * <BootSplashOverlay visible={splashVisible} />
 */
export function BootSplashOverlay({
  visible,
}: BootSplashOverlayProps): React.JSX.Element | null {
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark
    ? BOOTSPLASH_DARK_BACKGROUND
    : BOOTSPLASH_LIGHT_BACKGROUND;
  const textColor = isDark ? BOOTSPLASH_DARK_TEXT : BOOTSPLASH_LIGHT_TEXT;

  const reducedMotion = useReducedMotion();
  const [shouldRender, setShouldRender] = useState(visible);

  const bgOpacity = useSharedValue(1);
  const logoOpacity = useSharedValue(1);
  const logoTranslateX = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      return;
    }

    const duration = reducedMotion
      ? motion.duration.instant
      : motion.duration.slower;
    const timingConfig = { duration, easing: motionEasing.standard };

    bgOpacity.value = withTiming(0, timingConfig);
    logoOpacity.value = withTiming(0, timingConfig);
    logoTranslateX.value = withTiming(
      BOOTSPLASH_EXIT_SLIDE_DISTANCE,
      timingConfig,
      finished => {
        if (finished) {
          scheduleOnRN(setShouldRender, false);
        }
      },
    );
  }, [visible, reducedMotion, bgOpacity, logoOpacity, logoTranslateX]);

  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    opacity: bgOpacity.value,
  }));

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ translateX: logoTranslateX.value }],
  }));

  if (!shouldRender) {
    return null;
  }

  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, styles.container]}
      pointerEvents="none"
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor },
          backgroundAnimatedStyle,
        ]}
      />
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.logoWrapper, logoAnimatedStyle]}
      >
        <MasicnLogo width={BOOTSPLASH_LOGO_WIDTH} />
      </Animated.View>
      <Animated.View
        style={[styles.footer, logoAnimatedStyle]}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        <Text style={[typography.label, { color: textColor }]}>masicn</Text>
        <Text
          style={[
            typography.captionSmall,
            { color: textColor, opacity: opacity.subtle },
          ]}
        >
          Gallery
        </Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: spacing.xxxl,
    alignItems: 'center',
  },
});
