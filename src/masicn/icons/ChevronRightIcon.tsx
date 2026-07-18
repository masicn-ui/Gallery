import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from '../primitives';

export function ChevronRightIcon({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 6C9 6 15 10.4189 15 12C15 13.5811 9 18 9 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
