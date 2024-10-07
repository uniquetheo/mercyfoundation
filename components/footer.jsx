import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[200px] bg-dark-slate text-white">
      <div className="container mx-auto px-4 md:px-0 py-10">
        <span>&copy; 2009 - {new Date().getFullYear()} Mercy Foundation.</span>
      </div>
    </footer>
  );
};

export default Footer;
