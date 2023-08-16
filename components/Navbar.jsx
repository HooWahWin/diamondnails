import React from "react";
import { RiVipDiamondLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="fixed flex justify-between w-full py-5 px-10 bg-stone-100 z-10">
      <div className="flex gap-10 pt-2">
        <a href={"#home"}>
          <RiVipDiamondLine className="text-3xl hover:text-cyan-400 hover:scale-110 duration-300" />
        </a>
        <h1 className="text-lg font-semibold">Diamond Nails & Spa</h1>
      </div>

      <ul className="hidden sm:flex gap-8">
        <a href={"#home"}>
          <li className="border-black border-[1px] p-2 px-4 hover:bg-fuchsia-200 duration-300 hover:scale-105">Home</li>
        </a>
        <a href={"#about"}>
          <li className="border-black border-[1px] p-2 px-4 hover:bg-fuchsia-200 duration-300 hover:scale-105">About</li>
        </a>
        <a href={"#services"}>
          <li className="border-black border-[1px] p-2 px-4 hover:bg-fuchsia-200 duration-300 hover:scale-105">Services</li>
        </a>
        <a href={"#contact"}>
          <li className="border-black border-[1px] p-2 px-4 hover:bg-fuchsia-200 duration-300 hover:scale-105">Contact us</li>
        </a>
      </ul>
      <GiHamburgerMenu className="sm:hidden text-3xl mt-3" />
    </div>
  );
}

export default Navbar;
