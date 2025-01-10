import React from 'react';
import NewsList from '@/components/NewsList';
import { getLatestNews } from '@/lib/news';

export default async function LatestNewsPage(): Promise<React.JSX.Element> {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News default...!!!</h2>
      <NewsList news={latestNews} />
    </>
  );
}
