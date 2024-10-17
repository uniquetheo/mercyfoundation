"use client";

import { navLinks } from "@/data/dummy";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="relative h-full ">
      <div className="absolute md:hidden transition-all text-4xl right-0 top-[20px] ">
        {menuOpen ? (
          <IoClose onClick={() => setMenuOpen(false)} />
        ) : (
          <IoMenu onClick={() => setMenuOpen(true)} />
        )}
      </div>
      <div>
        {menuOpen && (
          <div className="absolute top-[80px] right-0 shadow bg-secondary-yellow rounded-2xl p-8 md:hidden transition-all flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-2 py-1 text-custom-black text-center ${
                  pathname === link.path
                    ? "border-b-2 border-b-custom-black"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="hidden md:w-[400px] md:flex justify-between items-center pt-[20px]">
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
    </div>
  );
};

export default NavMenu;
