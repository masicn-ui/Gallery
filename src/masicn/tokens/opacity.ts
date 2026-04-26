/**
 * Opacity tokens — consistent transparency across overlays and states.
 */

export const opacity = {
    /** `0.4` — Disabled state. Applied to non-interactive elements. */
    disabled: 0.4,
    /** `0.7` — Subtle / de-emphasized. Secondary info, placeholders. */
    subtle: 0.7,
    /** `0.2` — Barely-there scrim. Light tinted backdrop. */
    overlayLight: 0.2,
    /** `0.4` — Balanced scrim. Standard content overlay. */
    overlayMedium: 0.4,
    /** `0.6` — Strong scrim. Focus-trap / modal backdrop. */
    overlayHeavy: 0.6,
    /** `0.5` — Dark modal backdrop. Standard black/ink overlay. */
    overlayDark: 0.5,
    /** `0.8` — Pressed / active feedback. Applied via Pressable opacity. */
    pressed: 0.8,
    /** `0.9` — Hover feedback. Pointer devices (web / large screen). */
    hover: 0.9,
    /** `0.08` — Tint layer. Interactive highlight backgrounds (selected picker row, etc.). */
    tint: 0.08,
    /** `0.12` — Medium tint. Status-colour chip backgrounds (success/warning/error/info). */
    tintMedium: 0.12,
    /** `0.1` — Shimmer sweep highlight alpha in dark mode. */
    shimmerSweepDark: 0.1,
    /** `0.55` — Shimmer sweep highlight alpha in light mode. */
    shimmerSweepLight: 0.55,
} as const;

export type Opacity = typeof opacity;
