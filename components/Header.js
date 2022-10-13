import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-[2] text-white flex justify-between mt-10 px-10">
      <div className="flex items-center space-x-6">
        <Image
          src="https://rentmcpherson.com/wp-content/uploads/2014/07/slide-2-houses.png"
          alt=""
          width="100px"
          height="50px"
          className="drop-shadow-lg"
        />
        <h2 className="text-lg font-bold drop-shadow-lg">LoneStar Roofing</h2>
      </div>

      <ul className="flex items-center space-x-14 text-base font-[500] cursor-pointer drop-shadow-lg">
        <li>About us</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Careers</li>
        <li>Contact us</li>
      </ul>
    </header>
  );
}
