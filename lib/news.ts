import sql from 'better-sqlite3';
import { News } from '@/types/news';

const db = sql('data.db');

export async function getAllNews(): Promise<News[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM news').all() as News[];
}

export async function getNewsItem(slug: string): Promise<News> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const newsItem = db
    .prepare('SELECT * FROM news WHERE slug = ?')
    .get(slug) as News;
  return newsItem;
}

export async function getLatestNews(): Promise<News[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all() as News[];
  return latestNews;
}

/**
 * db.prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news").all();
 * will be an array of objects, where each object represents a distinct year extracted from the date column in the news table.
 * Each object will have a single property year which is a string representing the year.
 * [
 *  { year: '2021' },
 *  { year: '2022' },
 *  { year: '2023' }
 * ]
 * The strftime('%Y', date) function extracts the year part from the date column
 * DISTINCT ensures that only unique years are returned.
 */
export async function getAvailableNewsYears() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const years = (
    db
      .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
      .all() as { year: string }[]
  ).map((item) => item.year);

  return years;
}

export function getAvailableNewsMonths(year: string) {
  return (
    db
      .prepare(
        "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
      )
      .all(year) as { month: string }[]
  ).map((item) => item.month);
}

export async function getNewsForYear(year: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as News[];

  return news;
}

export async function getNewsForYearAndMonth(year: string, month: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as News[];

  return news;
}
