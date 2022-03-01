import React from "react";
import bird from "../../assets/images/animals/bird.png";
import cat from "../../assets/images/animals/cat.png";
import fish from "../../assets/images/animals/fish.png";
import rabbit1 from "../../assets/images/animals/rabbit1.png";
import turtle from "../../assets/images/animals/turtle.png";
import zaraa from "../../assets/images/animals/zaraa.png";
import dog from "../../assets/images/animals/dog.png";
import guinea from "../../assets/images/animals/guinea.png";
const Animals = () => {
  return (
    <section className="wrapper my-16 md:my-24 h-52.0625rem ">
      <h1 className=" uppercase md:text-2xl italic font-Roboto text-blue-700 font-extrabold my-10 relative">
        #Амьтад
      </h1>
      <div className="flex flex-wrap">
        <div className="animals-responsive w-1/2">
          <img
            className="h-24 ml-20 sm:ml-28 md:h-32  md:ml-52 absolute z-20 flex shrink-0"
            src={dog}
            alt="dog"
          />
          <a
            href=""
            className="bg-gradient-to-b from-DogColor1 to-DogColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Нохой
            </h1>
          </a>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-24 ml-8 md:h-32 md:ml-32 absolute z-20"
            src={cat}
            alt="cat"
          />
          <a
            href=""
            className="bg-gradient-to-b from-CatColor1 to-CatColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Муур
            </h1>
          </a>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-20 ml-14 md:h-32 md:ml-36 absolute z-20"
            src={rabbit1}
            alt="rabbit"
          />
          <a
            href=""
            className="bg-gradient-to-b from-RabbitColor1 to-RabbitColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Туулай
            </h1>
          </a>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-24 ml-12 md:h-32 md:ml-36 absolute z-20"
            src={bird}
            alt="bird"
          />
          <a
            href=""
            className="bg-gradient-to-b from-BirdColor1 to-BirdColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Шувуу
            </h1>
          </a>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-10 sm:h-16 mt-10 sm:mt-10 md:mt-12 ml-16 md:ml-40 absolute z-20"
            src={turtle}
            alt="turtle"
          />
          <a
            href=""
            className="bg-gradient-to-b from-TurtleColor1 to-TurtleColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Яст мэлхий
            </h1>
          </a>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-20 ml-16 mt-6 md:h-32 md:ml-44 md:mt-2 absolute z-20"
            src={fish}
            alt="fish"
          />
          <a
            href=""
            className="bg-gradient-to-b from-FishColor1 to-FishColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold text-indigo-900 md:text-2xl absolute mt-12 ml-2">
              Загас
            </h1>
          </a>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className=" h-20 ml-14 md:h-32 md:ml-36 absolute z-20"
            src={zaraa}
            alt="zaraa"
          />
          <a
            href=""
            className="bg-gradient-to-b from-HedgehogColor1 to-HedgehogColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Зараа
            </h1>
          </a>
        </div>

        <div className="animals-responsive w-1/2">
          <img
            className="h-16 ml-16 md:h-28 md:ml-40 mt-4 absolute z-20"
            src={guinea}
            alt="usan gahai"
          />
          <a
            href=""
            className="bg-gradient-to-b from-MouseColor to-MouseColor2 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
          >
            <h1 className="font-bold md:text-2xl text-indigo-900 absolute mt-12 ml-2">
              Усан гахай
            </h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Animals;
