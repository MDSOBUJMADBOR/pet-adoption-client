
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink1 = ({ href, className = "", children }) => {
  const pathname = usePathname();

  const isActive = pathname === href; 

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? " text-red-500" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink1;
