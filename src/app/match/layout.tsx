import UserHeader from "@/components/UserHeader";
import { cantarell } from "../font";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`flex flex-col ${cantarell.className} bg-pale h-full w-full`}
    >
      <UserHeader label={"EMPOWHER"} />
      {children}
    </section>
  );
}
