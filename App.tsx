import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { MasicnProvider } from './src/masicn';
import { ToastProvider, SnackbarProvider } from './src/shared/components';
import { AppNavigator } from './src/app/navigation/AppNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <MasicnProvider theme="system">
          <ToastProvider>
            <SnackbarProvider>
              <NavigationContainer>
                <AppNavigator />
              </NavigationContainer>
            </SnackbarProvider>
          </ToastProvider>
        </MasicnProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
