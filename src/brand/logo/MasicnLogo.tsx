import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface MasicnLogoColors {
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
  center?: string;
}

export interface MasicnLogoProps {
  /** Rendered width/height in px. The mark is square. Default 48. Ignored when `width` is set. */
  size?: number;
  /**
   * Rendered width in px, at the mark's true 35160:30160 aspect ratio
   * (height = `width * MASICN_LOGO_ASPECT_RATIO`). Takes precedence over `size`.
   */
  width?: number;
  /** Override any of the five fills. Defaults match the brand mark. */
  colors?: MasicnLogoColors;
  /** Extra opacity for the whole mark, e.g. for disabled states. */
  opacity?: number;
}

export const MASICN_LOGO_DEFAULT_COLORS: Required<MasicnLogoColors> = {
  topLeft: '#0B132B',
  topRight: '#14B8A6',
  bottomLeft: '#14B8A6',
  bottomRight: '#F97316',
  center: '#0B132B',
};

/** The mark's true height/width ratio (viewBox is 35160×30160). */
export const MASICN_LOGO_ASPECT_RATIO = 30160 / 35160;

/**
 * Static Masicn brand mark.
 *
 * A direct port of masicn-logo.svg — same path data, same viewBox — just
 * wrapped as a React Native component so fills can be overridden and the
 * size can be driven by design tokens instead of a fixed export.
 *
 * Fills default to the fixed brand colors rather than `theme.colors.*`: a
 * brand mark must read correctly regardless of the active palette/theme,
 * not be tinted by it.
 *
 * @example
 * // Square render (default)
 * <MasicnLogo size={32} />
 *
 * @example
 * // True-aspect-ratio render (e.g. to match a native splash logo asset)
 * <MasicnLogo width={130} />
 */
export const MasicnLogo = React.memo(function MasicnLogo({
  size = 48,
  width,
  colors,
  opacity = 1,
}: MasicnLogoProps): React.JSX.Element {
  const c = { ...MASICN_LOGO_DEFAULT_COLORS, ...colors };
  const renderWidth = width ?? size;
  const renderHeight =
    width !== undefined ? width * MASICN_LOGO_ASPECT_RATIO : size;

  return (
    <Svg
      width={renderWidth}
      height={renderHeight}
      viewBox="0 0 35160 30160"
      fill="none"
      opacity={opacity}
    >
      {/* Top-left tile */}
      <Path
        d="M2703.77 80H9705.16C10187.6 80 10578.6 474.3 10578.6 960.69V10138.2C10578.6 10429.7 10344.3 10665.9 10055.2 10665.9H603.35C314.31 10665.9 80 10429.7 80 10138.2V2725.6C80 1264.48 1254.7 80 2703.77 80Z"
        fill={c.topLeft}
        stroke="white"
        strokeWidth={160}
      />
      {/* Top-right tile */}
      <Path
        d="M25454.8 80.11H32456.2C33905.3 80.11 35080 1264.58 35080 2725.71V10138.3C35080 10429.8 34845.7 10666 34556.6 10666H25104.8C24815.7 10666 24581.4 10429.8 24581.4 10138.3V960.8C24581.4 474.41 24972.4 80.11 25454.8 80.11Z"
        fill={c.topRight}
        stroke="white"
        strokeWidth={160}
      />
      {/* Center bar */}
      <Path
        d="M13380.5 5452.96H21779.4C22328.6 5452.96 22749.3 5824.69 22749.3 6255.41V18609.8C22749.3 19040.5 22328.6 19412.2 21779.4 19412.2H13380.5C12831.3 19412.2 12410.7 19040.5 12410.7 18609.8V6255.41C12410.7 5824.69 12831.3 5452.96 13380.5 5452.96Z"
        fill={c.center}
        stroke="white"
        strokeWidth={160}
      />
      {/* Bottom-right tile */}
      <Path
        d="M25104.8 12434.5H34556.6C34845.7 12434.5 35080 12670.7 35080 12962.2V29199.3C35080 29685.7 34689 30080 34206.6 30080H25454.8C24972.4 30080 24581.4 29685.7 24581.4 29199.3V12962.2C24581.4 12670.7 24815.7 12434.5 25104.8 12434.5Z"
        fill={c.bottomRight}
        stroke="white"
        strokeWidth={160}
      />
      {/* Bottom-left tile */}
      <Path
        d="M603.35 12434.3H10055.2C10344.3 12434.3 10578.6 12670.6 10578.6 12962.1V29199.2C10578.6 29685.6 10187.6 30079.9 9705.16 30079.9H953.42C471.05 30079.9 80 29685.6 80 29199.2V12962.1C80 12670.6 314.31 12434.3 603.35 12434.3Z"
        fill={c.bottomLeft}
        stroke="white"
        strokeWidth={160}
      />
    </Svg>
  );
});
