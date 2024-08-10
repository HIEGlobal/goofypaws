import React from "react";
import dogfooter from "../../../public/assets/dogfooter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#1C1C1E] relative h-[315px] sm:h-[430px] md:h-[485px] lg:h-[572px]  ">
      <div className="py-[65px] text-center">
        <h3 className="text-[12px]  sm:text-[28px] opacity-60 text-[#FFFFFF]">
          HIE Global Inc. All Rights Reserved
        </h3>
        <h2 className="font-semibold text-[40px] sm:text-[70px] md:text-[90px] lg:text-[130px]  text-[#ffffff] tracking-wider leading-[80px] xl:leading-normal lg:my-[50px] xl:my-0 my-0">
          G
          <span
            className="text-[#1C1C1E]"
            style={{
              WebkitTextStroke: "1px white",
            }}
          >
            O
          </span>
          O
          <span
            className="text-[#1C1C1E]"
            style={{
              WebkitTextStroke: "1px white",
            }}
          >
            F
          </span>
          Y PA
          <span
            className="text-[#1C1C1E]"
            style={{
              WebkitTextStroke: "1px white",
            }}
          >
            W
          </span>
          S
        </h2>
      </div>
      <Image
        src={dogfooter}
        alt="doggy"
        className="absolute xl:bottom-0 bottom-0 translate-x-[-50%] left-[50%]"
      />
    </div>
  );
};

export default Footer;
