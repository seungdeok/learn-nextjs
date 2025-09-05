import style from "./book-item-skeleton.module.css";

export default function BookItemSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.cover_img} />
      <div className={style.info_container}>
        <div className={style.title} />
        <div className={style.subtitle} />
        <br />
        <div className={style.author} />
      </div>
    </div>
  );
}