import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Surface,
  Stack,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
  useTheme,
} from '../../../masicn';
import { Carousel } from '../../../shared/blocks/Carousel';
import { Image } from '../../../shared/components/Image';
import { ToastProvider, useToast } from '../../../shared/components/Toast';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

// ─── Data ──────────────────────────────────────────────────────────────────

const LANDSCAPE_SLIDES = [
  { uri: 'https://picsum.photos/seed/arch1/800/450', label: 'Architecture' },
  { uri: 'https://picsum.photos/seed/nature2/800/450', label: 'Nature' },
  { uri: 'https://picsum.photos/seed/city3/800/450', label: 'City' },
  { uri: 'https://picsum.photos/seed/travel4/800/450', label: 'Travel' },
  { uri: 'https://picsum.photos/seed/wild5/800/450', label: 'Wildlife' },
];

const PORTRAIT_SLIDES = [
  { uri: 'https://picsum.photos/seed/portrait10/400/500', label: 'Portrait 1' },
  { uri: 'https://picsum.photos/seed/portrait11/400/500', label: 'Portrait 2' },
  { uri: 'https://picsum.photos/seed/portrait12/400/500', label: 'Portrait 3' },
  { uri: 'https://picsum.photos/seed/portrait13/400/500', label: 'Portrait 4' },
];

const PHOTO_SLIDES = [
  { uri: 'https://picsum.photos/seed/photo1/600/400', label: 'Coastal cliffs' },
  { uri: 'https://picsum.photos/seed/photo2/600/400', label: 'Golden hour' },
  { uri: 'https://picsum.photos/seed/photo3/600/400', label: 'Morning fog' },
  { uri: 'https://picsum.photos/seed/photo4/600/400', label: 'Mirror lake' },
];

const CARD_SLIDES = [
  {
    icon: '🌊',
    title: 'Ocean Breeze',
    subtitle: 'Coastal destinations',
    desc: 'Discover serene beaches and crystal-clear waters.',
    color: '#0ea5e9',
  },
  {
    icon: '🏔️',
    title: 'Mountain Escape',
    subtitle: 'High altitude retreats',
    desc: 'Experience the silence of snow-capped peaks.',
    color: '#64748b',
  },
  {
    icon: '🌿',
    title: 'Forest Therapy',
    subtitle: 'Woodland hideaways',
    desc: 'Reconnect with nature among ancient trees.',
    color: '#22c55e',
  },
  {
    icon: '🌅',
    title: 'Desert Sunrise',
    subtitle: 'Arid landscapes',
    desc: 'Watch the sun paint the dunes in gold.',
    color: '#f97316',
  },
];

// ─── Slide components ──────────────────────────────────────────────────────

function ImageSlide({ uri, label }: { uri: string; label?: string }) {
  const { theme } = useTheme();
  return (
    <View style={styles.slideWrapper}>
      <Image source={{ uri }} fit="cover" style={styles.fill} />
      {label != null && (
        <View
          style={[styles.caption, { backgroundColor: theme.colors.overlay }]}
        >
          <Text variant="label" color="textInverse">
            {label}
          </Text>
        </View>
      )}
    </View>
  );
}

function CardSlide({
  icon,
  title,
  subtitle,
  desc,
  color,
}: (typeof CARD_SLIDES)[number]) {
  const { theme } = useTheme();
  return (
    <Surface
      level="sm"
      style={[
        styles.cardSlide,
        { backgroundColor: theme.colors.surfacePrimary },
      ]}
    >
      <Stack gap="sm" style={styles.cardInner}>
        <Text style={styles.cardIcon}>{icon}</Text>
        <Stack gap="xxs">
          <Text variant="h3" color="textPrimary">
            {title}
          </Text>
          <Text variant="captionSmall" style={{ color }}>
            {subtitle.toUpperCase()}
          </Text>
        </Stack>
        <Text variant="bodySmall" color="textSecondary">
          {desc}
        </Text>
      </Stack>
    </Surface>
  );
}

// ─── Inner screen (needs ToastProvider above it) ───────────────────────────

