import React, { useState } from "react";
import cover_logo from '../../assets/images/menu_logo/cover_logo.png';
import { Link } from "react-router-dom";


import { withRouter } from "react-router-dom";

const Section1 = () => {
  const [search, setSearch] = useState('');
  const onChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <section
      className="w-full h-96 top-0 bg-OrangeMain rounded-b-coverRadius "
    >
      <div className="flex justify-center">
        <img
          className="mt-24 h-20"
          src={cover_logo}
          alt="Basar cover_logo "
        />
      </div>
      {/* <!-- cover дээрх search input style --> */}
      <div className="flex items-center justify-center mt-10">
        <div className="flex border-gray-200">
          <input
            onChange={onChange}
            type="text"
            className="px-4 py-2 md:w-80 w-64 rounded-full relative text-sm md:text-base  focus:outline-none"
            placeholder="Хайх утгаа оруулна уу"
          />{search ?
            <Link to={
              {
                pathname: "/filtered",
                state: search
              }
            }
              className="absolute ml-48 md:ml-64 text-white bg-btnYagaan border-l rounded-full  hover:bg-orange-500" >
              <button
                className=" md:px-6 md:py-2  py-[6px] px-4"
              >
                Хайх
              </button>
            </Link>:<div className="absolute ml-48 md:ml-64 text-white bg-btnYagaan border-l rounded-full  hover:bg-orange-500" >
            <button
              className=" md:px-6 md:py-2  py-[6px] px-4  "
            >
              Хайх
            </button>
          </div>
          }
        </div>
      </div>
    </section >
  );
}
export default withRouter(Section1);