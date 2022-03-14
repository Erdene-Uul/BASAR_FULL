import React from "react";
import playStore from '../../assets/images/footer_img/playstore.png';
import appStore from '../../assets/images/footer_img/appstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <footer className="h-32rem w-full hidden lg:block font-Roboto text-xs">
            <div className="flex justify-center items-center space-x-12 h-32 w-full bg-gradient-to-r from-footerTop1 to-[#FF834F] text-white">
                <div className="text-xl font-light" >
                    ЦАГ АЛДАЛГҮЙ МЭДЭЭЛЭЛ <span className="font-bold">ХҮЛЭЭЖ АВААРАЙ</span>
                </div>
                <div className="flex justify-between border border-l-bgServiceColor h-12 w-112 rounded-full">
                    <span className="flex justify-start items-center ml-6" >Мэйл хаяг</span>
                    <button className="bg-white rounded-full text-black h-12 w-28">Хайх</button>
                </div>
            </div>
            <div className="h-full lg:wrapper mx-auto w-4/5 flex justify-center items-center">
                <div className="grid grid-cols-6 py-14 text-[#2B363F] ">
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            АНГИЛАЛ
                        </div>
                        <ul className="leading-6">
                            <li>
                                <Link to="/">Нохой </Link>
                            </li>
                            <li>
                                <Link to="/">Муур</Link>
                            </li>
                            <li>
                                <Link to="/"> Туулай</Link>
                            </li>
                            <li>
                                <Link to="/"> Шувуу</Link>
                            </li>
                            <li>
                                <Link to="/"> Зараа</Link>
                            </li>
                            <li>
                                <Link to="/"> Загас</Link>
                            </li>
                            <li>
                                <Link to="/"> Гүрвэл</Link>
                            </li>
                            <li>
                                <Link to="/"> Яст мэлхий</Link>
                            </li>
                            <li>
                                <Link to="/"> Орог зусаг</Link>
                            </li>
                            <li>
                                <Link to="/"> Фирм</Link>
                            </li>
                            <li>
                                <Link to="/"> Таван хошуу</Link>
                            </li>
                            <li>
                                <Link to="/"> Бусад</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            МЭДЭЭ
                        </div>
                        <ul className="leading-6 mb-8">
                            <li>
                                <Link to="/">Байгууллага </Link>
                            </li>
                            <li>
                                <Link to="/"> Төрийн бус</Link>
                            </li>
                            <li>
                                <Link to="/">Дэлхий дахинд</Link>
                            </li>
                        </ul>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            БЛОГ
                        </div>
                        <Link className="" to="/">Нийтлэл</Link>
                        <div
                            className="font-medium border-orange-500 border-l-2 pl-1 mb-2 mt-8"
                        >
                            ҮРЧИЛГЭЭ ЗАР
                        </div>
                        <ul className="leading-6">
                            <li>
                                <Link to="/">Үрчлүүлнэ </Link>
                            </li>
                            <li>
                                <Link to="/">Хайж байна</Link>
                            </li>
                            <li>
                                <Link to="/"> Зарна</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            ҮЙЛЧИЛГЭЭ
                        </div>
                        <ul className="leading-6 mb-5">
                            <li>
                                <Link to="/">Байгууллага </Link>
                            </li>
                            <li>
                                <Link to="/"> Төрийн бус</Link>
                            </li>
                            <li>
                                <Link to="/"> Мал эмнэлэг</Link>
                            </li>
                            <li>
                                <Link to="/"> Сургалтын газар</Link>
                            </li>
                            <li>
                                <Link to="/"> Гоо сайхны газар</Link>
                            </li>
                            <li>
                                <Link to="/"> Үрчлүүлгын газар</Link>
                            </li>
                            <li>
                                <Link to="/"> Төсөл хөтөлбөр</Link>
                            </li>
                        </ul>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            АНХНЫ ТУСЛАМЖ
                        </div>
                        <ul className="leading-6">
                            <li>
                                <Link to="/">Халуурах </Link>
                            </li>
                            <li>
                                <Link to="/"> Яс хугарах</Link>
                            </li>
                            <li>
                                <Link to="/"> Хахах</Link>
                            </li>
                            <li>
                                <Link to="/"> Ухаан алдах</Link>
                            </li>
                            <li>
                                <Link to="/"> Шархдах</Link>
                            </li>
                            <li>
                                <Link to="/"> Цахилгаанд цохиулах</Link>
                            </li>
                            <li>
                                <Link to="/">Хоолонд хордох</Link>
                            </li>
                            <li>
                                <Link to="/">Бөөстөх</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium border-orange-500 border-l-2 pl-1 mb-2">
                            ОНЛАЙН ДЭЛГҮҮР
                        </div>
                        <ul className="leading-6">
                            <li>
                                <Link to="/">Хоол тэжээл </Link>
                            </li>
                            <li>
                                <Link to="/">Гоо сайхан </Link>
                            </li>
                            <li>
                                <Link to="/"> Хувцас</Link>
                            </li>
                            <li>
                                <Link to="/">Тоглоом</Link>
                            </li>
                            <li>
                                <Link to="/"> Гоёл </Link>
                            </li>
                            <li>
                                <Link to="/">Ахуйн хэрэгсэл</Link>
                            </li>
                            <li>
                                <Link to="/">Дагалдах хэрэгсэл </Link>
                            </li>
                            <li>
                                <Link to="/">Бусад</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 border-slate-400 border-l-2 lg:pl-14 pl-8">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={solid('headset')} size="3x" />
                            <p className="text-lg font-medium mx-10 font-Montserrat">7211-0737</p>
                            <button className="lg:px-9 py-2 border text-[#9B9B9B] rounded-lg font-Montserrat">Чатлах</button>
                        </div>
                        <div className="mt-12 mb-8">
                            <ul className="flex justify-around">
                                <li>
                                    <Link to="/">
                                        <div className="p-3 rounded-lg">
                                            <FontAwesomeIcon icon={brands('Facebook')} size="3x" className="hover:text-[#3b5998]" />
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <div className="p-3 rounded-lg">
                                        <FontAwesomeIcon icon={brands('Instagram')} size="3x" className="hover:text-[#bc2a8d]" />
                                    </div>
                                </li>

                                <li>
                                    <Link to="/">
                                        <div className="p-3 rounded-lg">
                                            <FontAwesomeIcon icon={brands('Twitter')} size="3x" className="hover:text-[#00acee]" />
                                        </div>

                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">
                                        <div className="p-3 rounded-lg">
                                            <FontAwesomeIcon icon={brands('Youtube')} size="3x" className="hover:text-[#FF0000]" />
                                        </div>

                                    </Link>
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
                            <Link to="/about" className="hover:text-slate-800 duration-400"
                            >БИДНИЙ ТУХАЙ</ Link>
                        </li>
                        <li className="mx-6 my-2">
                            <Link to="/" className="hover:text-slate-800 duration-400"
                            >DONATE VOLUNTEER</Link >
                        </li>
                        <li className="mx-6 my-2">
                            <Link to="/" className="hover:text-slate-800 duration-400"
                            >ХАМТРАН АЖИЛЛАХ</ Link >
                        </li>
                        <li className="mx-6 my-2">
                            <Link to="/" className="hover:text-slate-800 duration-400"
                            >ХОЛБОО БАРИХ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer;