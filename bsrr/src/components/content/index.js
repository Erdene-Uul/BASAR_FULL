import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

class Content extends React.Component {
    render() {
        return (
            <div className="flex flex-shrink-0 sm:my-3">
                <Link to={
                    {
                        pathname: `/news/${this.props.news._id}`,
                        state: { id: this.props.news._id }
                    }
                } className="transform hover:scale-105 transition-all duration-500 ease-in-out flex flex-row">
                    <div className="relative  h-28 w-36 sm:h-36 sm:w-44 lg:h-32 lg:w-40 xl:h-36 xl:w-44">
                        <img className="h-24 w-32 sm:h-36 sm:w-44 lg:h-32 lg:w-36 xl:h-36 xl:w-44 rounded-2xl" src={this.props.news.photo} alt="cover_img_01" />
                        <button className="absolute  xl:text-sm text-xs sm:bottom-2 sm:right-2 bottom-5 right-5 
                        lg:bottom-2 lg:right-6 xl:bottom-2 xl:right-2 uppercase z-10 sm:px-2 sm:py-1 p-1 bg-btnSmColor rounded-full">
                            {this.props.news.categoryName}
                        </button>
                    </div>

                    <div className="sm:ml-3  xl:ml-8 sm:w-80 lg:w-72 xl:w-80 ">
                        <h2 className="text-[#252641] font-Roboto sm:text-base text-sm w-44  sm:w-80 lg:w-72 xl:w-80  leading-5 font-medium sm:leading-7">{this.props.news.title}</h2>
                        <p className="text-[#696984]  text-sm mt-3 lg:mt-1 xl:mt-3 hidden sm:block">{this.props.news.description}</p>
                    </div>
                </Link>
            </div>
        )
    }
}
export default withRouter(Content);