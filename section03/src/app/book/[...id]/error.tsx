"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  const router = useRouter();

  return (
    <div>
      <h1>오류가 발생했습니다.</h1>
      <p>{error.message}</p>
      <button onClick={() => {
        startTransition(() => {
          router.refresh(); // 서버 컴포넌트를 다시 불러옴
          reset(); // 에러 상태 초기화 후 컴포넌트들 다시 렌더링
        });
      }}>다시 시도</button>
    </div>
  );
}