import React from "react";
import playStore from '../../assets/images/footer_img/playstore.png';
import appStore from '../../assets/images/footer_img/appstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";
const MFooter = () => {
    return (

        <footer className="h-43 w-full lg:hidden">
            <div className="px-4 flex justify-center box-border items-center h-24 w-full bg-gradient-to-r from-footerTop1 to-[#FF834F] text-white">
                <div className="text-xs font-light mr-2" >
                    ЦАГ АЛДАЛГҮЙ МЭДЭЭЛЭЛ <span className="font-bold">ХҮЛЭЭЖ АВААРАЙ</span>
                </div>
                <div className="flex justify-between border border-l-bgServiceColor h-9 w-80 rounded-full">
                    <span className="flex justify-start text-sm items-center leading-4 ml-2">Мэйл хаяг</span>
                    <button className="bg-white rounded-full text-black h-auto w-24 text-sm font-bold">Илгээх</button>
                </div>
            </div>
            <div className="h-full m-12">
                <div className="">
                    <div className="flex items-center justify-around">
                        <FontAwesomeIcon icon={solid('headset')} size="2x" />
                        <span className="text-baseg font-medium font-Montserrat ml-2 mr-6 ">77111208</span>
                        <button className="px-9 py-2 border font-Montserrat rounded-lg text-sm text-[#9B9B9B] ">Чатлах</button>
                    </div> </div>

                <div className="mt-10 mb-6">
                    <ul className="flex justify-around">
                        <li>
                            <a href="#">
                                <div className="p-3 rounded-lg">
                                    <FontAwesomeIcon icon={brands('Facebook')} size="2x" className="hover:text-[#3b5998]" />
                                </div>
                            </a>
                        </li>

                        <li>
                            <div className="p-3 rounded-lg">
                                <FontAwesomeIcon icon={brands('Instagram')} size="2x" className="hover:text-[#bc2a8d]" />
                            </div>
                        </li>

                        <li>
                            <a href="#">
                                <div className="p-3 rounded-lg">
                                    <FontAwesomeIcon icon={brands('Twitter')} size="2x" className="hover:text-[#00acee]" />
                                </div>

                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <div className="p-3 rounded-lg">
                                    <FontAwesomeIcon icon={brands('Youtube')} size="2x" className="hover:text-[#FF0000]" />
                                </div>

                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-around ">
                    <img className="md:w-auto md:h-auto w-100 h-8 " src={playStore} alt="playstore" />
                    <img className="md:w-auto md:h-auto w-100 h-8 ml-3" src={appStore} alt="appstore" />
                </div>
            </div>


            <div className="h-9 w-full bg-slate-600 text-white text-xs  ">
                <div className="flex items-center justify-around  ">
                    <p>All reserved by @basarmn</p>
                    <ul className="flex space-x-5">

                        <li className=" my-2">
                            <Link href="#" className="hover:text-slate-800 duration-400"
                            >Хамтран ажиллах</Link >
                        </li>
                        <li className="my-2">
                            <Link href="#" className="hover:text-slate-800 duration-400"
                            >Холбоо барих</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default MFooter;