module.exports = {
  preset: 'react-native',
  resolver: 'react-native-worklets/jest/resolver.js',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './__tests__/setup/jestSetup.ts',
  ],
  setupFiles: ['react-native-gesture-handler/jestSetup'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-gesture-handler|react-native-reanimated|react-native-worklets|react-native-safe-area-context|@react-navigation)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/setup/'],
  fakeTimers: { enableGlobally: true },
};
