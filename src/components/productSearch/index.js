import React from "react";
import Tabs from "../tabs";

const ProductSearch = () => {
  return (
    <>
      <div className="xl:my-0 sm:my-20 my-5 text-left xl:hidden block">
        <h2 className="xl:text-[120px] text-[42px] font-semibold xl:tracking-tighter tracking-normal xl:leading-[120px] leading-[42px] xl:mb-2 text-center xl:text-left">
          TOP CATEGORIES AND PRODUCTS
        </h2>
        <div className="flex xl:flex-row flex-col xl:gap-12 items-center">
          <p className="text-[18px] xl:leading-[28.8px] leading-[22px] tracking-[-0.5%] font-medium  text-[#8A8A8E] xl:w-[580px] text-center xl:text-left mt-5 xl:mt-0 mb-8">
            Discover premium pet products at Goofy Paws. Our high-quality items
            range from stylish accessories to durable toys. Browse our top
            categories to keep your furry friends happy and healthy.
          </p>
        </div>
        {/* <Tabs /> */}
      </div>
      <div className="xl:my-0 my-5 text-left xl:block hidden">
        <h2 className="xl:text-[110px] text-[42px] font-semibold tracking-tighter xl:leading-[120px] leading-[42px] xl:mb-2 text-center xl:text-left">
          TOP CATEGORIES AND
        </h2>
        <div className="flex xl:flex-row flex-col xl:gap-12 items-center">
          <h2 className="xl:text-[110px] text-[42px] font-semibold tracking-tighter xl:leading-[120px] leading-[42px] xl:mb-2">
            PRODUCTS
          </h2>
          <p className="text-[18px] xl:leading-[28.8px] leading-[22px] tracking-[-0.5%] font-medium  text-[#8A8A8E] xl:w-[580px] text-center xl:text-left mt-5 xl:mt-0">
            Discover premium pet products at Goofy Paws. Our high-quality items
            range from stylish accessories to durable toys. Browse our top
            categories to keep your furry friends happy and healthy.
          </p>
        </div>
        {/* <Tabs /> */}
      </div>
    </>
  );
};

export default ProductSearch;
