import { ReactNode } from "react";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import SearchableLayout from "../components/searchable-layout";
import BookItem from "../components/book-item";
import fetchBooks from "../lib/fetch-books";
import fetchRandomBooks from "../lib/fetch-random-books";
import style from "./index.module.css";

export const getStaticProps = async () => {
  const [books, recommendBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      books,
      recommendBooks,
    },
    revalidate: 60, // 1m
  };
};

export default function Page({
  books,
  recommendBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>onebite books</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="onebite books" />
        <meta property="og:description" content="등록된 도서들을 만나보세요" />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recommendBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
