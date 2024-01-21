"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface SideMenuItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const SideMenuItem = ({ label, active, href }: SideMenuItemProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Link href={href} className={`side-item ${active}`}>
        {label}
      </Link>
    </>
  );
};

export default SideMenuItem;
