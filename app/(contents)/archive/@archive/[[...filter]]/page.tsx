import React from 'react';
import Link from 'next/link';
import NewsList from '@/components/NewsList';
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from '@/lib/news';
import { News } from '@/types/news';

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments

export default async function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}): Promise<React.JSX.Element> {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];
  let news: News[] | undefined;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (
    (selectedMonth &&
      !(await getAvailableNewsYears()).includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error('Invalid year or month');
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {news && news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>
          No news found for {selectedYear} {selectedMonth}
        </p>
      )}
    </>
  );
}
