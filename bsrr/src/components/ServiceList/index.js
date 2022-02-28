import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const ServiceList = (props) => {
    return (
        <section className="mt-36 w-full h-96 bg-bgServiceColor px-44 py-24">
        <h1 className="text-center text-blue-700 italic font-semibold pb-10">#Үйлчилгээ</h1>
        <div className="flex justify-around">
        <div className={`w-20 h-20 bg-green-500 rounded-md hover:bg-green-600 transition-all ease-in-out duration-500 cursor-pointer`}>
            <div className="flex justify-center items-center h-20">
              <FontAwesomeIcon icon={solid('headphones')} size="3x" color="white"/>
            </div>
            <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
              Үйлчилгээ
            </h2>
          </div>

          <div className={`w-20 h-20 bg-orange-500 rounded-md hover:bg-orange-600 transition-all ease-in-out duration-500 cursor-pointer`}>
            <div className="flex justify-center items-center h-20">
              <FontAwesomeIcon icon={solid('scissors')} size="3x" color="white"/>
            </div>
            <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
              Гоо сайхан
            </h2>
          </div>

          <div className={`w-20 h-20 bg-red-500 rounded-md hover:bg-red-600 transition-all ease-in-out duration-500 cursor-pointer`}>
            <div className="flex justify-center items-center h-20">
              <FontAwesomeIcon icon={solid('heart')} size="3x" color="white"/>
            </div>
            <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
              Тусламж
            </h2>
          </div>

          <div className={`w-20 h-20 bg-yellow-400 rounded-md hover:bg-yellow-500 transition-all ease-in-out duration-500 cursor-pointer`}>
            <div className="flex justify-center items-center h-20">
              <FontAwesomeIcon icon={solid('cart-shopping')} size="3x" color="white"/>
            </div>
            <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
              Дэлгүүр
            </h2>
          </div>

          <div className={`w-20 h-20 bg-violet-800 rounded-md hover:bg-violet-900 transition-all ease-in-out duration-500 cursor-pointer`}>
            <div className="flex justify-center items-center h-20">
              <FontAwesomeIcon icon={solid('eye')} size="3x" color="white"/>
            </div>
            <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
              Асрах
            </h2>
          </div>

          <div className={`w-20 h-20 bg-fuchsia-700 rounded-md hover:bg-fuchsia-800 transition-all ease-in-out duration-500 cursor-pointer`}>
            <div className="flex justify-center items-center h-20">
              <FontAwesomeIcon icon={solid('calendar-days')} size="3x" color="white"/>
            </div>
            <h2 className="mt-2 mr-2 text-sm inline-block w-20 text-center">
              Арга хэмжээ
            </h2>
          </div>
        </div>
      </section>
    );
}
export default ServiceList;