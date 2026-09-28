"use client";

import { useRef } from "react";

export type Paper = {
  id: string;
  title: string;
  venue: string;
  year: number;
  url: string;
  /** 카드에 마우스를 올리면(터치 기기는 한 번 탭하면) 뜨는 한 줄 요약 */
  summary: string;
};

type Props = {
  paper: Paper;
  /** 터치로 요약을 연 상태 */
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PaperCard({ paper, open, onOpenChange }: Props) {
  // click 이벤트만으로는 입력 장치를 알 수 없어서 직전 pointerdown 의 종류를 기억해 둔다.
  const pointerType = useRef("");

  return (
    <div data-open={open || undefined} className="group relative">
      <a
        href={paper.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={`${paper.id}-summary`}
        onPointerDown={(e) => {
          pointerType.current = e.pointerType;
        }}
        onClick={(e) => {
          const isTouch = pointerType.current !== "" && pointerType.current !== "mouse";
          pointerType.current = "";
          if (!isTouch) return;
          // 터치: 첫 탭은 요약만 띄우고, 두 번째 탭에 논문 사이트로 이동한다.
          if (!open) {
            e.preventDefault();
            onOpenChange(true);
          } else {
            onOpenChange(false);
          }
        }}
        className="peer flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl border border-foreground/60 px-5 py-3 text-center transition-colors hover:bg-foreground/5 group-data-open:bg-foreground/5"
      >
        <span className="text-sm font-medium leading-5">{paper.title}</span>
        <span className="text-xs text-foreground/60">
          {paper.venue} · {paper.year}
        </span>
      </a>
      <p
        id={`${paper.id}-summary`}
        role="tooltip"
        className="pointer-events-none absolute left-0 right-0 top-full z-10 mt-2 rounded-xl border border-foreground/30 bg-background px-4 py-3 text-center text-xs leading-5 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 peer-focus-visible:opacity-100 group-data-open:pointer-events-auto group-data-open:opacity-100"
      >
        {paper.summary}
      </p>
    </div>
  );
}
