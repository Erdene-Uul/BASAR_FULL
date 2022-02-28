import React from "react";
import playStore from '../../assets/images/footer_img/playstore.png';
import appStore from '../../assets/images/footer_img/appstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Footer = () => {
    return (

        <footer className="h-32rem w-full hidden lg:block">
            <div className="flex justify-center items-center space-x-12 h-32 w-full bg-gradient-to-r from-footerTop1 to-[#FF834F] text-white">
                <div className="text-xl font-light" >
                    ЦАГ АЛДАЛГҮЙ МЭДЭЭЛЭЛ <span className="font-bold">ХҮЛЭЭЖ АВААРАЙ</span>
                </div>
                <div className="flex justify-between border border-l-bgServiceColor h-12 w-112 rounded-full">
                    <span className="flex justify-start items-center ml-6" >Мэйл хаяг</span>
                    <button className="bg-white rounded-full text-black h-12 w-28">Хайх</button>
                </div>
            </div>
            <div className="h-full lg:wrapper mx-16">
                <div className="grid grid-cols-6 py-12">
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            АНГИЛАЛ
                        </div>
                        <ul className="leading-6">
                            <li>
                                <a href="#">Нохой </a>
                            </li>
                            <li>
                                <a href="#">Муур</a>
                            </li>
                            <li>
                                <a href="#"> Туулай</a>
                            </li>
                            <li>
                                <a href="#"> Шувуу</a>
                            </li>
                            <li>
                                <a href="#"> Зараа</a>
                            </li>
                            <li>
                                <a href="#"> Загас</a>
                            </li>
                            <li>
                                <a href="#"> Гүрвэл</a>
                            </li>
                            <li>
                                <a href="#"> Яст мэлхий</a>
                            </li>
                            <li>
                                <a href="#"> Орог зусаг</a>
                            </li>
                            <li>
                                <a href="#"> Фирм</a>
                            </li>
                            <li>
                                <a href="#"> Таван хошуу</a>
                            </li>
                            <li>
                                <a href="#"> Бусад</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            МЭДЭЭ
                        </div>
                        <ul className="leading-6 mb-8">
                            <li>
                                <a href="#">Байгууллага </a>
                            </li>
                            <li>
                                <a href="#"> Төрийн бус</a>
                            </li>
                            <li>
                                <a href="#">Дэлхий дахинд</a>
                            </li>
                        </ul>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            БЛОГ
                        </div>
                        <a className="" href="#">Нийтлэл</a>
                        <div
                            className="font-medium border-orange-500 border-l-2 pl-1 mb-2 mt-8"
                        >
                            ҮРЧИЛГЭЭ ЗАР
                        </div>
                        <ul className="leading-6">
                            <li>
                                <a href="#">Үрчлүүлнэ </a>
                            </li>
                            <li>
                                <a href="#">Хайж байна</a>
                            </li>
                            <li>
                                <a href="#"> Зарна</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            ҮЙЛЧИЛГЭЭ
                        </div>
                        <ul className="leading-6 mb-5">
                            <li>
                                <a href="#">Байгууллага </a>
                            </li>
                            <li>
                                <a href="#"> Төрийн бус</a>
                            </li>
                            <li>
                                <a href="#"> Мал эмнэлэг</a>
                            </li>
                            <li>
                                <a href="#"> Сургалтын газар</a>
                            </li>
                            <li>
                                <a href="#"> Гоо сайхны газар</a>
                            </li>
                            <li>
                                <a href="#"> Үрчлүүлгын газар</a>
                            </li>
                            <li>
                                <a href="#"> Төсөл хөтөлбөр</a>
                            </li>
                        </ul>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            АНХНЫ ТУСЛАМЖ
                        </div>
                        <ul className="leading-6">
                            <li>
                                <a href="#">Халуурах </a>
                            </li>
                            <li>
                                <a href="#"> Яс хугарах</a>
                            </li>
                            <li>
                                <a href="#"> Гахах</a>
                            </li>
                            <li>
                                <a href="#"> Ухаан алдах</a>
                            </li>
                            <li>
                                <a href="#"> Шархдах</a>
                            </li>
                            <li>
                                <a href="#"> Цахилгаанд цохиулах</a>
                            </li>
                            <li>
                                <a href="#">Хоолонд хордох</a>
                            </li>
                            <li>
                                <a href="#">Бөөстөх</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            ОНЛАЙН ДЭЛГҮҮР
                        </div>
                        <ul className="leading-6">
                            <li>
                                <a href="#">Хоол тэжээл </a>
                            </li>
                            <li>
                                <a href="#">Гоо сайхан </a>
                            </li>
                            <li>
                                <a href="#"> Хувцас</a>
                            </li>
                            <li>
                                <a href="#">Тоглоом</a>
                            </li>
                            <li>
                                <a href="#"> Гоёл </a>
                            </li>
                            <li>
                                <a href="#">Ахуйн хэрэгсэл</a>
                            </li>
                            <li>
                                <a href="#">Дагалдах хэрэгсэл </a>
                            </li>
                            <li>
                                <a href="#">Бусад</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 border-slate-600 border-l-2 lg:pl-14 pl-8">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={solid('headset')} size="3x" />
                            <p className="text-lg font-medium mx-10 font-Montserrat">77111208</p>
                            <button className="lg:px-9 py-2 border text-[#9B9B9B] rounded-lg font-Montserrat">Чатлах</button>
                        </div>
                        <div className="mt-12 mb-8">
                            <ul className="flex justify-around">
                                <li>
                                    <a href="#">
                                        <div className="p-3 rounded-lg">
                                            <FontAwesomeIcon icon={brands('Facebook')} size="3x" />
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <div className="p-3 rounded-lg">
                                        <FontAwesomeIcon icon={brands('Instagram')} size="3x" />
                                    </div>
                                </li>

                                <li>
                                    <a href="#">
                                        <div className="p-3 rounded-lg">
                                            <FontAwesomeIcon icon={brands('Twitter')} size="3x" />
                                        </div>

                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div className="p-3 rounded-lg">
                                            <FontAwesomeIcon icon={brands('Youtube')} size="3x" />
                                        </div>

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-around">
                            <img className="h-10" src={playStore} alt="playstore" />
                            <img className="h-10" src={appStore} alt="appstore" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-11 w-full bg-slate-600 text-white text-sm  ">
                <div className="flex items-center justify-between wrapper py-1">
                    <p>All reserved by @basarmn</p>
                    <ul className="flex">
                        <li className="mx-6 my-2">
                            <a href="#" className="hover:text-slate-800 duration-400"
                            >БИДНИЙ ТУХАЙ</a >
                        </li>
                        <li className="mx-6 my-2">
                            <a href="#" className="hover:text-slate-800 duration-400"
                            >DONATE VOLUNTEER</a >
                        </li>
                        <li className="mx-6 my-2">
                            <a href="#" className="hover:text-slate-800 duration-400"
                            >ХАМТРАН АЖИЛЛАХ</a  >
                        </li>
                        <li className="mx-6 my-2">
                            <a href="#" className="hover:text-slate-800 duration-400"
                            >ХОЛБОО БАРИХ</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer;