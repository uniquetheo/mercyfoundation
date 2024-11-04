import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full  bg-dark-slate text-white">
      <div className="container mx-auto px-4 md:px-0 py-10 flex justify-between">
        <span>Mercy Foundation &copy; 2009 - {new Date().getFullYear()}.</span>
        <div className="icons flex gap-2">
          <Link href="https://facebook.com/mercy-foundation" target="_blank">
            <CiFacebook />
          </Link>
          <Link href="https://instagram.com/mercy-foundation" target="_blank">
            <CiInstagram />
          </Link>
          <Link href="https://wa.me/233559246063" target="_blank">
            <IoLogoWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
