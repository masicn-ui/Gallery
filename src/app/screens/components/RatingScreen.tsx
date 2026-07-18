import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  spacing,
  radius,
  useTheme,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { Rating } from '../../../shared/components/Rating';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function RatingScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [rating, setRating] = useState(3);
  const [halfRating, setHalfRating] = useState(3.5);

  return (
    <ScreenLayout
      title="Rating"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Interactive">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Tap a star to set the rating — current value shown below.
        </Text>
        <Stack gap="sm">
          <Rating
            value={rating}
            onValueChange={setRating}
            label="Rate your experience"
          />
          <Text variant="captionSmall" color="textTertiary">
            {rating} / 5
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Half Stars">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Tap the left half of a star for .5 granularity.
        </Text>
        <Stack gap="sm">
          <Rating
            value={halfRating}
            onValueChange={setHalfRating}
            allowHalf
            label="Precision rating"
          />
          <Text variant="captionSmall" color="textTertiary">
            {halfRating} / 5
          </Text>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Read Only">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Display-only ratings — common in product listings and review
          summaries.
        </Text>
        <Stack gap="md">
          <Row align="center" gap="md">
            <Rating value={5} readOnly />
            <Text variant="captionSmall" color="textTertiary">
              5.0 · 1,204 reviews
            </Text>
          </Row>
          <Row align="center" gap="md">
            <Rating value={4.5} readOnly allowHalf />
            <Text variant="captionSmall" color="textTertiary">
              4.5 · 87 reviews
            </Text>
          </Row>
          <Row align="center" gap="md">
            <Rating value={3} readOnly />
            <Text variant="captionSmall" color="textTertiary">
              3.0 · 12 reviews
            </Text>
          </Row>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Scale the icon size to fit the surrounding layout — small for inline,
          large for hero.
        </Text>
        <Stack gap="md">
          <Row align="center" gap="md">
            <Rating value={4} readOnly size={16} />
            <Text variant="captionSmall" color="textTertiary">
              16 px — compact list
            </Text>
          </Row>
          <Row align="center" gap="md">
            <Rating value={4} readOnly size={24} />
            <Text variant="captionSmall" color="textTertiary">
              24 px — default card
            </Text>
          </Row>
          <Row align="center" gap="md">
            <Rating value={4} readOnly size={36} />
            <Text variant="captionSmall" color="textTertiary">
              36 px — hero section
            </Text>
          </Row>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Custom Icon">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Replace ★ with any character — hearts, diamonds, or emoji.
        </Text>
        <Stack gap="md">
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              Hearts
            </Text>
            <Rating
              value={4}
              max={5}
              icon="♥"
              filledColor={theme.colors.error}
              readOnly
            />
          </Stack>
          <Stack gap="xs">
            <Text variant="captionSmall" color="textTertiary">
              Diamonds
            </Text>
            <Rating
              value={3}
              max={5}
              icon="◆"
              filledColor={theme.colors.info}
              readOnly
            />
          </Stack>
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="In Context — Product Review" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Ratings embedded in a product card and a user review row.
        </Text>
        <Stack gap="md">
          <Surface
            level="sm"
            style={[styles.card, { borderRadius: radius.lg }]}
          >
            <Stack gap="sm">
              <Text variant="label" color="textPrimary">
                Wireless Noise-Cancelling Headphones
              </Text>
              <Row align="center" gap="sm">
                <Rating value={4.5} readOnly allowHalf size={18} />
                <Text variant="captionSmall" color="textTertiary">
                  4.5 (2,341)
                </Text>
              </Row>
              <Row align="center" justify="space-between">
                <Text variant="titleSmall" color="textPrimary">
                  $129.99
                </Text>
                <Button variant="primary" size="sm" onPress={() => {}}>
                  Add to cart
                </Button>
              </Row>
            </Stack>
          </Surface>

          <Surface
            level="sm"
            style={[
              styles.card,
              {
                borderRadius: radius.lg,
                borderColor: theme.colors.borderSecondary,
              },
            ]}
          >
            <Stack gap="md">
              {[
                {
                  name: 'Alex M.',
                  value: 5,
                  comment: 'Absolutely love these — best purchase this year.',
                },
                {
                  name: 'Sam P.',
                  value: 3.5,
                  comment: 'Good quality, but the app could be better.',
                },
                {
                  name: 'Jordan K.',
                  value: 4,
                  comment: 'Great sound, comfortable for long sessions.',
                },
              ].map(({ name, value, comment }) => (
                <Stack key={name} gap="xs">
                  <Row align="center" justify="space-between">
                    <Text variant="captionSmall" color="textPrimary">
                      {name}
                    </Text>
                    <Rating value={value} readOnly allowHalf size={14} />
                  </Row>
                  <Text variant="captionSmall" color="textSecondary">
                    {comment}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Surface>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  card: { padding: spacing.md },
});
