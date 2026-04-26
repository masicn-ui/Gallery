// ─── System ───────────────────────────────────────
export { MasicnProvider, Masicn, ThemeToggle } from './system';
export type { ThemeToggleProps } from './system';

// ─── Theme ────────────────────────────────────────
export {
  useTheme,
  ThemeProvider,
  createTheme,
  lightTheme,
  darkTheme,
} from './theme';

export type { Theme, ThemeMode, ThemePair, PaletteEntry } from './theme';

// ─── Tokens ───────────────────────────────────────
export {
  spacing,
  radius,
  borders,
  sizes,
  elevation,
  opacity,
  layout,
  iconSizes,
  typography,
  fonts,
  fontFamilies,
  gradients,
  gradientDirections,
  lineHeightRatios,
  lh,
  letterSpacing,
  MasiTokens,
  motion,
  useTokens,
} from './tokens';

export type { Spacing, Radius, Borders, Elevation, Layout, Opacity, IconSizes, Typography, TypographyVariant, FontRole, FontWeightKey, FontFamilyKey, GradientPreset, GradientDirection, LineHeightRatio, LetterSpacing, Motion } from './tokens';

// ─── Animation ────────────────────────────────────
export { motionEasing } from './tokens';
export type { MotionEasing } from './tokens';

// ─── Icons ────────────────────────────────────────
export {
  SunIcon,
  MoonIcon,
  SearchIcon,
  CheckIcon,
  XIcon,
  WarningIcon,
  InfoIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  PlusIcon,
  MinusIcon,
  StarIcon,
  InboxIcon,
  PaletteIcon,
  SettingsIcon,
  EyeIcon,
  EyeOffIcon,
  PaintBoardIcon,
} from './icons';

// ─── Primitives ───────────────────────────────────
export {
  Box,
  Text,
  Stack,
  Row,
  Wrap,
  Center,
  Spacer,
  Divider,
  Surface,
  AspectRatio,
  Circle,
  Square,
  Pressable,
  Screen,
  SafeAreaScreen,
  Icon,
} from './primitives';

export type { PressableProps, SurfaceProps, CenterProps, WrapProps, AspectRatioProps, CircleProps, SquareProps, IconProps, IconComponent } from './primitives';

// ─── Hooks ────────────────────────────────────────
export {
  useAccessibilityProps,
  useFocusTrap,
  useGradients,
  useReducedMotion,
  useResponsive,
} from './hooks';

export type { Breakpoint, ResponsiveInfo } from './hooks';

// ─── Utils ────────────────────────────────────────
export { rgba, clamp } from './utils';
