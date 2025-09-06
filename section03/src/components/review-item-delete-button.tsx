"use client";

import { deleteReviewAction } from "@/actions/delete-review.action";
import { useActionState, useEffect, useRef } from "react";

export default function ReviewItemDeleteButton({ reviewId, bookId }: { reviewId: string, bookId: string }) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state?.error);
    }
  }, [state]);

  return <form action={formAction} ref={ref}>
    <input type="hidden" name="bookId" value={bookId} />
    <input type="hidden" name="reviewId" value={reviewId} />
    <button onClick={() => ref.current?.requestSubmit()} disabled={isPending}>{ isPending ? '삭제 중...' : '삭제' }</button>
  </form>;
}