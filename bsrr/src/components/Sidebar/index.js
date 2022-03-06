import React from "react";
import MenuItem from "../MenuItem";
import Shadow from "../Shadow";

const Sidebar = (props) => {



  return (
    <div className="fixed h-auto w-2/3 sm:w-2/4 lg:hidden bg-gray-500 top-11 z-50">
      <ul className="flex flex-col font-thin py-4 px-10">

        <Shadow isSideMenuOpen = {props.isSideMenuOpen} showSideMenu = {props.showSideMenu}/>
        <MenuItem exact link="/">
          Нүүр
        </MenuItem>
        <MenuItem link="/animals">Амьтад</MenuItem>
        <MenuItem link="/news">Мэдээ</MenuItem>
        <MenuItem link="/blog">Блог</MenuItem>
        <MenuItem link="/organizations">Байгууллагууд</MenuItem>
        <MenuItem link="/services">Үйлчилгэ, Зар</MenuItem>
        <MenuItem link="/first_aid">Анхны тусламж</MenuItem>
      </ul>
    </div >
  )
}
export default Sidebar;