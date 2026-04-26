/**
 * Semantic icon sizes — maps intent instead of raw numbers.
 */

export const iconSizes = {
    /** `16` — Decorative / ornamental. Non-interactive, for visual texture only. */
    decorative: 16,
    /** `20` — Action icon. Button icons, interactive indicators. */
    action: 20,
    /** `22` — Navigation icon. Tab bar and drawer icons. */
    nav: 22,
    /** `24` — Standard inline icon. The default for most contexts. */
    default: 24,
    /** `32` — Large icon. Section headers, list row lead visuals. */
    large: 32,
    /** `48` — Hero icon. Empty states, onboarding illustrations. */
    hero: 48,
} as const;

export type IconSizes = typeof iconSizes;
