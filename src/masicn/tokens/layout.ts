/**
 * Layout tokens — responsive constraints for mobile, tablet, foldables.
 */

export const layout = {
    /**
     * Horizontal screen padding standard.
     */
    screenPadding: 16,

    /**
     * Max readable width for content.
     * Prevents giant line lengths on tablets.
     */
    contentMaxWidth: 720,

    /**
     * Breakpoints — useful for responsive RN.
     */
    breakpoints: {
        /** `0` — Phone (portrait). Base breakpoint. */
        phone: 0,
        /** `768` — Tablet. Two-column layouts, side panels. */
        tablet: 768,
        /** `1024` — Large tablet / desktop. Full multi-column layout. */
        largeTablet: 1024,
    },

    /**
     * Safe tap target guidelines.
     */
    minTouchTarget: 40,
    comfortableTouchTarget: 48,

    /**
     * Overlay / modal constraints.
     * Keeps modals from stretching edge-to-edge on wide tablets.
     */
    overlayMaxWidth: {
        /** `480` — Narrow modal / sheet (confirmation dialogs). */
        narrow: 480,
        /** `560` — Medium modal / sheet (forms, pickers). */
        medium: 560,
    },
    overlayMaxHeight: 400,

    /**
     * Side-sheet max width — prevents full-width sheets on tablets.
     */
    sideSheetMaxWidth: 400,

    /**
     * Z-index scale — use these instead of raw numbers.
     */
    zIndex: {
        /** `0` — Default stacking context. */
        base: 0,
        /** `10` — Dropdowns and popovers. */
        dropdown: 10,
        /** `20` — Sticky headers and footers. */
        sticky: 20,
        /** `30` — Backdrop overlays. */
        overlay: 30,
        /** `40` — Modals and dialogs. */
        modal: 40,
        /** `50` — Toasts and snackbars (above everything). */
        toast: 50,
    },
} as const;

export type Layout = typeof layout;
