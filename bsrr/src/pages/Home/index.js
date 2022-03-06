import React from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Animals from "../../components/Animals";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";
import Popup from "../../components/PopUp";
import axios from 'axios';

let test = 0;
class Home extends React.Component {

    state = {
        news: [],
        showPopup: false,
        loading: true
    };

    closePopup = () => {
        this.setState({ showPopup: false });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (test === 0) {
            this.setState({ showPopup: true })
            test++
        }
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/v1/news`)
            .then(response => {
                this.setState({ news: response.data.data, loading:false });
            })
            .catch(err => console.log(err))
    }
    render() {

        return (
            <div>
                <Popup closePopup={this.closePopup} show={this.state.showPopup} />
                <Section1 news = {this.state.news}/>
                <Section2 news = {this.state.news} loading = {this.state.loading}/>
                <ServiceList />
                <Animals />
                <Section3 />
                <Section4 />
                <Section5 />
            </div>
        );
    }
}
export default Home;