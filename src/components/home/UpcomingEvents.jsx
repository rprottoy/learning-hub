import Image from "next/image";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="md:max-w-11/12 max-w-11/12 mx-auto">
      <div>
        <h1 className="font-bold md:text-[120px] text-5xl text-base-300">
          ABOUT EVENTS
        </h1>
      </div>
      <div className="md:max-w-10/12 max-w-11/12 mx-auto md:-mt-20 -mt-15 md:flex flex-none items-center justify-between space-y-3 md:space-y-0">
        <h4 className="md:text-[32px] text-2xl font-medium text-secondary">
          Upcoming Events
        </h4>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 md:max-w-10/12 max-w-11/12 mx-auto text-center text-secondary">
        <div>
          <Image
            src={"/assets/event 01.png"}
            alt="1st upcoming event photo"
            width={540}
            height={360}
          ></Image>
        </div>
        <div>
          <Image
            src={"/assets/event 02.png"}
            alt="1st upcoming event photo"
            width={540}
            height={360}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
