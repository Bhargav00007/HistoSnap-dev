"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-10 py-3">
        <Link href="/" className="flex items-center gap-1 md:gap-0.5">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-xl font-semibold text-[var(--snapblack)] ml-1">
            HistoSnap
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/about">
            <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-full hover:bg-black/90 transition text-sm">
              About us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
