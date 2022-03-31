import React, { useEffect } from "react";

import AboutCover from "../../components/AboutComponents/AboutCover";
import AboutSectionTitle from "../../components/AboutComponents/AboutSectionTitle";
import AboutSectionCard from "../../components/AboutComponents/AboutSectionCard";

import dog1 from "../../assets/images/About/dog1.png";
import dog2 from "../../assets/images/About/dog2.png";
import about from "../../assets/images/About/about.png";

import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";
import Partners from "../../components/AboutComponents/Partners";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" font-Poppins">
      <AboutCover />
      <AboutSectionTitle />
      <AboutSectionCard />
      <section className=" mx-auto flex lg:flex-row flex-col items-center lg:max-w-6xl mt-20 lg:pl-20">
        <h1 className="text-xl sm:text-4xl font-semibold font-Poppins text-[#F48C06] mb-7 lg:hidden">
          Танилцуулга
        </h1>
        <div className="hidden  lg:block">
          <h1 className="text-3xl text-[#2F327D] ">Танилцуулга видео</h1>
          <p className="text-[#696984] xl:w-112 w-96 xl:text-lg text-base leading-7 mt-4 ">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <p className="text-[#696984] underline hover:underline-offset-2 text-sm mt-3">
            Дэлгэрэнгүй
          </p>
        </div>
        <div className="xl:ml-56 lg:ml-28">
          <iframe
            className="rounded-lg lg:h-64 lg:w-96 sm:h-[301px] sm:w-[505px] h-56 w-[300px]"
            src="https://www.youtube.com/embed/C_nJJHaNmnY"
            frameBorder="0"
            allow="autoplay; accelerometer; encrypted-media"
            allowFullScreen
            title="video"
          />{" "}
        </div>
      </section>
      <section className=" mx-auto flex max-w-6xl flex-col items-center mt-20">
        <h1 className="sm:text-4xl text-xl text-[#2F327D] font-semibold font-Poppins ">
          Бидний хийж <span className="text-[#F4B767]">буй ажлууд</span>
        </h1>
        <p className="text-[#696984] max-w-3xl text-lg leading-7 my-4 text-center hidden lg:block">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.{" "}
        </p>
        <div className="flex lg:max-w-5xl lg:flex-row flex-col items-center mx-auto xl:mt-9 md:p-20">
          <div className=" sm:w-120 sm:h-80 h-56 w-[300px] xl:mr-32 lg:mr-16 flex justify-center flex-col items-center">
            <div className="absolute">
              <h1 className=" text-white text-xl lg:text-3xl font-semibold w-56 lg:w-80 text-center">
                Амьтдыг хамгаалах сан гэж юу вэ?
              </h1>
              <button className="lg:ml-20 ml-12 mt-4 text-white border rounded-3xl border-white lg:px-7 px-4 py-2">
                Дэлгэрэнгүй
              </button>
            </div>
            <img className="" alt="dog1" src={dog1} />
          </div>
          <div className="mt-10 lg:mt-0 sm:w-120 sm:h-80 h-56 w-[300px] flex justify-center flex-col items-center  ">
            <div className="absolute">
              <h1 className=" text-white text-xl lg:text-3xl font-semibold w-56 lg:w-80 text-center">
                Амьтдыг хамгаалах хууль эрх зүй
              </h1>
              <button className="lg:ml-20 ml-12 mt-4 text-white border border-[#33b5dde5] rounded-3xl bg-[#23BDEEE5] lg:px-7 px-4 py-2">
                Дэлгэрэнгүй
              </button>
            </div>

            <img alt="dog" src={dog2} />
          </div>
        </div>
      </section>
      <section className=" mx-auto flex max-w-6xl flex-col items-center my-20 p-10">
        <h1 className="sm:text-4xl text-xl mb-4 text-center leading-none text-[#2F327D] font-semibold font-Poppins ">
          Тэд бидний
          <span className="text-[#F4B767] block"> тухай</span>
        </h1>

        <div className="flex justify-evenly  flex-wrap ">
          <div className="w-[300px] md:w-96 shadow-lg  mt-12 rounded-2xl border-l-8 border-[#F67766] ">
            <div className=" flex p-4 ">
              <img
                className="h-14 rounded-full mr-3 "
                alt="aboutt"
                src={about}
              />
              <div className="text-xs md:text-sm w-64 md:w-72  font-light my-auto text-AboutDesriptionColor">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort."
                <ul className="text-xs md:text-sm flex justify-between items-center mt-4">
                  <li className="font-normal  text-AboutDesriptionColor">
                    Gloria Rose
                  </li>

                  <li className="font-light  text-[#80819A]">
                    12 reviews at Yelp
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[300px] md:w-96 shadow-lg  mt-12 rounded-2xl border-l-8 border-[#F67766] ">
            <div className=" flex p-4 ">
              <img
                className="h-14 rounded-full mr-3 "
                alt="aboutt"
                src={about}
              />
              <div className="text-xs md:text-sm w-64 md:w-72  font-light my-auto text-AboutDesriptionColor">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort."
                <ul className="text-xs md:text-sm flex justify-between items-center mt-4">
                  <li className="font-normal  text-AboutDesriptionColor">
                    Gloria Rose
                  </li>

                  <li className="font-light  text-[#80819A]">
                    12 reviews at Yelp
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[300px] md:w-96 shadow-lg  mt-12 rounded-2xl border-l-8 border-[#F67766] ">
            <div className=" flex p-4 ">
              <img
                className="h-14 rounded-full mr-3 "
                alt="aboutt"
                src={about}
              />
              <div className="text-xs md:text-sm w-64 md:w-72  font-light my-auto text-AboutDesriptionColor">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort."
                <ul className="text-xs md:text-sm flex justify-between items-center mt-4">
                  <li className="font-normal  text-AboutDesriptionColor">
                    Gloria Rose
                  </li>

                  <li className="font-light  text-[#80819A]">
                    12 reviews at Yelp
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[300px] md:w-96 shadow-lg  mt-12 rounded-2xl border-l-8 border-[#F67766] ">
            <div className=" flex p-4 ">
              <img
                className="h-14 rounded-full mr-3 "
                alt="aboutt"
                src={about}
              />
              <div className="text-xs md:text-sm w-64 md:w-72  font-light my-auto text-AboutDesriptionColor">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort."
                <ul className="text-xs md:text-sm flex justify-between items-center mt-4">
                  <li className="font-normal  text-AboutDesriptionColor">
                    Gloria Rose
                  </li>

                  <li className="font-light  text-[#80819A]">
                    12 reviews at Yelp
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />

      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
