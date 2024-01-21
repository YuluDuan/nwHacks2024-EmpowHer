import { fetchUser } from "@/actions/user.actions";
import TinyMCEEditor from "@/components/Tinymce/TinyMCEEditor";
import useContentStore from "@/store/useContentStore";
import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function BasicPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const userDB = await fetchUser(user.id);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center gap-4">
        Update Your Public Profile
        <UserButton />
      </div>

      <TinyMCEEditor initialValue={userDB.content} id={user.id} />
    </div>
  );
}

export default BasicPage;
