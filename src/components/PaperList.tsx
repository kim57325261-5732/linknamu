"use client";

import { useEffect, useState } from "react";
import PaperCard, { type Paper } from "@/components/PaperCard";

const INITIAL_COUNT = 5;

export default function PaperList({ papers }: { papers: Paper[] }) {
  const [expanded, setExpanded] = useState(false);
  // 터치로 요약을 연 카드 (한 번에 하나만)
  const [openId, setOpenId] = useState<string | null>(null);
  // 링크별 클릭 수 (받기 전에는 비어 있어서 모두 0회로 표시)
  const [clicks, setClicks] = useState<Record<string, number>>({});
  const visible = expanded ? papers : papers.slice(0, INITIAL_COUNT);
  const hasMore = papers.length > INITIAL_COUNT;

  // 페이지가 열리면 모든 링크의 클릭 수를 한 번에 가져온다.
  useEffect(() => {
    let ignore = false;
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => {
        if (ignore) return;
        // 응답 전에 이미 클릭한 링크는 더 큰 값을 유지한다.
        setClicks((prev) => {
          const next = { ...data };
          for (const [id, count] of Object.entries(prev)) {
            next[id] = Math.max(next[id] ?? 0, count);
          }
          return next;
        });
      })
      .catch((err) => console.error("클릭 수를 불러오지 못했습니다:", err));
    return () => {
      ignore = true;
    };
  }, []);

  const recordVisit = (id: string) => {
    // 화면에는 바로 반영하고, 서버 응답이 오면 실제 값으로 맞춘다.
    setClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive 를 켠다.
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { count: number }) =>
        setClicks((prev) => ({ ...prev, [id]: Math.max(prev[id] ?? 0, data.count) })),
      )
      .catch((err) => console.error("클릭 수를 저장하지 못했습니다:", err));
  };

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
              clicks={clicks[paper.id] ?? 0}
              onVisit={() => recordVisit(paper.id)}
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
