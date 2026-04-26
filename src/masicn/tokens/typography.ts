import { TextStyle } from 'react-native';

/**
 * Installed Font Families
 *
 * These map directly to loaded font assets.
 * Add new families here, but DO NOT reference them directly in components.
 * Always go through `fonts` (role-based mapping below).
 */
export const fontFamilies = {
  inter: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
  },
  dmSans: {
    regular: 'DMSans-Regular',
    medium: 'DMSans-Medium',
    bold: 'DMSans-Bold',
  },
  manrope: {
    regular: 'Manrope-Regular',
    medium: 'Manrope-Medium',
    bold: 'Manrope-Bold',
  },
  outfit: {
    regular: 'Outfit-Regular',
    medium: 'Outfit-Medium',
    bold: 'Outfit-Bold',
  },
  poppins: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
  },
} as const;

/**
 * Font family keys (e.g., "inter", "poppins")
 */
export type FontFamilyKey = keyof typeof fontFamilies;

/**
 * Supported font weights
 */
export type FontWeightKey = 'regular' | 'medium' | 'bold';

/**
 * Active Font Roles
 *
 * This is the ONLY place where font families should be assigned to UI roles.
 *
 * Why this exists:
 * - Enables easy global font switching
 * - Keeps typography consistent across the app
 *
 * Example:
 * Change `display` from Poppins → Manrope = all headings update automatically.
 */
export const fonts = {
  /** Used for headings, titles, and emphasis */
  display: fontFamilies.poppins,

  /** Used for body text, paragraphs, and readable content */
  ui: fontFamilies.inter,

  /** Used for buttons, labels, tags, and UI accents */
  accent: fontFamilies.outfit,
} as const;

export type FontRole = keyof typeof fonts;

/**
 * Typography Scale
 *
 * Rules:
 * - NEVER hardcode fontSize in components → use these tokens
 * - Maintain vertical rhythm via predefined lineHeights
 * - Prefer semantic usage (h1, body, label) over visual guessing
 */
export const typography = {
  /**
   * h1 — Page Title
   *
   * Usage:
   * - Screen titles
   * - Top-level headings
   *
   * Avoid:
   * - Using inside cards or small containers
   *
   * Specs: 32 / 40 — Display Bold
   */
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  /**
   * h2 — Section Heading
   *
   * Usage:
   * - Major sections within a screen
   * - Page subsections
   *
   * Specs: 24 / 32 — Display Bold
   */
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  /**
   * h3 — Sub-section Heading
   *
   * Usage:
   * - Card titles
   * - Dialog headings
   *
   * Specs: 20 / 28 — Display Medium
   */
  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: fonts.display.medium,
  } satisfies TextStyle,

  /**
   * h4 — Minor Heading
   *
   * Usage:
   * - Dense layouts
   * - List section titles
   *
   * Specs: 18 / 26 — Display Medium
   */
  h4: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: fonts.display.medium,
  } satisfies TextStyle,

  /**
   * bodyLarge — Emphasized Body Text
   *
   * Usage:
   * - Intro paragraphs
   * - Important descriptions
   *
   * Specs: 18 / 28 — UI Regular
   */
  bodyLarge: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /**
   * body — Default Text
   *
   * Usage:
   * - Main readable content
   * - Paragraphs
   *
   * This is your MOST used text style.
   *
   * Specs: 16 / 24 — UI Regular
   */
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /**
   * bodySmall — Secondary Text
   *
   * Usage:
   * - Supporting descriptions
   * - Less important content
   *
   * Specs: 14 / 20 — UI Regular
   */
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /**
   * input — Input Field Text
   *
   * Usage:
   * - TextInput values
   * - Form fields
   *
   * Slightly stronger weight for better readability while typing.
   *
   * Specs: 16 / 24 — UI Medium
   */
  input: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.ui.medium,
  } satisfies TextStyle,

  /**
   * label — Form Labels / UI Labels
   *
   * Usage:
   * - Input labels
   * - Tab labels
   * - Small UI identifiers
   *
   * Specs: 13 / 18 — Accent Medium
   */
  label: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: fonts.accent.medium,
  } satisfies TextStyle,

  /**
   * caption — Metadata Text
   *
   * Usage:
   * - Timestamps
   * - Helper text
   * - Secondary info
   *
   * Specs: 12 / 16 — UI Regular
   */
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /**
   * captionSmall — Fine Print
   *
   * Usage:
   * - Legal text
   * - Disclaimers
   *
   * Specs: 11 / 14 — UI Regular
   */
  captionSmall: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /**
   * overline — Micro Label (Uppercase)
   *
   * Usage:
   * - Category labels
   * - Eyebrow text above headings
   *
   * Always use uppercase styling in UI.
   *
   * Specs: 10 / 14 — Accent Medium
   */
  overline: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 1.5,
    fontFamily: fonts.accent.medium,
  } satisfies TextStyle,

  /**
   * titleSmall — Compact Title
   *
   * Usage:
   * - Cards
   * - List items
   *
   * Specs: 18 / 24 — Display Medium
   */
  titleSmall: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: fonts.display.medium,
  } satisfies TextStyle,

  /**
   * titleMedium — Prominent Title
   *
   * Usage:
   * - Modals
   * - Bottom sheets
   *
   * Specs: 22 / 30 — Display Bold
   */
  titleMedium: {
    fontSize: 22,
    lineHeight: 30,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  /**
   * sectionHeader — Section Label (Uppercase)
   *
   * Usage:
   * - Dividers between content groups
   *
   * Always uppercase with tracking.
   *
   * Specs: 12 / 16 — Accent Bold
   */
  sectionHeader: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.2,
    fontFamily: fonts.accent.bold,
  } satisfies TextStyle,

  /**
   * buttonLarge — Primary CTA
   *
   * Usage:
   * - Main actions (e.g., "Continue", "Buy Now")
   *
   * Specs: 16 / 22 — Accent Bold
   */
  buttonLarge: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.accent.bold,
  } satisfies TextStyle,

  /**
   * button — Default Button
   *
   * Usage:
   * - Standard actions
   *
   * Specs: 15 / 20 — Accent Bold
   */
  button: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fonts.accent.bold,
  } satisfies TextStyle,

  /**
   * buttonSmall — Compact Button
   *
   * Usage:
   * - Inline actions
   * - Dense UI
   *
   * Specs: 13 / 18 — Accent Medium
   */
  buttonSmall: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: fonts.accent.medium,
  } satisfies TextStyle,
} as const;

export type Typography = typeof typography;

/**
 * All available typography variant keys
 *
 * Example:
 * `<Text variant="body" />`
 */
export type TypographyVariant = keyof Typography;