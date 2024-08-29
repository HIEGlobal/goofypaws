import React from "react";
import feder from "../../../public/assets/feder.png";
import dogbed from "../../../public/assets/dogbed.png";
import cannister from "../../../public/assets/cannister.png";
import Product from "../productBackground";
import dogtoy from "../../../public/assets/dogtoy.png"

const products = [
  {
    img: feder,
    desc: "Feeding Bowls & Bowl Stands",
    bgColor: "#FFF1E2",
  },
  {
    img: dogbed,
    desc: "Dog Pet Beds",
    bgColor: "#EAF2FF",
  },
  {
    img: cannister,
    desc: "Treat Cannisters",
    bgColor: "#E3E2E0",
  },
  {
    img: dogtoy,
    desc: "Pet toys",
    bgColor: "#FFD1DC",
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
