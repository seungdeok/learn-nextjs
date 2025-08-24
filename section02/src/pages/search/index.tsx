import { ReactNode } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import SearchableLayout from "../../components/searchable-layout";
import BookItem from "../../components/book-item";
import fetchSearchBooks from "../../lib/fetch-search-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query;

  const books = await fetchSearchBooks(q as string);

  return {
    props: { books },
  };
};

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>onebite books | 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="onebite books" />
        <meta property="og:description" content="등록된 도서들을 만나보세요" />
      </Head>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
