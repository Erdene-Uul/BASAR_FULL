import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const AboutTitle = () => {
  return (
    <div className=" absolute md:mt-52 mt-36 text-AboutTitle md:ml-20 ml-8">
      <h1 className=" font-Roboto md:text-3xl text-lg font-medium pb-4 leading-snug">
        <span className="block text-btnOrange">Амьтанд хайртай</span> Бүх
        хүмүүст зориулав
      </h1>
      <p className=" w-96 font-thin text-sm text-gray-800 lg:block lg:visible hidden ">
        <span className=" font-normal ">БАСАР</span> <span>бол МУ-д амьдарч байгаа
        гэрийн тэжээрвэр амьтдын нэгээхэн төлөөл юм.</span> 
        <span className="block">
          Тэрээр амьтанд хайртай амьтан тэжээдэг бүх хүмүүстэй үнэнч байх найз
          эь байх хүсэлтэй.
        </span>
      </p>
      <div className="flex mt-6 m-auto">
        <button className="bg-btnOrange text-white duration-500 px-4 py-2 mr-4 hover:bg-orange-700 rounded-3xl text-xs font-Roboto ">
          Бидэнтэй нэгдэх
        </button>

        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
          <FontAwesomeIcon
            icon={solid("play")}
            size="1x"
            className="text-blueMain "
          />
        </div>
        <div className=" font-Roboto text-xs ml-4 text-gray-800 md:flex items-center md:visible hidden">
          {" "}
          Танилцуулга үзэх
        </div>
      </div>
    </div>
  );
};

export default AboutTitle;
