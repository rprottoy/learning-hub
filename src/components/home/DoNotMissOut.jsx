import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoNotMissOut = () => {
  return (
    <div className="md:max-w-11/12 max-w-11/12 mx-auto bg-linear-to-r from-[#031529] via-[#0b2d4d] to-[#1b557a] rounded-[15px]">
      <div className="text-center text-white py-10.5">
        <h2 className="mb-3.5 text-5xl font-bold">Do Not Miss Out!</h2>
        <p className="text-lg font-[18px] mb-4.75">
          Over 50 million people already fulfill their needs by learning from
          our expertise.
        </p>
        <div>
          <Link href={"/courses"}>
            <button className=" bg-primary px-7 py-2.5 rounded-[5px] text-white font-semibold transition hover:bg-opacity-90">
              Start Learning
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoNotMissOut;
