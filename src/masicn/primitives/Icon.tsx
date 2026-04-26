import React from 'react';
import { iconSizes } from '../tokens';
import { useTheme } from '../theme';

export type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export type IconComponent = (props: IconProps) => React.JSX.Element;

interface Props {
  /** Icon component to render (e.g. CheckIcon, XIcon). */
  icon: IconComponent;
  /**
   * Size — a semantic size key from `iconSizes` tokens, or a raw pixel number.
   * Defaults to `'default'` (24px).
   */
  size?: keyof typeof iconSizes | number;
  /** Icon color. Defaults to `theme.colors.textPrimary`. */
  color?: string;
  /** Stroke width passed to the underlying SVG. Defaults to `1.5`. */
  strokeWidth?: number;
}

/**
 * Icon — a thin wrapper that renders any masicn SVG icon component with
 * token-based sizing and automatic theme color fallback.
 *
 * @example
 * <Icon icon={CheckIcon} size="action" color={theme.colors.success} />
 *
 * @example
 * <Icon icon={SearchIcon} size={20} />
 */
export function Icon({ icon: IconComp, size = 'default', color, strokeWidth = 1.5 }: Props) {
  const { theme } = useTheme();
  const resolvedSize = typeof size === 'number' ? size : iconSizes[size];
  const resolvedColor = color ?? theme.colors.textPrimary;
  return <IconComp size={resolvedSize} color={resolvedColor} strokeWidth={strokeWidth} />;
}
