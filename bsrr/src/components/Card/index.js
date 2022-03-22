import React from "react";
import { NavLink } from "react-router-dom";
//import cover_img_01 from "../../assets/images/menu_logo/cover_img_01.png";
const Card = (props) => {
  return (
    <div className="flex flex-shrink-0 pb-6 pt-2">
      <NavLink
        to={{
          pathname: `/news/${props.news._id}`,
          state: { id: props.news._id }
        }}
        className="relative transform hover:scale-105 transition-all duration-500 ease-in-out"
      >
        <button className="absolute z-10 ml-3 px-2 text-sm md:text-base py-1 bg-btnSmColor rounded-full md:mt-36 mt-[152px]">
          {props.news.categoryName}
        </button>
        <img
          className="h-48 rounded-lg"
          src={props.news.photo}
          alt="cover_img_01"
        />
          <h2 className="z-50 h-10 w-64 text-sm leading-4 pt-3 bg-red">
          {props.news.title}
        </h2>
      </NavLink>
    </div>
  );
};
export default Card;