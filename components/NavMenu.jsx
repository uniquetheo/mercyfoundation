"use client";

import { navLinks } from "@/data/dummy";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex w-[400px] justify-between">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`px-2 py-1 text-custom-black ${
            pathname === link.path ? "border-b-2 border-b-custom-black" : ""
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
