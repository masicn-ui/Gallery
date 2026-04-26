import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

/**
 * Returns `true` when the user has enabled "Reduce Motion" in system settings.
 *
 * Usage:
 * ```ts
 * const reducedMotion = useReducedMotion();
 *
 * // Shorten duration/amplitude — never stop animation entirely
 * const dur = reducedMotion ? 80 : 300;
 * value.value = withTiming(target, { duration: dur });
 *
 * // For springs: reduce displacement instead of removing the animation
 * const amplitude = reducedMotion ? 4 : 24;
 * ```
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduced);

    const subscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      setReduced,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return reduced;
}
