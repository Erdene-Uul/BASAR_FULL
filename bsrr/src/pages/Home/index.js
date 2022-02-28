import React, { Component } from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Animals from "../../components/Animals";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";




class Home extends Component {
    render() {
        return (
            <div>
                <Section1 />
                <Section2 />
                <ServiceList />
                <Animals/>
                <Section3/> 
                <Section4/>    
                <Section5/> 
            </div>
        );
    }
}
export default Home;