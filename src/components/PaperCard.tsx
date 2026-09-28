export type Paper = {
  id: string;
  title: string;
  venue: string;
  year: number;
  url: string;
  /** 카드에 마우스를 올리면(또는 포커스하면) 뜨는 한 줄 요약 */
  summary: string;
};

export default function PaperCard({ paper }: { paper: Paper }) {
  return (
    <div className="group relative">
      <a
        href={paper.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={`${paper.id}-summary`}
        className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl border border-foreground/60 px-5 py-3 text-center transition-colors hover:bg-foreground/5"
      >
        <span className="text-sm font-medium leading-5">{paper.title}</span>
        <span className="text-xs text-foreground/60">
          {paper.venue} · {paper.year}
        </span>
      </a>
      <p
        id={`${paper.id}-summary`}
        role="tooltip"
        className="pointer-events-none absolute left-0 right-0 top-full z-10 mt-2 rounded-xl border border-foreground/30 bg-background px-4 py-3 text-center text-xs leading-5 opacity-0 shadow-lg transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
      >
        {paper.summary}
      </p>
    </div>
  );
}
