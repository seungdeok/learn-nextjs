'use server';

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get('id')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!content || !author || !bookId) {
    return;
  }

  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review`, {
      method: 'POST',
      body: JSON.stringify({ content, author, bookId }),
    });
  } catch (error) {
    console.error(error);
  }
}
