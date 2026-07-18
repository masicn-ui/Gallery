import React, { useState } from 'react';
import { Stack, ThemeToggle, iconSizes } from '../../../masicn';
import { Alert } from '../../../shared/components/Alert';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function AlertScreen() {
  const navigation = useNavigation();
  const [dismissed, setDismissed] = useState(false);
  const [dismissed2, setDismissed2] = useState(false);

  return (
    <ScreenLayout
      title="Alert"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Types">
        <Stack gap="sm">
          <Alert variant="success" title="Success" />
          <Alert variant="error" title="Error" />
          <Alert variant="warning" title="Warning" />
          <Alert variant="info" title="Info" />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="With Description">
        <Stack gap="sm">
          <Alert
            variant="success"
            title="Payment sent"
            description="$24.99 has been sent to @alex. Funds arrive within 1 business day."
          />
          <Alert
            variant="error"
            title="Card declined"
            description="Insufficient funds. Please check your balance or try a different card."
          />
          <Alert
            variant="warning"
            title="Session expiring"
            description="You'll be signed out in 5 minutes. Save your work or stay active to continue."
          />
          <Alert
            variant="info"
            title="Update available"
            description="Version 2.4.0 is ready to install. Restart the app to apply the update."
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Dismissible" last>
        <Stack gap="sm">
          {!dismissed ? (
            <Alert
              variant="info"
              title="New feature: Dark mode"
              description="Switch between light and dark themes from the header toggle."
              dismissible
              onDismiss={() => setDismissed(true)}
            />
          ) : (
            <Alert
              variant="success"
              title="Alert dismissed"
              description="Go back and re-enter to see it again."
            />
          )}
          {!dismissed2 ? (
            <Alert
              variant="warning"
              title="Storage almost full"
              description="You've used 4.7 GB of your 5 GB limit. Free up space to continue syncing."
              dismissible
              onDismiss={() => setDismissed2(true)}
            />
          ) : null}
        </Stack>
      </ShowcaseSection>
    </ScreenLayout>
  );
}
