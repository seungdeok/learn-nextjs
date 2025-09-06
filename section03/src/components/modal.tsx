"use client";

import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!ref.current?.open) {
      ref.current?.showModal();
      ref.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return createPortal(
    <dialog
      ref={ref}
      className={style.modal}
      onClick={(e) => {
        // 모달 밖을 클릭하면 모달 닫기위해 뒤로가기
        if ((e.target as HTMLDialogElement).nodeName === 'DIALOG') {
          router.back();
        }
      }}>
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
}