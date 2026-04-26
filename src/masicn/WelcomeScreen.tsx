import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  useTheme,
  spacing, radius, borders, opacity,
  rgba,
  Icon,
  CheckIcon, PaletteIcon, PaintBoardIcon, SettingsIcon,
  StarIcon, ChevronRightIcon, InboxIcon,
} from '.';
import { lightTheme } from './theme/light';
import { darkTheme } from './theme/dark';
import {
  SafeAreaScreen,
  Box,
  Stack,
  Row,
  Wrap,
  Center,
  Spacer,
  Divider,
  Surface,
  Circle,
  Square,
  Pressable,
  Text,
} from './primitives';

// ── Constants ─────────────────────────────────────────────────────────────────

const PALETTE_LABEL_WIDTH = 56;
const TRAFFIC_RED   = '#ff5f57';
const TRAFFIC_AMBER = '#ffbd2e';
const TRAFFIC_GREEN = '#28ca41';

// ── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '54',  label: 'Components' },
  { value: '20',  label: 'Blocks' },
  { value: '15',  label: 'Palettes' },
] as const;

const HIGHLIGHTS = [
  {
    icon: PaletteIcon,
    title: 'Typed tokens',
    desc: 'Spacing, radius, color, typography — every value scale-driven.',
  },
  {
    icon: PaintBoardIcon,
    title: '15 palettes',
    desc: 'Pick at init. Light + dark generated and yours to edit.',
  },
  {
    icon: CheckIcon,
    title: 'Copy-paste',
    desc: 'No runtime dep. Source lands in your repo, not node_modules.',
  },
  {
    icon: SettingsIcon,
    title: 'CLI first',
    desc: 'masicn init · masicn add. Done.',
  },
  {
    icon: StarIcon,
    title: 'Reanimated 4',
    desc: 'UI-thread animations. Gesture-driven sheets out of the box.',
  },
  {
    icon: InboxIcon,
    title: 'Accessible',
    desc: 'accessibilityRole, labels, WCAG 2.5.5 touch targets built in.',
  },
] as const;

const PRIMITIVES_LIST = [
  'Box', 'Stack', 'Row', 'Wrap', 'Center',
  'Spacer', 'Divider', 'Surface', 'Circle', 'Square',
  'AspectRatio', 'Pressable', 'Text', 'Screen', 'Icon',
];

const PALETTE_KEYS = [
  'primary', 'secondary', 'background',
  'surfacePrimary', 'accent', 'error', 'success',
] as const;

