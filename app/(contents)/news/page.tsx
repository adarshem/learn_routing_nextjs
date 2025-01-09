import NewsList from '@/components/NewsList';

// Fetching data directly inside the component
export default async function NewsPage(): Promise<React.JSX.Element> {
  const resp = await fetch('http://localhost:8080/news');

  if (!resp.ok) {
    throw new Error('faled to fetch news');
  }

  const news = await resp.json();

  return (
    <div id="news">
      <h1>News</h1>
      {news && <NewsList news={news} />}
    </div>
  );
}
