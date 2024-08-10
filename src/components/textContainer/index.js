import React from "react";

const TextConatiner = ({ textHead, textDesc1, textDesc2 }) => {
  return (
    <div className="textbox text-center flex flex-col xl:gap-4 gap-6 items-center justify-center mb-6 xl:mb-0">
      <h2 className="font-semibold xl:text-[56px] text-[38px] xl:leading-none leading-[42px] mt-4 xl:mt-0">
        {textHead}
      </h2>
      {/* <div className="text-[#1C1C1E] opacity-[70%] xl:block hidden">
        {textDesc1 && (
          <p
            className={`font-medium text-[18px] leading-[22px] xl:leading-[28px]`}
          >
            {textDesc1}
          </p>
        )}
        {textDesc2 && (
          <p
            className={`font-medium text-[18px] leading-[22px] xl:leading-[28px]`}
          >
            {textDesc2}
          </p>
        )}
      </div> */}
      {/* <div className="text-[#1C1C1E] opacity-[70%] xl:hidden block">
        {(textDesc2 || textDesc1) && (
          <p
            className={`font-medium text-[18px] leading-[22px] xl:leading-[28px]`}
          >
            {textDesc1 + textDesc2}
          </p>
        )}
      </div> */}
    </div>
  );
};

export default TextConatiner;