const TERMINAL_CMDS = [
  { prompt: '$', text: 'npx masicn init' },
  { prompt: '$', text: 'masicn add button' },
  { prompt: '$', text: 'masicn add card avatar badge' },
  { prompt: '✓', text: 'Done — 3 components installed' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function LogoMark() {
  const { theme } = useTheme();
  return (
    <Row gap="xs" align="center">
      <Circle size={20} backgroundColor={theme.colors.primary}>
        <Center flex={1}>
          <Square size={8} backgroundColor={theme.colors.onPrimary} borderRadius="xs" />
        </Center>
      </Circle>
      <Text variant="label" color="textSecondary" bold>masicn</Text>
    </Row>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <Row gap="xs" align="center">
      <Box style={styles.sectionPip} />
      <Text variant="sectionHeader" color="textTertiary">{label.toUpperCase()}</Text>
    </Row>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const { theme } = useTheme();
  const accentBg = rgba(theme.colors.primary, opacity.tintMedium);

  return (
    <Box style={styles.heroWrapper}>
      {/* Top bar */}
      <Row align="center">
        <LogoMark />
        <Spacer />
        <Surface level="none" borderRadius="full" style={[styles.versionPill, { backgroundColor: accentBg }]}>
          <Row gap="xs" align="center">
            <Circle size={5} backgroundColor={theme.colors.success} />
            <Text variant="captionSmall" color="textSecondary">v0.1.0 · MIT</Text>
          </Row>
        </Surface>
      </Row>

      <Box style={styles.heroTitleGap} />

      {/* Headline */}
      <Stack gap="sm">
        <Text variant="h1" color="textPrimary">{'Build beautiful\nReact Native apps.'}</Text>
        <Text variant="bodyLarge" color="textSecondary">
          {'A copy-paste design system. Own every pixel, every token, every line.'}
        </Text>
      </Stack>

      <Box style={styles.heroStatsGap} />

      {/* Stat pills */}
      <Row gap="sm">
        {STATS.map(({ value, label }) => (
          <Surface
            key={label}
            level="sm"
            borderRadius="lg"
            style={styles.statCard}>
            <Text variant="h2" color="textPrimary" bold>{value}</Text>
            <Text variant="captionSmall" color="textTertiary">{label}</Text>
          </Surface>
        ))}
      </Row>
    </Box>
  );
}

// ── Highlights ────────────────────────────────────────────────────────────────

function HighlightCard({ icon, title, desc }: typeof HIGHLIGHTS[number]) {
  const { theme } = useTheme();
  const iconBg = rgba(theme.colors.primary, opacity.tintMedium);

  return (
    <Surface level="sm" borderRadius="xl" style={styles.highlightCard}>
      <Stack gap="md">
        <Circle size={40} backgroundColor={iconBg}>
          <Center flex={1}>
            <Icon icon={icon} size={18} color={theme.colors.primary} />
          </Center>
        </Circle>
        <Stack gap="xs">
          <Text variant="titleSmall" color="textPrimary" bold>{title}</Text>
          <Text variant="bodySmall" color="textSecondary">{desc}</Text>
        </Stack>
      </Stack>
    </Surface>
  );
}

function Highlights() {
  const pairs: Array<[typeof HIGHLIGHTS[number], typeof HIGHLIGHTS[number] | undefined]> = [];
  for (let i = 0; i < HIGHLIGHTS.length; i += 2) {
    pairs.push([HIGHLIGHTS[i], HIGHLIGHTS[i + 1]]);
  }

  return (
    <Box style={styles.section}>
      <SectionLabel label="What you get" />
      <Box style={styles.labelGap} />
      <Stack gap="md">
        {pairs.map(([a, b], i) => (
          <Row key={i} gap="md">
            <Box style={styles.flex1}><HighlightCard {...a} /></Box>
            {b
              ? <Box style={styles.flex1}><HighlightCard {...b} /></Box>
              : <Box style={styles.flex1} />}
          </Row>
        ))}
      </Stack>
    </Box>
  );
}

// ── Quick Start ───────────────────────────────────────────────────────────────

function Terminal() {
  const { theme } = useTheme();
  const onPrimary     = theme.colors.onPrimary;
  const dimColor      = rgba(onPrimary, opacity.overlayLight);
  const dividerColor  = rgba(onPrimary, opacity.tint);
  const successColor  = theme.colors.success;

  return (
    <Box style={[styles.terminal, { backgroundColor: theme.colors.textPrimary }]}>
      {/* Title bar */}
      <Row gap="xs" style={styles.terminalBar} align="center">
        <Circle size={10} backgroundColor={TRAFFIC_RED} />
        <Circle size={10} backgroundColor={TRAFFIC_AMBER} />
        <Circle size={10} backgroundColor={TRAFFIC_GREEN} />
        <Spacer />
        <Text variant="captionSmall" style={{ color: dimColor }}>terminal</Text>
      </Row>

      <Divider style={{ backgroundColor: dividerColor }} />

      {/* Commands */}
      <Stack gap="xs" style={styles.terminalBody}>
        {TERMINAL_CMDS.map((cmd, i) => {
          const isSuccess = cmd.prompt === '✓';
          return (
            <Row key={i} gap="sm" align="center">
              <Text
                variant="captionSmall"
                style={[
                  styles.terminalMono,
                  { color: isSuccess ? successColor : dimColor },
                ]}>
                {cmd.prompt}
              </Text>
              <Text
                variant="caption"
                style={[
                  styles.terminalMono,
                  { color: isSuccess ? successColor : onPrimary },
                ]}>
                {cmd.text}
              </Text>
            </Row>
          );
        })}
      </Stack>
    </Box>
  );
}

function QuickStart() {
  return (
    <Box style={styles.section}>
      <SectionLabel label="Get started" />
      <Box style={styles.labelGap} />
      <Terminal />
    </Box>
  );
}

// ── Primitives ────────────────────────────────────────────────────────────────

function PrimitivesSection() {
  const { theme } = useTheme();
  return (
    <Box style={styles.section}>
      <Row align="center">
        <SectionLabel label="Primitives" />
        <Spacer />
        <Surface level="none" borderRadius="full" style={styles.countBadge}>
          <Text variant="captionSmall" color="textTertiary">{PRIMITIVES_LIST.length} built-in</Text>
        </Surface>
      </Row>
      <Box style={styles.labelGap} />
      <Wrap gap="sm">
        {PRIMITIVES_LIST.map(name => (
          <Pressable key={name} feedback="opacity">
            <Box style={[styles.chip, { borderColor: theme.colors.borderPrimary }]}>
              <Text variant="captionSmall" color="textSecondary">{name}</Text>
            </Box>
          </Pressable>
        ))}
      </Wrap>
    </Box>
  );
}

// ── Palette ───────────────────────────────────────────────────────────────────

function PaletteRow({
  emoji, label, colors,
}: {
  emoji: string;
  label: string;
  colors: Record<string, string>;
}) {
  const { theme } = useTheme();
  const swatchBorder = rgba(theme.colors.shadow, opacity.tint);

  return (
    <Row gap="md" align="center">
      <Row gap="xs" align="center" style={styles.paletteLabel}>
        <Text variant="caption">{emoji}</Text>
        <Text variant="captionSmall" color="textTertiary">{label}</Text>
      </Row>
      <Row gap="xs" style={styles.flex1}>
        {PALETTE_KEYS.map(key => (
          <Circle
            key={key}
            size={26}
            backgroundColor={colors[key]}
            style={{ borderWidth: borders.thin, borderColor: swatchBorder }}
          />
        ))}
      </Row>
      <Icon icon={ChevronRightIcon} size={14} color={theme.colors.textTertiary} />
    </Row>
  );
}

function PaletteSection() {
  return (
    <Box style={styles.section}>
      <SectionLabel label="Your palette" />
      <Box style={styles.labelGap} />
      <Surface level="sm" borderRadius="xl" padding="lg">
        <Stack gap="lg">
          <PaletteRow emoji="☀️" label="Light" colors={lightTheme.colors} />
          <Divider />
          <PaletteRow emoji="🌙" label="Dark"  colors={darkTheme.colors} />
        </Stack>
      </Surface>
    </Box>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const { theme } = useTheme();
  const accentBg = rgba(theme.colors.primary, opacity.tintMedium);

  return (
    <Box style={styles.footer}>
      <Divider style={styles.footerDivider} />
      <Stack gap="lg">
        <LogoMark />
        <Row gap="sm">
          <Surface level="none" borderRadius="full" style={[styles.footerPill, { backgroundColor: accentBg }]}>
            <Text variant="captionSmall" color="textSecondary">masicn.dev</Text>
          </Surface>
          <Surface level="none" borderRadius="full" style={[styles.footerPill, { backgroundColor: accentBg }]}>
            <Text variant="captionSmall" color="textSecondary">GitHub</Text>
          </Surface>
        </Row>
        <Text variant="captionSmall" color="textTertiary" align="center">
          {'MIT License · Open Source · shadcn/ui for React Native'}
        </Text>
      </Stack>
    </Box>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────

/**
 * MasicnWelcomeScreen — built-in onboarding / showcase screen for the design system.
 *
 * Renders a scrollable overview of masicn: hero with stats, feature highlight cards,
 * CLI quick-start terminal, primitives chip grid, live palette swatch preview,
 * and a footer. Drop this into your root navigator during development to verify
 * the design system is wired up (themes, fonts, tokens, primitives all visible at once).
 *
 * @example
 * // In your navigator:
 * <Stack.Screen name="Welcome" component={MasicnWelcomeScreen} />
 */
export function MasicnWelcomeScreen() {
  const { theme } = useTheme();
  return (
    <SafeAreaScreen>
      <ScrollView
        style={{ backgroundColor: theme.colors.background }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <Hero />
        <Divider inset style={styles.sectionDivider} />
        <Highlights />
        <Divider inset style={styles.sectionDivider} />
        <QuickStart />
        <Divider inset style={styles.sectionDivider} />
        <PrimitivesSection />
        <Divider inset style={styles.sectionDivider} />
        <PaletteSection />
        <Footer />
      </ScrollView>
    </SafeAreaScreen>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  scrollContent: { paddingTop: spacing.xl },
  flex1: { flex: 1 },

  // Section chrome
  section: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xxl },
  sectionDivider: { marginBottom: spacing.xxl },
  labelGap: { height: spacing.lg },
  sectionPip: {
    width: borders.medium,
    height: spacing.md,
    borderRadius: radius.full,
  },

  // Hero
  heroWrapper: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xxl },
  heroTitleGap: { height: spacing.xxl },
  heroStatsGap: { height: spacing.xl },
  versionPill: { paddingHorizontal: spacing.md, paddingVertical: spacing.xs },
  statCard: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    gap: spacing.xxs,
  },

  // Highlights
  highlightCard: { padding: spacing.lg, flex: 1 },

  // Terminal
  terminal: { borderRadius: radius.xl, overflow: 'hidden' },
  terminalBar: { padding: spacing.md, paddingBottom: spacing.sm },
  terminalBody: { padding: spacing.lg },
  terminalMono: { fontFamily: 'monospace' },

  // Primitives
  countBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderWidth: borders.thin,
  },
  chip: {
    borderWidth: borders.thin,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },

  // Palette
  paletteLabel: { width: PALETTE_LABEL_WIDTH },

  // Footer
  footer: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xxxl },
  footerDivider: { marginBottom: spacing.xxl },
  footerPill: { paddingHorizontal: spacing.md, paddingVertical: spacing.xs },
});
