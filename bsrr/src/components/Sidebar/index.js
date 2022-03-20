import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import MenuItem from "../MenuItem";
import Shadow from "../Shadow";
import logo_image from "../../assets/images/menu_logo/menu_logo.png";
import logo_image2 from "../../assets/images/menu_logo/menu_logo_02.png";
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
>>>>>>> 01ed00f274da6a6c4d41bafbed66e4022e3c317d

import MenuItem from "../MenuItem";
import Shadow from "../Shadow";
import logo_image from "../../assets/images/menu_logo/menu_logo.png";
import logo_image2 from "../../assets/images/menu_logo/menu_logo_02.png";

const Sidebar = (props) => {
  return (
    <div>
      <div className="lg:hidden">
<<<<<<< HEAD
        {props.showSideBar&&<Shadow toggleSideBar={props.toggleSideBar} />}
      </div>
      <div onClick={props.toggleSideBar} className="fixed h-screen w-2/3 sm:w-2/4 lg:hidden bg-white top-0 z-40 font-Roboto text-[#252641]">
      <Link to="/" className="text-2xl flex cursor-pointer justify-center items-center mt-3">
=======
        {props.showSideBar && <Shadow toggleSideBar={props.toggleSideBar} />}
      </div>
      <div
        onClick={props.toggleSideBar}
        className="fixed h-screen w-2/3 sm:w-2/4 lg:hidden bg-white top-0 z-40 font-Roboto text-[#252641]"
      >
        <Link
          to="/"
          className="text-2xl flex cursor-pointer justify-center items-center mt-3"
        >
>>>>>>> 01ed00f274da6a6c4d41bafbed66e4022e3c317d
          <div className="flex">
            <img className="lg:h-10 h-8" src={logo_image} alt="basar logo" />
          </div>

          <div className="flex">
            <img
              className="lg:h-10 pl-2 h-8"
              src={logo_image2}
              alt="basar.mn"
            />
          </div>
        </Link>
        <ul className="flex flex-col mx-4">
          <div className="mx-auto border-b-2 w-4/5 h-4 border-[#DBDBDB]"></div>
<<<<<<< HEAD
          <MenuItem exact link="/">Нүүр</MenuItem>
=======
          <MenuItem exact link="/">
            Нүүр
          </MenuItem>
>>>>>>> 01ed00f274da6a6c4d41bafbed66e4022e3c317d
          <MenuItem link="/animals">Амьтад</MenuItem>
          <MenuItem link="/news">Мэдээ</MenuItem>
          <MenuItem link="/blog">Блог</MenuItem>
          <MenuItem link="/organizations">Байгууллагууд</MenuItem>
          <MenuItem link="/services">Үйлчилгээ, Зар</MenuItem>
          <MenuItem link="/first_aid">Анхны тусламж</MenuItem>
        </ul>
        <div className="mx-auto border-b-2 w-4/5 h-4 border-[#DBDBDB]"></div>
        <ul className="mx-4 my-4 space-y-4 text-sm">
<<<<<<< HEAD
          <li> <Link to="/about">Бидний тухай</Link> </li>
          <li> <Link to="/">Donate & Volenteer</Link></li>
          <li> <Link to="/"> Хамтран ажиллах </Link> </li>
          <li> <Link to="/">Холбоо барих</Link> </li>
=======
          <li>
            {" "}
            <Link to="/about">Бидний тухай</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">Donate & Volenteer</Link>
          </li>
          <li>
            {" "}
            <Link to="/"> Хамтран ажиллах </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">Холбоо барих</Link>{" "}
          </li>
>>>>>>> 01ed00f274da6a6c4d41bafbed66e4022e3c317d
        </ul>
        <div className="mx-auto border-b-2 w-4/5 h-4 border-[#DBDBDB]"></div>
        <ul className="flex justify-center">
          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
<<<<<<< HEAD
                <FontAwesomeIcon icon={brands('Facebook')} size="1x" />
=======
                <FontAwesomeIcon icon={brands("Facebook")} size="1x" />
>>>>>>> 01ed00f274da6a6c4d41bafbed66e4022e3c317d
              </div>
            </Link>
          </li>

          <li>
            <div className="p-3 rounded-lg">
<<<<<<< HEAD
              <FontAwesomeIcon icon={brands('Instagram')} size="1x" />
=======
              <FontAwesomeIcon icon={brands("Instagram")} size="1x" />
>>>>>>> 01ed00f274da6a6c4d41bafbed66e4022e3c317d
            </div>
          </li>

          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
<<<<<<< HEAD
                <FontAwesomeIcon icon={brands('Twitter')} size="1x" />
              </div>

            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands('Youtube')} size="1x" />
              </div>

=======
                <FontAwesomeIcon icon={brands("Twitter")} size="1x" />
              </div>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands("Youtube")} size="1x" />
              </div>
>>>>>>> 01ed00f274da6a6c4d41bafbed66e4022e3c317d
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
