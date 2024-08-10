import React from "react";
import dogsleeping from "../../../public/assets/dogsleeping.png";
import cat from "../../../public/assets/cat.png";
import Image from "next/image";
import Button from "../button";
import { CiCircleChevRight } from "react-icons/ci";

const About = () => {
  return (
    <>
      <div className="lg:my-40 flex sm:hidden xl:flex justify-between lg:flex-row flex-col lg:gap-32">
        <div className="left flex flex-col justify-between lg:gap-8 gap-0">
          <div className="text-left">
            <h2 className="lg:text-[100px] text-[50px] font-semibold lg:leading-[120px] leading-none lg:tracking-[2px] tracking-normal lg:my-0 my-5 text-center">
              ABOUT US
            </h2>
          </div>

          <div className="lg:bg-[#FFEDD7] bg-[white] lg:w-[600px] rounded-[32px] flex gap-2 lg:h-[809px] h-[300px] lg:justify-center md:hidden lg:flex ">
            <Image alt="dogsleeping" src={dogsleeping} />
          </div>
        </div>

        <div className="right flex flex-col justify-between">
          <Image src={cat} alt="cat" className="rounded-[32px]  my-5 lg:mb-0" />

          <div className="gap-4 lg:my-0 my-5">
            <h2 className="font-semibold lg:text-[55px] lg:leading-[55px] leading-[42px] text-[42px] my-5 xl:text-left text-center">
              YOUR PET’S FAVORITE BUDDY
            </h2>

            <div className="my-5 lg:my-0">
              <h2 className="text-[18px] text-[#8A8A8E] lg:leading-[28.8px] leading-[22px] -tracking-[0.5%] lg:text-left text-center my-5 lg:my-0">
                Goofy Paws is a part of the HIE Global Inc. Group, a company
                established in 2009 and headquartered in Phoenix, Arizona, USA.
                Our core specialty is our exclusive line of pet products,
                designed to bring joy and comfort to your furry companions.
              </h2>
              <div className="flex items-center gap-6 lg:mt-5 lg:mb-0 my-5 lg:justify-normal justify-center">
                <Button text="Shop Now" padding="px-4 py-2" />
                <CiCircleChevRight className="text-[#703EDB] lg:text-[50px] text-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex hidden xl:hidden justify-between md:flex-row flex-col lg:gap-32">
        <div className="left flex flex-col justify-between lg:gap-8 gap-0">
          <div className="text-left">
            <h2 className="lg:text-[100px] text-[50px] font-semibold lg:leading-[120px] leading-none lg:tracking-[2px] tracking-normal lg:my-0 my-5 text-center">
              ABOUT US
            </h2>
          </div>
          <div className="xl:bg-[#FFEDD7] lg:bg-[white] rounded-[32px] flex gap-20  lg:justify-center py-20">
            <Image alt="dogsleeping" src={dogsleeping} />
            <Image src={cat} alt="cat" className="rounded-2xl" />
          </div>
          <div className="right flex flex-col justify-between">
            <div className="gap-4 lg:my-0 my-5">
              <h2 className="font-semibold lg:text-[50px] lg:leading-[55px] leading-[42px] text-[42px] my-5 xl:text-left text-center">
                YOUR PET’S FAVORITE BUDDY
              </h2>

              <div className="my-5 lg:my-0">
                <h2 className="text-[18px] text-[#8A8A8E] lg:leading-[28.8px] leading-[22px] -tracking-[0.5%] lg:text-left text-center my-5 lg:my-0">
                  Goofy Paws is a part of the HIE Global Inc. Group, a company
                  established in 2009 and headquartered in Phoenix, Arizona,
                  USA. Our core specialty is our exclusive line of pet products,
                  designed to bring joy and comfort to your furry companions.
                </h2>
                <div className="flex items-center gap-6 lg:mt-5 lg:mb-0 my-5 lg:justify-normal justify-center">
                  <Button text="Shop Now" padding="px-4 py-2" />
                  <CiCircleChevRight className="text-[#703EDB] lg:text-[50px] text-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
