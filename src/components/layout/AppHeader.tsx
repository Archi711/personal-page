"use client";

import Link from "next/link";

export const AppHeader = () => {
  return (
    <header className="flex justify-between items-center px-5 h-[69px] sticky top-0">
      <span className="text-xs text-violet-400">Tak, tu będzie logo</span>
      <nav className="flex items-center gap-2 [&>a]:hover:underline">
        <Link href="/dziennik">Dziennik</Link>
      </nav>
    </header>
  );
};
