export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-[100dvh] grid lg:grid-cols-2">
      <section className="bg-accent lg:block hidden"></section>
      <section className="flex justify-center items-center">{children}</section>
    </main>
  );
}
