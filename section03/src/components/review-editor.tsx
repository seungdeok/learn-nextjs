import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review.action";

export function ReviewEditor({ id }: { id: string }) {
  return <section>
    <form action={createReviewAction} className={style.form_container}>
      <input type="hidden" name="id" value={id} readOnly />
      <textarea required name="content" placeholder="리뷰 내용" />
      <div className={style.submit_container}>
        <input type="text" required name="author" placeholder="작성자" />
        <button type="submit">리뷰 작성</button>
      </div>
    </form>
  </section>
}