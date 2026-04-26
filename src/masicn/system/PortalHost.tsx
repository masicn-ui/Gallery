/**
 * PortalHost — renders all registered portal nodes in an absolute overlay layer.
 *
 * Owned by `MasicnProvider`. Subscribes to the portal map and re-renders only
 * when a `Masicn` component mounts, updates, or unmounts — not on every child update.
 *
 * You should not render this directly; use `MasicnProvider` instead.
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PortalHostProps {
    /** Ref to the map of portal key → node, shared with MasicnProvider. */
    portalsRef: React.RefObject<Map<string, React.ReactNode>>;
    /** Subscribe to portal map changes. Returns an unsubscribe function. */
    subscribe: (listener: () => void) => () => void;
}

export function PortalHost({ portalsRef, subscribe }: PortalHostProps) {
    const [, forceUpdate] = React.useReducer((c: number) => c + 1, 0);

    React.useEffect(() => {
        return subscribe(forceUpdate);
    }, [subscribe]);

    return (
        <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
            {Array.from(portalsRef.current?.entries() ?? []).map(([key, node]) => (
                <React.Fragment key={key}>
                    {node}
                </React.Fragment>
            ))}
        </View>
    );
}
