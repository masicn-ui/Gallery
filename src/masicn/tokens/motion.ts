import { Easing } from 'react-native';

/**
 * Motion tokens — ensures consistent animation timing across the app.
 * Works with Reanimated, Animated, LayoutAnimation, and gesture transitions.
 *
 * For Reanimated-specific easing, import from './motionEasing' instead.
 */

export const motion = {
    duration: {
        /** `0ms` — No animation. Use for reduced-motion preferences. */
        instant: 0,
        /** `100ms` — Sub-micro transitions. Cursor blink off, badge pop. */
        micro: 100,
        /** `120ms` — Micro-interactions. Ripple, toggle, icon swap. */
        fast: 120,
        /** `200ms` — Standard UI transition. The default. */
        normal: 200,
        /** `300ms` — Modal / sheet entrance, page-level transitions. */
        slow: 300,
        /** `500ms` — Complex layout shifts, multi-step animations. Cursor blink on. */
        slower: 500,
        /** `700ms` — Hero animations, dramatic reveals, onboarding. */
        dramatic: 700,
        /** `1100ms` — Repeating pulse / breathe animations (e.g. status dot). */
        pulse: 1100,
        /** `1400ms` — Indeterminate progress bar sweep cycle. */
        sweep: 1400,
    },

    /**
     * Easing functions — compatible with React Native's Animated API.
     * Use `motionEasing` from motionEasing.ts for Reanimated withTiming().
     */
    easing: {
        /** Smooth in-out — default for most UI transitions. */
        standard: Easing.inOut(Easing.ease),
        /** Starts slow, accelerates — use for elements leaving the screen. */
        accelerate: Easing.in(Easing.ease),
        /** Starts fast, decelerates — use for elements entering the screen. */
        decelerate: Easing.out(Easing.ease),
        /** Constant rate — use for progress indicators, loaders. */
        linear: Easing.linear,
    },

    /**
     * Spring presets for gestures & physics animations.
     *
     * Damping ratio ζ = damping / (2 × √(stiffness × mass)).
     * ζ ≥ 1.0 → critically damped (no overshoot).
     * ζ ∈ [0.7, 1.0) → slight overshoot, snappy feel.
     * ζ < 0.7 → noticeable bounce (use only for `bouncy`).
     */
    spring: {
        /** Smooth settle — ζ ≈ 1.06, no overshoot. Default for most UI elements. */
        gentle: {
            damping: 26,
            stiffness: 150,
        },
        /** Fast + crisp — ζ ≈ 0.74, minimal overshoot. Good for swipe snap. */
        snappy: {
            damping: 22,
            stiffness: 220,
        },
        /** Intentionally bouncy — ζ ≈ 0.37. Use sparingly for playful moments. */
        bouncy: {
            damping: 10,
            stiffness: 180,
        },
        /** Balanced layout transitions — ζ ≈ 0.99, almost no overshoot. */
        responsive: {
            damping: 28,
            stiffness: 200,
        },
        /** Bottom/side sheets — ζ ≈ 0.90, crisp settle. */
        sheet: {
            damping: 25,
            stiffness: 300,
            mass: 0.8,
        },
        /** Carousel & list snap — ζ ≈ 1.29, over-damped for instant locking. */
        snap: {
            damping: 40,
            stiffness: 300,
            mass: 0.8,
        },
        /** Dialogs & modals scale-in — ζ ≈ 0.87, subtle spring feel. */
        dialog: {
            damping: 28,
            stiffness: 260,
        },
        /** Checkbox / toggle check mark pop — ζ ≈ 0.50, intentionally bouncy. */
        check: {
            damping: 12,
            stiffness: 200,
        },
        /** Radio indicator dot — ζ ≈ 0.91, crisp settle. */
        indicator: {
            damping: 20,
            stiffness: 300,
        },
    },

    /**
     * Press interaction values — consistent feedback across pressable elements.
     */
    press: {
        /** Scale for a standard press — subtle shrink. */
        scale: 0.96,
        /** Scale for a light press — used when element also rotates. */
        scaleLight: 0.98,
        /** Rotation in degrees for a tilt press animation. */
        rotateDeg: 2,
        /** Scale for an expanding interaction (e.g. slider thumb scale-up on drag). */
        scaleLarge: 1.2,
    },

    /**
     * Entry animation values — initial states for elements entering the screen.
     */
    enter: {
        /** Starting scale for modal/dialog enter spring. Animates from this → 1. */
        scaleFrom: 0.92,
    },
} as const;

export type Motion = typeof motion;
