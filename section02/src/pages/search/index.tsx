import { ReactNode } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
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
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
