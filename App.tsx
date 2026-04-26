/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MasicnProvider } from './src/masicn/system';
import { MasicnWelcomeScreen } from './src/masicn/WelcomeScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <MasicnProvider theme="system">
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppContent />
        </MasicnProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function AppContent() {

  return (
    <View style={styles.container}>
      <MasicnWelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    flex: 1,
  },
});

export default App;
