"use client";

import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review.action";
import { useActionState, useEffect } from "react";

export function ReviewEditor({ id }: { id: string }) {
  const [state, formAction, isPending] = useActionState(createReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state?.error);
    }
  }, [state]);

  return <section>
    <form action={formAction} className={style.form_container}>
      <input type="hidden" name="id" value={id} readOnly />
      <textarea required name="content" placeholder="리뷰 내용" disabled={isPending} />
      <div className={style.submit_container}>
        <input type="text" required name="author" placeholder="작성자" disabled={isPending} />
        <button type="submit" disabled={isPending}>{ isPending ? '작성 중...' : '리뷰 작성' }</button>
      </div>
    </form>
  </section>
}