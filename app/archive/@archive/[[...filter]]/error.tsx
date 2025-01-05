'use client';

export default function ErrorPage({
  error,
}: {
  error: Error;
}): React.JSX.Element {
  return (
    <div id="error">
      <h1>An error occured!</h1>
      <p>{error.message}</p>
    </div>
  );
}
