import React from 'react';

export default function NewsItemPage({
  params: { itemId },
}): React.JSX.Element {
  return (
    <div id="news-item">
      <h1>{`News Item ${itemId}`}</h1>
    </div>
  );
}
