import React from "react";

const Button = ({ text, onClick, padding, textSize }) => {
  return (
    <>
      <button
        className={`bg-[#703EDB] xl:px-6 xl:py-3 text-[#ffffff] xl:text-lg text-[${textSize}] ${padding} rounded-[60px]`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
