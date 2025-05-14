"use client";

import { FaFileSignature } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import Link from "next/link";

export default function FeatureCards() {
  return (
    <section className="w-full px-6 mb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Card 1 */}
        <div className="flex flex-col justify-between bg-[#1E3A8A]/90 text-white rounded-[32px] p-8 w-full lg:w-1/3 h-48 relative">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold">
              Instant PDF Report Generation
            </h2>
            <FaFileSignature className="text-8xl" />
          </div>
          <Link href="/Summarize">
            <button className="mt-0 cursor-pointer w-fit px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Summarize
            </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center bg-[#1E3A8A]/90 text-white rounded-[32px] p-8 w-full lg:w-1/3 h-48 relative">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold text-left">
              Telugu to English Translation
              <br />
              <span className="text-base font-light">(Launching Soon)</span>
            </h2>
            <IoMdChatbubbles className="text-8xl mt-1" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center bg-[#1E3A8A]/90 text-white rounded-[32px] p-8 w-full lg:w-1/3 h-48">
          <h2 className="text-2xl font-semibold text-left">
            More Coming Soon...
          </h2>
        </div>
      </div>
    </section>
  );
}
