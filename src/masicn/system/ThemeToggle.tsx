/**
 * ThemeToggle — an icon that switches between light and dark mode on tap.
 *
 * Tap to spin: the icon rotates 360°, switching at the 180° midpoint so the
 * new icon appears as it "comes around". Guards `useReducedMotion()`.
 *
 * Renders only the icon — no background or container. Style and size via props.
 *
 * Place anywhere inside `MasicnProvider`. Reads and writes to `useTheme()`.
 *
 * @example
 * <ThemeToggle size={32} testID="theme-toggle" />
 */
import React from 'react';
import type { ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { useTheme } from '../theme';
import { useReducedMotion } from '../hooks';
import { Pressable } from '../primitives';
import { SunIcon, MoonIcon } from '../icons';

export interface ThemeToggleProps {
  /**
   * Icon size in pixels. Pass any value from the token scale —
   * e.g. `typography.h1.fontSize` (32) or `spacing.xl` (24).
   * Defaults to 20.
   */
  size?: number;
  /** Additional style applied to the animated icon wrapper. */
  style?: ViewStyle;
  testID?: string;
}

export function ThemeToggle({ size = 20, style, testID }: ThemeToggleProps) {
  const { theme, mode, setMode } = useTheme();
  const reducedMotion = useReducedMotion();
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const handleTap = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    // Reduced motion: still animate, but at 80ms instead of 220ms
    const dur = reducedMotion ? 80 : 220;

    // Spin 0→180° (accelerate) → switch icon at midpoint → 180→360° (decelerate) → reset
    rotation.value = withTiming(
      180,
      { duration: dur, easing: Easing.in(Easing.cubic) },
      (finished) => {
        if (finished) {
          scheduleOnRN(setMode, nextMode);
          rotation.value = withTiming(
            360,
            { duration: dur, easing: Easing.out(Easing.cubic) },
            (fin) => {
              if (fin) {
                rotation.value = 0;
              }
            },
          );
        }
      },
    );
  };

  // dark mode → show Sun (tap to go light); light mode → show Moon (tap to go dark)
  const ModeIcon = mode === 'dark' ? SunIcon : MoonIcon;
  const nextMode = mode === 'dark' ? 'light' : 'dark';

  return (
    <Pressable
      onPress={handleTap}
      feedback="opacity"
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={`Switch to ${nextMode} mode`}
    >
      <Animated.View style={[animatedStyle, style]}>
        <ModeIcon size={size} color={theme.colors.textSecondary} strokeWidth={1.5} />
      </Animated.View>
    </Pressable>
  );
}
