import React from "react";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";

export default function Header() {
  return (
    <header className="absolute flex items-center justify-between w-full px-4 md:px-12 text-white text-md  py-5 md:py-10">
      <div className="flex items-center space-x-1 md:space-x-4">
        <Image
          src="/assets/logo.png"
          alt=""
          width={75}
          height={60}
          className="drop-shadow-lg"
        />
        <h2 className="font-semibold text-lg  md:text-2xl">
          Lone Star Roofing
        </h2>
      </div>

      <div>
        <CgMenu className="text-[#ffa600] text-3xl md:hidden" />
        <ul className="hidden md:flex items-center md:space-x-10 font-semibold">
          <li>About </li>
          <li>Services</li>
          <li>Projects</li>
          <li>Careers</li>
          <li>Contact us</li>
        </ul>
      </div>
    </header>
  );
}
