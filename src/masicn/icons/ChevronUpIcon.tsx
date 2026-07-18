import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from '../primitives';

export function ChevronUpIcon({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
