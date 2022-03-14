import React from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Animals from "../../components/Animals";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";
import Popup from "../../components/PopUp";


class Home extends React.Component {

    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.handlePopup();
    }

    render() {

        return (
            <div>
                <Popup closePopup={this.props.closePopup} show={this.props.showPopup} />
                <Section1 news={this.props.news} />
                <Section2 news={this.props.news} loading={this.props.loading} />
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