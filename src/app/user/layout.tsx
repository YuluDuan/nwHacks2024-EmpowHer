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
      className={`flex flex-col ${cantarell.className} bg-pale h-full w-full`}
    >
      <UserHeader />
      <div className="flex w-full h-full">
        <SideMenu />
        {children}
      </div>
    </section>
  );
}
