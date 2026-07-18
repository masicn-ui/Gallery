import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { MasicnProvider } from './src/masicn';
import { ToastProvider, SnackbarProvider } from './src/shared/components';
import { AppNavigator } from './src/app/navigation/AppNavigator';
import { BootSplashOverlay } from './src/app/bootsplash/BootSplashOverlay';

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  const handleNavigationReady = useCallback(() => {
    RNBootSplash.hide({ fade: false }).then(() => setSplashVisible(false));
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <MasicnProvider theme="system">
          <ToastProvider>
            <SnackbarProvider>
              <NavigationContainer onReady={handleNavigationReady}>
                <AppNavigator />
              </NavigationContainer>
            </SnackbarProvider>
          </ToastProvider>
        </MasicnProvider>
      </SafeAreaProvider>
      <BootSplashOverlay visible={splashVisible} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
