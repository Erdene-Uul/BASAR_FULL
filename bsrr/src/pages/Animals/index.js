import React, { Component } from "react";
import bird from "../../assets/images/animals/bird.png";
import cat from "../../assets/images/animals/cat.png";
import fish from "../../assets/images/animals/fish.png";
import rabbit from "../../assets/images/animals/rabbit.png";
import turtle from "../../assets/images/animals/turtle.png";
import zaraa from "../../assets/images/animals/zaraa.png";
import dog from "../../assets/images/animals/dog.png";
import lizard from "../../assets/images/animals/lizard.png";
import mouse from "../../assets/images/animals/mouse.png";
import chicken from "../../assets/images/animals/chicken.png";
import css from "./style.module.css";

import humster from "../../assets/images/animals/humster.png";
import { Link } from "react-router-dom";
class Animals extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className=" my-16 md:my-24   max-w-7xl mx-auto md:pr-12   p-3 sm:pl-0 sm:pr-10">
        <h1 className=" uppercase text-center md:text-2xl   font-Nunito-Sans text-blue-700 font-extrabold  mb-10 relative">
          АМЬТДЫН АНГИЛАЛ
        </h1>
        <div className="flex flex-wrap font-Roboto  justify-evenly lg:justify-center sm:space-y-0 space-y-4">
          <div className="animal overflow-hidden">
            <p className="absolute text-9xl left-0 text-DogTextColor font-medium z-20">
              01
            </p>
            <img
              className="h-28 sm:h-32 2xl:h-40 bottom-0 right-3 2xl:right-0 absolute z-20 flex shrink-0"
              src={dog}
              alt="dog"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-DogColor1 to-DogColor2 z-10 w-full rounded-2xl"
            >
              <h1 className="font-bold md:text-2xl text-lg text-indigo-900 absolute mt-4 ml-4">
                Нохой
              </h1>
            </Link>
          </div>

          <div className="animal ">
            <img
              className="h-28 sm:h-32  xl:h-36 2xl:h-40 bottom-0 right-5 2xl:right-2 absolute z-20 flex shrink-0"
              src={cat}
              alt="cat"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-CatColor1 to-CatColor2 z-10 w-full  rounded-2xl"
            >
              <h1 className="font-bold md:text-2xl text-lg text-indigo-900 absolute mt-4 ml-4">
                Муур
              </h1>
            </Link>
          </div>

          <div className="animal ">
            <img
              className="sm:h-32 h-28  2xl:h-40  xl:h-36  bottom-0 right-6 2xl:right-3 absolute z-20 flex shrink-0"
              src={rabbit}
              alt="rabbit"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-RabbitColor1 to-RabbitColor2 z-10 w-full  rounded-2xl"
            >
              <h1 className="font-bold md:text-2xl text-lg text-indigo-900 absolute mt-4 ml-4">
                Туулай
              </h1>
            </Link>
          </div>

          <div className="animal ">
            <img
              className="h-28 sm:h-32  xl:h-36  bottom-0 right-4 2xl:right-1 absolute z-20 flex shrink-0"
              src={bird}
              alt="bird"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-BirdColor1 to-BirdColor2 z-10 w-full  rounded-2xl"
            >
              <h1 className="font-bold md:text-2xl text-lg text-indigo-900 absolute mt-4 ml-4">
                Шувуу
              </h1>
            </Link>
          </div>

          <div className="animal ">
            <img
              className="h-28 sm:h-32 2xl:h-40 xl:h-36  bottom-0 right-0 2xl:-right-4 absolute z-20 flex shrink-0"
              src={zaraa}
              alt="zaraa"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-HedgehogColor1 to-HedgehogColor2 z-10 w-full rounded-2xl"
            >
              <h1 className="font-bold md:text-2xl text-lg text-indigo-900 absolute mt-4 ml-4">
                Зараа
              </h1>
            </Link>
          </div>

          <div className="animal ">
            <img
              className="h-28 sm:h-32  xl:h-36  bottom-0 right-3 md:bottom-6 absolute z-20 flex shrink-0"
              src={fish}
              alt="fish"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-FishColor1 to-FishColor2 z-10 w-full  rounded-2xl"
            >
              <h1 className="font-bold text-lg text-indigo-900 md:text-2xl  absolute mt-4 ml-4">
                Загас
              </h1>
            </Link>
          </div>
          <div className="animal overflow-hidden">
            <img
              className="h-28  sm:h-32 xl:h-36 2xl:h-32  bottom-0 -right-14 2xl:bottom-3 absolute z-20 flex shrink-0"
              src={lizard}
              alt="lizard"
            />
            <Link
              to="/animals"
              className=" bg-gradient-to-b from-[#F9F0EC] to-[#F5E5DA] z-10 w-full  rounded-2xl"
            >
              <h1 className="font-bold text-lg text-indigo-900 md:text-2xl  absolute mt-4 ml-4">
                Гүрвэл
              </h1>
            </Link>
          </div>

          <div className="animal overflow-hidden">
            <img
              className="h-32  xl:h-36 -bottom-2 -right-8  absolute z-20 flex shrink-0"
              src={turtle}
              alt="turtle"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-TurtleColor1 to-TurtleColor2 z-10 w-full rounded-2xl"
            >
              <h1 className="font-bold text-lg md:text-2xl text-indigo-900 absolute mt-4 ml-4">
                Яст мэлхий
              </h1>
            </Link>
          </div>
          <div className="animal overflow-hidden">
            <img
              className="sm:h-40 h-36  -bottom-4 -right-14 absolute z-20 flex shrink-0"
              src={mouse}
              alt="mouse"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-MouseColor to-MouseColor2 z-10 w-full  rounded-2xl"
            >
              <h1 className="font-bold text-lg md:text-2xl text-indigo-900 absolute mt-4 ml-4">
                Хулгана
              </h1>
            </Link>
          </div>
          <div className="animal ">
            <img
              className="h-28 sm:h-32  xl:h-36  bottom-0 right-4 absolute z-20 flex shrink-0"
              src={humster}
              alt="humster"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-[#F6F6F9] to-[#E9EBF2] z-10 w-full  rounded-2xl"
            >
              <h1 className="font-bold text-lg md:text-2xl text-indigo-900 absolute mt-4 ml-4">
                Усан гахай
              </h1>
            </Link>
          </div>

          <div className="animal ">
            <img
              className="h-32  sm:h-36 xl:h-36 bottom-0 right-3 absolute z-20 flex shrink-0"
              src={chicken}
              alt="chicken"
            />
            <Link
              to="/animals"
              className="bg-gradient-to-b from-[#F4DBCC] to-[#ECC3A9] z-10 w-full rounded-2xl"
            >
              <h1 className="font-bold text-lg md:text-2xl text-indigo-900 absolute mt-4 ml-4">
                Фирм
              </h1>
            </Link>
          </div>

          <div className="animal ">
            <button className={`${css.pulse} absolute ml-9 mt-6`}>+</button>
            <Link
              to="/animals"
              className="bg-gradient-to-b from-[#FAF1EC] to-[#F5E4DA] z-10 w-full rounded-2xl"
            >
              <h1 className="font-bold text-lg md:text-2xl text-indigo-900 absolute mt-4 ml-4">
                Бусад
              </h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Animals;
