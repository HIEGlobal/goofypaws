import React from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

const VideoDesc = () => {
  return (
    <div className="flex gap-4 items-center justify-center text-[#FFFFFF] absolute z-10 top-[10px] left-0 px-5 xl:w-[310px] xl:text-[14px] text-[12px]">
      <MdOutlinePlayCircle className="xl:h-[54px] h-[40px] xl:w-[54px] w-[40px]" />
      <h3>
        tempor incididunt ut labore et <br /> dolore magna aliq.
      </h3>
    </div>
  );
};

export default VideoDesc;
