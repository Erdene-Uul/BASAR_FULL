import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const AboutSectionCard = () => {
  return (
    //   Card
    <div className="wrapper mt-20 ">
      <div className="flex justify-around flex-wrap ">
        <div className="w-56 h-56 mt-12 shadow-lg flex justify-center relative">
          <div className="w-14 h-14 rounded-full bg-[#5b72ee] -mt-6 absolute shadow-md  text-center flex justify-center items-center ">
            <FontAwesomeIcon
              icon={solid("file-invoice")}
              size="2x"
              className="text-white"
            />
          </div>
          <div className="flex flex-col w-56 items-center ">
            <h1 className="text-AboutTitle w-28 text-center mt-12 leading-4  ">
              Амьтадын төлөө
            </h1>
            <p className=" my-4 mx-8 text-xs text-center font-thin text-AboutDesriptionColor">
              the readable content of a page when looking at its It is a long
              established fact that a reader will be
            </p>
          </div>

          {/*   */}
        </div>
        <div className="w-56 h-56 mt-12 shadow-lg flex justify-center relative">
          {" "}
          <div className="w-14 h-14 rounded-full bg-[#f48c06] -mt-6 absolute shadow-md text-center flex justify-center items-center">
          <FontAwesomeIcon
              icon={solid("calendar")}
              size="2x"
              className="text-white"
            />
          </div>
          <div className="flex flex-col w-56 items-center">
            <h1 className="text-AboutTitle w-28 text-center mt-12 leading-4  ">
              Нэгдсэн нэг флатформ
            </h1>
            <p className=" my-4 mx-8 text-xs text-center font-thin text-AboutDesriptionColor">
              the readable content of a page when looking at its It is a long
              established fact that a reader will be
            </p>
          </div>
        </div>
        <div className="w-56 h-56 mt-12 shadow-lg flex justify-center relative">
          {" "}
          <div className="w-14 h-14 rounded-full bg-[#29b9e7] -mt-6 absolute shadow-md text-center flex justify-center items-center">
          <FontAwesomeIcon
              icon={solid("users")}
              size="2x"
              className="text-white"
            />
          </div>
          <div className="flex flex-col w-56 items-center">
            <h1 className="text-AboutTitle w-28 text-center mt-12 leading-4  ">
              Хамтдаа нэгдэцгээе
            </h1>
            <p className=" my-4 mx-8 text-xs text-center font-thin text-AboutDesriptionColor">
              the readable content of a page when looking at its It is a long
              established fact that a reader will be
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionCard;
