import React from "react";
import AboutTitle from "../AboutCoverTitle";
import AboutBasar from "../../../assets/images/about_basar.png";
import AboutAnswet from "../../../assets/images/about_answer.png";
const AboutCover = () => {
  return (
    <div className=" w-full flex md:h-45 h-96 m-auto rounded-b-aboutRadius bg-OrangeMain relative overflow-hidden ">
      <AboutTitle />
      <div className=" flex justify-end w-full h-120  absolute">
        <img
          className="lg:h-80 md:h-64 sm:h-44 h-28 xl:mr-80 lg:mr-64 md:mr-44 sm:mr-24 mr-20  md:mt-36 mt-20"
          src={AboutAnswet}
        />
      </div>
      <div className="flex justify-end md:mt-64 mt-44 w-full h-96 ">
        <img
          className="lg:h-120 md:h-96 h-44 2xl:mr-24 sm:-mt-0 -mt-10"
          src={AboutBasar}
        />
      </div>
    </div>
  );
};

export default AboutCover;
