import Image from "next/image";

import { getCourses } from "../lib/actions/courses.actions";
import Link from "next/link";

const page = async () => {
  const courses = await getCourses();

  // console.log(courses);
  return (
    <div className="">
      <div className="md:max-w-11/12 max-w-11/12 mx-auto bg-linear-to-r from-[#031529] via-[#0b2d4d] to-[#1b557a] rounded-[15px]">
        <h1 className="font-bold md:text-[120px] text-5xl text-white/5 py-8.75 md:max-w-10/12 max-w-11/12 mx-auto">
          COURSES
        </h1>
      </div>
      <div className="space-y-3.75 pt-20 flex flex-col justify-center items-center">
        <h3 className="md:text-[32px] text-[16px] font-medium">
          Find Your Course...!
        </h3>
        <div className="flex items-center">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-base-300 text-secondary rounded-[5px] py-2 pl-10 pr-20 "
          />
          <button className="bg-primary text-white rounded-[5px] px-7 py-2 -ml-20">
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

      {/* Course Categories */}
      <div className="md:max-w-11/12 max-w-11/12 mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10 md:max-w-10/12 max-w-11/12 mx-auto text-center text-secondary">
          {/* 1st card */}
          {courses.map((course, i) => (
            <div
              key={i}
              className="group py-3.75 md:px-3.75 px-3 shadow-lg space-y-2.5 flex flex-col items-center cursor-pointer"
            >
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
                    <Link
                      href={`/courses/${course._id}`}
                      className="bg-[#ff4d6d] text-white px-8 py-2.5 rounded-[5px] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-secondary text-center">{course.title}</p>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-[#566370] text-md">
                    {course.instructor_name}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">$ {course.price}</p>
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
                    <p className="font-semibold">{course.ratings}</p>
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
                    <p className="text-[#566370]">({course.rating_counts})</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">$ 99</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
