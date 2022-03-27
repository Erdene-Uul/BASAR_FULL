import React from "react";
import partner1 from "../../../assets/images/partners/pro_official.png";
import partner2 from "../../../assets/images/partners/pro_official1.png";
import partner3 from "../../../assets/images/partners/pro_official2.png";
import partner4 from "../../../assets/images/partners/pro_official3.png";

const Partners = () => {
  return (
    <section className=" mx-auto lg:flex max-w-7xl flex-col items-center mt-5 mb-20 hidden px-20">
      <h1 className="text-AboutTitle font-Poppins font-medium text-2xl text-center mb-4 md:text-3xl xl:text-4xl">
        Хамтрагч
        <span className="text-btnOrange block lg:inline "> байгууллагууд</span>
      </h1>
      <h1 className="font-Nunito-Sans text-[#616161] text-2xl">
        Төрийн бус байгууллагууд:
      </h1>
      <div className="grid grid-cols-6 xl:gap-20 gap-10 text-center text-[#252641] my-10 ">
        <div className="flex flex-col items-center justify-start">
          <img className="w-24 h-24 mb-3" alt="partner1" src={partner1} />
          <p>Азтай Савар ТББ</p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <img className=" w-24 h-24 mb-3" alt="partner2" src={partner2} />
          <p>WWF</p>
        </div>

        <div className="flex flex-col items-center justify-start ">
          <img className="w-24 h-24 mb-3" alt="partner3" src={partner3} />
          <p>Animal Health</p>
        </div>
        <div className=" flex flex-col items-center justify-start">
          <img className="w-24 h-24 mb-3" alt="partner4" src={partner4} />
          <p>UB shelter</p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <img className="w-24 h-24 mb-3" alt="partner1" src={partner1} />
          <p>Азтай Савар ТББ</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img className=" w-24 h-24 mb-3" alt="partner2" src={partner2} />
          <p>WWF</p>
        </div>
      </div>
      <h1 className="font-Nunito-Sans text-[#616161] text-2xl mt-8">
        Олон Улсын Байгууллагууд:
      </h1>
      <div className="grid grid-cols-4 xl:gap-20 gap-10 text-[#252641] my-10 ">
        <div className="flex flex-col items-center justify-between">
          <img className="w-24 h-24 mb-3" alt="partner1" src={partner1} />
          <p>Азтай Савар ТББ</p>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <img className=" w-24 h-24 mb-3" alt="partner2" src={partner2} />
          <p>WWF</p>
        </div>

        <div className="flex flex-col items-center justify-between ">
          <img className="w-24 h-24 mb-3" alt="partner3" src={partner3} />
          <p>Animal Health</p>
        </div>
        <div className=" flex flex-col items-center justify-between">
          <img className="w-24 h-24 mb-3" alt="partner4" src={partner4} />
          <p>UB shelter</p>
        </div>
      </div>
      <h1 className="font-Nunito-Sans text-[#616161] text-2xl mt-8">
        Мал эмнэлэгүүд:
      </h1>
      <div className="grid grid-cols-6 xl:gap-20 gap-10 text-center text-[#252641] my-10 ">
        <div className="flex flex-col items-center justify-start">
          <img className="w-24 h-24 mb-3" alt="partner1" src={partner1} />
          <p>Азтай Савар ТББ</p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <img className=" w-24 h-24 mb-3" alt="partner2" src={partner2} />
          <p>WWF</p>
        </div>

        <div className="flex flex-col items-center justify-start ">
          <img className="w-24 h-24 mb-3" alt="partner3" src={partner3} />
          <p>Animal Health</p>
        </div>
        <div className=" flex flex-col items-center justify-start">
          <img className="w-24 h-24 mb-3" alt="partner4" src={partner4} />
          <p>UB shelter</p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <img className="w-24 h-24 mb-3" alt="partner1" src={partner1} />
          <p>Азтай Савар ТББ</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img className=" w-24 h-24 mb-3" alt="partner2" src={partner2} />
          <p>WWF</p>
        </div>
      </div>
      <div className="grid grid-cols-3 xl:gap-20 gap-10 text-[#252641] my-10 ">
        <div className=" flex flex-col items-center justify-between">
          <img className="w-24 h-24 mb-3" alt="partner4" src={partner4} />
          <p>UB shelter</p>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <img className="w-24 h-24 mb-3" alt="partner1" src={partner1} />
          <p>Азтай Савар ТББ</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img className=" w-24 h-24 mb-3" alt="partner2" src={partner2} />
          <p>WWF</p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
