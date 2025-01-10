'use client';

import { useRouter } from 'next/navigation';
// If you are using the new App Router in Next.js 13, you should import useRouter from next/navigation
// to take advantage of the latest features and improvements. If you are still using the Pages Router (pages directory),
// you would continue to use useRouter from next/router.

export default function ModalBackdrop(): React.JSX.Element {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
}
