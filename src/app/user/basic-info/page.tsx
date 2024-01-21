import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function BasicPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <div className="ml-20 my-20 w-full flex justify-between items-center">
        Update Your Profile
        <UserButton />
      </div>
      <div></div>
    </>
  );
}

export default BasicPage;
