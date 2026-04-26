import { useMemo } from 'react';
import type { AccessibilityRole, AccessibilityState } from 'react-native';

/** Declarative config passed to `useAccessibilityProps`. */
interface AccessibilityConfig {
  /** ARIA-equivalent role for assistive technologies. */
  role?: AccessibilityRole;
  /** Human-readable label read aloud by VoiceOver / TalkBack. */
  label?: string;
  /** Additional hint read after the label, e.g. "Double-tap to activate". */
  hint?: string;
  /** Dynamic state flags — disabled, selected, checked, busy, expanded. */
  state?: AccessibilityState;
  /**
   * Live region announcement policy.
   * - `'polite'` — announces after the current speech finishes.
   * - `'assertive'` — interrupts current speech immediately.
   */
  liveRegion?: 'none' | 'polite' | 'assertive';
  /**
   * When `true`, marks this view as a modal so screen readers cannot
   * navigate to elements behind it. Pair with a focus trap.
   */
  modal?: boolean;
}

/** The spread-ready prop object returned by `useAccessibilityProps`. */
interface AccessibilityProps {
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityState?: AccessibilityState;
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive';
  accessibilityViewIsModal?: boolean;
  accessible: boolean;
}

/**
 * Builds a spread-ready set of accessibility props from a declarative config.
 * Only defined fields are included in the returned object.
 *
 * ```tsx
 * const a11y = useAccessibilityProps({
 *   role: 'button',
 *   label: 'Submit form',
 *   state: { disabled: false },
 * });
 * return <Pressable {...a11y} />;
 * ```
 */
export function useAccessibilityProps(config: AccessibilityConfig): AccessibilityProps {
  return useMemo(() => {
    const props: AccessibilityProps = {
      accessible: true,
    };

    if (config.role) {
      props.accessibilityRole = config.role;
    }
    if (config.label) {
      props.accessibilityLabel = config.label;
    }
    if (config.hint) {
      props.accessibilityHint = config.hint;
    }
    if (config.state) {
      props.accessibilityState = config.state;
    }
    if (config.liveRegion && config.liveRegion !== 'none') {
      props.accessibilityLiveRegion = config.liveRegion;
    }
    if (config.modal) {
      props.accessibilityViewIsModal = true;
    }

    return props;
  }, [
    config.role,
    config.label,
    config.hint,
    config.state,
    config.liveRegion,
    config.modal,
  ]);
}
