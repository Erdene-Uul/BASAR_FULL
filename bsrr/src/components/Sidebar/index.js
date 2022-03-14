import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import MenuItem from "../MenuItem";
import Shadow from "../Shadow";
import logo_image from "../../assets/images/menu_logo/menu_logo.png";
import logo_image2 from "../../assets/images/menu_logo/menu_logo_02.png";


const Sidebar = (props) => {
  return (
    <div>
      <div className="lg:hidden">
        {props.showSideBar&&<Shadow toggleSideBar={props.toggleSideBar} />}
      </div>
      <div onClick={props.toggleSideBar} className="fixed h-screen w-2/3 sm:w-2/4 lg:hidden bg-white top-0 z-40 font-Roboto text-[#252641]">
      <Link to="/" className="text-2xl flex cursor-pointer justify-center items-center mt-3">
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
          <MenuItem exact link="/">Нүүр</MenuItem>
          <MenuItem link="/animals">Амьтад</MenuItem>
          <MenuItem link="/news">Мэдээ</MenuItem>
          <MenuItem link="/blog">Блог</MenuItem>
          <MenuItem link="/organizations">Байгууллагууд</MenuItem>
          <MenuItem link="/services">Үйлчилгээ, Зар</MenuItem>
          <MenuItem link="/first_aid">Анхны тусламж</MenuItem>
        </ul>
        <div className="mx-auto border-b-2 w-4/5 h-4 border-[#DBDBDB]"></div>
        <ul className="mx-4 my-4 space-y-4 text-sm">
          <li> <Link to="/">Бидний тухай</Link> </li>
          <li> <Link to="/">Donate & Volenteer</Link></li>
          <li> <Link to="/"> Хамтран ажиллах </Link> </li>
          <li> <Link to="/">Холбоо барих</Link> </li>
        </ul>
        <div className="mx-auto border-b-2 w-4/5 h-4 border-[#DBDBDB]"></div>
        <ul className="flex justify-center">
          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands('Facebook')} size="1x" />
              </div>
            </Link>
          </li>

          <li>
            <div className="p-3 rounded-lg">
              <FontAwesomeIcon icon={brands('Instagram')} size="1x" />
            </div>
          </li>

          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands('Twitter')} size="1x" />
              </div>

            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="p-3 rounded-lg">
                <FontAwesomeIcon icon={brands('Youtube')} size="1x" />
              </div>

            </Link>
          </li>
        </ul>
      </div>
    </div>

  )
}
export default Sidebar;