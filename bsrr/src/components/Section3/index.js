import react from "react";
import PostImgBig from "../../assets/images/niitlel_big.png";
import PostImgSmall from "../../assets/images/niitlel_small.png";

const Section3 = () => {
  return (
    <section className=" w-full">
      <div className=" relative ">
        <div className=" absolute w-44 text-white font-bold text-xl mt-10 ml-4 sm:hidden">
          <span className="text-orange-500">Studying </span>Online is now much
          easier{" "}
        </div>

        <div className="flex w-full h-96  absolute sm:justify-center sm:items-center sm:-m-20 md:-m-16 lg:-mt-6 ">
          <button className=" rounded-full py-2 px-4 bg-btnOrange text-white absolute mt-28 sm:mt-0 ml-4 hover:bg-orange-500 transition-all ease-in-out duration-300 ">
            Нийтлэл
          </button>
          <div className=" sm:flex p-5 rounded-full bg-white absolute hidden sm:visible sm:ml-44 "></div>
          <div className="sm:flex absolute text-white hidden sm:visible sm:ml-80">Бичлэг үзэх</div>
        </div>
        {/* sm дэлэгцнээс дээш style */}
        <h1 className=" w-full absolute text-white invisible sm:visible sm:text-xl  md:text-3xl text-center font-medium italic mt-4  lg:text-4xl lg:font-bold lg:mt-10  ">
          #Блог
        </h1>
        <h1 className="w-full absolute text-center text-white invisible sm:visible sm:text-2xl font-bold mt-10  md:text-3xl md:mt-14 lg:mt-20 lg:text-5xl ">
          Бид Амьтанд Хайртай
        </h1>
        <img
          className="hidden lg:flex lg:visible bg-cover  bg-top bg-fixed"
          src={PostImgBig}
          alt="Cover Post Image"
        />
        <img
          className="  lg:hidden bg-cover bg-top bg-fixed"
          src={PostImgSmall}
          alt="Cover Post Image"
        />
      </div>
    </section>
  );
};

export default Section3;
