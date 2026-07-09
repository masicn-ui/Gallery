import React from 'react';
import { View, type ViewProps, type ColorValue } from 'react-native';

export interface CircleProps extends ViewProps {
  /**
   * Diameter (width and height) in points.
   * Prefer token values over raw numbers — e.g. `sizes.avatarMd`, `iconSizes.md`.
   *
   * @example
   * import { sizes, iconSizes } from '../tokens';
   * <Circle size={sizes.avatarMd} />
   * <Circle size={iconSizes.lg} />
   */
  size: number;
  /** Fill color of the circle. Accepts any React Native `ColorValue`. */
  backgroundColor?: ColorValue;
}

/**
 * A perfectly circular container. Useful for avatars, status indicators,
 * icon badges, and any circular UI element.
 */
export function Circle({
  size,
  backgroundColor,
  style,
  children,
  ...rest
}: CircleProps) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
