import React, { Component } from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Animals from "../../components/Animals";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";
import Popup from "../../components/PopUp/popup";

class Home extends Component {
    state = {
        trigger : false
    }
    componentDidMount(){
        this.setState({trigger:true})
    }
    render() {
        return (
            <div>
                {/* <Popup trigger1 = {this.state.trigger}/> */}
                <Section1 />
                <Section2 />
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