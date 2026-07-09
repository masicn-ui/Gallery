import React, { useState } from 'react';
import { Text, ThemeToggle, iconSizes } from '../../../masicn';
import { Pagination } from '../../../shared/blocks/Pagination';
import { ShowcaseSection } from '../../shared/ShowcaseSection';
import { useNavigation } from '@react-navigation/native';
import { ScreenLayout } from '../../shared/ScreenLayout';

export function PaginationScreen() {
  const navigation = useNavigation();
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(50);
  const [page5, setPage5] = useState(10);

  return (
    <ScreenLayout
      title="Pagination"
      onBack={() => navigation.goBack()}
      rightActions={[
        <ThemeToggle
          key="theme-toggle"
          size={iconSizes.large}
          testID="theme-toggle"
        />,
      ]}
    >
      <ShowcaseSection title="Few Pages (5)">
        <Pagination page={page1} totalPages={5} onPageChange={setPage1} />
        <Text variant="caption" color="textSecondary">
          Page {page1} of 5
        </Text>
      </ShowcaseSection>

      <ShowcaseSection title="Many Pages — Middle">
        <Pagination page={page2} totalPages={50} onPageChange={setPage2} />
        <Text variant="caption" color="textSecondary">
          Page {page2} of 50
        </Text>
      </ShowcaseSection>

      <ShowcaseSection title="Many Pages — First Page">
        <Pagination page={page3} totalPages={20} onPageChange={setPage3} />
        <Text variant="caption" color="textSecondary">
          Page {page3} of 20 (‹ disabled)
        </Text>
      </ShowcaseSection>

      <ShowcaseSection title="Many Pages — Last Page">
        <Pagination page={page4} totalPages={50} onPageChange={setPage4} />
        <Text variant="caption" color="textSecondary">
          Page {page4} of 50 (› disabled)
        </Text>
      </ShowcaseSection>

      <ShowcaseSection title="More Visible (maxVisible=7)" last>
        <Pagination
          page={page5}
          totalPages={30}
          onPageChange={setPage5}
          maxVisible={7}
        />
        <Text variant="caption" color="textSecondary">
          Page {page5} of 30 · 7 buttons shown
        </Text>
      </ShowcaseSection>
    </ScreenLayout>
  );
}
