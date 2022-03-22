import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const AboutTitle = () => {
  return (
    <div className=" absolute md:mt-52 mt-36 text-AboutTitle ">
      <h1 className="font-Roboto md:text-3xl text-2xl font-semibold pb-4">
        <span className="block text-btnOrange ">Амьтанд хайртай</span> Бүх
        хүмүүст зориулав
      </h1>
      <p className=" w-120 font-medium text-xl text-gray-800 lg:block lg:visible hidden leading-8">
        <span className=" font-normal ">БАСАР</span> <span>бол МУ-д амьдарч байгаа
        гэрийн тэжээрвэр амьтдын нэгээхэн төлөөл юм.</span> 
        <span className="block">
          Тэрээр амьтанд хайртай амьтан тэжээдэг бүх хүмүүстэй үнэнч байх найз
          эь байх хүсэлтэй.
        </span>
      </p>
      <div className="flex mt-6 m-auto">
        <button className="bg-btnOrange text-white duration-500 px-4 py-2 mr-4 hover:bg-orange-700 rounded-3xl text-sm font-Roboto ">
          Бидэнтэй нэгдэх
        </button>

        <div className="w-11 h-11 bg-white rounded-full flex justify-center items-center">
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
