export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full mx-20 my-20">{children}</section>;
}
