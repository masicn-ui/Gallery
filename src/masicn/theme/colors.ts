/**
 * Masi palette — the default masicn theme.
 * Warm papayaWhip backgrounds with deep teal-inkBlack primaries and vivid tangerine accents.
 */
import type { Theme } from '../theme';
import { opacity } from '../tokens';

const c = {
  white: '#ffffff',
  // Warm tones
  papayaWhip: '#ffecd1',
  vanillaCustard: '#e9d8a6',
  vividTangerine: '#ff7d00',
  goldenOrange: '#ee9b00',
  // Teal / cyan scale
  darkCyan: '#0a9396',
  pearlAqua: '#94d2bd',
  darkTeal: '#005f73',
  stormyTeal: '#15616d',
  // Dark bases
  inkBlack: '#001219',
  inkBlackDeep: '#001524',
  inkBlackAlt: '#000814',
  // Navy scale
  prussianBlue: '#001d3d',
  regalNavy: '#003566',
  // Status
  oxidizedIron: '#ae2012',
  schoolBusYellow: '#ffc300',
} as const;

export const lightTheme: Theme = {
  dark: false,

  colors: {
    background: c.papayaWhip,

    surfacePrimary: c.white,
    surfaceSecondary: c.vanillaCustard,
    surfaceTertiary: c.papayaWhip,
    surfaceOverlay: c.white,

    primary: c.inkBlack,
    secondary: c.darkTeal,
    tertiary: c.darkCyan,
    onPrimary: c.papayaWhip,
    onSecondary: c.white,
    onTertiary: c.white,
    primaryContainer: `rgba(0,18,25,${opacity.tint})`,

    textPrimary: c.inkBlack,
    textSecondary: c.stormyTeal,
    textTertiary: c.darkCyan,
    textDisabled: c.pearlAqua,
    textInverse: c.white,
    textLink: c.darkCyan,

    iconPrimary: c.inkBlack,
    iconSecondary: c.darkTeal,
    iconDisabled: c.pearlAqua,

    borderPrimary: c.vanillaCustard,
    borderSecondary: c.papayaWhip,
    borderFocused: c.darkCyan,
    separator: c.vanillaCustard,

    inputBackground: c.white,
    inputBorder: c.vanillaCustard,
    inputPlaceholder: c.pearlAqua,

    accent: c.vividTangerine,
    error: c.oxidizedIron,
    success: c.darkCyan,
    warning: c.goldenOrange,
    info: c.darkTeal,
    onError: c.white,
    onSuccess: c.white,
    onWarning: c.inkBlack,
    onInfo: c.white,
    onAccent: c.inkBlack,

    overlay: `rgba(0,18,25,${opacity.overlayMedium})`,
    highlight: `rgba(10,147,150,${opacity.overlayLight})`,
    ripple: `rgba(0,18,25,${opacity.overlayLight})`,
    disabled: c.papayaWhip,

    card: c.white,
    notification: c.vividTangerine,
    tabBarActive: c.inkBlack,
    tabBarInactive: c.pearlAqua,
    tabBarBackground: c.white,

    shadow: c.inkBlack,
    skeleton: c.vanillaCustard,
  },
};

export const darkTheme: Theme = {
  dark: true,

  colors: {
    background: c.inkBlackDeep,

    surfacePrimary: c.prussianBlue,
    surfaceSecondary: c.regalNavy,
    surfaceTertiary: c.inkBlackAlt,
    surfaceOverlay: c.regalNavy,

    primary: c.papayaWhip,
    secondary: c.pearlAqua,
    tertiary: c.darkCyan,
    onPrimary: c.inkBlack,
    onSecondary: c.inkBlack,
    onTertiary: c.white,
    primaryContainer: `rgba(255,236,209,${opacity.tint})`,

    textPrimary: c.papayaWhip,
    textSecondary: c.pearlAqua,
    textTertiary: c.darkCyan,
    textDisabled: c.regalNavy,
    textInverse: c.inkBlack,
    textLink: c.pearlAqua,

    iconPrimary: c.papayaWhip,
    iconSecondary: c.pearlAqua,
    iconDisabled: c.regalNavy,

    borderPrimary: c.darkCyan,
    borderSecondary: c.regalNavy,
    borderFocused: c.pearlAqua,
    separator: c.regalNavy,

    inputBackground: c.prussianBlue,
    inputBorder: c.darkCyan,
    inputPlaceholder: c.darkCyan,

    accent: c.vividTangerine,
    error: c.oxidizedIron,
    success: c.pearlAqua,
    warning: c.schoolBusYellow,
    info: c.darkTeal,
    onError: c.white,
    onSuccess: c.inkBlack,
    onWarning: c.inkBlack,
    onInfo: c.white,
    onAccent: c.inkBlack,

    overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
    highlight: `rgba(148,210,189,${opacity.overlayLight})`,
    ripple: `rgba(255,236,209,${opacity.overlayLight})`,
    disabled: c.regalNavy,

    card: c.prussianBlue,
    notification: c.vividTangerine,
    tabBarActive: c.papayaWhip,
    tabBarInactive: c.darkCyan,
    tabBarBackground: c.prussianBlue,

    shadow: c.white,
    skeleton: c.regalNavy,
  },
};

export const masiPalette = { light: lightTheme, dark: darkTheme };
