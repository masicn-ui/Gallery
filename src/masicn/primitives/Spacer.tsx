import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  /** Take up all available space along the main axis */
  flex?: number;
}

/**
 * Flexible spacer — pushes siblings apart in Row or Stack.
 * Defaults to flex: 1.
 */
export function Spacer({ flex = 1 }: SpacerProps) {
  return <View style={{ flex }} />;
}
