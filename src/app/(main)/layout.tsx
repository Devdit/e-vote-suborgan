export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <div className="w-full h-[20px] xl:h-0 bg-neutral-500"></div> */}
      <main className="mt-[58px] xl:mt-[88px] overflow-hidden">{children}</main>
    </>
  );
}
