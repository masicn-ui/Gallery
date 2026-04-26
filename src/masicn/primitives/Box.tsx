/**
 * Box — the foundational layout primitive.
 *
 * A thin, token-aware wrapper around `View` that maps spacing, radius, and
 * border props to design-system values. Use it as the building block for all
 * other layout compositions.
 *
 * ```tsx
 * <Box padding="md" borderRadius="lg" backgroundColor={theme.colors.surfacePrimary}>
 *   <Text>Hello</Text>
 * </Box>
 * ```
 */
import React from 'react';
import { View, type ViewProps, type ViewStyle, type ColorValue } from 'react-native';
import { spacing, radius, borders, type Spacing, type Radius, type Borders } from '../tokens';

interface BoxProps extends ViewProps {
  // ── Spacing ─────────────────────────────────────────────────────────────────
  /** Uniform padding on all sides. Maps to a `spacing` token. */
  padding?: keyof Spacing;
  /** Horizontal padding (left + right). Maps to a `spacing` token. */
  paddingHorizontal?: keyof Spacing;
  /** Vertical padding (top + bottom). Maps to a `spacing` token. */
  paddingVertical?: keyof Spacing;
  /** Top padding. Maps to a `spacing` token. */
  paddingTop?: keyof Spacing;
  /** Bottom padding. Maps to a `spacing` token. */
  paddingBottom?: keyof Spacing;
  /** Left padding. Maps to a `spacing` token. */
  paddingLeft?: keyof Spacing;
  /** Right padding. Maps to a `spacing` token. */
  paddingRight?: keyof Spacing;
  /** Uniform margin on all sides. Maps to a `spacing` token. */
  margin?: keyof Spacing;
  /** Top margin. Maps to a `spacing` token. */
  marginTop?: keyof Spacing;
  /** Bottom margin. Maps to a `spacing` token. */
  marginBottom?: keyof Spacing;
  /** Left margin. Maps to a `spacing` token. */
  marginLeft?: keyof Spacing;
  /** Right margin. Maps to a `spacing` token. */
  marginRight?: keyof Spacing;
  /** Horizontal margin (left + right). Maps to a `spacing` token. */
  marginHorizontal?: keyof Spacing;
  /** Vertical margin (top + bottom). Maps to a `spacing` token. */
  marginVertical?: keyof Spacing;
  /** Gap between children (flex gap). Maps to a `spacing` token. */
  gap?: keyof Spacing;

  // ── Layout ──────────────────────────────────────────────────────────────────
  /** Flex grow/shrink factor. */
  flex?: ViewStyle['flex'];
  /** Main axis direction. */
  flexDirection?: ViewStyle['flexDirection'];
  /** Whether children wrap to the next line. */
  flexWrap?: ViewStyle['flexWrap'];
  /** Cross-axis alignment of children. */
  alignItems?: ViewStyle['alignItems'];
  /** Cross-axis alignment of this box within its parent. */
  alignSelf?: ViewStyle['alignSelf'];
  /** Main-axis distribution of children. */
  justifyContent?: ViewStyle['justifyContent'];

  // ── Appearance ──────────────────────────────────────────────────────────────
  /**
   * Background color — prefer design-token values (e.g. `theme.colors.surfacePrimary`).
   * Accepts any `ColorValue` for flexibility, but raw hex/named strings bypass the
   * token system and won't respond to theme changes.
   */
  backgroundColor?: ColorValue;
  /** Corner rounding. Maps to a `radius` token. */
  borderRadius?: keyof Radius;
  /** Border width. Maps to a `borders` token. */
  borderWidth?: keyof Borders;
  /** Border color — pass a theme color value. */
  borderColor?: ColorValue;
  /** Content clipping behavior. */
  overflow?: ViewStyle['overflow'];
}

export function Box({
  children,
  style,
  // spacing
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  gap,
  // layout
  flex,
  flexDirection,
  flexWrap,
  alignItems,
  alignSelf,
  justifyContent,
  // appearance
  backgroundColor,
  borderRadius: borderRadiusProp,
  borderWidth: borderWidthProp,
  borderColor,
  overflow,
  ...rest
}: BoxProps) {
  return (
    <View
      style={[
        padding !== undefined && { padding: spacing[padding] },
        paddingHorizontal !== undefined && { paddingHorizontal: spacing[paddingHorizontal] },
        paddingVertical !== undefined && { paddingVertical: spacing[paddingVertical] },
        paddingTop !== undefined && { paddingTop: spacing[paddingTop] },
        paddingBottom !== undefined && { paddingBottom: spacing[paddingBottom] },
        paddingLeft !== undefined && { paddingLeft: spacing[paddingLeft] },
        paddingRight !== undefined && { paddingRight: spacing[paddingRight] },
        margin !== undefined && { margin: spacing[margin] },
        marginTop !== undefined && { marginTop: spacing[marginTop] },
        marginBottom !== undefined && { marginBottom: spacing[marginBottom] },
        marginLeft !== undefined && { marginLeft: spacing[marginLeft] },
        marginRight !== undefined && { marginRight: spacing[marginRight] },
        marginHorizontal !== undefined && { marginHorizontal: spacing[marginHorizontal] },
        marginVertical !== undefined && { marginVertical: spacing[marginVertical] },
        gap !== undefined && { gap: spacing[gap] },
        flex !== undefined && { flex },
        flexDirection !== undefined && { flexDirection },
        flexWrap !== undefined && { flexWrap },
        alignItems !== undefined && { alignItems },
        alignSelf !== undefined && { alignSelf },
        justifyContent !== undefined && { justifyContent },
        backgroundColor !== undefined && { backgroundColor },
        borderRadiusProp !== undefined && { borderRadius: radius[borderRadiusProp] },
        borderWidthProp !== undefined && { borderWidth: borders[borderWidthProp] },
        borderColor !== undefined && { borderColor },
        overflow !== undefined && { overflow },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}
