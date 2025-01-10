import NewsList from '@/components/NewsList';
import { getAllNews } from '@/lib/news';

// Fetching data directly inside the component
export default async function NewsPage(): Promise<React.JSX.Element> {
  const news = await getAllNews();

  return (
    <div id="news">
      <h1>News</h1>
      {news && <NewsList news={news} />}
    </div>
  );
}
