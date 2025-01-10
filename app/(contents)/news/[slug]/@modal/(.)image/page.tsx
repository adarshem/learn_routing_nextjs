import { notFound } from 'next/navigation';
import ModalBackdrop from '@/components/ModalBackdrop';
import { getNewsItem } from '@/lib/news';

//https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
export default async function InterceptedImagePage({
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
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
