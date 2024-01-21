import UserHeader from "@/components/UserHeader";
import { cantarell } from "../font";
import SideMenu from "@/components/SideMenu";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`flex flex-col ${cantarell.className}`}>
      <UserHeader />
      <div>
        <SideMenu />
        {children}
      </div>
    </section>
  );
}
