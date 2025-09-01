"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./search-bar.module.css";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const q = searchParams.get("q");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <div className={style.container}>
      <input
        value={search}
        onChange={handleChangeSearch}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>검색</button>
    </div>
  );
}
