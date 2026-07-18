import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeToggle, iconSizes } from '../../../masicn';
import { RangeSlider } from '../../../shared/components/RangeSlider';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function RangeSliderScreen() {
  const navigation = useNavigation();
  const [price, setPrice] = useState({ min: 200, max: 800 });
  const [age, setAge] = useState({ min: 18, max: 65 });
  const [temp, setTemp] = useState({ min: 18, max: 26 });
  const [nights, setNights] = useState({ min: 2, max: 7 });

  return (
    <ScreenLayout
      title="Range Slider"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Price Range">
        <RangeSlider
          label="Price range"
          minValue={price.min}
          maxValue={price.max}
          min={0}
          max={1000}
          step={10}
          showValues
          onRangeChange={(min, max) => setPrice({ min, max })}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Age Range">
        <RangeSlider
          label="Age range"
          minValue={age.min}
          maxValue={age.max}
          min={18}
          max={80}
          step={1}
          showValues
          onRangeChange={(min, max) => setAge({ min, max })}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Temperature (°C)">
        <RangeSlider
          label="Comfort zone"
          minValue={temp.min}
          maxValue={temp.max}
          min={10}
          max={40}
          step={1}
          minGap={2}
          showValues
          onRangeChange={(min, max) => setTemp({ min, max })}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Nights — Min Gap = 1">
        <RangeSlider
          label="Stay duration"
          minValue={nights.min}
          maxValue={nights.max}
          min={1}
          max={14}
          step={1}
          minGap={1}
          showValues
          onRangeChange={(min, max) => setNights({ min, max })}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" last>
        <RangeSlider
          label="Locked range"
          minValue={30}
          maxValue={70}
          min={0}
          max={100}
          showValues
          disabled
          onRangeChange={() => {}}
        />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
