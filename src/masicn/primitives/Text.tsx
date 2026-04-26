/**
 * Text — theme-aware typography primitive.
 *
 * Renders an RN `Text` with a typography scale variant, a theme color, and
 * optional modifiers (bold, italic, underline, alignment). Bold automatically
 * resolves the correct bold variant for the current font family.
 *
 * ```tsx
 * <Text variant="h2" color="textPrimary" bold>Hello</Text>
 * <Text variant="caption" color="textSecondary">Updated 2 hours ago</Text>
 * ```
 */
import React from 'react';
import {
  Text as RNText,
  type TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../theme';
import type { Theme } from '../theme';
import { typography, fontFamilies, type Typography } from '../tokens';

type TextColor = keyof Theme['colors'];

interface TextProps extends RNTextProps {
  /** Typography scale variant. Defaults to `'body'`. */
  variant?: keyof Typography;
  /** Theme color key for the text. Defaults to `'textPrimary'`. */
  color?: TextColor;
  /** Text alignment. */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Switches to the bold variant of the current font family. */
  bold?: boolean;
  /** Applies italic font style. */
  italic?: boolean;
  /** Applies underline text decoration. */
  underline?: boolean;
}

/**
 * Lookup table: any weight variant of a family → that family's bold font string.
 * Built once at module level from the canonical fontFamilies registry, so adding
 * or renaming a font family in typography.ts automatically updates this map.
 */
const boldFontMap = new Map<string, string>(
  Object.values(fontFamilies).flatMap(({ regular, medium, bold }) => [
    [regular, bold],
    [medium, bold],
  ]),
);

function getBoldFont(fontFamily?: string): string | undefined {
  if (!fontFamily) { return fontFamily; }
  return boldFontMap.get(fontFamily) ?? fontFamily;
}

export function Text({
  variant = 'body',
  color = 'textPrimary',
  align,
  bold,
  italic,
  underline,
  style,
  children,
  ...rest
}: TextProps) {
  const { theme } = useTheme();

  const baseStyle = typography[variant];

  const resolvedFontFamily = bold
    ? getBoldFont(baseStyle.fontFamily)
    : baseStyle.fontFamily;

  return (
    <RNText
      style={[
        baseStyle,
        { fontFamily: resolvedFontFamily },
        { color: theme.colors[color] },
        align && styles[align],
        italic && styles.italic,
        underline && styles.underline,
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' },

  italic: {
    fontStyle: 'italic',
  },

  underline: {
    textDecorationLine: 'underline',
  },
});
