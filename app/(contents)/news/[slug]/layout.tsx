export default function NewsDetailsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}): React.JSX.Element {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
