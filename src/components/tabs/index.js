"use client";

import React, { useState } from "react";
import shibainudog2 from "../../../public/assets/shibainudog2.png";
import cat1 from "../../../public/assets/cat1.png";
import human from "../../../public/assets/human.png";
import Image from "next/image";

const productButton = [
  {
    text: "FOR YOUR DOG",
    img: shibainudog2,
  },
  {
    text: "FOR YOUR CAT",
    img: cat1,
  },
  {
    text: "FOR YOU",
    img: human,
  },
];

const Tabs = () => {
  const [currentselected, setcurrentselected] = useState(0);

  const handleClick = (index) => {
    setcurrentselected(index);
  };
  return (
    <>
      <div className="flex items-center justify-center xl:gap-10 gap-2 font-medium text-base xl:leading-[32px] xl:tracking-[0.75px] text-center cursor-pointer xl:mt-20 my-10 scrollbar-hidden transition duration-300 ease-out sm:mb-20 lg:mb-24 xl:my-48">
        {productButton.map((item, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            currentselected={index}
            className={`xl:px-6 px-2 xl:py-4 py-1 rounded-full text-black text-[18px] transition duration-300 ease-in-out
              ${
                currentselected === index
                  ? "bg-[#7e46f751] border-2 border-[#610BEF]"
                  : "bg-[#fff] border-2 border-[#fff]"
              }`}
          >
            <div className="flex items-center xl:justify-center xl:gap-3 text-[12px] font-medium leading-3 xl:text-lg xl:leading-normal">
              <Image src={item.img} alt={item.text} />
              {item.text}
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
