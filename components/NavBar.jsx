import Image from "next/image.js";
import NavMenu from "./NavMenu.jsx";
import Link from "next/link";

const NavBar = () => {
  return (
    <section className="w-full h-full bg-secondary-yellow/50 backdrop-blur-md">
      <div className="container mx-auto flex h-[80px] items-center justify-between px-4 sm:px-0">
        <Link href="/">
          <div className="w-[120px] object-cover">
            <Image
              src="/images/mf-logo-bw-transparent.png"
              alt="logo"
              width={661}
              height={377}
              className=""
            />
          </div>
        </Link>
        <NavMenu />
        <button className="btn btn-secondary">Donate</button>
      </div>
    </section>
  );
};

export default NavBar;
