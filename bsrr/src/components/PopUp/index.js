import React from 'react';
import logo from "../../assets/images/menu_logo/menu_logo.png";
import Shadow from '../Shadow';

const Popup = (props) => {
    return (props.show) ? (
        <div>
            {props.show && <Shadow />}
            <div onClick={props.closePopup} className='flex justify-center items-center w-full h-full  fixed z-500 font-Roboto text-sm'>
                <div className=' w-600px h-500px   rounded-3xl  '>
                    <div className='h-34 bg-gradient-to-r from-[#F4B106] to-[#F48C06] w-full rounded-t-3xl '></div>
                    <div className='bg-white rounded-b-3xl'>
                        <div className='-translate-y-16  rounded-full bg-white  w-40 h-40 flex justify-center items-center left-0 right-0 mx-auto absolute  '> <img className=' h-28 ' src={logo} alt="logo_basar" /></div>
                        <div className=' pt-28 px-11  flex flex-col items-center'>
                            <div>Уг сайт маань одоогоор хөгжүүлэлтийн шатандаа буюу</div>
                            <div>DEMO хувилбараар явж байгаа учраас удахгүй бусад цэсүүд нь</div>
                            <div> ажиллагаанд орж эхлэх болно.</div>
                            <div className='mt-2'>  Бидэнтэй хамтран ажиллах амьтанд хайртай хувь хүмүүс, ТББ, албан </div>
                            <div>байгууллагатай ямагт хамтран ажиллахдаа таатай байх болно.</div>
                            <p className='font-semibold mt-4'>Холбоо барих утас: 7211-0737</p>
                            <button onClick={props.closePopup} className="bg-[#1C75B8] hover:bg-blue-500 m-10 text-white py-2 px-6 rounded-3xl"  >Ойлголоо</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
export default Popup;
