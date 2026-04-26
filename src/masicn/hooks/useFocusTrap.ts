import { useRef, useEffect, useCallback } from 'react';
import { AccessibilityInfo, findNodeHandle, type View } from 'react-native';

interface FocusTrapOptions {
  /** Whether the trap is currently active */
  active: boolean;
  /**
   * Ref to the element that triggered the overlay (e.g. the button that opened the sheet).
   * When provided, focus is restored to this element when the overlay closes.
   * React Native has no `document.activeElement` equivalent, so the trigger must be
   * passed explicitly — the OS cannot provide it automatically.
   */
  triggerRef?: React.RefObject<View | null>;
}

/**
 * Manages focus trapping for overlays (Modal, BottomSheet, ActionSheet).
 *
 * - On open: sets accessibility focus to the container via AccessibilityInfo
 * - On close: restores focus to the element that triggered the overlay (if `triggerRef` is provided)
 *
 * ## Platform limitation
 * React Native has no DOM-equivalent focus management. This hook uses
 * `AccessibilityInfo.setAccessibilityFocus`, which moves the screen reader
 * cursor (VoiceOver / TalkBack) to the container, but it does NOT trap keyboard
 * focus or prevent sighted-keyboard users from tabbing outside the overlay.
 * True tab-cycle trapping is only achievable on React Native Web where the
 * underlying DOM APIs are available.
 *
 * For native iOS/Android, pairing this hook with `accessibilityViewIsModal={true}`
 * on the container is the correct approach — the OS modal flag prevents screen
 * readers from navigating to elements outside the overlay.
 *
 * Usage:
 * ```tsx
 * const triggerRef = useRef<View>(null);
 * const { containerRef } = useFocusTrap({ active: visible, triggerRef });
 *
 * // Attach triggerRef to the element that opens the overlay:
 * <Pressable ref={triggerRef} onPress={open}>Open</Pressable>
 *
 * // Attach containerRef to the overlay root:
 * <View ref={containerRef} accessible accessibilityViewIsModal>...</View>
 * ```
 */
export function useFocusTrap({ active, triggerRef }: FocusTrapOptions): { containerRef: React.RefObject<View | null> } {
  const containerRef = useRef<View>(null);
  // Stores the numeric node handle of the trigger element, captured when the trap activates.
  const previousFocusNode = useRef<number | null>(null);

  const setFocusToContainer = useCallback(() => {
    if (containerRef.current) {
      const node = findNodeHandle(containerRef.current);
      if (node) {
        AccessibilityInfo.setAccessibilityFocus(node);
      }
    }
  }, []);

  const restoreFocus = useCallback(() => {
    if (previousFocusNode.current !== null) {
      AccessibilityInfo.setAccessibilityFocus(previousFocusNode.current);
      previousFocusNode.current = null;
    }
  }, []);

  useEffect(() => {
    if (active) {
      // Capture the trigger's node handle before moving focus away so we can
      // restore it when the overlay closes.
      if (triggerRef?.current) {
        const node = findNodeHandle(triggerRef.current);
        if (node) {
          previousFocusNode.current = node;
        }
      }
      // Small delay to allow the overlay to mount and layout before focusing.
      const timeout = setTimeout(setFocusToContainer, 100);
      return () => clearTimeout(timeout);
    } else {
      restoreFocus();
    }
  }, [active, triggerRef, setFocusToContainer, restoreFocus]);

  return { containerRef };
}
