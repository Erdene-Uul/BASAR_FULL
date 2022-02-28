import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Commercial from "../Commercial/commercial";

class NewsDetails extends React.Component {

    news = this.props.location.state.news;



    render() {
        return (
            <div className="flex  font-Nunito-Sans">
                <section className="mt-36 flex justify-center items-center flex-col space-y-36 wrapper w-3/5 ">
                    <div className="pl-20 pb-20">
                        <div>
                            <span className=" text-lg underline decoration-[#EA916C] underline-offset-4">{this.news.categoryName}</span>
                            <h1 className="my-10 font-bold font-Roboto text-3xl leading-10">{this.news.title}</h1>
                        </div>
                        <div className="flex mb-10 ">
                            <img className="h-16 rounded-full" src={this.news.author.photo} />
                            <div className="flex flex-col ml-4">
                                <div className="mt-2 text-base font-semibold">{this.news.author.name}</div>
                                <div className="text-sm font-mediumd text-[#64C5F8]">{this.news.author.position}</div>
                            </div>

                            <div className="ml-10 border-l border-[#B8B8B9] text-xs px-6 flex justify-center items-center font-[#B9BABA]">{this.news.createdAt.substring(0, 10)}</div>
                        </div>
                        <div className="text-[#464C53]">
                            <div className="whitespace-pre-wrap">  {this.news.content.content1}</div>
                            <div className="w-112">
                                <img className="h-80 my-6 border" src={this.news.photo} />
                            </div>
                            <div className="whitespace-pre-wrap">
                                {this.news.content.content2}
                            </div>
                        </div>
                    </div>

                </section>
                <aside className="w-2/5 mt-40">
                    <div className="wrapper">
                        <Commercial />
                    </div>
                </aside>
            </div>

        )
    }
}
export default withRouter(NewsDetails);