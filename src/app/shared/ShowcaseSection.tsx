import React from 'react';
import { Stack, Text, Divider, spacing } from '../../masicn';

interface ShowcaseSectionProps {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}

export function ShowcaseSection({
  title,
  children,
  last = false,
}: ShowcaseSectionProps) {
  return (
    <Stack gap="md" style={{ paddingVertical: spacing.lg }}>
      <Text variant="sectionHeader" color="textTertiary">
        {title.toUpperCase()}
      </Text>
      {children}
      {!last && <Divider style={{ marginTop: spacing.md }} />}
    </Stack>
  );
}
