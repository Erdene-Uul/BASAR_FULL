import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import logo_image from "../../assets/images/menu_logo/menu_logo.png";
import logo_image2 from "../../assets/images/menu_logo/menu_logo_02.png";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
const Navbar = (props) => {

  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav className="w-full lg:h-14 h-11 md: bg-white shadow flex fixed top-0 right-0 left-0 z-20 drop-shadow-xl ">
      <div className="fixed top-3 left-3 z-50">
        {" "}
        <button
          onClick={props.toggleSideBar}
          className="lg:hidden"
        >
          {props.showSideBar ? (
            <FontAwesomeIcon icon={faAngleLeft} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {props.showSideBar ? <Sidebar showSideBar={props.showSideBar} toggleSideBar={props.toggleSideBar}/> : null}
      {/* lg:  */}
      <div
        className="flex pb-3 justify-center items-center w-full absolute h-14 lg:flex lg:justify-between lg:items-center lg:sticky  ml-4 lg:w-96 " >
        <Link to="/" className="text-2xl flex cursor-pointer">
          <div className="flex shrink-0 z-10">
            <img className="lg:h-10 h-8" src={logo_image} alt="basar logo" />
          </div>

          <div className="flex shrink-0 z-10">
            <img
              className="lg:h-10 pl-2 h-8"
              src={logo_image2}
              alt="basar.mn"
            />
          </div>
        </Link>
      </div>

      <Menu />
      <div className="flex items-center justify-end w-full lg:w-2/6 z-10 ">
        {/* search input */}
        <div className="flex lg:pr-5 ">
          <input
            onChange={onChange}
            className=" focus:border w-[88px] lg:w-auto focus:rounded-lg outline-none text-xs placeholder:text-zinc-600 placeholder:text-right caret-gray-500"
            type="search"
            placeholder="хайх"
          ></input>
         {
           search ?  <Link to={{
            pathname:'/filtered',
            state:search
          }}>
            <button className=" text-zinc-500 hover:text-zinc-800 cursor-pointer mr-3 ml-1 lg:ml-3">
              <FontAwesomeIcon
                icon={solid("magnifying-glass")}
                size="1x"
                color="#71717A"
              />
            </button>
          </Link>:<button className=" text-zinc-500 hover:text-zinc-800 cursor-pointer mr-3 ml-1 lg:ml-3">
              <FontAwesomeIcon
                icon={solid("magnifying-glass")}
                size="1x"
                color="#71717A"
              />
            </button>
         }

          <div className="hidden lg:flex lg:visible lg:w-0.1  lg:h-6 bg-gray-200  2xl:mr-10"></div>
        </div>

        {/* button дэлгүүр нэвтрэх */}
        <Link to="/shop">
          <button className="bg-blueMain text-white duration-500 hover:bg-sky-700 rounded-3xl text-xs font-Roboto relative mr-4 lg:flex hidden ">
            <div className="hidden lg:h-8 lg:w-8 bg-sky-600 lg:flex lg:items-center lg:justify-center rounded-full">
              <FontAwesomeIcon
                icon={solid("cart-shopping")}
                size="1x"
                color="white"
              />
            </div>
            <span className=" pr-3 pl-2 mt-2">ДЭЛГҮҮР</span>
          </button>
        </Link>
        <Link to='/login'>
          <button className="bg-btnOrange text-white duration-500 px-4 py-2 mr-4 hover:bg-orange-700 rounded-3xl text-xs font-Roboto lg:flex hidden ">
            НЭВТРЭХ
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
