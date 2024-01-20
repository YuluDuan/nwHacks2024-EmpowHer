import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();
  return (
    <main className="flex min-h-screen">
      {!userId && (
        <>
          <Link href="/sign-in">Log in</Link>
          <Link href="/sign-up" className="Sign-up">
            Sign up
          </Link>
        </>
      )}
      {userId && <UserButton afterSignOutUrl="/" />}
    </main>
  );
}
