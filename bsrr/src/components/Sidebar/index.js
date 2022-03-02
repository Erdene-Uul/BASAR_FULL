import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import MenuItem from "../MenuItem";


const Sidebar = (props) => {
  return (
  <div className="fixed h-screen w-2/3 sm:w-2/4 lg:hidden bg-white top-11 font-Roboto text-[#252641]">
     
    <ul className="flex flex-col mx-4 ">
    <div className="mx-auto border-b-2 w-4/5 h-4 border-[#DBDBDB]"></div>
     <MenuItem exact link="/">Нүүр</MenuItem>
      <MenuItem link="/animals">Амьтад</MenuItem>
      <MenuItem link="/news">Мэдээ</MenuItem>
      <MenuItem link="/blog">Блог</MenuItem>
      <MenuItem link="/organizations">Байгууллагууд</MenuItem>
      <MenuItem link="/services">Үйлчилгэ, Зар</MenuItem>
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
 
  )
}
export default Sidebar;