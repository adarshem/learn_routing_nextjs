import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/NewsList';

export default function NewsPage(): React.JSX.Element {
  return (
    <div id="news">
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
