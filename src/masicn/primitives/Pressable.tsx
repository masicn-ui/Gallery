import React from 'react';
import {
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
  type GestureResponderEvent,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { opacity as opacityTokens, motion } from '../tokens';
import { useReducedMotion } from '../hooks';

export interface PressableProps
  extends Omit<RNPressableProps, 'style' | 'children'> {
  /**
   * Visual press feedback:
   * - `'opacity'` — smoothly dims the component on press (default)
   * - `'none'` — no automatic visual feedback; use for custom handling
   */
  feedback?: 'opacity' | 'none';
  /** Extend touch area on all sides in points */
  hitSlop?: number;
  style?: RNPressableProps['style'];
  children?: React.ReactNode;
}

/**
 * Themed Pressable with consistent press/hover feedback and disabled styling.
 * Uses Reanimated for smooth opacity transitions — works reliably on both
 * old and New Architecture (Bridgeless/Fabric). Respects reduced-motion preference.
 *
 * Prefer this over raw RN Pressable everywhere in the design system.
 */
export function Pressable({
  children,
  style,
  feedback = 'opacity',
  disabled = false,
  hitSlop,
  onPressIn,
  onPressOut,
  ...rest
}: PressableProps) {
  const reducedMotion = useReducedMotion();
  const opacity = useSharedValue(disabled ? opacityTokens.disabled : 1);

  React.useEffect(() => {
    opacity.value = withTiming(disabled ? opacityTokens.disabled : 1, {
      duration: reducedMotion ? 0 : motion.duration.fast,
    });
  }, [disabled, opacity, reducedMotion]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handlePressIn = React.useCallback(
    (e: GestureResponderEvent) => {
      if (feedback === 'opacity' && !disabled) {
        opacity.value = withTiming(opacityTokens.pressed, {
          duration: reducedMotion ? 0 : motion.duration.micro,
        });
      }
      onPressIn?.(e);
    },
    [feedback, disabled, opacity, onPressIn, reducedMotion],
  );

  const handlePressOut = React.useCallback(
    (e: GestureResponderEvent) => {
      if (feedback === 'opacity' && !disabled) {
        opacity.value = withTiming(1, {
          duration: reducedMotion ? 0 : motion.duration.fast,
        });
      }
      onPressOut?.(e);
    },
    [feedback, disabled, opacity, onPressOut, reducedMotion],
  );

  // Support function-style style prop — call it with pressed state and apply to RNPressable
  const resolvedStyle = typeof style === 'function' ? style : style;

  return (
    <RNPressable
      disabled={disabled}
      hitSlop={hitSlop}
      android_ripple={null}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={resolvedStyle}
      {...rest}
    >
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </RNPressable>
  );
}
