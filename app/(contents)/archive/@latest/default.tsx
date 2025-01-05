import React from 'react';
import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';

export default function LatestNewsPage(): React.JSX.Element {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News default...!!!</h2>
      <NewsList news={latestNews} />
    </>
  );
}
