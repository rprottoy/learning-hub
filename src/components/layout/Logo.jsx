import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/assets/Logo.png"}
          alt="learning-hub-logo"
          width={200}
          height={40}
          className="md:w-47.5 md:h-12 w-[107.49px] h-7.5"
        />
      </Link>
    </div>
  );
};

export default Logo;
