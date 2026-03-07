import React from "react";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="list-none">
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li className="list-none">
        <NavLink href={"/courses"}>Courses</NavLink>
      </li>
      <li className="list-none">
        <NavLink href={"/events"}>Events</NavLink>
      </li>
      <li className="list-none">
        <NavLink href={"/instructors"}>Instructors</NavLink>
      </li>
      <li className="list-none">
        <NavLink href={"/blogs"}>Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 ">
        <div className="md:max-w-9/12 max-w-11/12 mx-auto flex items-center justify-between">
          {/* dropdown */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <div className="cursor-pointer">
            {/* Logo */}
            <div className="py-5">
              <Logo></Logo>
            </div>
          </div>
          {/* Navlinks */}
          <div className="md:flex md:gap-8.25 hidden">{navLinks}</div>

          <div>
            <div className="flex items-center gap-7.5">
              {/* cart, bell */}
              <div className="flex  items-center">
                <div>
                  <Link href={"/love"}>
                    <Image
                      src={"/assets/icons/love.svg"}
                      alt="Love-handle"
                      width={20}
                      height={14}
                    ></Image>
                  </Link>
                </div>
                <div className="md:mx-7.5 mx-4">
                  <Link href={"/cart"}>
                    <Image
                      src={"/assets/icons/cart.svg"}
                      alt="cart"
                      width={20}
                      height={14}
                    ></Image>
                  </Link>
                </div>
                <div>
                  <Link href={"/bell"}>
                    <Image
                      src={"/assets/icons/bell.svg"}
                      alt="notification"
                      width={20}
                      height={14}
                    ></Image>
                  </Link>
                </div>
              </div>
              {/* Button */}
              <div>
                <Link href={"/login"}>
                  <button className=" bg-primary px-7 py-2.5 rounded-[5px] text-white font-semibold transition hover:bg-opacity-90">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
