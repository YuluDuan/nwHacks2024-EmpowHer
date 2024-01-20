import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <div className="h-screen">
        <h2>Hello!</h2>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
