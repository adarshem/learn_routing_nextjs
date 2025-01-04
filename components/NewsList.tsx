import React from 'react';
import Link from 'next/link';
import type { News } from '@/types/news';

export default function NewsList({
  news,
}: {
  news: News[];
}): React.JSX.Element {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
