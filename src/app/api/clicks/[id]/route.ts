import type { NextRequest } from "next/server";
import { papers } from "@/data/papers";
import { getClicksCollection } from "@/lib/mongodb";

const paperIds = new Set(papers.map((paper) => paper.id));

/** 해당 링크의 클릭 수를 1 늘리고, 늘어난 값을 돌려준다. */
export async function POST(_req: NextRequest, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;
  // 목록에 없는 id 로 아무 문서나 만들어지지 않도록 막는다.
  if (!paperIds.has(id)) {
    return Response.json({ error: "unknown link" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return Response.json({ id, count: doc?.count ?? 1 });
}
