import React from 'react';

// https://nextjs.org/docs/app/api-reference/file-conventions/not-found
export default function NotFoundPage(): React.JSX.Element {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>
        The page you are looking for does not exist. Please check the URL and
        try again.
      </p>
    </div>
  );
}
