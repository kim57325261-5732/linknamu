import { getClicksCollection } from "@/lib/mongodb";

/** 모든 링크의 클릭 수를 { [id]: count } 형태로 한 번에 돌려준다. */
export async function GET() {
  const clicks = await getClicksCollection();
  const docs = await clicks.find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return Response.json(counts);
}
