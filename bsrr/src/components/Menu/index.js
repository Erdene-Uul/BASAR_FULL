import React from "react";
import MenuItem from "../MenuItem";

const Menu = (props) => {
  return (
    <div className="  flex ">
      <ul className="hidden lg:flex lg:justify-between lg:items-center relative  leading-none font-thin z-20">
        <MenuItem exact link="/">
          Нүүр
        </MenuItem>
        <MenuItem link="/animals">Амьтад</MenuItem>
        <MenuItem link="/news">Мэдээ</MenuItem>
        <MenuItem link="/blog">Блог</MenuItem>
        <MenuItem link="/organizations">Байгууллагууд</MenuItem>
        <MenuItem link="/services">Үрчилгээ & Зар</MenuItem>
        <MenuItem link="/first_aid">Анхны тусламж</MenuItem>
      </ul>
    </div>
  );
};
export default Menu;
