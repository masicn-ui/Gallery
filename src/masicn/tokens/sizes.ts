/**
 * Component size tokens — raw scale.
 * Semantic mappings like iconSizes should be used for icons.
 */

export const sizes = {
  // Input controls (checkbox, radio, switch)
  /** `20` — Small control size (checkbox, radio). */
  controlSm: 20,
  /** `24` — Default control size (checkbox, radio). */
  control: 24,
  /** `28` — Large control size (checkbox, radio). */
  controlLg: 28,

  // Switch dimensions
  /** `52` — Toggle switch track width. */
  switchTrackWidth: 52,
  /** `32` — Toggle switch track height. */
  switchTrackHeight: 32,
  /** `28` — Toggle switch thumb (knob) diameter. */
  switchThumb: 28,

  // Button sizes
  /** `48` — Default button height. */
  buttonHeight: 48,

  // FAB sizes
  /** `40` — Small FAB. */
  fabSm: 40,
  /** `56` — Default FAB (Material Design baseline). */
  fabMd: 56,
  /** `72` — Large / extended FAB. */
  fabLg: 72,

  // Avatar sizes
  /** `32` — Extra-small avatar. */
  avatarSm: 32,
  /** `40` — Default avatar. */
  avatarMd: 40,
  /** `56` — Large avatar (list rows, headers). */
  avatarLg: 56,
  /** `72` — Extra-large avatar (profile pages). */
  avatarXl: 72,

  // Misc components
  /** `24` — Draggable slider thumb diameter. */
  sliderThumb: 24,
  /** `4` — Slider track height. */
  sliderTrack: 4,
  /** `8` — Linear progress bar track height. */
  progressBarDefault: 8,
  /** `4` — Bottom sheet drag handle height. */
  bottomSheetHandle: 4,
  /** `36` — Bottom sheet drag handle width. */
  bottomSheetHandleWidth: 36,

  /** `64` — Empty state illustration / icon size. */
  emptyStateIcon: 64,
  /** `80` — Empty state icon bounding box including optical spacing. */
  emptyStateIconLineHeight: 80,
  /** `250` — Max tooltip bubble width. */
  tooltipMaxWidth: 250,
  /** `200` — Context / dropdown menu minimum width. */
  menuMinWidth: 200,
  /** `320` — Context / dropdown menu maximum width. */
  menuMaxWidth: 320,
  /** `80` — Minimum swipe action button width. */
  swipeActionMinWidth: 80,
  /** `64` — Default (md) swipeable row min-height. */
  swipeableRowMd: 64,
  /** `80` — Large (lg) swipeable row min-height. */
  swipeableRowLg: 80,
  /** `400` — Max action sheet height before it becomes scrollable. */
  actionSheetMaxHeight: 400,

  // Skeleton placeholder dimensions
  /** `120` — Button skeleton placeholder width. */
  skeletonButtonWidth: 120,
  /** `160` — Card skeleton placeholder height. */
  skeletonCardHeight: 160,
  /** `200` — Image skeleton placeholder height. */
  skeletonImageHeight: 200,

  // Progress circle default diameter
  /** `120` — Default circular progress indicator diameter. */
  progressCircleDefault: 120,

  // OTP input box height
  /** `56` — OTP digit input box height. */
  otpBoxHeight: 56,

  // Loading overlay
  /** `150` — Loading overlay minimum width. */
  loadingOverlayMinWidth: 150,

  // Badge
  /** `20` — Notification badge dot diameter. */
  badge: 20,

  // Status dot diameters
  /** `8`  — Small status dot (online/away indicator). */
  statusDotSm: 8,
  /** `12` — Default status dot diameter. */
  statusDotMd: 12,
  /** `16` — Large status dot diameter. */
  statusDotLg: 16,

  // Progress circle stroke
  /** `8` — Default progress circle arc stroke width. */
  progressCircleStroke: 8,

  // Carousel dots
  /** `6` — Inactive carousel pagination dot diameter. */
  carouselDot: 6,
  /** `18` — Active carousel pagination dot (pill shape) width. */
  carouselDotActive: 18,
  /** `200` — Default carousel slide height. */
  carouselSlideDefaultHeight: 200,

  // Pagination button
  /** `36` — Pagination page-number button size. */
  paginationButton: 36,

  // Input heights
  /** `32` — Small text input height. */
  inputSm: 32,
  /** `44` — Default text input height. */
  inputMd: 44,
  /** `52` — Large text input height. */
  inputLg: 52,
} as const;

export type Sizes = typeof sizes;
