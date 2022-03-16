import React from "react";
import playStore from "../../assets/images/footer_img/playstore.png";
import appStore from "../../assets/images/footer_img/appstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
const MFooter = () => {
    return (
        <footer className="md:h-43 w-full font-Roboto lg:hidden">
          <div className="px-4 flex justify-center box-border items-center sm:h-24 h-20 w-full bg-gradient-to-r from-footerTop1 to-[#FF834F] text-white">
            <div className="text-[10px] font-light mr-2 ">
              ЦАГ АЛДАЛГҮЙ МЭДЭЭЛЭЛ 
              <span className="font-bold"> ХҮЛЭЭЖ АВААРАЙ</span>
            </div>
            <div className="flex justify-between border border-l-bgServiceColor h-9 w-80 rounded-full">
              <span className="flex justify-start text-[10px] items-center leading-4 ml-2">
                Мэйл хаяг
              </span>
              <button className="bg-white rounded-full text-black h-auto md:w-24 w-16 text-[10px] font-bold">
                Илгээх
              </button>
            </div>
          </div>
          <div className="h-full m-12 max-w-md mx-auto">
            <div className="">
              <div className="flex items-center justify-around">
                <FontAwesomeIcon icon={solid("headset")} size="2x" />
                <span className="text-baseg font-medium font-Montserrat ml-2 mr-6 ">
                  72110737
                </span>
                <button className="px-9 py-2 border font-Montserrat rounded-lg text-sm text-[#9B9B9B] ">
                  Чатлах
                </button>
              </div>{" "}
            </div>

                <div className="mt-10 mb-6">
                    <ul className="flex justify-around">
                        <li>
                            <Link to="/">
                                <div className="p-3 rounded-lg">
                                    <FontAwesomeIcon icon={brands('Facebook')} size="2x"  />
                                </div>
                            </Link>
                        </li>

                        <li>
                            <div className="p-3 rounded-lg">
                                <FontAwesomeIcon icon={brands('Instagram')} size="2x"  />
                            </div>
                        </li>

                        <li>
                            <Link to="/">
                                <div className="p-3 rounded-lg">
                                    <FontAwesomeIcon icon={brands('Twitter')} size="2x"  />
                                </div>

                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <div className="p-3 rounded-lg">
                                    <FontAwesomeIcon icon={brands('Youtube')} size="2x"  />
                                </div>

                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-around ">
                    <img className="md:w-auto md:h-auto w-100 h-8 " src={playStore} alt="playstore" />
                    <img className="md:w-auto md:h-auto w-100 h-8 ml-3" src={appStore} alt="appstore" />
                </div>
            </div>


            <div className="h-7 sm:h-9 sm:text-xs w-full bg-[#657C93] text-white text-[9px]  ">
                <div className="flex items-center justify-around  ">
                    <p>All reserved by @basarmn</p>
                    <ul className="flex justify-between items-center my-2">

                        <li className=" ">
                            <Link to="/" className="hover:text-slate-800 duration-400"
                            >Хамтран ажиллах</Link >
                        </li>
                        <li className=" ml-5">
                            <Link to="/" className="hover:text-slate-800 duration-400"
                            >Холбоо барих</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default MFooter;