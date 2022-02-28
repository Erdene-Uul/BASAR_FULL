import React from "react";
import Basar_01 from "../../assets/images/basar_images/уяатай.png";
import Basar_02 from "../../assets/images/basar_images/Бөмбөгтэй.png";

const Section4 = () => {
  return (
    <div className=" lg:flex">
      <div className=" lg:w-1/2 h-96 bg-gradient-to-r from-Zaryellow1 to-Zaryellow2 relative ">
        <h1 className=" text-BigTextColor text-3xl  lg:text-6xl absolute font-medium w-44 ml-24 mt-12">
          ҮРЧИЛГЭЭ & ЗАР
        </h1>
        <img
          src={Basar_01}
          className="h-64 xl:h-80 inline-block ml-64 md:ml-80 xl:ml-120 mt-32 xl:mt-20"
        />
      </div>
      <div className=" w-full lg:w-1/2 h-96 bg-gradient-to-r from-ZarGreen1 to-ZarGreen2 relative">
        <h1 className=" text-3xl lg:text-6xl text-BigTextColor absolute font-medium w-44 ml-24 mt-12">
          ОНЛАЙН ХУДАЛДАА
        </h1>
        <img
          src={Basar_02}
          className="h-64 xl:h-80 inline-block ml-64 md:ml-80 xl:ml-120 mt-32 xl:mt-24 "
        />
      </div>
    </div>
  );
};

export default Section4;
