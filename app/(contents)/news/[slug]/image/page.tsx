import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

// Nested routes inside a dynamic route will have access to the dynamic route parameter ( slug in our case)
export default async function ImagePage({
  params,
}: {
  params: { slug: string };
}): Promise<React.JSX.Element> {
  const newsItem = await getNewsItem(params?.slug);

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
