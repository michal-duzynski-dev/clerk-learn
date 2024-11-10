import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <Link href="/not-protected">Not protected</Link>
      <Link href="/protected">protected</Link>
      <Link href="/protected/client">protected client</Link>
    </div>
  );
}
