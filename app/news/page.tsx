import React from 'react';
import Link from 'next/link';

export default function NewsPage(): React.JSX.Element {
  return (
    <div id="news">
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/1">News Item 1</Link>
        </li>
        <li>
          <Link href="/news/2">News Item 2</Link>
        </li>
        <li>
          <Link href="/news/3">News Item 3</Link>
        </li>
      </ul>
    </div>
  );
}
