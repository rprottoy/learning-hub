import Image from "next/image";
import React from "react";

const Articles = () => {
  return (
    <div className="md:max-w-9/12 max-w-11/12 mx-auto">
      {/* 1st article */}
      <div className="md:flex items-center mb-14.25">
        <div className="flex-1">
          <h2 className="text-[32px] font-medium mb-9">
            Online & Flexible so You Can Do Them Anytime
          </h2>
          <p className="text-[18px] text-[#566370] text-justify">
            Take control of your future without pausing your life. Our courses
            are designed for the modern learner, offering complete flexibility
            to study whenever and wherever inspiration strikes. Whether you are
            balancing a full-time career or busy family life, our expert-led
            platform allows you to progress at your own pace. Access
            high-quality lessons 24/7 on any device. From mastering WordPress to
            digital marketing and more, your classroom is everywhere. Start
            learning today and transform your skills on your own schedule.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={"/assets/Image 01.png"}
            alt="Women doing course on laptop"
            width={400}
            height={400}
            className="w-178 h-108.75 object-cover"
          ></Image>
        </div>
      </div>
      {/* 2nd article */}
      <div className="md:flex items-center mb-14.25">
        <div className="flex-1">
          <Image
            src={"/assets/Image 02.png"}
            alt="Women doing course on laptop"
            width={400}
            height={400}
            className="w-178 h-108 object-contain hidden md:block"
          ></Image>
        </div>
        <div className="flex-1">
          <h2 className="text-[32px] font-medium mb-9">
            Access your courses anywhere, anytime & prepare with practice tests
          </h2>
          <p className="text-[18px] text-[#566370] text-justify">
            Experience true educational freedom by learning on the go. Our
            mobile-responsive platform ensures your courses are always within
            reach, whether you are commuting or relaxing at home. Beyond video
            lessons, boost your confidence with comprehensive practice tests
            designed to simulate real-world challenges. Track your progress,
            identify your strengths, and master your craft through hands-on
            preparation. With 24/7 access to world-class resources, you have
            everything you need to succeed on your own terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
