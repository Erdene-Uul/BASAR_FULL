import React from "react";
import Card from "../Card";
import Carousel from 'react-elastic-carousel'
import Spinner from "../Spinner";
import  css from './stuly.css'

class Section2 extends React.Component {

  render() {
    return (
      <div className="mt-16 ">
        <h1 className="italic font-Roboto text-blue-700 font-extrabold ml-36 mt-8 z-50 md:text-2xl">
          #ОНЦЛОХ БУЛАН
        </h1>
        {/* <!-- cover content мэдээ мэдээлэлийн хэсэг --> */}
        {this.props.loading ? <Spinner /> : (
          <div className="container mx-auto mt-8">
            {/* mobile */}
            <div className="flex flex-row  visible lg:hidden w-full py-3">
              <Carousel itemsToShow={1} disableArrowsOnEnd={false}>
                {this.props.news.map((el, index) => (
                  <Card key={index} news={el} />
                ))}
              </Carousel>
            </div>
            {/* lg */}
            <div className="lg:flex items-stretch justify-around  w-full py-3 hidden lg:visible 2xl:hidden">
              <Carousel itemsToShow={3} disableArrowsOnEnd={false}>
                {this.props.news.map((el, index) => (
                  <Card key={index} news={el} />
                ))}
              </Carousel>
            </div>

            {/* 2xl */}
            <div className={`2xl:flex items-stretch justify-around  w-full py-3 hidden 2xl:visible ${css}`}>
              <Carousel itemsToShow={4} disableArrowsOnEnd={false}>
                {this.props.news.map((el, index) => (
                  <Card key={index} news={el} />
                ))}
              </Carousel>
            </div>
          </div>
        )
        }
      </div>
    );
  }
}
export default Section2;