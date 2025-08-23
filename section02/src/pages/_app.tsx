import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/test");
  };

  /** prefetch  */
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <Link href="/">index</Link>
        <Link href="/search">search</Link>
        <Link href="/book/1" prefetch={false}>
          book/1
        </Link>
        <div>
          <button onClick={handleClick}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
