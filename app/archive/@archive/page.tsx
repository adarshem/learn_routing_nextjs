import React from 'react';
import Link from 'next/link';
import { getAvailableNewsYears } from '@/lib/news';

export default function ArchivePage(): React.JSX.Element {
  const availableYears = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {availableYears.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
