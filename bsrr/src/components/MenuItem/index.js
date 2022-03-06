import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
    return (
        <li className="lg:mx-4 lg:my-6 md:my-2 my-1">
          <NavLink exact={props.exact} to={props.link}
     className=" lg:hover:text-cyan-600 duration-400 text-sm hover:text-[#03051b]">{props.children}</NavLink>
        </li>
    );
}
export default MenuItem;