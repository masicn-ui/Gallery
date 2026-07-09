/**
 * Semantic theme shape — both light and dark must satisfy this interface.
 *
 * Naming convention: primary / secondary / tertiary
 * consistently across all token groups.
 *
 * Token groups:
 *   Background   – full-screen canvas
 *   Surface      – cards, sheets, modals
 *   Brand        – actionable / branded elements
 *   Text         – typographic hierarchy
 *   Icon         – iconography hierarchy
 *   Border       – strokes & dividers
 *   Input        – form controls
 *   Status       – feedback colours
 *   Interactive  – overlays, ripples, highlights
 *   Navigation   – nav-bar, tab-bar, cards
 *   Misc         – shadows, skeletons
 */
export interface Theme {
  /** `true` when the active theme variant is dark mode. */
  dark: boolean;
  colors: {
    // ── Background ──
    /** Full-screen canvas background. Used as the root view color on every screen. */
    background: string;

    // ── Surfaces ──
    /** Primary raised surface. Cards, sheets, modals. */
    surfacePrimary: string;
    /** Secondary raised surface. Nested cards, inner sections. */
    surfaceSecondary: string;
    /** Tertiary raised surface. Subtle inset areas, code blocks. */
    surfaceTertiary: string;
    /** Floating overlay surface. Popovers, tooltips, context menus, dropdown menus.
     *  In light mode equals surfacePrimary; in dark mode equals surfaceSecondary to
     *  give floating elements a visually elevated appearance. */
    surfaceOverlay: string;

    // ── Brand ──
    /** Primary brand color. Buttons, active indicators, links. */
    primary: string;
    /** Secondary brand color. Supporting interactive elements. */
    secondary: string;
    /** Tertiary brand color. Accents, decorative highlights. */
    tertiary: string;
    /** Text / icon color on a `primary` background. */
    onPrimary: string;
    /** Text / icon color on a `secondary` background. */
    onSecondary: string;
    /** Text / icon color on a `tertiary` background. */
    onTertiary: string;
    /** Low-opacity tinted background using the primary brand colour.
     *  Use for soft selected states (outline chips, selected rows, ghost button hover),
     *  tinted badge backgrounds, and any surface that needs subtle primary branding
     *  without the visual weight of a full `primary` fill. */
    primaryContainer: string;

    // ── Text ──
    /** High-emphasis body text. Headlines, paragraph copy. */
    textPrimary: string;
    /** Medium-emphasis text. Labels, captions, secondary info. */
    textSecondary: string;
    /** Low-emphasis text. Placeholders, meta info. */
    textTertiary: string;
    /** Non-interactive text. Disabled labels, hints on disabled inputs. */
    textDisabled: string;
    /** Text on dark/inverted surfaces (e.g. toasts, filled badges). */
    textInverse: string;
    /** Inline tappable text / hyperlinks within body copy. */
    textLink: string;

    // ── Icons ──
    /** High-emphasis icon color. Default for most icons. */
    iconPrimary: string;
    /** Medium-emphasis icon color. Secondary / decorative icons. */
    iconSecondary: string;
    /** Non-interactive icon color. Disabled states. */
    iconDisabled: string;

    // ── Borders ──
    /** Default border for cards, inputs, and dividers. */
    borderPrimary: string;
    /** Subtle border for nested sections and inset areas. */
    borderSecondary: string;
    /** Input border when focused / keyboard-active. */
    borderFocused: string;
    /** Hairline separator between list rows and sections. */
    separator: string;

    // ── Inputs ──
    /** Fill color of text input fields. */
    inputBackground: string;
    /** Border color of text input fields at rest. */
    inputBorder: string;
    /** Placeholder text color inside inputs. */
    inputPlaceholder: string;

    // ── Status ──
    /** Accent / highlight — not tied to a specific semantic meaning. */
    accent: string;
    /** Destructive / validation error. */
    error: string;
    /** Positive / confirmation. */
    success: string;
    /** Caution / warning. */
    warning: string;
    /** Informational / neutral feedback. */
    info: string;
    /** Text / icon on an `error` background. */
    onError: string;
    /** Text / icon on a `success` background. */
    onSuccess: string;
    /** Text / icon on a `warning` background. */
    onWarning: string;
    /** Text / icon on an `info` background. */
    onInfo: string;
    /** Text / icon on an `accent` background. */
    onAccent: string;

    // ── Interactive ──
    /** Scrim behind modals and bottom sheets. */
    overlay: string;
    /** Tinted highlight on selected / pressed rows. */
    highlight: string;
    /** Ripple / splash color for touch feedback. */
    ripple: string;
    /** Background tint for disabled interactive elements. */
    disabled: string;

    // ── Navigation ──
    /** Background of navigation cards (React Navigation header/card). */
    card: string;
    /** Notification badge background (React Navigation badge). */
    notification: string;
    /** Active tab icon / label color. */
    tabBarActive: string;
    /** Inactive tab icon / label color. */
    tabBarInactive: string;
    /** Background of the tab bar strip. */
    tabBarBackground: string;

    // ── Misc ──
    /** `shadowColor` to pair with elevation presets. */
    shadow: string;
    /** Skeleton loader placeholder color. */
    skeleton: string;
  };
}
