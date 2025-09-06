/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { BookData, ReviewData } from "@/types";
import style from "./page.module.css";
import ReviewItem from "@/components/review-item";
import { ReviewEditor } from "@/components/review-editor";

async function BookContent({ id }: { id: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/${id}`);
  
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }

  const book: BookData = await response.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

async function ReviewList({ id }: { id: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/book/${id}`, {
    next: { tags: [`book-${id}-reviews`] }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const reviews: ReviewData[] = await response.json();
  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={style.container}>
      <BookContent id={id} />
      <ReviewEditor id={id} />
      <ReviewList id={id} />
    </div>
  );
}