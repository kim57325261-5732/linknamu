import PaperList from "@/components/PaperList";
import ProfileHeader from "@/components/ProfileHeader";
import { papers } from "@/data/papers";

// TODO: 프로필 사진은 아직 더미 — 실제 사진으로 교체할 것
const profile = {
  name: "김기준 (Ki Jun Kim)",
  bio: "전기화학 박사 · 이차전지 선행개발",
  photoUrl: "/profile-placeholder.svg",
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
