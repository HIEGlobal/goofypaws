import Image from "next/image";
import React from "react";

const Product = ({ imgSrc, bgColor, desc }) => {
  return (
    <div className="my-20 sm:my-0">
      <div
        className="h-[300px] sm:h-[160px] lg:h-[222px] xl:h-[300px] flex flex-col justify-end rounded-[32px]"
        style={{
          background: bgColor,
        }}
      >
        <Image src={imgSrc} alt={desc} />
      </div>
      <h2 className="text-[28px] sm:text-[20px] lg:text-[28px] font-medium text-center">
        {desc}
      </h2>
    </div>
  );
};

export default Product;
