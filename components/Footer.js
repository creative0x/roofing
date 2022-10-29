import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className=" border-t-8 border-[#ffa600] flex font-karla bg-[#111] text-[white] px-4 md:px-10 py-8 w-full items-center justify-around text-center ">
      <div className="hidden md:flex md:flex-col space-y-2">
        <h3 className="text-lg md:text-2xl font-bold text-center">
          Quick Links
        </h3>
        <p className="font-medium  md:text-lg">Home</p>
        <p className="font-medium md:text-lg">About Us</p>
        <p className="font-medium md:text-lg">Careers</p>
      </div>
      <div className="hidden md:flex md:flex-col space-y-2">
        <h3 className="text-lg md:text-2xl font-bold text-center">
          Our Services
        </h3>
        <p className="font-medium md:text-lg">Repairs</p>
        <p className="font-medium md:text-lg">Installation</p>
        <p className="font-medium md:text-lg">Maintenance</p>
      </div>
      <div className="space-y-2 md:space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-center">
          Let Us Complete Your Dream Home!
        </h3>
        <button className="px-10 py-1 bg-white font-bold text-black transition duration-200 ease-in-out hover:scale-110">
          Contact Us
        </button>
      </div>
      <div className="flex text-3xl space-x-2  md:space-x-3 md:text-4xl text-black">
        <FaFacebookF className="bg-[white] px-2 py-2 rounded-md transition duration-200 ease-in-out hover:scale-110 cursor-pointer" />
        <FaTiktok className="bg-[white] px-2 py-2 rounded-md transition duration-200 ease-in-out hover:scale-110 cursor-pointer" />
        <RiInstagramFill className="bg-[white] px-2 py-2 rounded-md transition duration-200 ease-in-out hover:scale-110 cursor-pointer" />
      </div>
    </div>
  );
}
