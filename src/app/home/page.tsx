import { createUser, fetchUser } from "@/actions/user.actions";
import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  } else {
    try {
      const userOld = await fetchUser(user.id);
      if (!userOld) {
        createUser(
          user.id,
          user.emailAddresses,
          user.firstName!,
          user.lastName!,
          user.imageUrl
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="h-screen">
        <h2> Hello {user.firstName}</h2>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
