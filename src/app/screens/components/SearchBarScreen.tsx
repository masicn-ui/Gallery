import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Stack,
  Row,
  Text,
  Surface,
  spacing,
  radius,
  ThemeToggle,
  iconSizes,
} from '../../../masicn';
import { SearchBar } from '../../../shared/components/SearchBar';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const CONTACTS = [
  'Alex Morgan',
  'Casey Jordan',
  'Dana Kim',
  'Elliot Park',
  'Faye Chen',
  'George Liu',
  'Harper Singh',
  'Isla Torres',
];

export function SearchBarScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const filtered = CONTACTS.filter(c =>
    c.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <ScreenLayout
      title="Search Bar"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Sizes">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Three size presets — sm for compact toolbars, lg for prominent hero
          search.
        </Text>
        <Stack gap="md">
          <SearchBar
            size="sm"
            value=""
            onChangeText={() => {}}
            placeholder="Small — compact"
          />
          <SearchBar
            size="md"
            value=""
            onChangeText={() => {}}
            placeholder="Medium — default"
          />
          <SearchBar
            size="lg"
            value=""
            onChangeText={() => {}}
            placeholder="Large — prominent"
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Pill (default)">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Full-radius pill — the classic search bar shape.
        </Text>
        <SearchBar value="" onChangeText={() => {}} placeholder="Search…" />
      </ShowcaseSection>

      <ShowcaseSection title="Rounded Rectangle">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Reduced radius fits forms and toolbars that use a rectangular grid.
        </Text>
        <Stack gap="md">
          <SearchBar
            value=""
            onChangeText={() => {}}
            placeholder="Search — lg radius"
            borderRadius={radius.lg}
          />
          <SearchBar
            value=""
            onChangeText={() => {}}
            placeholder="Search — md radius"
            borderRadius={radius.md}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Clear & Submit">
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Clear button resets the field; submitting the keyboard fires onSearch.
        </Text>
        <SearchBar
          value="hello world"
          onChangeText={() => {}}
          onClear={() => {}}
          onSearch={() => {}}
          placeholder="Type to search"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Live Filter" last>
        <Text variant="caption" color="textSecondary" style={styles.hint}>
          Results update on every keystroke — try typing a name below.
        </Text>
        <Stack gap="md">
          <SearchBar
            value={query}
            onChangeText={setQuery}
            placeholder="Search contacts…"
          />
          <Surface
            level="sm"
            style={[styles.results, { borderRadius: radius.lg }]}
          >
            {filtered.length === 0 ? (
              <Text
                variant="body"
                color="textTertiary"
                style={styles.emptyText}
              >
                No contacts found
              </Text>
            ) : (
              filtered.map((name, i) => (
                <Row
                  key={name}
                  align="center"
                  justify="space-between"
                  style={[
                    styles.resultRow,
                    i < filtered.length - 1 && styles.resultRowBorder,
                  ]}
                >
                  <Text variant="body" color="textPrimary">
                    {name}
                  </Text>
                </Row>
              ))
            )}
          </Surface>
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hint: { marginBottom: spacing.md },
  results: { overflow: 'hidden' },
  resultRow: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  resultRowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'transparent',
  },
  emptyText: { padding: spacing.md },
});
