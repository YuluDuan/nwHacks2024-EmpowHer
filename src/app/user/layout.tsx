import UserHeader from "@/components/UserHeader";
import { cantarell } from "../font";
import SideMenu from "@/components/SideMenu/SideMenu";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`flex flex-col ${cantarell.className} bg-pale h-screen w-screen`}
    >
      <UserHeader />
      <div className="grow h-full flex">
        <SideMenu />
        {children}
      </div>
    </section>
  );
}
