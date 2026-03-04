import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="md:max-w-11/12 max-w-11/12 mx-auto">
      <div>
        <h1 className="font-bold md:text-[120px] text-5xl text-base-300">
          CATEGORIES
        </h1>
      </div>
      <div className="md:max-w-10/12 max-w-11/12 mx-auto md:-mt-20 -mt-6">
        <h4 className="md:text-[32px] text-2xl font-medium text-secondary">
          Our Courses
        </h4>
      </div>
      {/* Course Categories */}
      <div>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-6 mt-10 md:max-w-10/12 max-w-11/12 mx-auto text-center text-secondary">
          {/* 1st card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="development-logo"
              src={"/assets/icons/development.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Development</p>
          </div>
          {/* 2nd card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="business-logo"
              src={"/assets/icons/business.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Business</p>
          </div>
          {/* 3rd card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="Finance-logo"
              src={"/assets/icons/financeAccount.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Finance & Accounting</p>
          </div>
          {/* 4th card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="It & Software-logo"
              src={"/assets/icons/software.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">It & Software</p>
          </div>
          {/* 5th card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="Office-productivity-logo"
              src={"/assets/icons/officeSupport.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Office Productivity</p>
          </div>
          {/* 6th card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="Personal-development"
              src={"/assets/icons/personaldevelopment.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Personal Development</p>
          </div>
          {/* 7th card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="design"
              src={"/assets/icons/design.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Design</p>
          </div>
          {/* 8th card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="Marketing"
              src={"/assets/icons/market.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Marketing</p>
          </div>
          {/* 9th card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="Health & Fitness"
              src={"/assets/icons/health.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Health & Fitness</p>
          </div>
          {/* 10th card */}
          <div className="py-9 md:px-18 px-3 shadow-lg space-y-5.5 flex flex-col items-center">
            <Image
              alt="Music"
              src={"/assets/icons/music.svg"}
              width={69}
              height={80}
              className="w-17.25 h-20"
            ></Image>
            <p className="text-secondary">Music</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
