"use client";

import { useState } from "react";
import Button from "../button";
import navlogo from "../../../public/assets/navlogo.svg";

const NavBar = () => {
  const handleContactClick = () => {
    window.scrollTo({ top: 5150, behavior: "smooth" });
  };

  return (
    <header className="lg:my-[60px] my-[10px]">
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between p-4 bg-[#F7F6F9] rounded-[30px] lg:rounded-[60px]"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5 text-[#703EDB] font-bold text-2xl"
          >
            <img
              src={navlogo.src}
              alt="Goofy Paws Logo"
              className="h-12 w-auto lg:h-16"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            text="Contact Us"
            padding="px-4 py-2"
            onClick={handleContactClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
