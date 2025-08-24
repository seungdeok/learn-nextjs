/* eslint-disable @next/next/no-img-element */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import fetchBook from "../../lib/fetch-book";
import style from "./[id].module.css";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;

  const book = await fetchBook(Number(id));

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book,
    },
  };
};

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <Head>
        <title>onebite books | {title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url('${coverImgUrl}')` }}
        >
          <img src={coverImgUrl} alt="cover" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
