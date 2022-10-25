import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative">
      <hr className="border-[4px] border-[#ffa600]" />
      <div className="absolute right-0 w-[45vw] h-screen -z-10">
        <Image
          alt=""
          layout="fill"
          src="https://images.unsplash.com/photo-1518736346281-76873166a64a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          objectFit="cover"
        />
      </div>
      <div className="bg-[orange]/70 absolute right-0 w-[45vw] h-screen"></div>

      <div className="flex items-center h-screen">
        <div className="w-[50vw] px-28 ">
          <h2 className="text-4xl font-karla text-gray-800 tracking-widest font-medium ">
            LUXURY ROOF BUILDS AND RESTORATIONS
          </h2>
          <hr className="w-40 border-2 bg-gray-400 border-gray-400 mt-5 mb-8" />
          <p className="font-karla leading-10 text-xl font-medium">
            Lone Star Roofing has been named one of the most influential roofing
            firms in the country based on our integration of both design and
            build. Our philosophy is to create the most detailed product to
            deliver to our clients. Any builder with a license should be able to
            construct a roof, but the real work is in the finish and we are
            dedicated to delivering the finest, sleekest product to our clients.
          </p>
          <button className="mt-5 bg-[#ffa600] text-lg py-2 px-4 text-[#fff] font-medium tracking-widest">
            See Our Work
          </button>
          <div className="flex items-end flex-col  ">
            <div className="w-[150px]">
              <Image
                src="/assets/logo.png"
                alt=""
                layout="responsive"
                width={150}
                height={100}
              />
            </div>
            <p className="text-3xl font-karla font-semibold text-gray-700">
              Lone Star Roofing
            </p>
          </div>
        </div>
        <div className="w-[50vw] space-y-10">
          <div className="w-[600px] h-[325px] drop-shadow-md shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt=""
              layout="responsive"
              width={600}
              height={325}
              objectFit="cover"
            />
          </div>

          <div className="w-[600px] h-[325px] drop-shadow-md shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt=""
              layout="responsive"
              width={600}
              height={325}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <hr className="border-[4px] border-[#ffa600]" />
    </section>
  );
}
