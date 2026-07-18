/**
 * Boot splash colors and sizing — the single JS-side source of truth for
 * the values also hand-duplicated in native config:
 * - Android: `android/app/src/main/res/values/colors.xml` (light) and
 *   `values-night/colors.xml` (dark).
 * - iOS: `ios/Gallery/Colors.xcassets/BootSplashBackground-*.colorset`
 *   (Any + Dark appearance) and the `--logo-width` passed to
 *   `react-native-bootsplash generate`.
 *
 * There is no automated pipeline syncing these — if any value here changes,
 * the native files above must be updated to match by hand.
 *
 * The `_TEXT` constants below have no native-side counterpart — the footer
 * text is rendered only by the JS overlay (the native splash has no text
 * layer), so there's nothing to keep in sync outside this file.
 */

/** Splash background in light mode — matches the masi palette's light `background` token. */
export const BOOTSPLASH_LIGHT_BACKGROUND = '#FFECD1';

/** Splash background in dark mode — matches the masi palette's dark `background` token. */
export const BOOTSPLASH_DARK_BACKGROUND = '#001524';

/** Footer text color in light mode — matches the masi palette's light `textPrimary` token. */
export const BOOTSPLASH_LIGHT_TEXT = '#001219';

/** Footer text color in dark mode — matches the masi palette's dark `textPrimary` token. */
export const BOOTSPLASH_DARK_TEXT = '#FFECD1';

/** Logo render width in px, matching the native `--logo-width 130` used at generation time. */
export const BOOTSPLASH_LOGO_WIDTH = 130;

/** Distance in px the logo slides right during the JS-layer exit animation. */
export const BOOTSPLASH_EXIT_SLIDE_DISTANCE = 48;
