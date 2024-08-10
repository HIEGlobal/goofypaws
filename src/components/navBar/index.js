"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {} from "@heroicons/react/20/solid";
import Button from "../button";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    window.scrollTo({ top: 5150, behavior: "smooth" });
  };
  const handleContactClickMobile = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 6900, behavior: "smooth" });
  };

  return (
    <header className="lg:my-[60px] my-[20px]">
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between p-6  bg-[#F7F6F9] rounded-[60px]"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5 text-[#703EDB] font-bold text-2xl"
          >
            GOOFY PAWS
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            text="Contact Us"
            padding="px-4 py-2"
            onClick={handleContactClick}
          />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[white] px-6 py-6 lg:max-w-sm lg:ring-1 lg:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="-m-1.5 p-1.5 text-[#703EDB] font-bold text-2xl"
            >
              GOOFY PAWS
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root text-left">
            <button
              className="text-[28px] cursor-pointer"
              onClick={handleContactClickMobile}
            >
              Contact Us
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
export default NavBar;
