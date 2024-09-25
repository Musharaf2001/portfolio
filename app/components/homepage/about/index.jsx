// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#c89147] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#c89147]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
        <div className="order-2 lg:order-1">
          <p className="font-large mb-5 text-[#f8ad22] text-4xl uppercase font-bold text-stroke-1">
            Who I am?
          </p>
          <p className="text-[#fff]  text-sm lg:text-lg text-stroke-1">
            {personalData.description}
          </p>
        </div>
        <div className="relative flex justify-center order-1 lg:order-2">
          <div className="absolute inset-20 h-[400px] rounded-lg blur-xl bg-[#f8ad22] opacity-75"></div>
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt="Musharaf"
              className="relative rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;