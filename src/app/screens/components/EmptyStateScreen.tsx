import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeToggle, iconSizes } from '../../../masicn';
import { EmptyState } from '../../../shared/blocks/EmptyState';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function EmptyStateScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Empty State"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Default (no icon)">
        <EmptyState
          title="No tasks yet"
          description="Tap the button below to create your first task and get started."
          actionLabel="Create task"
          onAction={() => {}}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Search — No Results">
        <EmptyState
          icon="🔍"
          title="No results found"
          description="Try adjusting your search terms or removing some filters."
        />
      </ShowcaseSection>

      <ShowcaseSection title="Inbox Empty">
        <EmptyState
          icon="📭"
          title="Your inbox is empty"
          description="When you receive messages, they'll appear here."
          actionLabel="Refresh"
          onAction={() => {}}
        />
      </ShowcaseSection>

      <ShowcaseSection title="No Connection">
        <EmptyState
          icon="📡"
          title="No internet connection"
          description="Check your Wi-Fi or mobile data and try again."
          actionLabel="Retry"
          onAction={() => {}}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <EmptyState
          icon="⚠️"
          title="Something went wrong"
          description="We couldn't load this content. Our team has been notified."
          actionLabel="Try again"
          onAction={() => {}}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Permissions Required">
        <EmptyState
          icon="🔒"
          title="Access required"
          description="Grant permission to continue. Your data is never shared without your consent."
          actionLabel="Allow access"
          onAction={() => {}}
        />
      </ShowcaseSection>

      <ShowcaseSection title="All Caught Up" last>
        <EmptyState
          icon="🎉"
          title="You're all caught up!"
          description="Check back later for new notifications and updates."
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
