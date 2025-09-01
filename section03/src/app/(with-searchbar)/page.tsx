import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

async function Books() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`);
  
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }
  
  const books: BookData[] = await response.json();

  return books?.map((book) => (
    <BookItem key={book.id} {...book} />
  ))
}

async function RecommendBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/random`);
  
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }
  
  const books: BookData[] = await response.json();

  return books?.map((book) => (
    <BookItem key={book.id} {...book} />
  ))
}

export default function Page() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecommendBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Books />
      </section>
    </div>
  );
}