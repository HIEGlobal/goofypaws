import React from "react";
import shibainudog from "../../../public/assets/shibainudog.png";
import shibainudog1 from "../../../public/assets/shibainudog1.png";
import pugdog from "../../../public/assets/pugdog.png";
import cartoondog from "../../../public/assets/cartoondog.png";
import IconsContainer from "../iconsContainer";
const HeroContent = () => {
  return (
    <div className="xl:border-y-[2px] border-[#1c1c1e3f] xl:grid flex xl:grid-cols-[2fr,6fr,2fr] flex-col xl:place-items-center xl:mt-[60px] my-5">
      <div className="xl:py-0 py-5 flex items-center justify-center">
        <div className="flex items-center gap-2 p-[10px] border-[1px] border-[#1c1c1e20] rounded-full justify-center">
          <div>
            <h2 className="text-[18px] font-medium">Explore Now &#124;</h2>
          </div>
          <IconsContainer
            width="42px"
            height="42px"
            bgColor="#FFEDD7"
            image={shibainudog}
            padding="p-[2px]"
          />
        </div>
      </div>
      <div
        className="text-center xl:py-[40px] py-[20px] xl:px-[40px] xl:text-[22px] text-[18px] font-semibold
      xl:font-normal border-[#1c1c1e3f] xl:border-x-[2px]"
      >
        <p>
          At Goofy Paws, we know your pets aren’t just animals. They’re family. That’s why we’re passionate about creating high-quality, stylish, and practical products that make every moment with your furry friend even more joyful and meaningful.
        </p>
      </div>
      <div className="py-5">
        <div className="delivered-imgs flex items-center justify-center">
          <div className="overflow-hidden rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-[#fff]">
            <IconsContainer
              image={shibainudog1}
              padding="pt-[6.4px]"
              width="74px"
              height="68px"
            />
          </div>
          <div className="overflow-hidden rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-[#fff]">
            <IconsContainer
              image={pugdog}
              padding="pt-[6.4px]"
              width="74px"
              height="68px"
            />
          </div>
          <div className="overflow-hidden rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-[#fff]">
            <IconsContainer
              image={cartoondog}
              padding="pt-[6.4px]"
              width="74px"
              height="68px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
