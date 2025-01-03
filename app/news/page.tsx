import React from 'react';
import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage(): React.JSX.Element {
  return (
    <div id="news">
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
