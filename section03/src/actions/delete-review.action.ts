'use server';

import { revalidateTag } from "next/cache";

export async function deleteReviewAction(_: any, formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const reviewId = formData.get('reviewId')?.toString();

  if (!reviewId) {
    return {
      status: false,
      error: '리뷰 id가 필요합니다.',
    };
  }

  try {
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${reviewId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return {
        status: false,
        error: '리뷰 삭제에 실패했습니다.',
      };
    }

    revalidateTag(`book-${bookId}-reviews`);

    return {
      status: true,
      error: null,
    }
  } catch {
    return {
      status: false,
      error: '리뷰 삭제에 실패했습니다.',
    };
  }
}
