import PaperList from "@/components/PaperList";
import ProfileHeader from "@/components/ProfileHeader";
import { papers } from "@/data/papers";

const profile = {
  name: "김기준",
  bio: "리튬 이온 배터리 선행 개발자 · AI crew로 활동 중!",
  photoUrl: "https://placehold.co/320x320/orange/white/png",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col px-6 py-12">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        photoUrl={profile.photoUrl}
      />
      <PaperList papers={papers} />
    </main>
  );
}
