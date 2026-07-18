import React, { useState } from 'react';
import { Stack, Text, ThemeToggle, iconSizes } from '../../../masicn';
import { Numeric } from '../../../shared/blocks/Numeric';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function NumericScreen() {
  const navigation = useNavigation();
  const [qty, setQty] = useState(1);
  const [age, setAge] = useState(25);
  const [custom, setCustom] = useState(10);
  const [decimal, setDecimal] = useState(1.0);
  const [big, setBig] = useState(100);

  return (
    <ScreenLayout
      title="Numeric"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Sizes">
        <Stack gap="md">
          <Numeric
            size="sm"
            label="Small"
            value={1}
            onValueChange={() => {}}
            min={0}
            max={99}
          />
          <Numeric
            size="md"
            label="Medium (default)"
            value={1}
            onValueChange={() => {}}
            min={0}
            max={99}
          />
          <Numeric
            size="lg"
            label="Large"
            value={1}
            onValueChange={() => {}}
            min={0}
            max={99}
          />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Basic">
        <Numeric
          label="Quantity"
          value={qty}
          onValueChange={setQty}
          min={1}
          max={99}
          helperText="1 to 99 items"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Custom Step (5)">
        <Numeric
          label="Amount ($)"
          value={custom}
          onValueChange={setCustom}
          min={0}
          max={1000}
          step={5}
          helperText="Increments of $5"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Decimal Step (0.5)">
        <Numeric
          label="Rating"
          value={decimal}
          onValueChange={setDecimal}
          min={0}
          max={5}
          step={0.5}
          helperText="Half-star increments"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Large Step (10)">
        <Numeric
          label="Volume"
          value={big}
          onValueChange={setBig}
          min={0}
          max={1000}
          step={10}
          helperText="Jumps by 10"
        />
      </ShowcaseSection>

      <ShowcaseSection title="No Label">
        <Numeric value={age} onValueChange={setAge} min={0} max={120} />
        <Text variant="caption" color="textSecondary">
          Age: {age}
        </Text>
      </ShowcaseSection>

      <ShowcaseSection title="Error State">
        <Numeric
          label="Score"
          value={-5}
          onValueChange={() => {}}
          min={0}
          max={100}
          error="Value must be between 0 and 100"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <Numeric
          label="Fixed quantity"
          value={42}
          onValueChange={() => {}}
          min={0}
          max={100}
          disabled
          helperText="This field cannot be changed"
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
