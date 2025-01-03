import React from 'react';

export default function MainHeader(): React.JSX.Element {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
      </ul>
    </header>
  );
}
