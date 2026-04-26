/**
 * Masicn — renders children into the global portal layer managed by `MasicnProvider`.
 *
 * Use this to escape stacking contexts and render overlays (modals, toasts, tooltips)
 * at the top of the component tree, regardless of where `Masicn` is placed in the JSX.
 *
 * Must be a descendant of `MasicnProvider`.
 *
 * ```tsx
 * <Masicn>
 *   <Toast message="Saved!" />
 * </Masicn>
 * ```
 */
import React from 'react';
import { MasicnContext } from './MasicnProvider';

interface MasicnProps {
    children: React.ReactNode;
}

export function Masicn({ children }: MasicnProps) {
    const context = React.useContext(MasicnContext);

    if (!context) {
        throw new Error(
            'Masicn UI: Masicn must be used within MasicnProvider.',
        );
    }

    // useId() is stable across Strict Mode double-mounts and concurrent renders.
    const portalKey = `Masicn-portal-${React.useId()}`;

    // Mount once on initial render; unmount on cleanup.
    // children are NOT in deps — updates are handled by the effect below.
    React.useEffect(() => {
        context.mount(portalKey, children);

        return () => {
            context.unmount(portalKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context, portalKey]);

    React.useEffect(() => {
        context.update(portalKey, children);
    }, [children, context, portalKey]);

    return null;
}
