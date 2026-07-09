import React from 'react';
import { render, type RenderOptions } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MasicnProvider } from '../../src/masicn';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <MasicnProvider>{children}</MasicnProvider>
    </SafeAreaProvider>
  );
}

export function renderWithTheme(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  const result = render(ui, { wrapper: ThemeWrapper, ...options });
  // Masicn portals register in useEffect which fires before PortalHost subscribes.
  // A second render ensures Masicn's update effect fires after PortalHost is subscribed,
  // so portal content is visible in the rendered output.
  result.rerender(ui);
  return result;
}
