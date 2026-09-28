"use client";

import { useEffect, useState } from "react";
import PaperCard, { type Paper } from "@/components/PaperCard";

const INITIAL_COUNT = 5;

export default function PaperList({ papers }: { papers: Paper[] }) {
  const [expanded, setExpanded] = useState(false);
  // 터치로 요약을 연 카드 (한 번에 하나만)
  const [openId, setOpenId] = useState<string | null>(null);
  const visible = expanded ? papers : papers.slice(0, INITIAL_COUNT);
  const hasMore = papers.length > INITIAL_COUNT;

  // 열린 카드 바깥을 터치하면 요약을 닫는다.
  useEffect(() => {
    if (!openId) return;
    const close = (e: PointerEvent) => {
      if (!(e.target as Element).closest("[data-open]")) setOpenId(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [openId]);

  return (
    <div className="paper-list mt-10 flex flex-col gap-4">
      <ul className="flex flex-col gap-4 [&>li]:transition-[filter,opacity]">
        {visible.map((paper) => (
          <li key={paper.id}>
            <PaperCard
              paper={paper}
              open={openId === paper.id}
              onOpenChange={(open) => setOpenId(open ? paper.id : null)}
            />
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
