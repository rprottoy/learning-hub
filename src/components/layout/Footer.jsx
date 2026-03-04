import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#142537] text-white mt-30">
      <div className="md:max-w-9/12 max-w-11/12 mx-auto pt-15 py-5">
        <div className="md:flex  justify-between">
          {/* logo */}
          <div className="mb-8 md:mb-0">
            <Link href={"/"}>
              <Image
                src={"/assets/LogoWhite.png"}
                alt="learning-hub-logo"
                width={200}
                height={40}
                className="md:w-47.5 md:h-12 w-[107.49px] h-7.5"
              />
            </Link>
          </div>
          {/* Search */}
          <div>
            <div className="md:flex items-center gap-5">
              <div className="mb-5 md:mb-0">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="bg-white text-black rounded-[5px] py-2 pl-10 pr-10"
                />
              </div>
              <div>
                <button className=" bg-primary  px-7 py-2.5 rounded-[5px] text-white">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <p className="mt-5 mb-8 md:mb-0">
                Subscribe to get the most latest course drop news and offers.
              </p>
            </div>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-[23.8px]">
            <div>
              <Link href={"https://www.facebook.com/"}>
                <Image
                  src={"/assets/Facebook.svg"}
                  alt="learning-hub-logo"
                  width={24}
                  height={24}
                  className="md:w-9"
                />
              </Link>
            </div>

            <div>
              <Link href={"https://www.linkedin.com/"}>
                <Image
                  src={"/assets/Linkedin.svg"}
                  alt="Linkedin-logo"
                  width={24}
                  height={24}
                  className="md:w-9"
                />
              </Link>
            </div>

            <div>
              <Link href={"https://www.youtube.com/"}>
                <Image
                  src={"/assets/Youtube.svg"}
                  alt="Youtube-logo"
                  width={24}
                  height={24}
                  className="md:w-9"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-13.25 md:flex items-center justify-between">
          <div>
            <p className="mb-10 md:mb-0">
              Copyright © {new Date().getFullYear()} - All right reserved by
              Learning Hub
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <Link href={"/terms"}>Terms & Conditions</Link>
              </li>
              <li>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
