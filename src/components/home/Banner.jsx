import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-11/12 mx-auto h-120 rounded-[15px] bg-[#142537] text-white">
      <div className="md:space-y-7.5 space-y-3 md:pl-35 pl-2 pr-2 md:pr-0">
        <h1 className="md:text-5xl text-2xl font-bold mt-3 md:mt-0 font-libre">
          Learn & Increase your Skill on your flexible Time.
        </h1>
        <p className="hidden md:inline-block">
          Master any skill with our premier learning platform. Learn from
          top-tier instructors through expert-led courses designed to turn your
          curiosity into professional expertise—anytime, anywhere. Join us
          today!
        </p>
        <div className="space-y-3.75">
          <h3 className="md:text-[32px] text-[16px] font-medium">
            Find Your Course...!
          </h3>
          <div className="flex items-center">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white text-black rounded-[5px] py-2 pl-10 pr-20"
            />
            <button className="bg-primary text-white rounded-[5px] px-7 py-2 -ml-13.75">
              <Image
                alt=""
                src={"/assets/icons/search.svg"}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              ></Image>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          alt="Learn & Increase your Skill on your flexible Time."
          src={"/assets/hero.png"}
          width={2190}
          height={612}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
