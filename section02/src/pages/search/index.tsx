import { ReactNode } from "react";
import SearchableLayout from "../../components/searchable-layout";
import BookItem from "../../components/book-item";
import books from "../../mock/book.json";

export default function Page() {
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
