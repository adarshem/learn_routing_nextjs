'use client';

import React, { useEffect, useState } from 'react';
import NewsList from '@/components/NewsList';

export default function NewsPage(): React.JSX.Element {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const resp = await fetch('http://localhost:8080/news');
      if (!resp.ok) {
        setError('Failed to fetch news');
        setIsLoading(false);
      }

      const newsData = await resp.json();
      setIsLoading(false);
      setNews(newsData);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id="news">
      <h1>News</h1>
      {news && <NewsList news={news} />}
    </div>
  );
}
