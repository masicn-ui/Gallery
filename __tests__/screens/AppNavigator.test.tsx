import React from 'react';
import { render } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MasicnProvider } from '../../src/masicn';
import { ToastProvider, SnackbarProvider } from '../../src/shared/components';
import { SCREEN_MAP } from '../../src/app/navigation/AppNavigator';

const Stack = createNativeStackNavigator();

function renderScreen(name: string) {
  const Screen = SCREEN_MAP[name];
  return render(
    <SafeAreaProvider>
      <MasicnProvider>
        <ToastProvider>
          <SnackbarProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name={name} component={Screen} />
              </Stack.Navigator>
            </NavigationContainer>
          </SnackbarProvider>
        </ToastProvider>
      </MasicnProvider>
    </SafeAreaProvider>,
  );
}

describe('Gallery showcase screens', () => {
  it.each(Object.keys(SCREEN_MAP))('%s mounts without throwing', name => {
    expect(() => renderScreen(name)).not.toThrow();
  });
});
