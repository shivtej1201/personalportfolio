"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import HomePage_Img from "../../image/HomePage_Img.jpeg";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { HoverBorderGradient } from "../ui/hover-border-gradient";


const words = `Software Developer @ Bajaj Technology Services | MCS Graduate | React.js | Node.js | SQL | Express.js | MongoDB | AEM | Figma |`;

export function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center pt-40">
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          Hey 👋 , I'm Shivtej Sonawane <br />
          <span className="text-4xl md:text-[3rem] font-bold mt-1 leading-none">
            Software Developer
          </span>
        </h1>
      </div>
      <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ContainerScroll>
          <Image
            src={HomePage_Img}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        <div className=" flex flex-col items-start gap-8 p-4">
          <div>
            <TextGenerateEffect words={words} />
          </div>
          <div className="">
            <button
              type="submit"
              className="flex flex-row gap-2 mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:bg-black hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Resume
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
