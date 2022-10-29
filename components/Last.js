import Image from "next/image";
import React from "react";

export default function Last() {
  return (
    <div className="relative ">
      <div className=" z-20">
        <img
          src="https://images.unsplash.com/photo-1628744448838-c04e09b1ba03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
          className="h-[700px] w-full object-cover absolute"
        />
      </div>

      <div className="absolute h-[700px] w-full  bg-gradient-to-b from-[#ffa600]  to-transparent opacity-70 "></div>

      <div className="flex flex-col items-center justify-center h-[700px] ">
        <div className=" flex flex-col items-center justify-center z-10  w-[350px] h-[300px] md:w-[700px] md:h-[500px] rounded-2xl h text-center border-2 md:border-4 bg-black/70 text-white border-white px-4 md:px-16">
          <h3 className="font-karla text-xl md:text-3xl font-bold tracking-widest ">
            SIMPLICITY AND FUNCTIONALITY
          </h3>
          <hr />
          <p className=" my-3 md:my-10 font-medium font-karla text-sm md:text-xl tracking-wide md:leading-10">
            Lone Star Roofing can take your dream and create a home that is
            welcoming, comfortable and the epitome of luxury living. With our
            extensive knowledge of style and function, we will make your home a
            work of art.
          </p>
          <div className="flex items-center justify-center md:justify-between w-[400px]">
            <div className="w-[100px] md:w-[150px]">
              <Image
                src="/assets/logo.png"
                alt=""
                layout="responsive"
                width={150}
                height={100}
              />
            </div>
            <h1 className="font-semibold  text-xl md:text-2xl tracking-wider">
              Lone Star Roofing
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
