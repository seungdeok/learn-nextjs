import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import style from "./layout.module.css";

export const metadata: Metadata = {
  title: "ONEBITE BOOKS",
  description: "ONEBITE BOOKS",
};

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
          <footer>제작 @seungdeok</footer>
        </div>
      </body>
    </html>
  );
}
