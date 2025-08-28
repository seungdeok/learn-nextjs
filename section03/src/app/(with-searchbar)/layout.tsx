import SearchBar from "./search-bar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
