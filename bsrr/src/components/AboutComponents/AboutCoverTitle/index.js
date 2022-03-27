import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const AboutTitle = () => {
  return (
    <div className=" absolute lg:mt-34 md:mt-24 sm:mt-20 mt-10 text-AboutTitle ">
      <h1 className="font-Roboto md:text-3xl text-lg font-semibold pb-4">
        <span className="block text-btnOrange ">Амьтанд хайртай</span> Бүх
        хүмүүст зориулав
      </h1>
      <p className=" w-120 lg:font-medium font-normal  md:text-xl text-sm text-gray-800 md:block hidden leading-8">
        <span className=" font-light ">БАСАР</span>{" "}
        <span>
          бол МУ-д амьдарч байгаа гэрийн тэжээрвэр амьтдын нэгээхэн төлөөл юм.
        </span>
        <span className="block">
          Тэрээр амьтанд хайртай амьтан тэжээдэг бүх хүмүүстэй үнэнч байх найз
          нь байх хүсэлтэй.
        </span>
      </p>
      <div className="flex md:mt-6">
        <button className="bg-btnOrange text-white duration-500 md:px-4 md:py-2 px-3 mr-2 lg:mr-4 hover:bg-orange-700 rounded-3xl lg:text-sm text-xs font-Roboto ">
          Бидэнтэй нэгдэх
        </button>

        <div className="md:w-11 md:h-11 w-8 h-9 bg-white rounded-full flex justify-center items-center">
          <FontAwesomeIcon
            icon={solid("play")}
            size="1x"
            className="text-blueMain "
          />
        </div>
        <div className=" font-Roboto text-sm ml-4 text-gray-800 md:flex items-center md:visible hidden">
          {" "}
          Танилцуулга үзэх
        </div>
      </div>
    </div>
  );
};

export default AboutTitle;
