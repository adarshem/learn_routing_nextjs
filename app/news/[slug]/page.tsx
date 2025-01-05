import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsItemPage({
  params,
}: {
  params: {
    slug: string;
  };
}): React.JSX.Element {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params.slug);

  if (!newsItem) {
    // Redirect to the 404 page if the news item is not found
    // https://nextjs.org/docs/app/api-reference/functions/not-found
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}
