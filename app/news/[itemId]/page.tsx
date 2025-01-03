import React from 'react';

export default function NewsItemPage({
  params,
}: {
  params: {
    itemId: string;
  };
}): React.JSX.Element {
  return (
    <div id="news-item">
      <h1>{`News Item ${params.itemId}`}</h1>
    </div>
  );
}
