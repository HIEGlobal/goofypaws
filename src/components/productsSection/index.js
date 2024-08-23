import React from "react";
import feder from "../../../public/assets/feder.png";
import dogbed from "../../../public/assets/dogbed.png";
import cannister from "../../../public/assets/cannister.png";
import Product from "../productBackground";

const products = [
  {
    img: feder,
    desc: "FEDER",
    bgColor: "#FFF1E2",
  },
  {
    img: dogbed,
    desc: "DOG BED",
    bgColor: "#EAF2FF",
  },
  {
    img: cannister,
    desc: "CANNISTER",
    bgColor: "#E3E2E0",
  },
];

const ProductSection = () => {
  return (
    <div className="flex sm:flex-row flex-col items-end justify-center sm:gap-6 sm:mb-[60px] sm:my-[150px]">
      {products.map((product, index) => (
        <Product
          key={index}
          bgColor={product.bgColor}
          imgSrc={product.img}
          desc={product.desc}
        />
      ))}
    </div>
  );
};

export default ProductSection;
