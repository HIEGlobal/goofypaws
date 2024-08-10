import Image from "next/image";
import React from "react";

const IconsContainer = ({ bgColor, image, width, height, padding }) => {
  return (
    <div
      className={`rounded-full ${
        padding ? padding : "xl:px-2 xl:py-3 p-2 py-3"
      } `}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Image
        src={image}
        alt="bed"
        style={{
          height: height,
          width: width,
        }}
      />
    </div>
  );
};

export default IconsContainer;
