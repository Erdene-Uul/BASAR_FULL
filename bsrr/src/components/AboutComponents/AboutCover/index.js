import React from "react";
import AboutTitle from "../AboutCoverTitle";
import AboutBasar from "../../../assets/images/about_basar.png";
import AboutAnswet from "../../../assets/images/about_answer.png";

const AboutCover = () => {
  return (
    <div className=" w-full flex md:h-45 sm:rounded-b-aboutRadius md:rounded-b-[20%] rounded-b-[50px] bg-OrangeMain relative overflow-hidden ">
      <div className="max-w-7xl mx-auto flex justify-between p-20">
        <AboutTitle />
        <div className="lg:ml-120">
          <div className="flex items-end   w-96  absolute">
            <img
              className="xl:h-80 md:h-56 sm:h-44 h-28 lg:ml-14 lg:mt-8 ml-28 sm:ml-56 md:ml-96 md:mt-64 sm:mt-20  mt-34"
              src={AboutAnswet}
              alt="answer"
            />
          </div>
          <div className="flex items-end md:mt-80 lg:mt-32 sm:mt-42 mt-44 w-full">
            <img
              className="xl:h-120 md:h-80 h-44 ml-34 md:ml-112 lg:ml-32 sm:ml-72"
              src={AboutBasar}
              alt="basar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCover;
