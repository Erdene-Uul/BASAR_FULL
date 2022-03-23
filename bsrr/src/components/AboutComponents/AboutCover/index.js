import React from "react";
import AboutTitle from "../AboutCoverTitle";
import AboutBasar from "../../../assets/images/about_basar.png";
import AboutAnswet from "../../../assets/images/about_answer.png";

const AboutCover = () => {
  return (
    <div className=" w-full flex md:h-45 h-96 m-auto rounded-b-aboutRadius bg-OrangeMain relative overflow-hidden ">
     <div className="max-w-7xl mx-auto flex justify-between p-6">
     <AboutTitle />
     <div className="ml-120">
     <div className="flex items-end   w-96  absolute">
        <img
          className="lg:h-80 md:h-64 sm:h-44 h-28  ml-56 md:mt-28 mt-20"
          src={AboutAnswet}
          alt="answer"
        />
      </div>
      <div className="flex items-end md:mt-56 mt-44 w-full">
        <img
          className="lg:h-120 md:h-96 h-44  ml-72"
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
