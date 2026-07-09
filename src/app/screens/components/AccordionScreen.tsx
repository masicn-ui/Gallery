import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, spacing, ThemeToggle, iconSizes } from '../../../masicn';
import { Accordion, AccordionItem } from '../../../shared/components/Accordion';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function AccordionScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Accordion"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="FAQ — Single Open">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Opening one item automatically collapses the rest.
        </Text>
        <Accordion>
          <AccordionItem title="What is masicn?">
            <Text variant="body" color="textSecondary">
              masicn is a shadcn/ui-style copy-paste component system for React
              Native. Every component lives in your codebase — you own the
              source.
            </Text>
          </AccordionItem>
          <AccordionItem title="How do I add a component?">
            <Text variant="body" color="textSecondary">
              Run{' '}
              <Text variant="body" color="textPrimary">
                npx masicn add button
              </Text>{' '}
              in your project. The CLI fetches the component and copies it into
              your codebase, ready to customise.
            </Text>
          </AccordionItem>
          <AccordionItem title="Do components auto-update?">
            <Text variant="body" color="textSecondary">
              No — and that's intentional. Components live in your codebase, not
              inside a package. You control updates and can diverge freely
              without waiting for upstream.
            </Text>
          </AccordionItem>
          <AccordionItem title="Is it free?">
            <Text variant="body" color="textSecondary">
              Yes. masicn is completely free and open source under the MIT
              licence.
            </Text>
          </AccordionItem>
        </Accordion>
      </ShowcaseSection>

      <ShowcaseSection title="Release Notes — Multiple Open">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          With allowMultiple, any number of items can be open simultaneously.
        </Text>
        <Accordion allowMultiple>
          <AccordionItem title="v1.2 — New Components" defaultExpanded>
            <Text variant="body" color="textSecondary">
              Added RangeSlider, TagInput, and FloatingDock. Shimmer animation
              performance improved on Android by 40%.
            </Text>
          </AccordionItem>
          <AccordionItem title="v1.1 — Accessibility Pass">
            <Text variant="body" color="textSecondary">
              All interactive components now have accessibilityRole,
              accessibilityState, and correct focus management for screen
              readers.
            </Text>
          </AccordionItem>
          <AccordionItem title="v1.0 — Initial Release">
            <Text variant="body" color="textSecondary">
              First stable release with 40+ components, 10 colour palettes, dark
              mode, and a CLI installer.
            </Text>
          </AccordionItem>
        </Accordion>
      </ShowcaseSection>

      <ShowcaseSection title="Standalone & Disabled" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          AccordionItem works without a wrapper. Disabled items are
          non-interactive.
        </Text>
        <Stack gap="sm">
          <AccordionItem title="Open by default" defaultExpanded>
            <Text variant="body" color="textSecondary">
              Pass defaultExpanded to start the item open — useful for the most
              relevant section on a page.
            </Text>
          </AccordionItem>
          <AccordionItem title="Premium feature (upgrade required)" disabled>
            <Text variant="body" color="textSecondary">
              Upgrade your plan to access this.
            </Text>
          </AccordionItem>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
});
