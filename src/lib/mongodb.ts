import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(".env.local 에 MONGODB_URI 가 없습니다.");
}

// 개발 모드에서는 핫 리로드마다 모듈이 다시 실행되므로, 연결을 global 에 보관해 재사용한다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo._mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

export type ClickDoc = { _id: string; count: number };

/** 링크별 클릭 수 컬렉션 (_id = 링크 id) */
export async function getClicksCollection() {
  const client = await clientPromise;
  // URI 경로의 DB 이름(예: /linknamu)을 사용한다.
  return client.db().collection<ClickDoc>("clicks");
}
