import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import MenuItem from "../MenuItem";


const Sidebar = (props) => {
   
  

    return (<div className="fixed h-auto w-2/3 sm:w-2/4 lg:hidden bg-gray-500 top-11">
    <ul className="flex flex-col font-thin py-4 px-10">
      <div><button className="bg-blueMain text-white duration-500 hover:bg-sky-700 rounded-3xl text-xs font-Roboto relative flex items-center justify-center  lg:hidden ">
          <div className="h-3 w-6 bg-sky-600  rounded-full">
            <FontAwesomeIcon
              icon={solid("cart-shopping")}
              size="2xl"
              color="white"
            />
          </div>

          <span className=" p-5">ДЭЛГҮҮР</span>
        </button>

        <button className="bg-btnOrange text-white duration-500 px-2 py-2 mr-2 hover:bg-orange-700 rounded-3xl text-xs font-Roboto lg:hidden ">
          НЭВТРЭХ
        </button></div>
    
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
  </div>
   )
}
export default Sidebar;