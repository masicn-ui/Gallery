import { ViewStyle } from 'react-native';

/**
 * Elevation presets — platform-aware shadow + Android elevation.
 * shadowColor is intentionally omitted so it can be set from theme.colors.shadow.
 */

export const elevation = {
  /** Flat — no shadow. Use on default surfaces with no perceived depth. */
  none: {
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
  } satisfies ViewStyle,

  /** Subtle lift. Cards at rest, list items. */
  sm: {
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  } satisfies ViewStyle,

  /** Gentle depth. Menus, dropdowns, hover states. */
  md: {
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  } satisfies ViewStyle,

  /** Clear elevation. Modals, sheets, focused cards. */
  lg: {
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  } satisfies ViewStyle,

  /** High elevation. Toasts, floating overlays, FABs. */
  xl: {
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  } satisfies ViewStyle,
} as const;

export type Elevation = typeof elevation;
