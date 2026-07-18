import React from 'react';
import { ThemeToggle, iconSizes } from '../../../masicn';
import { JsonTree } from '../../../shared/blocks/JsonTree';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

const SAMPLE_USER = {
  id: 1,
  name: 'Jane Doe',
  email: 'jane@example.com',
  active: true,
  score: 9.5,
  role: null,
  tags: ['admin', 'beta'],
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    zip: '94105',
    geo: { lat: 37.7749, lng: -122.4194 },
  },
};

const SAMPLE_ARRAY = [
  { id: 1, label: 'Item One', done: false, priority: 'high' },
  { id: 2, label: 'Item Two', done: true, priority: 'low' },
  { id: 3, label: 'Item Three', done: false, priority: 'medium' },
];

const SAMPLE_DEEPLY_NESTED = {
  level1: {
    level2: {
      level3: {
        level4: { value: 42, flag: true },
      },
    },
    sibling: 'hello',
  },
  count: 7,
};

const SAMPLE_MIXED_TYPES = {
  string: 'hello world',
  number: 3.14,
  boolean: true,
  null_value: null,
  undefined_value: undefined,
  empty_array: [],
  empty_object: {},
};

export function JsonTreeScreen() {
  const navigation = useNavigation();

  return (
    <ScreenLayout
      title="Json Tree"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Object (expanded to depth 2)">
        <JsonTree data={SAMPLE_USER} title="User" defaultDepth={2} />
      </ShowcaseSection>

      <ShowcaseSection title="Array">
        <JsonTree data={SAMPLE_ARRAY} title="Items" defaultDepth={2} />
      </ShowcaseSection>

      <ShowcaseSection title="Deeply Nested (collapsed at root)">
        <JsonTree data={SAMPLE_DEEPLY_NESTED} title="Nested" defaultDepth={0} />
      </ShowcaseSection>

      <ShowcaseSection title="Mixed Primitive Types">
        <JsonTree data={SAMPLE_MIXED_TYPES} title="Types" defaultDepth={1} />
      </ShowcaseSection>

      <ShowcaseSection title="No Title">
        <JsonTree
          data={{ message: 'No title bar shown', ok: true }}
          defaultDepth={1}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Primitive Value" last>
        <JsonTree data="Hello, world!" />
      </ShowcaseSection>
    </ScreenLayout>
  );
}
