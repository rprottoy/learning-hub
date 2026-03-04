import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recommended = () => {
  return (
    <div className="md:max-w-11/12 max-w-11/12 mx-auto">
      <div>
        <h1 className="font-bold md:text-[120px] text-5xl text-base-300">
          WANT TO LEARN
        </h1>
      </div>
      <div className="md:max-w-10/12 max-w-11/12 mx-auto md:-mt-20 -mt-15 md:flex flex-none items-center justify-between space-y-3 md:space-y-0">
        <h4 className="md:text-[32px] text-2xl font-medium text-secondary">
          Recommended for you
        </h4>
        <div>
          <Link href={"/view-all-courses"}>
            <button className=" bg-primary px-7 py-2.5 rounded-[5px] text-white">
              View All
            </button>
          </Link>
        </div>
      </div>
      {/* Course Categories */}
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10 md:max-w-10/12 max-w-11/12 mx-auto text-center text-secondary">
          {/* 1st card */}
          <div className="group py-3.75 md:px-3.75 px-3 shadow-lg space-y-2.5 flex flex-col items-center cursor-pointer">
            <div className="relative overflow-hidden">
              <Image
                alt="development-logo"
                src={"/assets/wordpress.png"}
                width={340}
                height={243}
                className="w-85 h-60.75 object-cover"
              ></Image>
              <div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#ff4d6d] text-white px-8 py-2.5 rounded-[5px] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            <p className="text-secondary text-left">
              Master WordPress to build professional, high-performing websites
              today
            </p>
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-[#566370] text-md">Albert Fores</p>
              </div>
              <div>
                <p className="font-semibold">$ 150</p>
              </div>
            </div>
            {/* Ratings */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    alt="love handle"
                    src={"/assets/icons/redlove.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">4.8</p>
                </div>
                <div className="flex">
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="text-[#566370]">(1.2k)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">$ 99</p>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="group py-3.75 md:px-3.75 px-3 shadow-lg space-y-2.5 flex flex-col items-center cursor-pointer">
            <div className="relative overflow-hidden">
              <Image
                alt="development-logo"
                src={"/assets/musicCourse.png"}
                width={340}
                height={243}
                className="w-85 h-60.75 object-cover"
              ></Image>
              <div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#ff4d6d] text-white px-8 py-2.5 rounded-[5px] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            <p className="text-secondary text-left">
              Master music theory and production to create hits
            </p>
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-[#566370] text-md">Albert Fores</p>
              </div>
              <div>
                <p className="font-semibold">$ 150</p>
              </div>
            </div>
            {/* Ratings */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    alt="love handle"
                    src={"/assets/icons/redlove.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">4.8</p>
                </div>
                <div className="flex">
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="text-[#566370]">(1.2k)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">$ 99</p>
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="group py-3.75 md:px-3.75 px-3 shadow-lg space-y-2.5 flex flex-col items-center cursor-pointer">
            <div className="relative overflow-hidden">
              <Image
                alt="development-logo"
                src={"/assets/digitalmarketing.png"}
                width={340}
                height={243}
                className="w-85 h-60.75 object-cover"
              ></Image>
              <div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#ff4d6d] text-white px-8 py-2.5 rounded-[5px] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            <p className="text-secondary text-left">
              Master digital marketing to grow brands and sales
            </p>
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-[#566370] text-md">Albert Fores</p>
              </div>
              <div>
                <p className="font-semibold">$ 150</p>
              </div>
            </div>
            {/* Ratings */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    alt="love handle"
                    src={"/assets/icons/redlove.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">4.8</p>
                </div>
                <div className="flex">
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="text-[#566370]">(1.2k)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">$ 99</p>
              </div>
            </div>
          </div>
          {/* 4th card */}
          <div className="group py-3.75 md:px-3.75 px-3 shadow-lg space-y-2.5 flex flex-col items-center cursor-pointer">
            <div className="relative overflow-hidden">
              <Image
                alt="development-logo"
                src={"/assets/php.png"}
                width={340}
                height={243}
                className="w-85 h-60.75 object-cover"
              ></Image>
              <div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#ff4d6d] text-white px-8 py-2.5 rounded-[5px] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            <p className="text-secondary text-left">
              Master PHP to build dynamic, data-driven web applications
            </p>
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-[#566370] text-md">Albert Fores</p>
              </div>
              <div>
                <p className="font-semibold">$ 150</p>
              </div>
            </div>
            {/* Ratings */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    alt="love handle"
                    src={"/assets/icons/redlove.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">4.8</p>
                </div>
                <div className="flex">
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="text-[#566370]">(1.2k)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">$ 99</p>
              </div>
            </div>
          </div>
          {/* 5th card */}
          <div className="group py-3.75 md:px-3.75 px-3 shadow-lg space-y-2.5 flex flex-col items-center cursor-pointer">
            <div className="relative overflow-hidden">
              <Image
                alt="development-logo"
                src={"/assets/seo.png"}
                width={340}
                height={243}
                className="w-85 h-60.75 object-cover"
              ></Image>
              <div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#ff4d6d] text-white px-8 py-2.5 rounded-[5px] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            <p className="text-secondary text-left">
              Master SEO to rank higher and drive traffic
            </p>
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-[#566370] text-md">Albert Fores</p>
              </div>
              <div>
                <p className="font-semibold">$ 150</p>
              </div>
            </div>
            {/* Ratings */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    alt="love handle"
                    src={"/assets/icons/redlove.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">4.8</p>
                </div>
                <div className="flex">
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="text-[#566370]">(1.2k)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">$ 99</p>
              </div>
            </div>
          </div>
          {/* 6th card */}
          <div className="group py-3.75 md:px-3.75 px-3 shadow-lg space-y-2.5 flex flex-col items-center cursor-pointer">
            <div className="relative overflow-hidden">
              <Image
                alt="development-logo"
                src={"/assets/html.png"}
                width={340}
                height={243}
                className="w-85 h-60.75 object-cover"
              ></Image>
              <div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#ff4d6d] text-white px-8 py-2.5 rounded-[5px] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
            <p className="text-secondary text-left">
              Master HTML to build well-structured, modern websites today
            </p>
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-[#566370] text-md">Albert Fores</p>
              </div>
              <div>
                <p className="font-semibold">$ 150</p>
              </div>
            </div>
            {/* Ratings */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    alt="love handle"
                    src={"/assets/icons/redlove.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">4.8</p>
                </div>
                <div className="flex">
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                  <Image
                    alt="rating stars"
                    src={"/assets/icons/Star 1.svg"}
                    width={340}
                    height={243}
                    className="w-5 h-5"
                  ></Image>
                </div>
                <div>
                  <p className="text-[#566370]">(1.2k)</p>
                </div>
              </div>
              <div>
                <p className="font-semibold">$ 99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
