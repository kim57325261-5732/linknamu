import { MongoClient } from "mongodb";

// 개발 모드에서는 핫 리로드마다 모듈이 다시 실행되므로, 연결을 global 에 보관해 재사용한다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

// 빌드 중에도 이 파일이 import 되므로, 환경 변수 검사와 연결은 처음 쓸 때 한다.
function getClient() {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 없습니다. (.env.local 또는 Vercel 설정 확인)");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 연결에 실패하면 다음 요청에서 다시 시도한다.
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo._mongoClientPromise;
}

export type ClickDoc = { _id: string; count: number };

/** 링크별 클릭 수 컬렉션 (_id = 링크 id) */
export async function getClicksCollection() {
  const client = await getClient();
  // URI 경로의 DB 이름(예: /linknamu)을 사용한다.
  return client.db().collection<ClickDoc>("clicks");
}
