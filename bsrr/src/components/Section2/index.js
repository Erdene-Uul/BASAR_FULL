import React from "react";
import axios from "axios";
import Card from "../Card";
import Carousel from 'react-elastic-carousel'

class Section2 extends React.Component {

    state = {
        news: []
    };

    componentDidMount() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/v1/news`)
            .then(response => {
                this.setState({ news: response.data.data });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
          <div className="mt-16 ">
            <h1 className="italic font-Roboto text-blue-700 font-extrabold ml-36 mt-8 z-50 md:text-2xl">
              #ОНЦЛОХ БУЛАН
            </h1>
            {/* <!-- cover content мэдээ мэдээлэлийн хэсэг --> */}
            <div className="container mx-auto mt-8">
              {/* mobile */}
              <div className="flex flex-row  visible lg:hidden w-full py-3">
                <Carousel itemsToShow={1} disableArrowsOnEnd={false}>
                  {this.state.news.map((el, index) => (
                    <Card key={index} news={el} />
                  ))}
                </Carousel>
              </div>
              {/* lg */}
              <div className="lg:flex items-stretch justify-around  w-full py-3 hidden lg:visible 2xl:hidden">
                <Carousel itemsToShow={3} disableArrowsOnEnd={false}>
                  {this.state.news.map((el, index) => (
                    <Card key={index} news={el} />
                  ))}
                </Carousel>
              </div>
    
              {/* 2xl */}
              <div className="2xl:flex items-stretch justify-around  w-full py-3 hidden 2xl:visible">
                <Carousel itemsToShow={4} disableArrowsOnEnd={false}>
                  {this.state.news.map((el, index) => (
                    <Card key={index} news={el} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        );
      }
    }
    export default Section2;