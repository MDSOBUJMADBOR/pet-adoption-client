"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, className = "", children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? "bg-red-300 " : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;