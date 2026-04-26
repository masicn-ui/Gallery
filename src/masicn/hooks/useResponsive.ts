/**
 * useResponsive — reactive breakpoint detection based on window dimensions.
 *
 * Re-renders automatically when the window size changes (rotation, foldable unfold,
 * split-screen resize).
 *
 * ```ts
 * const { breakpoint, isTablet, select } = useResponsive();
 *
 * const padding = select({ phone: 16, tablet: 24, largeTablet: 32 });
 * ```
 */
import { useWindowDimensions } from 'react-native';
import { layout } from '../tokens';

export type Breakpoint = 'phone' | 'tablet' | 'largeTablet';

export interface ResponsiveInfo {
    /** Current classified breakpoint based on window width. */
    breakpoint: Breakpoint;
    /** `true` when device width ≥ tablet breakpoint (768pt). */
    isTablet: boolean;
    /** `true` when device width ≥ largeTablet breakpoint (1024pt). */
    isLargeTablet: boolean;
    /** Current window width in points. */
    width: number;
    /** Current window height in points. */
    height: number;
    /**
     * Returns the value matching the current breakpoint.
     * Falls back to smaller breakpoint values if the current one is not specified.
     *
     * ```ts
     * const padding = select({ phone: 16, tablet: 24, largeTablet: 32 });
     * ```
     */
    select: <T>(values: Partial<Record<Breakpoint, T>> & { phone: T }) => T;
}

export function useResponsive(): ResponsiveInfo {
    const { width, height } = useWindowDimensions();

    const isLargeTablet = width >= layout.breakpoints.largeTablet;
    const isTablet = width >= layout.breakpoints.tablet;

    const breakpoint: Breakpoint = isLargeTablet
        ? 'largeTablet'
        : isTablet
            ? 'tablet'
            : 'phone';

    function select<T>(values: Partial<Record<Breakpoint, T>> & { phone: T }): T {
        if (isLargeTablet && values.largeTablet !== undefined) {
            return values.largeTablet;
        }
        if (isTablet && values.tablet !== undefined) {
            return values.tablet;
        }
        return values.phone;
    }

    return { breakpoint, isTablet, isLargeTablet, width, height, select };
}
