import React from "react";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMouse } from "react-icons/bi";
import Head from "next/head";
import Header from "./Header";

export default function Hero() {
  return (
    <section className=" w-full h-screen flex justify-between items-center">
      <div
        dangeriouslySetInnerHTML={{
          __html: (
            <video
              src="../assets/bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover -z-20"
            ></video>
          ),
        }}
      ></div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0  
      bg-gradient-radial from-transparent via-transparent to-black -z-10"
      ></div>
      <div className="absolute text-white z-[3] flex  flex-col justify-center items-center w-full tracking-tight font-bold text-center">
        <h2 className="text-3xl md:text-6xl drop-shadow-lg ">
          The Sun City&apos;s leading
        </h2>
        <h3 className="text-4xl md:text-6xl   text-[#ffa600] drop-shadow-lg">
          roofing experts
        </h3>

        <a href="#">
          <button className="transition duration-200 hover:scale-110 tracking-widest bg-gradient-to-t from-orange-600  via-orange-500 to-orange-400 rounded-full py-2 px-6 md:py-2.5 md:px-8 text-sm mt-10">
            Contact us
          </button>
        </a>
      </div>
      <div className="absolute z-[4] flex items-center justify-between bottom-0 py-5 md:py-10 px-4 drop-shadow-md w-full md:px-12">
        <div className=" text-[#ffa600] font-[500] md:tracking-wide flex items-center space-x-1 md:space-x-4">
          <BsFillTelephoneFill
            size={40}
            className=" border-2 border-[#ffa600] rounded-full p-2"
          />
          <div>
            <p className="text-sm md:text-base ">Get free estimate</p>
            <p className="text-white text-lg md:text-2xl mt-[-5px]">
              (915) 922-0625
            </p>
          </div>
        </div>
        <div className=" text-white flex items-center space-x-1 md:space-x-4">
          <p className="text-lg md:text-xl">Learn more</p>
          <BiMouse
            size={40}
            className=" border-2 border-[#ffa600] rounded-full p-2   text-[#ffa600]"
          />
        </div>
      </div>
    </section>
  );
}
