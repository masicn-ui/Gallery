import { AccessibilityInfo } from 'react-native';

// Suppress the "not wrapped in act(...)" warning caused by useReducedMotion's
// AccessibilityInfo.isReduceMotionEnabled() Promise resolving after the sync
// act() boundary. This is a known React Testing Library limitation with async
// hooks — all tests pass correctly and the warning is cosmetic.
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args: Parameters<typeof console.error>) => {
    if (typeof args[0] === 'string' && args[0].includes('not wrapped in act')) {
      return;
    }
    originalConsoleError(...args);
  };

  // Mock isReduceMotionEnabled so it resolves immediately rather than going
  // through the native bridge (which keeps the worker process alive).
  jest.spyOn(AccessibilityInfo, 'isReduceMotionEnabled').mockResolvedValue(false);
  jest.spyOn(AccessibilityInfo, 'addEventListener').mockReturnValue({
    remove: jest.fn(),
  } as unknown as ReturnType<typeof AccessibilityInfo.addEventListener>);
});

afterAll(() => {
  console.error = originalConsoleError;
});

// Clear all pending timers after each test to prevent setTimeout leaks
// that cause "A worker process has failed to exit gracefully" warnings.
afterEach(() => {
  jest.clearAllTimers();
});
