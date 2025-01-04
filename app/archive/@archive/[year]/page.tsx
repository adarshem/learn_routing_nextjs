import React from 'react';
import NewsList from '@/components/NewsList';
import { getNewsForYear } from '@/lib/news';

export default function FilteredNewsPage({
  params,
}: {
  params: { year: string };
}): React.JSX.Element {
  const news = getNewsForYear(params.year);
  return <NewsList news={news} />;
}
