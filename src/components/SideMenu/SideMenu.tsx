"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  let pathname = usePathname();

  // Truncate [platform] from pathname if it exists for match below to succeed
  if (pathname.startsWith("/user/basic-info")) {
    pathname = "/user/basic-info";
  }
  const routes = useMemo(
    () => [
      {
        label: "Basic Info",
        href: "/user/basic-info",
        active: pathname !== "/" && pathname !== "/user/basic-info",
      },

      {
        label: "Interests",
        href: "/user/interests",
        active: pathname === "/user/interests",
      },

      {
        label: "Basic Info",
        href: "/user/basic-info",
        active: pathname !== "/" && pathname !== "/user/basic-info",
      },

      {
        label: "Interests",
        href: "/user/interests",
        active: pathname === "/user/interests",
      },

      {
        label: "Interests",
        href: "/user/interests",
        active: pathname === "/user/interests",
      },
    ],
    [pathname]
  );

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <nav className="ml-20 my-20 w-1/5 border-r-2 border-black-dark">
        <div className="flex flex-col text-black gap-10 text-xl">
          {routes.map((item) => (
            <SideMenuItem key={item.label} {...item} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
