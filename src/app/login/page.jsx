import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className="max-w-11/12 mx-auto rounded-[15px] flex min-h-screen">
      <div className="flex-1">
        <div className="flex items-center justify-center bg-gray-100 p-8 rounded-l-[15px]">
          <div className="bg-white shadow-lg p-10 w-full max-w-md space-y-6">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-black">
              Welcome Back!
            </h1>
            <p>
              Sign in to access more resources and continue your learning
              journey with us.
            </p>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white text-secondary rounded-[5px] py-2 pl-10 pr-20 w-full border-2 border-gray-300  focus:outline-linear-to-r from-[#031529] to-[#1b557a]"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="bg-white text-secondary rounded-[5px] py-2 pl-10 pr-20 w-full border-2 border-gray-300  focus:outline-linear-to-r from-[#031529] to-[#1b557a]"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button className="bg-primary mt-2 px-7 py-2.5 rounded-[5px] text-white w-full font-semibold transition hover:bg-opacity-90">
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-sm text-gray-500">OR</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Google Signin */}
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-[5px] hover:bg-gray-100 transition">
              <FcGoogle size={20} />
              Sign in with Google
            </button>

            {/* Register Link */}
            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-primary hover:underline font-bold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="flex-1 relative overflow-hidden bg-[#031529] px-20 py-48 text-white rounded-r-[15px] text-left hidden md:block">
        <div className="absolute -top-20 -right-10 h-80 w-80 rounded-full bg-[#1b557a] opacity-50 blur-[80px]" />

        <div className="relative z-40">
          <h2 className="text-4xl font-bold">
            Do Not Stop Learning. Anywhere and Everywhere
          </h2>
          <p className="mt-4 opacity-80">
            Over 1500 people already fulfill their needs by learning from our
            expertise. Join us and start learning with us. We are here to help
            you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
