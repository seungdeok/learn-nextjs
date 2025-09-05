import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import { delay } from "@/utils/delay";
import { Suspense } from "react";

async function SearchContent({ q }: { q: string }) {
  await delay(1000);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/search?q=${q}`);
  
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }
  
  const books: BookData[] = await response.json();

  return books.map((book) => (
    <BookItem key={book.id} {...book} />
  ));
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense key={q} fallback={<BookListSkeleton count={10} />}>
      <SearchContent q={q || ""} />
    </Suspense>
  );
}