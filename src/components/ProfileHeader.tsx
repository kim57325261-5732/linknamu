import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  photoUrl: string;
};

export default function ProfileHeader({
  name,
  bio,
  photoUrl,
}: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={photoUrl}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="size-40 rounded-full border-2 border-foreground/60 object-cover"
      />
      <h1 className="mt-6 text-lg font-bold">{name}</h1>
      <p className="mt-2 text-sm leading-6 text-foreground/70">{bio}</p>
    </header>
  );
}