function CarouselScreenContent() {
  const navigation = useNavigation();
  const toast = useToast();

  return (
    <ScreenLayout
      title="Carousel"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      {/* ── 16:9 Scale ──────────────────────────────────────────────── */}
      <ShowcaseSection title="16:9 — Scale (Loop on)">
        <View style={styles.breakout}>
          <Carousel
            data={LANDSCAPE_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            animation="scale"
            aspectRatio={16 / 9}
          />
        </View>
      </ShowcaseSection>

      {/* ── 16:9 Peek ───────────────────────────────────────────────── */}
      <ShowcaseSection title="16:9 — Peek Mode">
        <View style={styles.breakout}>
          <Carousel
            data={LANDSCAPE_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            slideWidth="peek"
            animation="scale"
            aspectRatio={16 / 9}
            dotVariant="dot"
          />
        </View>
      </ShowcaseSection>

      {/* ── 21:9 Cinematic ──────────────────────────────────────────── */}
      <ShowcaseSection title="21:9 — Cinematic">
        <View style={styles.breakout}>
          <Carousel
            data={LANDSCAPE_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            animation="scale"
            aspectRatio={21 / 9}
            dotVariant="line"
          />
        </View>
      </ShowcaseSection>

      {/* ── 4:3 Parallax ────────────────────────────────────────────── */}
      <ShowcaseSection title="4:3 — Parallax + Peek">
        <View style={styles.breakout}>
          <Carousel
            data={LANDSCAPE_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            animation="parallax"
            slideWidth="peek"
            aspectRatio={4 / 3}
            dotVariant="line"
            gap={spacing.md}
          />
        </View>
      </ShowcaseSection>

      {/* ── 3:2 Photography ─────────────────────────────────────────── */}
      <ShowcaseSection title="3:2 — Photography (Parallax)">
        <View style={styles.breakout}>
          <Carousel
            data={PHOTO_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            animation="parallax"
            slideWidth="peek"
            aspectRatio={3 / 2}
            dotVariant="pill"
            gap={spacing.sm}
            getLabel={item => item.label}
          />
        </View>
      </ShowcaseSection>

      {/* ── 4:5 Portrait Auto-play ──────────────────────────────────── */}
      <ShowcaseSection title="4:5 — Peek + Auto-Play + Fade">
        <View style={styles.breakout}>
          <Carousel
            data={PORTRAIT_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            slideWidth="peek"
            animation="fade"
            aspectRatio={4 / 5}
            autoPlayInterval={2500}
            dotVariant="pill"
          />
        </View>
      </ShowcaseSection>

      {/* ── With vs without label ────────────────────────────────────── */}
      <ShowcaseSection title="Slide Label (getLabel)">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pass{' '}
          <Text variant="captionSmall" color="textPrimary">
            getLabel
          </Text>{' '}
          to render a caption below the dots. Omit it for a clean dot-only
          indicator.
        </Text>
        <Stack gap="lg">
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              with label
            </Text>
            <View style={styles.breakout}>
              <Carousel
                data={LANDSCAPE_SLIDES}
                renderItem={item => <ImageSlide uri={item.uri} />}
                animation="scale"
                aspectRatio={16 / 9}
                dotVariant="pill"
                getLabel={item => item.label}
              />
            </View>
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              no label
            </Text>
            <View style={styles.breakout}>
              <Carousel
                data={LANDSCAPE_SLIDES}
                renderItem={item => <ImageSlide uri={item.uri} />}
                animation="scale"
                aspectRatio={16 / 9}
                dotVariant="pill"
              />
            </View>
          </Stack>
        </Stack>
      </ShowcaseSection>

      {/* ── Loop disabled ────────────────────────────────────────────── */}
      <ShowcaseSection title="Loop Off — Rubber-band Ends">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Swipe past the first or last slide to feel the rubber-band. No
          wrap-around.
        </Text>
        <View style={styles.breakout}>
          <Carousel
            data={LANDSCAPE_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            animation="scale"
            aspectRatio={16 / 9}
            loop={false}
            dotVariant="dot"
          />
        </View>
      </ShowcaseSection>

      {/* ── All dot variants ─────────────────────────────────────────── */}
      <ShowcaseSection title="Dot Variants">
        <Stack gap="lg">
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              pill (default)
            </Text>
            <View style={styles.breakout}>
              <Carousel
                data={LANDSCAPE_SLIDES}
                renderItem={item => (
                  <ImageSlide uri={item.uri} label={item.label} />
                )}
                aspectRatio={16 / 9}
                dotVariant="pill"
              />
            </View>
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              dot
            </Text>
            <View style={styles.breakout}>
              <Carousel
                data={LANDSCAPE_SLIDES}
                renderItem={item => (
                  <ImageSlide uri={item.uri} label={item.label} />
                )}
                aspectRatio={16 / 9}
                dotVariant="dot"
              />
            </View>
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              line
            </Text>
            <View style={styles.breakout}>
              <Carousel
                data={LANDSCAPE_SLIDES}
                renderItem={item => (
                  <ImageSlide uri={item.uri} label={item.label} />
                )}
                aspectRatio={16 / 9}
                dotVariant="line"
              />
            </View>
          </Stack>
        </Stack>
      </ShowcaseSection>

      {/* ── onItemPress + Toast ──────────────────────────────────────── */}
      <ShowcaseSection title="onItemPress — Tap a Slide">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Each slide is pressable. Tap one to see a toast with the slide title.
        </Text>
        <View style={styles.breakout}>
          <Carousel
            data={LANDSCAPE_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            slideWidth="peek"
            animation="scale"
            aspectRatio={16 / 9}
            onItemPress={item => toast.info(`Tapped: ${item.label}`)}
          />
        </View>
      </ShowcaseSection>

      {/* ── No dots ──────────────────────────────────────────────────── */}
      <ShowcaseSection title="No Dots (showDots=false)">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Dots hidden — useful when the slide itself carries enough position
          context.
        </Text>
        <View style={styles.breakout}>
          <Carousel
            data={LANDSCAPE_SLIDES}
            renderItem={item => (
              <ImageSlide uri={item.uri} label={item.label} />
            )}
            animation="scale"
            aspectRatio={16 / 9}
            showDots={false}
          />
        </View>
      </ShowcaseSection>

      {/* ── Fixed pixel width ─────────────────────────────────────────── */}
      <ShowcaseSection title="Fixed Slide Width (240px)">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Pass a number to pin the slide width — adjacent slides peek on both
          sides.
        </Text>
        <View style={styles.breakout}>
          <Carousel
            data={CARD_SLIDES}
            renderItem={item => <CardSlide {...item} />}
            slideWidth={240}
            animation="scale"
            aspectRatio={4 / 3}
            dotVariant="dot"
            slideBorderRadius="xl"
            getLabel={item => item.title}
          />
        </View>
      </ShowcaseSection>

      {/* ── 1:1 Cards ────────────────────────────────────────────────── */}
      <ShowcaseSection title="1:1 — Card Slides" last>
        <View style={styles.breakout}>
          <Carousel
            data={CARD_SLIDES}
            renderItem={item => <CardSlide {...item} />}
            slideWidth="peek"
            animation="scale"
            aspectRatio={1}
            dotVariant="pill"
            slideBorderRadius="xl"
            getLabel={item => item.title}
          />
        </View>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

// ─── Screen export ─────────────────────────────────────────────────────────

export function CarouselScreen() {
  return (
    <ToastProvider>
      <CarouselScreenContent />
    </ToastProvider>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  /** Breaks out of ScreenLayout's horizontal padding so carousel fills edge-to-edge. */
  breakout: {
    marginHorizontal: -spacing.md,
  },
  hint: {
    marginBottom: spacing.sm,
  },
  slideWrapper: {
    flex: 1,
  },
  fill: {
    width: '100%',
    height: '100%',
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  },
  cardSlide: {
    flex: 1,
    borderRadius: radius.xl,
  },
  cardInner: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'flex-end',
  },
  cardIcon: {
    fontSize: 40,
    lineHeight: 48,
  },
});
