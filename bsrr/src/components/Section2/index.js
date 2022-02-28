import React from "react";
import axios from "../../axios-news";
import Card from "../Card";
import Carousel from 'react-elastic-carousel'

class Section2 extends React.Component {

    state = {
        news: []
    };

    componentDidMount() {
        axios
            .get('/news')
            .then(response => {
                this.setState({ news: response.data.data });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="mt-16">
                <h1 className="italic font-Roboto text-blue-700 font-extrabold ml-36 mt-8 z-50">
                    #ОНЦЛОХ БУЛАН
                </h1>
                {/* <!-- cover content мэдээ мэдээлэлийн хэсэг --> */}
                <div className="container mx-auto mt-8">
                    <div className="flex items-stretch justify-around  w-full py-3">
                        <Carousel itemsToShow={4} disableArrowsOnEnd={false}  >
                                {this.state.news.map((el, index) =>
                                    <Card key={index} news={el} />
                                )}
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    };
}
export default Section2;