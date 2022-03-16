import React from "react";
import bird from "../../assets/images/animals/bird.png";
import cat from "../../assets/images/animals/cat.png";
import fish from "../../assets/images/animals/fish.png";
import rabbit from "../../assets/images/animals/rabbit.png";
import turtle from "../../assets/images/animals/turtle.png";
import zaraa from "../../assets/images/animals/zaraa.png";
import dog from "../../assets/images/animals/dog.png";
import humster from "../../assets/images/animals/humster.png";
import { Link } from "react-router-dom";
const Animals = () => {
  return (
    <section className=" my-16 md:my-24 h-52.0625rem  max-w-7xl mx-auto md:p-12 p-3">
      <h1 className=" uppercase md:text-2xl italic ml-4 font-Roboto text-blue-700 font-extrabold  my-10 relative">
        #Амьтад
      </h1>
      <div className="flex flex-wrap">
        <div className="animals-responsive w-1/2">
          <img
            className="h-20 mt-12 ml-16 sm:ml-40 sm:h-24 sm:mt-8   md:ml-32 xl:h-28 xl:ml-44 xl:mt-4 absolute z-20 flex shrink-0"
            src={dog}
            alt="dog"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-DogColor1 to-DogColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Нохой
            </h1>
          </Link>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-24 ml-20 mt-8 sm:ml-44  md:ml-36 xl:ml-52 xl:h-28 xl:mt-4 absolute z-20"
            src={cat}
            alt="cat"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-CatColor1 to-CatColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Муур
            </h1>
          </Link>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-28 ml-20 mt-4 sm:ml-44  md:ml-36 xl:ml-48 xl:h-32 xl:mt-0 absolute z-20"
            src={rabbit}
            alt="rabbit"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-RabbitColor1 to-RabbitColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Туулай
            </h1>
          </Link>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-20 ml-20 mt-12 sm:ml-44 sm:h-24 sm:mt-8  md:ml-36 xl:h-28 xl:mt-4 xl:ml-48 absolute z-20"
            src={bird}
            alt="bird"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-BirdColor1 to-BirdColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Шувуу
            </h1>
          </Link>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-12  ml-16 mt-8 sm:h-16  sm:mt-7 sm:ml-36  md:ml-28 xl:h-20 xl:ml-36 absolute z-20"
            src={turtle}
            alt="turtle"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-TurtleColor1 to-TurtleColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Яст мэлхий
            </h1>
          </Link>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-20 ml-16 mt-6 sm:h-24 sm:ml-44 md:h-28 md:ml-28 md:mt-2 xl:h-32 xl:ml-40 absolute z-20"
            src={fish}
            alt="fish"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-FishColor1 to-FishColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold text-indigo-900 md:text-2xl  absolute mt-12 ml-2">
              Загас
            </h1>
          </Link>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className=" h-20  ml-14 sm:h-24 sm:ml-40 md:h-24 md:ml-28  xl:h-28 xl:ml-44 xl:mt-4 absolute z-20"
            src={zaraa}
            alt="zaraa"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-HedgehogColor1 to-HedgehogColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Зараа
            </h1>
          </Link>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-20 ml-16  sm:h-24 sm:ml-44 md:h-24 md:ml-36  xl:h-28 xl:ml-44 xl:mt-4 absolute z-20"
            src={humster}
            alt="usan gahai"
          />
          <Link
            to="/animals"
            className="bg-gradient-to-b from-MouseColor to-MouseColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Усан гахай
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Animals;
