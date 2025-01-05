import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

//https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
export default function InterceptedImagePage({
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
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
