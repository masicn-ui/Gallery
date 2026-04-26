import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from '../primitives';

export function MinusIcon({
  size = 24,
  color = 'currentColor',
}: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M5.49854 10.5H18.5015C19.3297 10.5 20.001 11.1717 20.0005 12C19.9999 12.8275 19.329 13.498 18.5015 13.498H5.49854C4.67065 13.498 3.99951 12.8269 3.99951 11.999C3.99951 11.1711 4.67065 10.5 5.49854 10.5Z"
        fill={color}
      />
    </Svg>
  );
}
