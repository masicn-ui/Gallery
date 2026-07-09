import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { IconProps } from '../primitives';

export function SunIcon({
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={10} stroke={color} strokeWidth={strokeWidth} />

      <Path
        d="M9 16C9.83563 16.6278 10.8744 16.9998 12 16.9998C13.1256 16.9998 14.1644 16.6278 15 16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M11.5 9.5C9 8 6 7.99999 4 8C4 8 4 13 7 13C9.5 13 11.5 9.5 11.5 9.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M12.5 9.5C15 8 18 7.99999 20 8C20 8 20 13 17 13C14.5 13 12.5 9.5 12.5 9.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
