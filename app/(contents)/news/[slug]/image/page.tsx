import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

// Nested routes inside a dynamic route will have access to the dynamic route parameter ( slug in our case)
export default function ImagePage({
  params,
}: {
  params: { slug: string };
}): React.JSX.Element {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params?.slug);

  if (!newsItem) {
    // Redirect to the 404 page if the news item is not found
    // https://nextjs.org/docs/app/api-reference/functions/not-found
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
