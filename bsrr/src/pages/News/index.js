import React, { Component } from "react";
import Content from "../../components/content";
import axios from "../../axios-news";
import BigContent from "../../components/BigContent";
import PostBg from "../../assets/images/niitlel.png";
import Section2 from "../../components/Section2";



class News extends Component {

    state = {
        news: [{}],
        section1: [],
        section2: [],
        section3: [],
        section4: []
    }

    componentDidMount() {
        axios.get('/news').then(res => {
            this.setState({ news: res.data.data })
        }).finally(() => {

            const sections = [[], [], [], []];
            let index = this.state.news.length - 2;
            for (let i = 0; i < sections.length; i++) {
                for (let j = 0; j < 3; j++) {
                    sections[i].push(this.state.news[index]);
                    index--;
                }
            }
            
            this.setState({
                section1: sections[0],
                section2: sections[1],
                section3: sections[2],
                section4: sections[3]
            });
        })

       
    }
    

    render() {
        return (
            <div className="flex flex-col  mt-32 lg:wrapper md:tab-wrapper m-wrapper box-border">
                {/*TITLE*/}
                <div className="text-[#2F327D] md:text-3xl text-2xl font-bold text-center font-Nunito-Sans">
                    МЭДЭЭ МЭДЭЭЛЭЛ
                    <p className="text-[#696983] md:text-lg text-base leading-8 font-Nunito-Sans font-medium">Амьтдын тухай бүх мэдээллийг эндээс</p>
                </div>

                {/*SECTION 1*/}
                <div className=" w-full lg:grid grid-cols-11 gap-4 h-auto mt-14 flex justify-center">
                    <div className="col-span-5 col-start-2 ">
                        <div>
                            {
                                <BigContent news={this.state.news[this.state.news.length - 1]} />
                            }
                        </div>
                    </div>
                    <div className="col-span-4 col-start-7 flex flex-col"> {this.state.section1.map((el, index) => (
                        <Content key={index} news={el} />
                    ))}
                    </div>
                </div>

                {/*SECTION 2*/}
                <div className=" w-full lg:grid grid-cols-11 gap-4 h-auto lg:mt-28 mt-2 flex justify-center">
                    <div className="col-span-5 col-start-2  flex flex-col"> {this.state.section2.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                    <div className="col-span-4 col-start-7 ml-12 hidden lg:block">
                        <div className="w-300px h-96 relative bg-black">
                            <img src={PostBg} alt="postbg" />
                            <div className="absolute left-5 bottom-0 w-60 h-44">
                                <h1 className=" text-white text-2xl font-bold">Бид амьтанд хайртай </h1>
                                <p className="text-white py-6">Амьтдын төлөө хамтдаа таны дуу хоолой хэрэгтэй байна</p>
                                <button className="py-2 px-8 rounded-md  text-black bg-white">Нийтлэл бичих</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*SECTION 3 - Slider*/}
                <div className="invisible lg:visible">
                    <Section2 />
                </div>

                {/*SECTION 4*/}
             
                    <div className=" w-full lg:grid grid-cols-11 gap-4 h-auto my-14 flex items-center flex-col">
                    <div className="col-span-5 col-start-2 flex flex-col"> {this.state.section3.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                       <div className="col-span-4 col-start-7 flex flex-col"> {this.state.section4.map((el, index) => (
                        <Content key={index} news={el} />
                    ))} </div>
                    </div>
                </div>
          
        );
    }
}
export default News;