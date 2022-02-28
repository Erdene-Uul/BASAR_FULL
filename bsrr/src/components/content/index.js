import React from "react";
import { NavLink } from "react-router-dom";

class Content extends React.Component {
    render() {
        return (
            <div className="flex flex-shrink-0 md:my-3">
                <NavLink to={
                    {
                        pathname: "/news_details",
                        state: { news: this.props.news }
                    }
                } className="transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-row">
                    <div className="relative md:h-36 md:w-44  h-28 w-36">
                        <img className="md:h-36 md:w-44 h-24 w-32 rounded-2xl" src={this.props.news.photo} alt="cover_img_01" />
                        <button className="absolute  lg:text-sm text-xs md:bottom-2 md:right-2 bottom-5 right-5 uppercase z-10 md:px-2 md:py-1 p-1 bg-btnSmColor rounded-full">
                            {this.props.news.categoryName}
                        </button>
                    </div>

                    <div className="lg:ml-8 md:w-80 md:ml-3 ">
                        <h2 className="text-[#252641] md:text-base text-sm w-44 h-32 md:selection md:w-80 leading-5 font-medium md:leading-7  md:pt-2">{this.props.news.title}</h2>
                        <p className="text-[#696984]  text-sm mt-3 hidden md:block">{this.props.news.description}</p>
                    </div>
                </NavLink>
            </div>
        )
    }
}
export default Content;