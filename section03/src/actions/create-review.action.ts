'use server';

import { revalidateTag } from "next/cache";

export async function createReviewAction(_: any, formData: FormData) {
  const bookId = formData.get('id')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!content || !author || !bookId) {
    return {
      status: false,
      error: '내용, 작성자, 도서 id가 필요합니다.',
    };
  }

  try {
    const response =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review`, {
      method: 'POST',
      body: JSON.stringify({ content, author, bookId }),
    });

    if (!response.ok) {
      return {
        status: false,
        error: '리뷰 생성에 실패했습니다.',
      };
    }

    // revalidatePath(`/book/${bookId}`);
    revalidateTag(`book-${bookId}-reviews`);

    return {
      status: true,
      error: null,
    }
  } catch {
    return {
      status: false,
      error: '리뷰 생성에 실패했습니다.',
    };
  }
}
