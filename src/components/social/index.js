import Image from "next/image";
import React from "react";
import video1 from "../../../public/assets/video-1.png";
import video2 from "../../../public/assets/video-2.png";
import video3 from "../../../public/assets/video-3.png";
import video4 from "../../../public/assets/video-4.png";
import video5 from "../../../public/assets/video-5.png";
import VideoDesc from "../videoDesc";
import TextConatiner from "../textContainer";

const videoDataTop = [
  { video: video1, desc: <VideoDesc /> },
  { video: video2, desc: <VideoDesc /> },
  { video: video3, desc: <VideoDesc /> },
];
const videoDataBottom = [
  { video: video4, desc: <VideoDesc /> },
  { video: video5, desc: <VideoDesc /> },
];

const Social = () => {
  return (
    <div className="xl:p-[60px] p-[20px] bg-[#703edb10] xl:mt-[140px] xl:mb-[70px] mb-10 flex flex-col gap-10 rounded-[32px]">
      <TextConatiner
        textHead="OUR SOCIAL IMPACTS"
        textDesc1="At Goofy Paws, we donate 25% of our profit to animal shelters and
          welfare organizations."
        textDesc2="Your purchases help provide food, medical care,
          and homes for animals in need."
      />
      <div className="videoContentTop sm:grid sm:grid-cols-3 grid grid-rows-1 gap-10">
        {videoDataTop.map((video, index) => {
          return (
            <div key={index} className="relative">
              <div className="rounded-[32px] overflow-hidden">
                <Image
                  src={video.video}
                  alt={"video"}
                  className="h-[367px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent rounded-[32px]"></div>
              </div>
              {/* {video.desc} */}
            </div>
          );
        })}
      </div>
      <div className="videoContentTop flex flex-col sm:flex-row gap-10">
        {videoDataBottom.map((video, index) => {
          return (
            <div key={index} className="relative">
              <div className="rounded-[32px] overflow-hidden">
                <Image src={video.video} alt="video" />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent rounded-[32px]"></div>
              </div>
              {/* {video.desc} */}
            </div>
          );
        })}
      </div>
     </div>
  );
};

export default Social;
