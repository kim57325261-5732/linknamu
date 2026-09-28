"use client";

import { useState } from "react";
import PaperCard, { type Paper } from "@/components/PaperCard";

const INITIAL_COUNT = 5;

export default function PaperList({ papers }: { papers: Paper[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? papers : papers.slice(0, INITIAL_COUNT);
  const hasMore = papers.length > INITIAL_COUNT;

  return (
    // 요약 팝업이 아래 카드(마지막 카드면 버튼)를 가리므로, 그 요소를 흐리게 처리한다.
    <div className="mt-10 flex flex-col gap-4 [&:has(li:last-child:is(:hover,:focus-within))>button]:opacity-60 [&:has(li:last-child:is(:hover,:focus-within))>button]:blur-[3px]">
      <ul className="flex flex-col gap-4 [&>li]:transition-[filter,opacity] [&>li:is(:hover,:focus-within)+li]:opacity-60 [&>li:is(:hover,:focus-within)+li]:blur-[3px]">
        {visible.map((paper) => (
          <li key={paper.id}>
            <PaperCard paper={paper} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
          className="cursor-pointer rounded-xl border border-foreground/60 px-5 py-3 text-sm font-medium transition-[background-color,filter,opacity] hover:bg-foreground/5"
        >
          {expanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
}
