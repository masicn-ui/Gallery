import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  ThemeToggle,
  iconSizes,
  spacing,
  radius,
} from '../../../masicn';
import { Ticker } from '../../../shared/components/Ticker';
import { Button } from '../../../shared/components/Button';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function TickerScreen() {
  const navigation = useNavigation();

  const [cartQty, setCartQty] = useState(1);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <ScreenLayout
      title="Ticker"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Cart Counter">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Quantity selector with singular/plural formatting.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Stack gap="sm" style={styles.center}>
            <Text variant="captionSmall" color="textTertiary">
              Shopping Cart
            </Text>
            <Ticker
              value={cartQty}
              variant="h2"
              formatter={v => `${v} item${v === 1 ? '' : 's'}`}
            />
            <Row gap="sm" style={styles.center}>
              <Button
                variant="outline"
                size="sm"
                onPress={() => setCartQty(q => Math.max(0, q - 1))}
              >
                − Remove
              </Button>
              <Button
                variant="primary"
                size="sm"
                onPress={() => setCartQty(q => q + 1)}
              >
                + Add
              </Button>
              <Button variant="ghost" size="sm" onPress={() => setCartQty(0)}>
                Clear
              </Button>
            </Row>
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Live Score">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Two Tickers side by side — home vs. away team score.
        </Text>
        <Surface
          level="sm"
          style={[styles.scoreCard, { borderRadius: radius.lg }]}
        >
          {/* Home team */}
          <Stack gap="xs" style={styles.teamBlock}>
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              HOME
            </Text>
            <Ticker value={homeScore} variant="h1" />
            <Row gap="sm" style={styles.center}>
              <Button
                variant="ghost"
                size="sm"
                onPress={() => setHomeScore(s => Math.max(0, s - 1))}
              >
                −
              </Button>
              <Button
                variant="primary"
                size="sm"
                onPress={() => setHomeScore(s => s + 1)}
              >
                +
              </Button>
            </Row>
          </Stack>

          {/* Divider */}
          <Stack gap="none" style={styles.dividerBlock}>
            <Text variant="h2" color="textTertiary">
              :
            </Text>
          </Stack>

          {/* Away team */}
          <Stack gap="xs" style={styles.teamBlock}>
            <Text
              variant="captionSmall"
              color="textTertiary"
              style={styles.centered}
            >
              AWAY
            </Text>
            <Ticker value={awayScore} variant="h1" />
            <Row gap="sm" style={styles.center}>
              <Button
                variant="ghost"
                size="sm"
                onPress={() => setAwayScore(s => Math.max(0, s - 1))}
              >
                −
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onPress={() => setAwayScore(s => s + 1)}
              >
                +
              </Button>
            </Row>
          </Stack>
        </Surface>
      </ShowcaseSection>

      <ShowcaseSection title="Download Progress" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Percentage formatter — clamped 0–100.
        </Text>
        <Surface level="sm" style={[styles.card, { borderRadius: radius.lg }]}>
          <Stack gap="sm" style={styles.center}>
            <Text variant="captionSmall" color="textTertiary">
              File download progress
            </Text>
            <Ticker
              value={progress}
              variant="h2"
              formatter={v => `${Math.round(v)}%`}
              color={progress === 100 ? 'success' : 'textPrimary'}
            />
            <Row gap="sm" style={styles.center}>
              <Button
                variant="outline"
                size="sm"
                onPress={() => setProgress(p => Math.max(0, p - 10))}
              >
                −10%
              </Button>
              <Button
                variant="primary"
                size="sm"
                onPress={() => setProgress(p => Math.min(100, p + 10))}
              >
                +10%
              </Button>
              <Button variant="ghost" size="sm" onPress={() => setProgress(0)}>
                Reset
              </Button>
            </Row>
          </Stack>
        </Surface>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  center: { alignItems: 'center' },
  centered: { textAlign: 'center' },
  card: { padding: spacing.lg, alignItems: 'center' },
  scoreCard: {
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamBlock: { flex: 1, alignItems: 'center' },
  dividerBlock: { alignItems: 'center', paddingHorizontal: spacing.md },
});
