"use client";
import React from "react";

import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };
    const result = await postUser(formData);
    if (result.acknowledged) {
      alert("successful. please login");
      router.push("/login");
    }
  };
  return (
    <div>
      <div className="max-w-11/12 mx-auto rounded-[15px] flex min-h-screen">
        <div className="flex-1">
          <div className="flex items-center justify-center bg-gray-100 p-8 rounded-l-[15px]">
            <div className="bg-white shadow-lg p-10 w-full max-w-md space-y-4">
              {/* Title */}
              <h1 className="text-2xl font-bold text-center text-black">
                Create Account
              </h1>
              <p className="text-sm text-center text-gray-600">
                Join our community of 1500+ learners today.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="bg-white text-secondary rounded-[5px] py-2 px-4 w-full border-2 border-gray-300 focus:outline-none focus:border-[#1b557a]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="bg-white text-secondary rounded-[5px] py-2 px-4 w-full border-2 border-gray-300 focus:outline-none focus:border-[#1b557a]"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="bg-white text-secondary rounded-[5px] py-2 px-4 w-full border-2 border-gray-300 focus:outline-none focus:border-[#1b557a]"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    className="bg-white text-secondary rounded-[5px] py-2 px-4 w-full border-2 border-gray-300 focus:outline-none focus:border-[#1b557a]"
                  />
                </div>

                {/* Profile Photo */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Profile Photo
                  </label>
                  <input
                    type="file"
                    className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-[5px] file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-primary hover:file:bg-gray-200 w-full cursor-pointer"
                  />
                </div>

                {/* Register Button */}
                <button className="bg-primary mt-2 px-7 py-2.5 rounded-[5px] text-white w-full font-semibold transition hover:bg-opacity-90">
                  Create Account
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  OR
                </p>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Google Signin */}
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-[5px] hover:bg-gray-100 transition">
                <FcGoogle size={20} />
                Sign up with Google
              </button>

              {/* Login Link */}
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-bold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* 2nd section (Gradient Side) */}
        <div className="flex-1 relative overflow-hidden bg-[#031529] px-20 py-48 text-white rounded-r-[15px] text-left hidden md:block">
          <div className="absolute -top-20 -right-10 h-80 w-80 rounded-full bg-[#1b557a] opacity-50 blur-[80px]" />

          <div className="relative z-40">
            <h2 className="text-4xl font-bold">
              Join the Journey of Endless Learning
            </h2>
            <p className="mt-4 opacity-80 leading-relaxed">
              Over 1500 people are already growing their skills with our
              professional courses. Register today and gain instant access to
              expert-led content and practice tests anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
