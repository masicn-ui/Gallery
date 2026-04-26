import React from 'react';
import { View, type ViewProps } from 'react-native';

export interface AspectRatioProps extends ViewProps {
  /**
   * Width-to-height ratio. Pass a number (e.g. 16/9, 4/3, 1 for square).
   * The view fills its parent's width and sets height automatically.
   */
  ratio: number;
}

/**
 * Constrains its child to a fixed aspect ratio.
 * Useful for image thumbnails, video players, and map previews.
 */
export function AspectRatio({ ratio, children, style, ...rest }: AspectRatioProps) {
  return (
    <View style={[{ aspectRatio: ratio }, style]} {...rest}>
      {children}
    </View>
  );
}
