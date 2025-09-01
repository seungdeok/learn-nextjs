"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input
        value={search}
        onChange={handleChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleSubmit}>검색</button>
    </div>
  );
}
