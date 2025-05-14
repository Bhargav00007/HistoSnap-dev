"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-6 py-16">
      <div className="bg-[#1E3A8A] rounded-[32px] w-full max-w-7xl h-[500px] mx-auto flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-10 overflow-hidden">
        {/* Text Content - On top in mobile */}
        <div className="text-white w-full lg:w-1/2 text-center lg:text-left mt-8 lg:-mt-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Taking care of your health is our top priority.
          </h1>
          <div className="flex justify-center lg:justify-start">
            <Link href="/about">
              <button className="px-10 py-3 bg-black text-white rounded-full cursor-pointer text-lg hover:bg-gray-800 transition">
                About Us
              </button>
            </Link>
          </div>
        </div>

        {/* Image - Below text on mobile, right side on desktop */}
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={1200}
            height={850}
            className="object-contain max-h-full w-auto scale-150"
          />
        </div>
      </div>
    </section>
  );
}
