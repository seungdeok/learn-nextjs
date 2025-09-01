import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

export const metadata: Metadata = {
  title: "ONEBITE BOOKS",
  description: "ONEBITE BOOKS",
};

async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`);
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }
  const books: BookData[] = await response.json();

  return (
    <footer>
      제작 @seungdeok
      <br />
      {books.length}개의 도서가 있습니다.
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
