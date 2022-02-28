import React from "react";
import { NavLink } from "react-router-dom";

class BigContent extends React.Component {
    render() {
        return (
            <div className="lg:flex my-3 hidden">
                <NavLink to={
                    {
                        pathname: "/news_details",
                        state: { news: this.props.news }
                    }
                } className=" transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-col">
                    <div className="h-64 w-112">
                        <img className="h-72 w-120 rounded-2xl" src={this.props.news.photo} alt="cover_img_01" />
                        <button className="my-6 text-sm uppercase z-10 px-2 py-1 bg-btnSmColor rounded-full">{this.props.news.categoryName}</button>
                    </div>

                    <div className="w-96 mt-24">
                        <h2 className="text-[#252641] font-bold leading-7">{this.props.news.title}</h2>
                        <p className="text-[#696984]  text-sm mt-3">{this.props.news.description}</p>
                        <p className="text-[#696984] underline hover:underline-offset-4 text-sm mt-3">Унших</p>

                    </div>
                </NavLink>
            </div>
        )
    }
}
export default BigContent;