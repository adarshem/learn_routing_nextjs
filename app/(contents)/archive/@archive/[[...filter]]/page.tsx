import React, { Suspense } from 'react';
import Link from 'next/link';
import NewsList from '@/components/NewsList';
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from '@/lib/news';
import { News } from '@/types/news';

async function FilterHeader({
  year,
  month,
}: {
  year: string;
  month: string;
}): Promise<React.JSX.Element> {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid filter.');
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({
  year,
  month,
}: {
  year: string;
  month: string;
}): Promise<React.JSX.Element> {
  let news: News[] | undefined;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && year) {
    news = await getNewsForYearAndMonth(year, month);
  }

  return (
    <>
      {news && news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>
          No news found for {year} {month}
        </p>
      )}
    </>
  );
}

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments
export default async function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}): Promise<React.JSX.Element> {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filtered news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
