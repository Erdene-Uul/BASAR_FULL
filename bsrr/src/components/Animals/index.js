import React from "react";
import bird from '../../assets/images/animals/bird.png';
import cat from '../../assets/images/animals/cat.png';
import fish from '../../assets/images/animals/fish.png';
import rabbit1 from '../../assets/images/animals/rabbit1.png';
import turtle from '../../assets/images/animals/turtle.png';
import zaraa from '../../assets/images/animals/zaraa.png';
import dog from '../../assets/images/animals/dog.png';
import guinea from '../../assets/images/animals/guinea.png';
const Animals = () => {
    return (
        <section className="wrapper my-12 h-52.0625rem ">
        <h1 className="uppercase font-extrabold text-indigo-900 my-10 relative">
          Амьтад
        </h1>
        <div className="flex flex-wrap">
          
          <div className="animals-responsive w-1/2">
            <img
              className="h-32 ml-52 absolute z-20 flex shrink-0"
              src={dog}
              alt="dog"
            />
            <a href="" className="bg-sky-200 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl">
              <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                Нохой
              </h1>
            </a>
          </div>
  
          
          <div className="animals-responsive w-1/2">
            <img
              className="h-32 ml-32 absolute z-20"
              src={cat}
              alt="cat"
            />
            <a
              href=""
              className="bg-amber-200 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
            >
              <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                Муур
              </h1>
            </a>
          </div>
  
          
          <div className="animals-responsive w-1/2">
            <img
              className="h-32 ml-36 absolute z-20"
              src={rabbit1}
              alt="rabbit"
            />
            <a href="" className="bg-zinc-200 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl">
              <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                Туулай
              </h1>
            </a>
          </div>
  
          
          <div className="animals-responsive w-1/2">
            <img
              className="h-32 ml-36 absolute z-20"
              src={bird}
              alt="bird"
            />
            <a href="" className="bg-lime-100 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl">
              <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                Шувуу
              </h1>
            </a>
          </div>
  
          <div className="animals-responsive w-1/2">
            <img
              className="h-16 mt-12 ml-40 absolute z-20"
              src={turtle}
              alt="turtle"
            />
            <a href="" className="bg-red-100 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl">
              <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                Яст мэлхий
              </h1>
            </a>
          </div>

          <div className="animals-responsive w-1/2">
            <img
              className="h-32 ml-36 mt-2 absolute z-20"
              src={fish}
              alt="fish"
            />
            <a href="" className="bg-sky-100 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl">
              <h1 className="font-bold text-indigo-900 text-2xl absolute mt-12 ml-2">
                Загас
              </h1>
            </a>
          </div>

          <div className="animals-responsive w-1/2">
            <img
              className="h-32 ml-36 absolute z-20"
              src={zaraa}
              alt="zaraa"
            />
            <a
              href=""
              className="bg-purple-100 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
            >
              <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                Зараа
              </h1>
            </a>
          </div>
  
  
          <div className="animals-responsive w-1/2">
            <img
              className="h-28 ml-40 mt-4 absolute z-20"
              src={guinea}
              alt="usan gahai"
            />
            <a
              href=""
              className="bg-indigo-200 z-10 w-full mt-8 mb-0 mx-4 rounded-2xl"
            >
              <h1 className="font-bold text-2xl text-indigo-900 absolute mt-12 ml-2">
                Усан гахай
              </h1>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Animals